import { currentOrder } from '@/store/qa/qa';
import { useSetRecoilState } from 'recoil';

const useResultItemController = () => {
  const setCurrentOrder = useSetRecoilState(currentOrder);
  const backToStart = () => {
    setCurrentOrder(0);
  };

  return { backToStart };
};

export default useResultItemController;
