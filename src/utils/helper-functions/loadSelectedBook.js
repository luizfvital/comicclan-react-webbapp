// Returns a single book from an array of book objects by its id.
export const loadSelectedBook = (bookCollection, bookId) => {
  if (!bookCollection) return {}
  return bookCollection.filter(book => book.id === bookId)[0]
}
