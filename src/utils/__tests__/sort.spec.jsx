import sortFunction from '../sort';

const data = [
  {
    id: 13456,
    title: 'Captain Marvel',
    genres: ['Drama', 'Comedy'],
    release_date: '2005-01-12',
    vote_count: 17,
  },
  {
    id: 335654,
    title: 'Captain Marvel',
    genres: ['Drama', 'Comedy'],
    release_date: '1976-05-14',
    vote_count: 10,
  },
  {
    id: 790767,
    title: 'Captain Marvel',
    genres: ['Drama', 'Comedy'],
    release_date: '2005-01-12',
    vote_count: 26,
  },
  {
    id: 1231321,
    title: 'Captain Marvel',
    genres: ['Drama', 'Comedy'],
    release_date: '2018-10-30',
    vote_count: 165,
  },
];

const expectedResult = [
  {
    id: 335654,
    title: 'Captain Marvel',
    genres: ['Drama', 'Comedy'],
    release_date: '1976-05-14',
    vote_count: 10,
  },
  {
    id: 13456,
    title: 'Captain Marvel',
    genres: ['Drama', 'Comedy'],
    release_date: '2005-01-12',
    vote_count: 17,
  },
  {
    id: 790767,
    title: 'Captain Marvel',
    genres: ['Drama', 'Comedy'],
    release_date: '2005-01-12',
    vote_count: 26,
  },
  {
    id: 1231321,
    title: 'Captain Marvel',
    genres: ['Drama', 'Comedy'],
    release_date: '2018-10-30',
    vote_count: 165,
  },
];

const expectedResult2 = [
  {
    id: 335654,
    title: 'Captain Marvel',
    genres: ['Drama', 'Comedy'],
    release_date: '1976-05-14',
    vote_count: 10,
  },
  {
    id: 13456,
    title: 'Captain Marvel',
    genres: ['Drama', 'Comedy'],
    release_date: '2005-01-12',
    vote_count: 17,
  },
  {
    id: 790767,
    title: 'Captain Marvel',
    genres: ['Drama', 'Comedy'],
    release_date: '2005-01-12',
    vote_count: 26,
  },
  {
    id: 1231321,
    title: 'Captain Marvel',
    genres: ['Drama', 'Comedy'],
    release_date: '2018-10-30',
    vote_count: 165,
  },
];

const direction = -1;
const sorttype = 'release_date';
const sorttype2 = 'vote_count';

describe('Sort logics', () => {
  test('should return sorted array by release date', () => {
    const result = sortFunction(data, direction, sorttype);
    expect(result).toEqual(expectedResult);
  });
  test('should return sorted array by rating', () => {
    const result = sortFunction(data, direction, sorttype2);
    expect(result).toEqual(expectedResult2);
  });
});
