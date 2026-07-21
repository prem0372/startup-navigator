from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.core.security import get_current_user
from app.models.user import User

from app.schemas.bookmark import BookmarkCreate
from app.schemas.bookmark import BookmarkResponse

from app.services.bookmark_service import (
    create_bookmark,
    get_bookmarks,
    delete_bookmark,
)

router = APIRouter(
    prefix="/bookmarks",
    tags=["Bookmarks"],
)


@router.post(
    "",
    response_model=BookmarkResponse,
)
def add_bookmark(
    bookmark: BookmarkCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    return create_bookmark(
        db=db,
        user_id=current_user.id,
        topic_id=bookmark.topic_id,
    )


@router.get(
    "",
    response_model=list[BookmarkResponse],
)
def list_bookmarks(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    return get_bookmarks(
        db=db,
        user_id=current_user.id,
    )


@router.delete("/{bookmark_id}")
def remove_bookmark(
    bookmark_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    deleted = delete_bookmark(
        db=db,
        bookmark_id=bookmark_id,
        user_id=current_user.id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Bookmark not found",
        )

    return {
        "message": "Bookmark deleted successfully"
    }