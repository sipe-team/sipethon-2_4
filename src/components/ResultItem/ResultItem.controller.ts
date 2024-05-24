import { BASE_URL } from '@/api/common';
import { currentOrder, result, totalResult } from '@/store/qa/qa';
import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const useResultItemController = () => {
  const [_currentOrder, setCurrentOrder] = useRecoilState(currentOrder);
  const [_totalResult, setTotalResult] = useRecoilState(totalResult);
  const _result = useRecoilValue(result);

  useEffect(() => {
    if (_currentOrder === 9) {
      axios.post(`${BASE_URL}/result`, { choiceResult: _result }).then((res) => {
        setTotalResult(res.data);
      });
    }
  }, [_currentOrder]);

  const backToStart = () => {
    setCurrentOrder(-1);
  };

  return { backToStart, totalResult: _totalResult };
};

export default useResultItemController;
