/*
  Receives an array of objects and a key(string) being a common 
  property in the objects, and returns a new object with grouped 
  values by key-property.
 */
export const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key]
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
    return objectsByKeyValue
  }, {})
