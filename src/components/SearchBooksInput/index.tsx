import React, { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import { ISearchBooksInputProps } from '../../core/interfaces';

const SearchBooksInput = ({ onQueryChange }: ISearchBooksInputProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const debouncedChangeHandler = useMemo(() => debounce(() => onQueryChange(searchQuery), 300), [searchQuery]);

  useEffect(() => {
    debouncedChangeHandler();

    return debouncedChangeHandler.cancel;
  }, [searchQuery, debouncedChangeHandler]);

  return (
    <div className="search-books-input-wrapper">
      <input
        name="searchQuery"
        type="text"
        autoFocus
        placeholder="Search by title or author"
        value={searchQuery}
        onChange={handleQueryChange}
      />
    </div>
  );
};

export default SearchBooksInput;
