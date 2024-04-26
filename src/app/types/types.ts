export type TMovie = {
  releaseYears: any;
  id: number;
  name: string;
  type: string;
  year: number;
  description: string;
  rating: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await?: any; // Optional property
  };
  movieLength: number;
  poster: {
    url: string;
    previewUrl: string;
  };
};

export type TApiResponse = {
  docs: TMovie[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};
