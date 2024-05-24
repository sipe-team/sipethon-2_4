import { currentOrder } from '@/store/qa/qa';
import { useSetRecoilState } from 'recoil';

const useIntroItemController = () => {
  const setCurrentOrder = useSetRecoilState(currentOrder);
  const startQa = () => {
    setCurrentOrder((prev) => prev + 1);
  };
  return { startQa };
};

export default useIntroItemController;
