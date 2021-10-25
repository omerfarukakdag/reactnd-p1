const success = {
  getAllBooks: 'Success',
  bookshelfChange: 'Selected book has been successfully updated.',
};
const error = {
  bookshelfChange: 'An error occurred while updating the book.',
  getAllBooks: 'An error occurred while fetching items.',
  searchBooks: 'An error occurred while searching for books.',
};
const warning = {
  noResultsFound: 'No results found.',
};
const info = {
  getAllBooks: 'Fetching data from the server...',
  emptyBookshelf:
    "You don't have any books in your bookshelf yet. Please click on the plus icon at the right bottom of the page to add a book.",
};

export default { success, error, warning, info };
