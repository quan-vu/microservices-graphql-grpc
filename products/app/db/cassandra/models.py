from cassandra.cqlengine.models import Model


class Product(Model):

    __keyspace__ = KEYSPACE
    __table_name__ = 'products'

    product_id = columns.TimeUUID(primary_key=True, default=uuid.uuid1)
    organization_id = columns.TimeUUID()
    name = columns.Text(max_length=255)
    slug = columns.Text(max_length=255)
    thumbnail = columns.Text(max_length=255)
    description = columns.Text()
    price = columns.Float(required=True)
    in_stock = columns.Integer(required=True)
    created_at = columns.DateTime(default=datetime.utcnow())
    updated_at = columns.DateTime(default=datetime.utcnow())
