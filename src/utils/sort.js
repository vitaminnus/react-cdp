const sort = (films, direction, sorttype) => {
  if (sorttype === 'vote_count') {
    return films.sort((a, b) => direction
    * (b[sorttype] - a[sorttype]));
  }
  return films.sort((a, b) => {
    const dateA = a[sorttype].split('-');
    const dateB = b[sorttype].split('-');
    let i = 0;
    function sorting(x, y) {
      if (x[i] > y[i]) return -1 * direction;
      if (x[i] < y[i]) return direction;
      i += 1;
      if (i < 3) return sorting(x, y);
      return 0;
    }
    return sorting(dateA, dateB);
  });
};

export default sort;
