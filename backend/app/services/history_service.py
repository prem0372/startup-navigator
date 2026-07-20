from sqlalchemy.orm import Session

from app.models.history import History


def create_history(
    db: Session,
    user_id: int,
    prompt: str,
    response: str,
):

    history = History(
        user_id=user_id,
        prompt=prompt,
        response=response,
    )

    db.add(history)
    db.commit()
    db.refresh(history)

    return history


def get_history(
    db: Session,
    user_id: int,
):

    return (
        db.query(History)
        .filter(History.user_id == user_id)
        .order_by(History.id.desc())
        .all()
    )