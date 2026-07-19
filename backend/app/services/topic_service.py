from sqlalchemy.orm import Session

from app.models.topics import Topic
from app.schemas.topic import TopicCreate


def create_topic(
    db: Session,
    topic: TopicCreate,
):

    db_topic = Topic(
        title=topic.title,
        category=topic.category,
        description=topic.description,
        difficulty=topic.difficulty,
    )

    db.add(db_topic)
    db.commit()
    db.refresh(db_topic)

    return db_topic


def get_topics(db: Session):

    return db.query(Topic).all()