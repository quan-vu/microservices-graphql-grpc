import abc
import math
import uuid
import logging
from datetime import datetime
from app.responses.base_response import PaginationResponse
from app.setting import Setting

from cassandra import ConsistencyLevel
from cassandra.cluster import Cluster
from cassandra.auth import PlainTextAuthProvider

# For model
from cassandra.cqlengine import columns, functions
from cassandra.cqlengine.connection import register_connection, set_default_connection, dict_factory

log = logging.getLogger()
log.setLevel('DEBUG')
handler = logging.StreamHandler()
handler.setFormatter(logging.Formatter("%(asctime)s [%(levelname)s] %(name)s: %(message)s"))
log.addHandler(handler)

KEYSPACE = "keyspace_product_db"
HOSTS = [Setting.DB_HOST]
CREDENTIAL = {'username': Setting.DB_USER, 'password': Setting.DB_PASSWORD} 
AUTH_PROVIDER = PlainTextAuthProvider(**CREDENTIAL)


def cassandra_session_factory():
    cluster = Cluster(HOSTS, port=Setting.DB_PORT, auth_provider=AUTH_PROVIDER)
    session = cluster.connect()

    log.info("Creating keyspace...")
    session.execute("""
        CREATE KEYSPACE IF NOT EXISTS %s
        WITH replication = { 'class': 'SimpleStrategy', 'replication_factor': '2' }
        """ % KEYSPACE
    )

    log.info("Setting keyspace...")
    session.set_keyspace(KEYSPACE)

    session.row_factory = dict_factory
    session.execute("USE {}".format(KEYSPACE))

    return session


_session = cassandra_session_factory()
register_connection(str(_session), session=_session)
set_default_connection(str(_session))

class AbstractRepository(abc.ABC):

    @abc.abstractmethod
    def to_dict(self, obj):
        raise NotImplementedError

    @abc.abstractmethod
    def to_list(self, l):
        raise NotImplementedError



class BaseRepository(AbstractRepository):

    _model = None

    def __init__(self):
        self.session = _session

    def to_dict(self, obj):
        if obj is not None:
            return {c.key: getattr(obj, c.key)
                for c in inspect(obj).mapper.column_attrs}
        else:
            return {}

    def to_list(self, _list):
        if isinstance(_list, list) and len(_list):
            output = []
            for item in _list:
                output.append(self.to_dict(item))
            return output
        else:
            print("A list is reuired!")
            return []

    def _is_empty(self, value):
        if value is None:
            return True
        elif isinstance(value, str) and value.strip() == '':
            return True
        return False

    def find(self, id: int):
        item = self._model.objects(product_id=id)
        if item is not None:
            return dict(item[0])
        return None    

    def paginate(self, limit: int, offset: str = None, search: str = ''):
        total = self._model.objects.count()
        last_page = math.ceil(total / limit) if total > 0 else 1
        next_page = None
        data = []
        
        if total > 0:
            query = self._model.objects.all().limit(limit)
            
            if offset is not None:
                query = query.filter(pk__token__gt=functions.Token(offset))

            data = list(query)

            if len(data) > 0:
                last = data[-1]
                next_page = f'?limit={limit}&offset={last.pk}&search={search}'
        
        return PaginationResponse(
            total=total,
            limit=limit,
            offset=offset,
            last_page=last_page,
            next_page_link=next_page,
            data=data
        )

    def create(self, data):
        item = self._model.create(
            product_id=str(uuid.uuid1()),
            organization_id=data.organization_id,
            name=data.name,
            slug=data.slug,
            thumbnail=data.thumbnail,
            description=data.description,
            price=data.price,
            in_stock=data.in_stock
        )
        return item

    def update(self, id, data):
        records = self._model.objects(product_id=id)
        if records is not None:
            item = records[0]
            item.update(
                name=data.name,
                alias=data.alias,
                logo=data.logo,
            )
            return item
        return None
        
    
    # def delete(self, id: int):
    #     item = self._model.find(id)
    #     if item is not None:
    #         item.delete()
    #         return True
    #     return None