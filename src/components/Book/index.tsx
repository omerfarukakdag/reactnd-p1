import React from 'react';
import BookshelfChanger from '../BookshelfChanger';
import bookPlaceHolder from '../../assets/icons/book-placeholder.svg';
import { IBookCoverProps, IBookProps } from '../../core/interfaces';

const BookTitle = ({ title }: { title: string }) => <div className="book-title">{title}</div>;

const BookAuthors = ({ authors }: { authors: string }) => <div className="book-authors">{authors}</div>;

const BookCover = ({ book, onBookshelfChange, bookshelf }: IBookCoverProps) => {
  return (
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${book.imageLinks?.thumbnail || bookPlaceHolder})`,
        }}
      />
      <BookshelfChanger book={book} bookshelf={bookshelf} onBookshelfChange={onBookshelfChange} />
    </div>
  );
};

const Book = ({ book, bookshelf, onBookshelfChange }: IBookProps) => {
  return (
    <div className="book">
      <BookCover book={book} bookshelf={bookshelf} onBookshelfChange={onBookshelfChange} />
      <BookTitle title={book.title?.trim() || 'No Title'} />
      <BookAuthors authors={book.authors?.join(', ').trim() || 'Unknown Author'} />
    </div>
  );
};

export default Book;
