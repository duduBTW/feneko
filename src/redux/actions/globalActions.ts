export type Action =
  | { type: "SET_LOC"; payload: number }
  | { type: "SET_ARTIST_MODAL"; payload: number[] | null };

export const setLoc = (type: number): Action => ({
  type: "SET_LOC",
  payload: type,
});

export const setArtistModal = (type: number[] | null): Action => ({
  type: "SET_ARTIST_MODAL",
  payload: type,
});
