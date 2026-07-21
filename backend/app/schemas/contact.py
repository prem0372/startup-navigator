from pydantic import BaseModel
from pydantic import ConfigDict


class ContactCreate(BaseModel):

    name: str
    email: str
    message: str


class ContactResponse(ContactCreate):

    id: int

    model_config = ConfigDict(
        from_attributes=True
    )