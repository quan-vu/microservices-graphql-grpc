from pydantic import BaseModel
from typing import Optional, List


class ProductCreateRequest(BaseModel):
    organization_id: str
    name: str
    slug: str
    thumbnail: str
    description: str
    price: float
    in_stock: int


class ProductUpdateRequest(BaseModel):
    name: str
    slug: str
    thumbnail: str
    description: str
    price: float
    in_stock: int
