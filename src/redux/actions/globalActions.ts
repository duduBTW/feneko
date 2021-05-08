export type Action = { type: "SET_LOC"; payload: number };

export const setLoc = (type: number): Action => ({
  type: "SET_LOC",
  payload: type,
});
