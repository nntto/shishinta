import React from 'react';
import { DiPython } from 'react-icons/di';

export type SkillItem = {
  id: number;
  title: string;
  desc: string;
  rate: number;
  icon: React.ReactNode;
};
export const Skills: SkillItem[] = [
  {
    id: 0,
    title: 'Python',
    desc: `スクレイピングや画像認識を用いたアプリの自動操作などに使用`,
    rate: 2.5,
    icon: <DiPython />,
  },
];
