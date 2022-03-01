export const genres = [
  { _id: "1234567890A", name: "Action" },
  { _id: "1234567890T", name: "Thriller" },
  { _id: "1234567890C", name: "Comedy" },
];
export function getGenres() {
  return genres.filter((g) => g);
}
