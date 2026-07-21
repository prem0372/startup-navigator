from sqlalchemy.orm import Session

from app.models.bookmark import Bookmark


def create_bookmark(
    db: Session,
    user_id: int,
    topic_id: int,
):

    bookmark = Bookmark(
        user_id=user_id,
        topic_id=topic_id,
    )

    db.add(bookmark)
    db.commit()
    db.refresh(bookmark)

    return bookmark


def get_bookmarks(
    db: Session,
    user_id: int,
):

    return (
        db.query(Bookmark)
        .filter(Bookmark.user_id == user_id)
        .all()
    )


def delete_bookmark(
    db: Session,
    bookmark_id: int,
    user_id: int,
):

    bookmark = (
        db.query(Bookmark)
        .filter(
            Bookmark.id == bookmark_id,
            Bookmark.user_id == user_id,
        )
        .first()
    )

    if bookmark is None:
        return False

    db.delete(bookmark)
    db.commit()

    return True