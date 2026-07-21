from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.db.database import get_db

from app.schemas.contact import (
    ContactCreate,
    ContactResponse,
)

from app.services.contact_service import (
    create_contact,
)

router = APIRouter(
    prefix="/contact",
    tags=["Contact"],
)


@router.post(
    "",
    response_model=ContactResponse,
)
def send_contact(
    contact: ContactCreate,
    db: Session = Depends(get_db),
):

    return create_contact(
        db=db,
        contact=contact,
    )