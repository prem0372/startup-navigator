from fastapi import FastAPI

from app.core.config import settings
from app.db.database import Base
from app.db.database import engine

# Import all models here
from app.models.user import User
from app.routers.auth import router as auth_router

from app.models.topics import Topic
from app.routers.topics import router as topic_router

from app.models.resource import Resource
from app.routers.resources import router as resource_router
from app.routers.ai import router as ai_router
from app.models.history import History
from app.routers.history import router as history_router
from fastapi.middleware.cors import CORSMiddleware
from app.routers.dashboard import router as dashboard_router
from app.routers.bookmark import router as bookmark_router

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(history_router)
app.include_router(auth_router)
app.include_router(topic_router)
app.include_router(resource_router)
app.include_router(ai_router)
app.include_router(dashboard_router)
app.include_router(bookmark_router)

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