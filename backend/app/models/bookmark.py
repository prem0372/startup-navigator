from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import ForeignKey

from app.db.database import Base


class Bookmark(Base):

    __tablename__ = "bookmarks"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
    )

    topic_id = Column(
        Integer,
        ForeignKey("topics.id"),
    )