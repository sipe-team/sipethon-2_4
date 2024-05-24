import { atom } from 'recoil';

const currentOrder_Atom = atom<number>({
  key: 'currentOrder_Atom',
  default: -1,
});

const result_Atom = atom<string[]>({
  key: 'result_Atom',
  default: [],
});

const totalResult_Atom = atom<{
  code: 'A' | 'B' | 'C';
  id: number;
  summary: string;
}>({
  key: 'totalResult_Atom',
  default: undefined,
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

export {
  currentOrder_Atom as currentOrder,
  qaItems_Atom as qaItems,
  result_Atom as result,
  totalResult_Atom as totalResult,
};
