# syntax = docker/dockerfile:1.0-experimental
# DOCKER_BUILDKIT=1 docker build . -f products/Dockerfile -t products --secret id=ca.key,src=ca.key

FROM python:3.6

RUN mkdir /service
COPY . /service/products/

WORKDIR /service/products
RUN pip install -r requirements.txt

CMD [ "python", "server.py" ]
