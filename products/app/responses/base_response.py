from typing import List, Optional, Any
from pydantic import BaseModel, ValidationError, validator


class PaginationResponse(BaseModel):
    total: int
    limit: int
    offset: str = None
    last_page: int
    next_page_link: str = None
    data: List = []
