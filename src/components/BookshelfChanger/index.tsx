import React, { useState } from 'react';
import { bookshelves } from '../../core/data';
import { IBookshelfChangerProps } from '../../core/interfaces';

const BookshelfChanger = ({ book, onBookshelfChange, bookshelf }: IBookshelfChangerProps) => {
  const [selectedBookshelf, setSelectedBookshelf] = useState(bookshelf);

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedBookshelf(value);
    onBookshelfChange && onBookshelfChange(book, value);
  };

  return (
    <React.Fragment>
      {bookshelves.length && (
        <div className="book-shelf-changer">
          <select value={selectedBookshelf} onChange={handleChange}>
            <option value="move" disabled>
              Move to...
            </option>
            {bookshelves.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
      )}
    </React.Fragment>
  );
};

export default BookshelfChanger;
