from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.schemas.topic import TopicCreate
from app.schemas.topic import TopicResponse
from app.services.topic_service import create_topic
from app.services.topic_service import get_topics
from fastapi import HTTPException

from app.services.topic_service import update_topic
from app.services.topic_service import delete_topic

router = APIRouter(
    prefix="/topics",
    tags=["Topics"],
)


@router.post(
    "",
    response_model=TopicResponse,
)
def add_topic(
    topic: TopicCreate,
    db: Session = Depends(get_db),
):

    return create_topic(
        db=db,
        topic=topic,
    )


@router.get(
    "",
    response_model=list[TopicResponse],
)
def list_topics(
    db: Session = Depends(get_db),
):
    return get_topics(db)

@router.put(
    "/{topic_id}",
    response_model=TopicResponse,
)
def edit_topic(
    topic_id: int,
    topic: TopicCreate,
    db: Session = Depends(get_db),
):

    updated = update_topic(
        db=db,
        topic_id=topic_id,
        topic=topic,
    )

    if updated is None:
        raise HTTPException(
            status_code=404,
            detail="Topic not found",
        )

    return updated

@router.delete("/{topic_id}")
def remove_topic(
    topic_id: int,
    db: Session = Depends(get_db),
):

    deleted = delete_topic(
        db=db,
        topic_id=topic_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Topic not found",
        )

    return {
        "message": "Topic deleted successfully"
    }  