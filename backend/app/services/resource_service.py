from sqlalchemy.orm import Session

from app.models.resource import Resource
from app.schemas.resource import ResourceCreate


def create_resource(
    db: Session,
    resource: ResourceCreate,
):

    db_resource = Resource(
        title=resource.title,
        url=resource.url,
        resource_type=resource.resource_type,
        topic_id=resource.topic_id,
    )

    db.add(db_resource)
    db.commit()
    db.refresh(db_resource)

    return db_resource


def get_resources(
    db: Session,
):

    return db.query(Resource).all()

def update_resource(
    db: Session,
    resource_id: int,
    resource: ResourceCreate,
):

    db_resource = (
        db.query(Resource)
        .filter(Resource.id == resource_id)
        .first()
    )

    if db_resource is None:
        return None

    db_resource.title = resource.title
    db_resource.url = resource.url
    db_resource.resource_type = resource.resource_type
    db_resource.topic_id = resource.topic_id

    db.commit()
    db.refresh(db_resource)

    return db_resource


def delete_resource(
    db: Session,
    resource_id: int,
):

    db_resource = (
        db.query(Resource)
        .filter(Resource.id == resource_id)
        .first()
    )

    if db_resource is None:
        return False

    db.delete(db_resource)
    db.commit()

    return True