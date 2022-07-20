function sortByPriceAscending(jsonString) {
  const json = JSON.parse(jsonString);
  const sorted = json.sort((a, b) => {
    if (a.price > b.price) {
      return 1;
    } else if (b.price > a.price) {
      return -1;
    } else {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  return JSON.stringify(sorted);
}

console.log(
  sortByPriceAscending(
    '[{"name":"eggs","price":1},{"name":"tea","price":9.99},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'
  )
);
