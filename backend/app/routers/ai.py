from fastapi import APIRouter

from app.schemas.ai import AIRequest
from app.schemas.ai import AIResponse

from app.services.groq_service import ask_ai

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
):

    answer = ask_ai(
        request.prompt
    )

    return {
        "response": answer
    }