import React from 'react';
import { IBookListProps } from '../../core/interfaces';
import Book from '../Book';

const BookList = ({ books, bookshelf, onBookshelfChange }: IBookListProps) => {
  if (!books || !books.length) {
    return (
      <div>
        <strong>No items found.</strong>
      </div>
    );
  }

  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          <Book book={book} bookshelf={bookshelf || book.shelf || 'none'} onBookshelfChange={onBookshelfChange} />
        </li>
      ))}
    </ol>
  );
};

export default BookList;
