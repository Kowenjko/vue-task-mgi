export const filterOnTitle = (collection, title) => {
  return collection.filter((elem) => elem.title.toLowerCase().includes(title.toLowerCase()))
}

export const sortedOnTitle = (collection) => {
  return collection.sort((a, b) => (a.title > b.title ? 1 : -1))
}
