export type APICharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Pick<APILocation, "name" | "url">;
  location: Pick<APILocation, "name" | "url">;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type APILocation = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export type APIEpisode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type Pagination = {
  count: number;
  pages: number;
  next: string;
  previous?: string;
};

export type APIResult<T> = {
  info: Pagination;
  results: T[];
};
