from sqlalchemy import Column
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy.orm import relationship

from app.db.database import Base


class Resource(Base):
    __tablename__ = "resources"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    title = Column(
        String(200),
        nullable=False,
    )

    url = Column(
        String(500),
        nullable=False,
    )

    resource_type = Column(
        String(50),
        nullable=False,
    )

    topic_id = Column(
        Integer,
        ForeignKey("topics.id"),
    )

    topic = relationship(
        "Topic",
        back_populates="resources",
    )