# coding=utf-8

import datetime
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import DECIMAL, Column, DateTime, ForeignKey, Integer, String

DATABASE_URI = 'postgresql://myadmin:mypassword@postgres:5432/orders'

class BaseModel(object):
    created_at = Column(DateTime, default=datetime.datetime.utcnow, nullable=False)
    updated_at = Column(
        DateTime,
        default=datetime.datetime.utcnow,
        onupdate=datetime.datetime.utcnow,
        nullable=False,
    )

engine = create_engine(DATABASE_URI)
Session = sessionmaker(bind=engine)

Base = declarative_base(cls=BaseModel)
