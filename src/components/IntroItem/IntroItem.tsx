import Bg1 from '../../assets/images/bg3.jpg';
import { Button } from '../ui/button';
import useIntroItemController from './IntroItem.controller';

const IntroItem = () => {
  const introItem = useIntroItemController();

  return (
    <div className="h-svh" style={{ background: `url(${Bg1})` }}>
      <div className="bg-black opacity-50 h-svh" />
      <div className="absolute left-0 flex content-center justify-center w-full text-4xl font-bold text-center text-white top-64">
        프로젝트: 나만의 기타 만들기
      </div>
      <div className="absolute left-0 flex content-center justify-center w-full text-xl text-center text-white top-80">
        나에게 어울리는 기타는 뭘까?
      </div>
      <div
        className="absolute left-0 flex content-center justify-center w-full text-center text-white bottom-32"
        style={{ letterSpacing: 1.3 }}
      >
        이어폰과 함께하면 더 재밌어요!
      </div>
      <div className="absolute left-0 w-full px-5 bottom-12">
        <Button
          size="full"
          variant="primary"
          className="px-5 py-5 text-xl bg-blue-600 rounded-lg "
          onClick={introItem.startQa}
        >
          지금 시작하기
        </Button>
      </div>
    </div>
  );
};

export default IntroItem;
