from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.schemas.user import UserCreate
from app.schemas.user import UserResponse
from app.services.auth_service import create_user

from app.schemas.auth import LoginRequest
from app.schemas.auth import TokenResponse
from app.services.auth_service import authenticate_user
from app.core.security import create_access_token


from app.core.security import get_current_user
from app.models.user import User


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post(
    "/register",
    response_model=UserResponse,
)
def register(
    user: UserCreate,
    db: Session = Depends(get_db),
):

    new_user = create_user(
        db=db,
        user=user,
    )

    if new_user is None:
        raise HTTPException(
            status_code=400,
            detail="Email already exists",
        )

    return new_user

@router.post(
    "/login",
    response_model=TokenResponse,
)
def login(
    request: LoginRequest,
    db: Session = Depends(get_db),
):

    user = authenticate_user(
        db=db,
        email=request.email,
        password=request.password,
    )

    if user is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password",
        )

    token = create_access_token(
        {
            "sub": user.email,
            "role": user.role,
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer",
    }

@router.get(
    "/me",
    response_model=UserResponse,
)
def me(
    current_user: User = Depends(get_current_user),
):

    return current_user