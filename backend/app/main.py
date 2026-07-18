from fastapi import FastAPI

from app.core.config import settings
from app.db.database import Base
from app.db.database import engine

# Import all models here
from app.models.user import User
from app.routers.auth import router as auth_router

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
)

app.include_router(auth_router)


@app.on_event("startup")
def startup():

    # Create all database tables
    Base.metadata.create_all(bind=engine)


@app.get("/")
def home():

    return {
        "status": "success",
        "message": "Startup Navigator API Running",
        "version": settings.APP_VERSION,
    }


@app.get("/health")
def health():

    return {
        "status": "healthy",
    }