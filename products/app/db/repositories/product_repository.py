from app.db.cassandra.base_cassandra_repository import BaseRepository
from app.db.cassandra.models import Product

class ProductRepository(BaseRepository):

    _model = Product
