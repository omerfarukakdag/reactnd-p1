import { MouseEventHandler } from 'react';

export interface IBookResponse {
  books:
    | IBook[]
    | {
        error: any;
      };
}

export interface IBook {
  title: string;
  subtitle?: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: IIndustryIdentifier[];
  readingModes: IReadingModes;
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating?: number;
  ratingsCount?: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  imageLinks: IImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  id: string;
  shelf: string;
  panelizationSummary?: IPanelizationSummary;
}

export interface IImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface IIndustryIdentifier {
  type: string;
  identifier: string;
}

export interface IPanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

export interface IReadingModes {
  text: boolean;
  image: boolean;
}

export interface IGlobalState {
  globalState: {
    books: IBook[];
    searchResults: IBook[];
  };
  setGlobalState: Function;
}

interface IBookshelfBaseProps {
  bookshelf?: string;
  onBookshelfChange: (book: IBook, bookshelf: string) => void;
}

interface IBookBaseProps {
  book: IBook;
}

export interface IBookProps extends IBookshelfBaseProps, IBookBaseProps {}
export interface IBookCoverProps extends IBookshelfBaseProps, IBookBaseProps {}
export interface IBookshelfChangerProps extends IBookshelfBaseProps, IBookBaseProps {}

export interface IBookListProps extends IBookshelfBaseProps {
  books: IBook[];
}

export interface IBookshelfProps extends IBookshelfBaseProps {
  title: string;
  books: IBook[];
  showEmptyBookshelfContainer: boolean;
}

const BookshelveList = ['currentlyReading', 'wantToRead', 'read', 'none'] as const;
export type BookshelfType = typeof BookshelveList[number];

export interface IBookshelf {
  id: BookshelfType;
  title: string;
}

export interface IRoute {
  path: string;
  exact: boolean;
  wrapper: React.ComponentClass<any> | React.FunctionComponent<any>;
  wrapperProps: any;
  component: React.ComponentClass<any> | React.FunctionComponent<any>;
  componentProps?: any;
  headerProps: any;
}

export interface IMultiProviderProps {
  children: React.ReactNode;
  providers: React.ReactElement[];
}

export interface ISearchBooksInputProps {
  onQueryChange: (value: string) => void;
}

export interface ICloseSearchBarProps {
  onCloseSearchBar: MouseEventHandler<HTMLAnchorElement>;
}

export interface ISearchBarProps extends ICloseSearchBarProps, ISearchBooksInputProps {}

export interface ISearchResultsProps {
  books: IBook[];
  onBookshelfChange: (book: IBook, bookshelf: string) => void;
}
