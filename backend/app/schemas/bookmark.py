from pydantic import BaseModel
from pydantic import ConfigDict


class BookmarkCreate(BaseModel):

    topic_id: int


class BookmarkResponse(BaseModel):

    id: int
    user_id: int
    topic_id: int

    model_config = ConfigDict(
        from_attributes=True
    )