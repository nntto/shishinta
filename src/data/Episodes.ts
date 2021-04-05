export type Episode = {
  id: number;
  date: string;
  title: string;
  description?: string;
};

export const Episodes: Episode[] = [
  {
    id: 1,
    date: '2018-04',
    title: '大学入学',
  },
  {
    id: 2,
    date: '2019-04',
    title: '情報系学部に移行',
    description: 'GPA戦争はまだ終わらない',
  },
  {
    id: 3,
    date: '2020-10',
    title: 'アルゴリズム系の研究室に配属される',
    description: '何もしない日々が続いている',
  },
];
