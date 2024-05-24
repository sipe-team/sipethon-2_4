import { LAST_QUESTION_ORDER } from '@/store/qa/qa.const';
import IntroItem from '../IntroItem/IntroItem';
import QaItem from '../QaItem/QaItem';
import ResultItem from '../ResultItem/ResultItem';
import useFactoryController from './Factory.controller';

const Factory = () => {
  const factory = useFactoryController();

  if (factory.currentOrder === -1) {
    return <IntroItem />;
  }

  if (factory.currentOrder === LAST_QUESTION_ORDER) {
    return <ResultItem />;
  }

  return <QaItem {...factory.qaItems[factory.currentOrder]} />;
};

export default Factory;
