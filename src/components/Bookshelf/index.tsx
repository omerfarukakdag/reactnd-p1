import React from 'react';
import { IBookshelfProps } from '../../core/interfaces';
import BookList from '../BookList';

const EmptyBookshelf = ({ title }: { title: string }) => (
  <div className="bookshelf">
    <div>
      <h2 className="bookshelf-title">{title}</h2>
      <strong>No items found.</strong>
    </div>
  </div>
);

const Bookshelf = ({ bookshelf, title, books, onBookshelfChange, showEmptyBookshelfContainer }: IBookshelfProps) => {
  const isEmptyBookshelf = !books || !books.length;
  const showEmptyBookshelf = isEmptyBookshelf && showEmptyBookshelfContainer;

  if (isEmptyBookshelf) {
    return showEmptyBookshelf ? <EmptyBookshelf title={title} /> : null;
  }

  return (
    <React.Fragment>
      <div className="bookshelf">
        <React.Fragment>
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books" />
          <BookList books={books} bookshelf={bookshelf} onBookshelfChange={onBookshelfChange} />
        </React.Fragment>
      </div>
    </React.Fragment>
  );
};

export default Bookshelf;
