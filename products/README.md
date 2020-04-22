# Product Service using gRPC

Step 1: Create a python virtualenv

```shell
cd products
virtualenv -p python3 products-venv
source products-venv/bin/activate
pip install -r requirements.txt
```

Step 2: Generate gRPC code for Product service

Inside (products-venv) environment run this command to generate gRPC code

```shell
cd products
PROTOS_DIR_IN=../proto
PROTOS_DIR_OUT=./
PROTO_FILE=../proto/products.proto
python3 -m grpc_tools.protoc -I $PROTOS_DIR_IN --python_out=$PROTOS_DIR_OUT --grpc_python_out=$PROTOS_DIR_OUT $PROTO_FILE
```

Step 3: Start Product service

```shell
python3 server.py
```

## Database

Demo 

python inserts.py

python python queries.py 