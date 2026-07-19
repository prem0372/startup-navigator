from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.schemas.topic import TopicCreate
from app.schemas.topic import TopicResponse
from app.services.topic_service import create_topic
from app.services.topic_service import get_topics

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