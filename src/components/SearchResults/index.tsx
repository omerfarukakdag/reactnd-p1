import React from 'react';
import BookList from '../../components/BookList';
import { ISearchResultsProps } from '../../core/interfaces';

const SearchResults = ({ books, onBookshelfChange }: ISearchResultsProps) => {
  return (
    <div className="search-books-results">
      {books.length === 0 ? (
        <div>{/* <strong>No items found.</strong> */}</div>
      ) : (
        <BookList books={books} onBookshelfChange={onBookshelfChange} />
      )}
    </div>
  );
};

export default SearchResults;
