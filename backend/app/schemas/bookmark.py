from pydantic import BaseModel
from pydantic import ConfigDict

from app.schemas.topic import TopicResponse


class BookmarkCreate(BaseModel):

    topic_id: int


class BookmarkResponse(BaseModel):

    id: int
    user_id: int
    topic_id: int

    topic: TopicResponse

    model_config = ConfigDict(
        from_attributes=True
    )