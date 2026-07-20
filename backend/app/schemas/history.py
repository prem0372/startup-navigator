from datetime import datetime

from pydantic import BaseModel
from pydantic import ConfigDict


class HistoryResponse(BaseModel):

    id: int
    user_id: int
    prompt: str
    response: str
    created_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )