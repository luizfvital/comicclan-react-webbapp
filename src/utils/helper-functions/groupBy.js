const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key]
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
    return objectsByKeyValue
  }, {})

export const groupByYear = groupBy('year')
export const groupByWriter = groupBy('writer')
export const groupByArtist = groupBy('artist')
export const groupByOwner = groupBy('owner')
