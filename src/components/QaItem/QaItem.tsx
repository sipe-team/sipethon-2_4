import { TQaItem } from '@/store/qa/qa';
import { Button } from '../ui/button';
import useQaItemController from './QaItem.controller';

export interface IProps extends TQaItem {}

const QaItem = (props: IProps) => {
  const qaItem = useQaItemController();
  const { type, question, answer1, answer2 } = props;
  const isMusic = type == 'MUSIC';

  return (
    <div>
      {type}
      {question}
      <div className="">
        <Button variant="primary" size="full" onClick={qaItem.nextQa}>
          {isMusic ? <audio controls src={'public/music/' + answer1.answer + '.mp3'}></audio> : answer1.answer}
        </Button>
        <Button variant="primary" size="full" onClick={qaItem.nextQa}>
          {isMusic ? <audio controls src={'public/music/' + answer2.answer + '.mp3'}></audio> : answer2.answer}
        </Button>
      </div>
    </div>
  );
};

export default QaItem;
