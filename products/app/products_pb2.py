# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: products.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='products.proto',
  package='products',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=b'\n\x0eproducts.proto\x12\x08products\"\x81\x01\n\x0eProductRequest\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0c\n\x04slug\x18\x03 \x01(\t\x12\x11\n\tthumbnail\x18\x04 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x05 \x01(\t\x12\r\n\x05price\x18\x06 \x01(\x05\x12\x10\n\x08in_stock\x18\x07 \x01(\x05\"\x82\x01\n\x0fProductResponse\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0c\n\x04slug\x18\x03 \x01(\t\x12\x11\n\tthumbnail\x18\x04 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x05 \x01(\t\x12\r\n\x05price\x18\x06 \x01(\x05\x12\x10\n\x08in_stock\x18\x07 \x01(\x05\"S\n\x10ProductsResponse\x12+\n\x08products\x18\x01 \x03(\x0b\x32\x19.products.ProductResponse\x12\x12\n\ntotalCount\x18\x02 \x01(\x05\"\x18\n\nGetProduct\x12\n\n\x02id\x18\x01 \x01(\x05\"@\n\x0fProductsRequest\x12\r\n\x05\x66irst\x18\x01 \x01(\x05\x12\x0e\n\x06offset\x18\x02 \x01(\x05\x12\x0e\n\x06search\x18\x03 \x01(\t2\xdd\x01\n\x08products\x12\x42\n\x0bget_product\x12\x18.products.ProductRequest\x1a\x19.products.ProductResponse\x12\x45\n\x0e\x63reate_product\x12\x18.products.ProductRequest\x1a\x19.products.ProductResponse\x12\x46\n\rlist_products\x12\x19.products.ProductsRequest\x1a\x1a.products.ProductsResponseb\x06proto3'
)




_PRODUCTREQUEST = _descriptor.Descriptor(
  name='ProductRequest',
  full_name='products.ProductRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='products.ProductRequest.id', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='products.ProductRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='slug', full_name='products.ProductRequest.slug', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='thumbnail', full_name='products.ProductRequest.thumbnail', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='description', full_name='products.ProductRequest.description', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='price', full_name='products.ProductRequest.price', index=5,
      number=6, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='in_stock', full_name='products.ProductRequest.in_stock', index=6,
      number=7, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=29,
  serialized_end=158,
)


_PRODUCTRESPONSE = _descriptor.Descriptor(
  name='ProductResponse',
  full_name='products.ProductResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='products.ProductResponse.id', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='products.ProductResponse.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='slug', full_name='products.ProductResponse.slug', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='thumbnail', full_name='products.ProductResponse.thumbnail', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='description', full_name='products.ProductResponse.description', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='price', full_name='products.ProductResponse.price', index=5,
      number=6, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='in_stock', full_name='products.ProductResponse.in_stock', index=6,
      number=7, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=161,
  serialized_end=291,
)


_PRODUCTSRESPONSE = _descriptor.Descriptor(
  name='ProductsResponse',
  full_name='products.ProductsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='products', full_name='products.ProductsResponse.products', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='totalCount', full_name='products.ProductsResponse.totalCount', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=293,
  serialized_end=376,
)


_GETPRODUCT = _descriptor.Descriptor(
  name='GetProduct',
  full_name='products.GetProduct',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='products.GetProduct.id', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=378,
  serialized_end=402,
)


_PRODUCTSREQUEST = _descriptor.Descriptor(
  name='ProductsRequest',
  full_name='products.ProductsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='first', full_name='products.ProductsRequest.first', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='offset', full_name='products.ProductsRequest.offset', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='search', full_name='products.ProductsRequest.search', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=404,
  serialized_end=468,
)

_PRODUCTSRESPONSE.fields_by_name['products'].message_type = _PRODUCTRESPONSE
DESCRIPTOR.message_types_by_name['ProductRequest'] = _PRODUCTREQUEST
DESCRIPTOR.message_types_by_name['ProductResponse'] = _PRODUCTRESPONSE
DESCRIPTOR.message_types_by_name['ProductsResponse'] = _PRODUCTSRESPONSE
DESCRIPTOR.message_types_by_name['GetProduct'] = _GETPRODUCT
DESCRIPTOR.message_types_by_name['ProductsRequest'] = _PRODUCTSREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ProductRequest = _reflection.GeneratedProtocolMessageType('ProductRequest', (_message.Message,), {
  'DESCRIPTOR' : _PRODUCTREQUEST,
  '__module__' : 'products_pb2'
  # @@protoc_insertion_point(class_scope:products.ProductRequest)
  })
_sym_db.RegisterMessage(ProductRequest)

ProductResponse = _reflection.GeneratedProtocolMessageType('ProductResponse', (_message.Message,), {
  'DESCRIPTOR' : _PRODUCTRESPONSE,
  '__module__' : 'products_pb2'
  # @@protoc_insertion_point(class_scope:products.ProductResponse)
  })
_sym_db.RegisterMessage(ProductResponse)

ProductsResponse = _reflection.GeneratedProtocolMessageType('ProductsResponse', (_message.Message,), {
  'DESCRIPTOR' : _PRODUCTSRESPONSE,
  '__module__' : 'products_pb2'
  # @@protoc_insertion_point(class_scope:products.ProductsResponse)
  })
_sym_db.RegisterMessage(ProductsResponse)

GetProduct = _reflection.GeneratedProtocolMessageType('GetProduct', (_message.Message,), {
  'DESCRIPTOR' : _GETPRODUCT,
  '__module__' : 'products_pb2'
  # @@protoc_insertion_point(class_scope:products.GetProduct)
  })
_sym_db.RegisterMessage(GetProduct)

ProductsRequest = _reflection.GeneratedProtocolMessageType('ProductsRequest', (_message.Message,), {
  'DESCRIPTOR' : _PRODUCTSREQUEST,
  '__module__' : 'products_pb2'
  # @@protoc_insertion_point(class_scope:products.ProductsRequest)
  })
_sym_db.RegisterMessage(ProductsRequest)



_PRODUCTS = _descriptor.ServiceDescriptor(
  name='products',
  full_name='products.products',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=471,
  serialized_end=692,
  methods=[
  _descriptor.MethodDescriptor(
    name='get_product',
    full_name='products.products.get_product',
    index=0,
    containing_service=None,
    input_type=_PRODUCTREQUEST,
    output_type=_PRODUCTRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='create_product',
    full_name='products.products.create_product',
    index=1,
    containing_service=None,
    input_type=_PRODUCTREQUEST,
    output_type=_PRODUCTRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='list_products',
    full_name='products.products.list_products',
    index=2,
    containing_service=None,
    input_type=_PRODUCTSREQUEST,
    output_type=_PRODUCTSRESPONSE,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_PRODUCTS)

DESCRIPTOR.services_by_name['products'] = _PRODUCTS

# @@protoc_insertion_point(module_scope)