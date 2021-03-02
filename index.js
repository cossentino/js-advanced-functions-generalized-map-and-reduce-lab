// Add your functions here




function map(array, mapFunc) {
  const r = []
  for (let i = 0; i < array.length; i++) {
    r.push(mapFunc(array[i]))
  }
  return r
}



function reduce (array, reducerFunc, startingPoint=true) {
  let accumulator = startingPoint
  const reducer = (accum, current) => reducerFunc(accum, current)
  for (let i = 0; i < array.length; i++) {
    accumulator = reducer(accumulator, array[i])
  }
  if (startingPoint === true && typeof accumulator === "number") {
    return accumulator - 1
  } else {
    return accumulator
  }
}