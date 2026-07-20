from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.core.security import get_current_user
from app.db.database import get_db
from app.models.user import User

from app.schemas.history import HistoryResponse
from app.services.history_service import get_history

router = APIRouter(
    prefix="/history",
    tags=["History"],
)


@router.get(
    "",
    response_model=list[HistoryResponse],
)
def history(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    return get_history(
        db=db,
        user_id=current_user.id,
    )