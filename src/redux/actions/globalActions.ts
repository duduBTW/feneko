export type Action =
  | { type: "SET_LOC"; payload: number }
  | { type: "SET_ARTIST_MODAL"; payload: string[] | null };

export const setLoc = (type: number): Action => ({
  type: "SET_LOC",
  payload: type,
});

export const setArtistModal = (type: string[] | null): Action => ({
  type: "SET_ARTIST_MODAL",
  payload: type,
});
