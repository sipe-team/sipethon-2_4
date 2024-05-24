import { Button } from '../ui/button';
import useResultItemController from './ResultItem.controller';

const ResultItem = () => {
  const resultItem = useResultItemController();
  return (
    <div>
      마지막
      <Button
        className="w-full h-50 text-white py-2 px-4 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        onClick={resultItem.backToStart}
      >
        처음으로
      </Button>
    </div>
  );
};

export default ResultItem;
