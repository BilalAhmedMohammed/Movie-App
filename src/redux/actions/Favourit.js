export const FAVOURIT_MOVIE = "FAVOURIT_MOVIE";
export const COUNT_MOVIE="COUNT_MOVIE";
export const COLOR_MOVIE="COLOR_MOVIE";

export const addORremoveFavourit = (payload) => {
  return {
      type:FAVOURIT_MOVIE,
      payload,
  };
};
export const changeCount = (payload) => {
  return {
      type:COUNT_MOVIE,
      payload,
  };
};
export const changeColor = (payload) => {
  return {
      type:COLOR_MOVIE,
      payload,
  };
};

