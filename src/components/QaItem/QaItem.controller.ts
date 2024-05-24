import { currentOrder, result } from '@/store/qa/qa';
import { useSetRecoilState } from 'recoil';

const useQaItemController = () => {
  const setCurrentOrder = useSetRecoilState(currentOrder);
  const setResult = useSetRecoilState(result);
  const nextQa = (code: string) => {
    setResult((prev) => [...prev, code]);
    setCurrentOrder((prev) => prev + 1);
  };

  return { nextQa };
};

export default useQaItemController;
