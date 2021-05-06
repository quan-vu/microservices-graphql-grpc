from uuid import UUID
from pydantic import BaseModel, ValidationError, validator
from datetime import date, datetime, time, timedelta
from typing import (
    Deque, Dict, FrozenSet, List, Optional, Sequence, Set, Tuple, Union, Any
)
from app.responses.base_response import PaginationResponse


class ProductResponse(BaseModel):
    product_id: UUID
    organization_id: UUID
    name: str
    slug: str
    thumbnail: str
    description: str
    price: float
    in_stock: int
    created_at: datetime
    updated_at: datetime


class ProductPaginationResponse(PaginationResponse):
    data: List[ProductResponse] = []


class SuccessDetailResponse(BaseModel):
    message: str = ''
    success: bool = True
    data: Optional[ProductResponse] = None


class SuccessPaginationResponse(BaseModel):
    message: str = ''
    success: bool = True
    data: Optional[ProductPaginationResponse] = None


class SuccessListResponse(BaseModel):
    message: str = ''
    success: bool = True
    data: List[ProductResponse] = None
