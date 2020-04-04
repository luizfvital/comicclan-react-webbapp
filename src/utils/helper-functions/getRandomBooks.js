/*
  Receives an array of book objects and returns a new array 
  with randomly selected books up to 5 in total.
 */
export const getRandomBooks = collection => {
  if (!collection) return []
  const newCollection = []
  for (let i = 0; i < collection.length; i++) {
    if (i === 5) break
    const randomIndex = Math.floor(Math.random() * collection.length)
    newCollection.push(collection[randomIndex])
  }
  return newCollection
}
