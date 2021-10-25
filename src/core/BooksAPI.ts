import { IBook, IBookResponse } from './interfaces';
import { booksApiUrl } from './config';

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: 'application/json',
  Authorization: token,
};

export const get = (bookId): Promise<IBook> =>
  fetch(`${booksApiUrl}/books/${bookId}`, { headers })
    .then((res) => res.json())
    .then((data) => data.book);

export const getAll = (): Promise<IBook[]> =>
  fetch(`${booksApiUrl}/books`, { headers })
    .then((res) => res.json())
    .then((data: IBookResponse) => {
      if (Array.isArray(data.books)) {
        return data.books;
      }
      return [];
    });

export const update = (book: IBook, shelf: string) =>
  fetch(`${booksApiUrl}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ shelf }),
  }).then((res) => res.json());

export const search = (query: string): Promise<IBook[]> =>
  fetch(`${booksApiUrl}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((data: IBookResponse) => {
      if (Array.isArray(data.books)) {
        return data.books;
      }
      return [];
    });
