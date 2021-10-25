import React from 'react';
import { Link } from 'react-router-dom';
import { ICloseSearchBarProps, ISearchBarProps } from '../../core/interfaces';
import * as PagePaths from '../../router/pagePaths';
import SearchBooksInput from '../SearchBooksInput';

const CloseSearchBar = ({ onCloseSearchBar }: ICloseSearchBarProps) => (
  <Link className="close-search" onClick={onCloseSearchBar} to={PagePaths.Dashboard}>
    Close
  </Link>
);

const SearchBar = ({ onCloseSearchBar, onQueryChange }: ISearchBarProps) => {
  return (
    <div className="search-books-bar">
      <CloseSearchBar onCloseSearchBar={onCloseSearchBar} />
      <SearchBooksInput onQueryChange={onQueryChange} />
    </div>
  );
};

export default SearchBar;
