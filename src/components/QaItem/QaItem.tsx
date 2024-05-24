import { TQaItem } from '@/store/qa/qa';
import { Button } from '../ui/button';
import useQaItemController from './QaItem.controller';

export interface IProps extends TQaItem {}

const QaItem = (props: IProps) => {
  const qaItem = useQaItemController();
  const { type, question, answer1, answer2 } = props;

  return (
    <div>
      {type}
      {question}
      <div className="">
        <Button variant="primary" size="full" onClick={qaItem.nextQa}>
          {answer1.answer}
        </Button>
        <Button variant="primary" size="full" onClick={qaItem.nextQa}>
          {answer2.answer}
        </Button>
      </div>
    </div>
  );
};

export default QaItem;
