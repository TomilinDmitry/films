export type TMovie = {
  releaseYears?: any;
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
    await?: any; 
  };
  countries: [
    {
      name: string;
    },
  ];
  genres: [
    {
        "name": "драма"
    },
    {
        "name": "комедия"
    }
],
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
