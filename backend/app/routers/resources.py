from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from fastapi import HTTPException

from app.schemas.resource import (
    ResourceCreate,
    ResourceResponse,
)

from app.services.resource_service import (
    create_resource,
    get_resources,
)

from app.services.resource_service import (
    create_resource,
    get_resources,
    update_resource,
    delete_resource,
)


router = APIRouter(
    prefix="/resources",
    tags=["Resources"],
)


@router.post(
    "",
    response_model=ResourceResponse,
)
def add_resource(
    resource: ResourceCreate,
    db: Session = Depends(get_db),
):

    return create_resource(
        db=db,
        resource=resource,
    )


@router.get(
    "",
    response_model=list[ResourceResponse],
)
def list_resources(
    db: Session = Depends(get_db),
):

    return get_resources(db)

@router.put(
    "/{resource_id}",
    response_model=ResourceResponse,
)
def edit_resource(
    resource_id: int,
    resource: ResourceCreate,
    db: Session = Depends(get_db),
):

    updated = update_resource(
        db=db,
        resource_id=resource_id,
        resource=resource,
    )

    if updated is None:
        raise HTTPException(
            status_code=404,
            detail="Resource not found",
        )

    return updated

@router.delete(
    "/{resource_id}",
)
def remove_resource(
    resource_id: int,
    db: Session = Depends(get_db),
):

    deleted = delete_resource(
        db=db,
        resource_id=resource_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Resource not found",
        )

    return {
        "message": "Resource deleted successfully"
    }