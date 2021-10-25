import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as PagePaths from '../../../router/pagePaths';
import { bookshelves } from '../../../core/data';
import useGlobalState from '../../../core/hooks/useGlobalState';
import * as BooksApi from '../../../core/BooksAPI';
import useAlert from '../../../core/hooks/useAlert';
import Bookshelf from '../../../components/Bookshelf';
import { IBook } from '../../../core/interfaces';
import './index.css';

const LibraryHeader = () => (
  <div className="list-books-title">
    <h1>MyReads-Dashboard</h1>
  </div>
);

const AddBook = () => (
  <Link className="open-search" to={PagePaths.Search}>
    Add a book
  </Link>
);

const Library = () => {
  const { globalState, setGlobalState } = useGlobalState();
  const { alert, alertMessages } = useAlert();

  const getAllBooks = async () => {
    try {
      alert.info(alertMessages.info.getAllBooks);
      const books = await BooksApi.getAll();

      setGlobalState({ books });
      alert.success(alertMessages.success.getAllBooks);

      books.length === 0 && alert.info(alertMessages.info.emptyBookshelf);
    } catch (error) {
      alert.error(alertMessages.error.getAllBooks);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const handleBookshelfChange = async (book: IBook, bookshelf: string) => {
    try {
      await BooksApi.update(book, bookshelf);

      if (bookshelf === 'none') {
        // Remove the book from the state
        setGlobalState((prevState) => {
          return { books: prevState.books.filter((item: IBook) => item.id !== book.id) };
        });
      } else {
        book.shelf = bookshelf;
        setGlobalState((prevState) => {
          return { books: prevState.books.filter((item: IBook) => item.id !== book.id).concat(book) };
        });
      }
      alert.success(alertMessages.success.bookshelfChange);
    } catch (error) {
      alert.error(alertMessages.error.bookshelfChange);
    }
  };

  return (
    <div>
      <div className="list-books">
        <LibraryHeader />
        <div className="list-books-content">
          <div>
            {globalState.books.length == 0 ? (
              <div>Loading...</div>
            ) : (
              bookshelves.map((bookshelf) => {
                const bookshelfBookList = globalState.books.filter((book) => book.shelf === (bookshelf.id as string));
                return (
                  <Bookshelf
                    key={bookshelf.id}
                    bookshelf={bookshelf.id}
                    title={bookshelf.title}
                    books={bookshelfBookList}
                    onBookshelfChange={handleBookshelfChange}
                    showEmptyBookshelfContainer={false}
                  />
                );
              })
            )}
          </div>
        </div>
        <AddBook />
      </div>
    </div>
  );
};

export default Library;
