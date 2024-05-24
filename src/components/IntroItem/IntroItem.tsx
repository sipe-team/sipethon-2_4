import { Button } from '../ui/button';
import useIntroItemController from './IntroItem.controller';

const IntroItem = () => {
  const introItem = useIntroItemController();

  return (
    <div className="pr-4 pl-4 bg-slate-400 h-svh">
      <Button
        size="lg"
        className="w-full h-50 text-white py-2 px-4 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        onClick={introItem.startQa}
      >
        시작하기
      </Button>
    </div>
  );
};

export default IntroItem;
