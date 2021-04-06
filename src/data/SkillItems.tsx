import React from 'react';
import {
  DiPython,
  DiPhp,
  DiJava,
  DiAws,
  DiVim,
  DiDocker,
  DiGithub,
} from 'react-icons/di';

export type SkillItem = {
  id: number;
  title: string;
  desc: string;
  rate: number;
  icon: React.ReactNode;
};
export const SkillItems: SkillItem[] = [
  {
    id: 0,
    title: 'Python',
    desc: `スクレイピングや画像認識を用いたアプリの自動操作などに使用`,
    rate: 2.5,
    icon: <DiPython />,
  },
  {
    id: 1,
    title: 'PHP',
    desc: `webサイト構築に使用
    wordpressやtwitterへの投稿、webスクレイピングなどを行うプログラムを作成`,
    rate: 4,
    icon: <DiPhp />,
  },
  {
    id: 2,
    title: 'Java',
    desc: `大学の講義で使用`,
    rate: 1,
    icon: <DiJava />,
  },
  {
    id: 3,
    title: 'Vim',
    desc: `vimmerに憧れて
    ほとんど使いこなせていない`,
    rate: 1,
    icon: <DiVim />,
  },
  {
    id: 4,
    title: 'aws',
    desc: `ec2, s3, lambdaなどを使って遊んだ`,
    rate: 1,
    icon: <DiAws />,
  },
  {
    id: 5,
    title: 'Docker',
    desc: `いつもエラーを吐くのでいい思い出がない`,
    rate: 2,
    icon: <DiDocker />,
  },
  {
    id: 6,
    title: 'Github',
    desc: 'すっごい便利',
    rate: 3,
    icon: <DiGithub />,
  },
];
