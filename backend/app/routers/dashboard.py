from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.topics import Topic
from app.models.resource import Resource
from app.models.history import History

from app.core.security import get_current_user
from app.models.user import User
from app.models.bookmark import Bookmark

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"],
)


@router.get("/stats")
def dashboard_stats(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    topics = db.query(Topic).count()

    resources = db.query(Resource).count()

    history = (
        db.query(History)
        .filter(History.user_id == current_user.id)
        .count()
    )
    bookmarks = (
        db.query(Bookmark)
        .filter(
            Bookmark.user_id == current_user.id
        )
        .count()
    )
    return {
        "topics": topics,
        "resources": resources,
        "history": history,
        "user": current_user.name,
        "bookmarks": bookmarks
    }