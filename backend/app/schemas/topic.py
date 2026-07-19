from pydantic import BaseModel


class TopicCreate(BaseModel):
    title: str
    category: str
    description: str
    difficulty: str = "Beginner"


class TopicResponse(BaseModel):
    id: int
    title: str
    category: str
    description: str
    difficulty: str
    is_featured: bool

    class Config:
        from_attributes = True