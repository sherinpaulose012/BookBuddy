from sqlalchemy import Column, Integer, String
from database import Base

class Book(Base):
    __tablename__ = "books"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String)
    author = Column(String)
    genre = Column(String)

    status = Column(String)

    total_pages = Column(Integer)
    current_page = Column(Integer)

    notes = Column(String)
    rating = Column(Integer)