from fastapi import APIRouter

from app.schemas.ai import AIRequest
from app.schemas.ai import AIResponse

from app.services.groq_service import ask_ai
from fastapi import Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.core.security import get_current_user

from app.models.user import User

from app.services.history_service import create_history

router = APIRouter(
    prefix="/ai",
    tags=["AI"],
)


@router.post(
    "/recommend",
    response_model=AIResponse,
)
def recommend(
    request: AIRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    answer = ask_ai(
        request.prompt
    )

    create_history(
        db=db,
        user_id=current_user.id,
        prompt=request.prompt,
        response=answer,
    )

    return {
        "response": answer
    }