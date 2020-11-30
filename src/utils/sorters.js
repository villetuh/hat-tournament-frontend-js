export const nameSorter = (a, b) => {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
};
