import { atom } from 'recoil';

const currentOrder_Atom = atom<number>({
  key: 'currentOrder_Atom',
  default: -1,
});

export type TQaItem = {
  type: 'QUESTION' | 'MUSIC';
  question: string;
  answer1: {
    answer: string;
    code: string;
  };
  answer2: {
    answer: string;
    code: string;
  };
};

const qaItems_Atom = atom<TQaItem[]>({
  key: 'qaItems_Atom',
  default: [],
});

export { currentOrder_Atom as currentOrder, qaItems_Atom as qaItems };
