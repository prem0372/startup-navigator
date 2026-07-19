from pydantic import BaseModel
from pydantic import ConfigDict


class ResourceCreate(BaseModel):
    title: str
    url: str
    resource_type: str
    topic_id: int


class ResourceResponse(BaseModel):
    id: int
    title: str
    url: str
    resource_type: str
    topic_id: int

    model_config = ConfigDict(
        from_attributes=True
    )