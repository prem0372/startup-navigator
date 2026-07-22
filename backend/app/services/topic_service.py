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
def update_topic(
    db: Session,
    topic_id: int,
    topic: TopicCreate,
):

    db_topic = (
        db.query(Topic)
        .filter(Topic.id == topic_id)
        .first()
    )

    if db_topic is None:
        return None

    db_topic.title = topic.title
    db_topic.category = topic.category
    db_topic.description = topic.description
    db_topic.difficulty = topic.difficulty

    db.commit()
    db.refresh(db_topic)

    return db_topic


def delete_topic(
    db: Session,
    topic_id: int,
):

    db_topic = (
        db.query(Topic)
        .filter(Topic.id == topic_id)
        .first()
    )

    if db_topic is None:
        return False

    db.delete(db_topic)
    db.commit()

    return True