FROM python:3.6-slim

RUN mkdir /service
COPY . /service

WORKDIR /service
RUN pip install -r requirements.txt

EXPOSE 50051

CMD ["python", "app/server.py" ]
