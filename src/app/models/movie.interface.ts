export interface Movie {
  title: string;
  releaseDate: string;
  poster: string;
  originalLanguage: string;
  overview: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Movies extends Array<Movie>{}
