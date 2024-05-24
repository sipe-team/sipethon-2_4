import { currentOrder } from '@/store/qa/qa';
import { useSetRecoilState } from 'recoil';

const useQaItemController = () => {
  const setCurrentOrder = useSetRecoilState(currentOrder);
  const nextQa = () => {
    setCurrentOrder((prev) => prev + 1);
  };

  return { nextQa };
};

export default useQaItemController;
