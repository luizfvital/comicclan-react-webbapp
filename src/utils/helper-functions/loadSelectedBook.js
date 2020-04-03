export const loadSelectedBook = (collection, book) => {
  if (!collection) return {}
  return collection.filter(collectionBook => collectionBook.id === book)[0]
}
