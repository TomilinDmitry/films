export type TMovie = {
  docs?: any;
  length?: number;
  releaseYears?: any;
  id: number;
  name?: string;
  type?: string;
  year?: number;
  description?: string;
  shortDescription?: string;
  rating?: {
    kp: number;
  };
  votes?: {
    kp: number;
  };
  ageRating?: number;
  countries?: [
    {
      name: "комедия" | "драма" | "детектив" | "ужасы";
    },
  ];
  genres?: [{ name: string }];
  movieLength?: number;
  poster: {
    url: string;
  };
  backdrop?: {
    url: string;
  };
  persons?: [{ name: string; profession: string }];
  premiere?: {
    world: string;
  };
  position?: number;
  top250?: number;
  videos?: {
    trailers: [
      {
        url: string;
      },
    ];
  };
  logo?: {
    url: string;
  };
  [key: number]: any;
};

export type TApiResponse = {
  docs: TMovie[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};
export type TApiResponseOneMovie = {
  docs: TMovie;
  total: number;
  limit: number;
  page: number;
  pages: number;
};

export type TMainSlice = {
  loading: boolean;
  error: string | null;
  headerMovie: TMovie[] | [];
  popularMovie: TMovie[] | [];
  allPopularMovie: TMovie[] | [];
  cinemaSoonMovie: TMovie[] | [];
  trandMovie: TMovie[] | [];
  topMovie: TMovie[] | [];
  randomMovie: TMovie | null;
  favouriteMovie: TMovie[];
  infoMovie: TMovie | null;
  active: Record<number, boolean>;
  viewed: boolean;
};
export type TSliceResponse = {
  docs: TMovie[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};
