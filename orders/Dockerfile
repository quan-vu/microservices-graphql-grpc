# syntax = docker/dockerfile:1.0-experimental
# DOCKER_BUILDKIT=1 docker build . -f orders/Dockerfile -t orders --secret id=ca.key,src=ca.key

FROM python:3.6

RUN mkdir /service
COPY . /service/orders/

WORKDIR /service/orders
RUN pip install -r requirements.txt

CMD [ "python", "server.py" ]
