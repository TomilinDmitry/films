export type TMovie = {
  releaseYears?: any;
  id: number;
  name?: string;
  type: string;
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
