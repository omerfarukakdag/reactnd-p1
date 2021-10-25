import React from 'react';
import * as BooksApi from '../../../core/BooksAPI';
import useGlobalState from '../../../core/hooks/useGlobalState';
import useAlert from '../../../core/hooks/useAlert';
import { IBook } from '../../../core/interfaces';
import SearchBar from '../../../components/SearchBar';
import SearchResults from '../../../components/SearchResults';

const SearchBooks = () => {
  const { globalState, setGlobalState } = useGlobalState();
  const { alert, alertMessages } = useAlert();

  const handleCloseSearchBar = () => {
    setGlobalState({ searchResults: [] });
  };

  const handleQueryChange = async (query: string) => {
    if (!query) {
      setGlobalState({ searchResults: [] });
      return;
    }
    try {
      const response = await BooksApi.search(query);

      const updatedList = response.map((result) => {
        const item = globalState.books.find((book) => book.id === result.id);
        if (item) {
          result.shelf = item.shelf;
        }
        return result;
      });

      setGlobalState({ searchResults: updatedList });
      updatedList.length === 0 && alert.warning(alertMessages.warning.noResultsFound);
    } catch (error) {
      alert.error(alertMessages.error.searchBooks);
    }
  };

  const handleBookshelfChange = async (book: IBook, bookshelf: string) => {
    try {
      await BooksApi.update(book, bookshelf);

      if (bookshelf === 'none') {
        // Remove the book from the state
        setGlobalState((prevState) => {
          books: prevState.books.filter((item: IBook) => item.id !== book.id);
        });
      } else {
        book.shelf = bookshelf;
        setGlobalState((prevState) => {
          books: prevState.books.filter((item: IBook) => item.id !== book.id).concat(book);
        });
      }
      alert.success(alertMessages.success.bookshelfChange);
    } catch (error) {
      alert.error(alertMessages.error.bookshelfChange);
    }
  };
  return (
    <div className="search-books">
      <SearchBar onCloseSearchBar={handleCloseSearchBar} onQueryChange={handleQueryChange} />
      <SearchResults books={globalState.searchResults} onBookshelfChange={handleBookshelfChange} />
    </div>
  );
};

export default SearchBooks;
