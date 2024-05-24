import { BASE_URL } from '@/api/common';
import { currentOrder, qaItems } from '@/store/qa/qa';
import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const useFactoryController = () => {
  const _currentOrder = useRecoilValue(currentOrder);
  const [_qaItems, setQaItems] = useRecoilState(qaItems);

  useEffect(() => {
    axios.get(`${BASE_URL}/questions`).then((res) => {
      setQaItems(res.data);
    });
  }, [setQaItems]);

  return { currentOrder: _currentOrder, qaItems: _qaItems };
};

export default useFactoryController;
