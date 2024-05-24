import A from '../../assets/images/A.svg';
import B from '../../assets/images/B.svg';
import C from '../../assets/images/C.svg';
import Bg1 from '../../assets/images/bg3.jpg';

import useResultItemController from './ResultItem.controller';

const ResultItem = () => {
  const resultItem = useResultItemController();
  return (
    <div className="h-svh" style={{ background: `url(${Bg1})` }}>
      <div className="bg-black opacity-50 h-svh" />
      <div className="absolute left-0 flex content-center justify-center w-full text-2xl font-bold text-center text-white top-40">
        이것이 당신의 기타입니다.
      </div>
      <div className="absolute left-0 flex content-center justify-center w-full top-56">
        {resultItem.totalResult?.code === 'A' && <img className="w-28" src={A} />}
        {resultItem.totalResult?.code === 'B' && <img className="w-28" src={B} />}
        {resultItem.totalResult?.code === 'C' && <img className="w-28" src={C} />}
      </div>
      <div className="absolute left-0 w-full px-5 text-white bottom-52 " style={{ letterSpacing: 1.3 }}>
        {resultItem.totalResult?.summary}
      </div>
      {/* <Button
        className="w-full px-4 py-2 text-white rounded-md h-50 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        onClick={resultItem.backToStart}
      >
        처음으로
      </Button> */}
    </div>
  );
};

export default ResultItem;
