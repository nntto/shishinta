export type Episode = {
  id: number;
  date: string;
  title: string;
  description?: string;
};

export const EpisodeItems: Episode[] = [
  {
    id: 1,
    date: '2018-04',
    title: '大学入学',
  },
  {
    id: 2,
    date: '2022-03',
    title: '学部卒業（予定）',
    description: '卒論かけるのだろうか',
  },
  {
    id: 3,
    date: '2022-04',
    title: '大学院へ進学（予定）',
    description: '博士には行かない',
  },
];
