import { TQaItem } from '@/store/qa/qa';
import { RefObject, useRef, useState } from 'react';
import Bg3 from '../../assets/images/bg1.jpg';
import { Button } from '../ui/button';
import useQaItemController from './QaItem.controller';
import './QaItem.css';

export interface IProps extends TQaItem {}

const QaItem = (props: IProps) => {
  const qaItem = useQaItemController();
  const { type, question, answer1, answer2 } = props;
  const isMusic = type == 'MUSIC';

  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const musicRef1 = useRef<HTMLAudioElement>(null);
  const musicRef2 = useRef<HTMLAudioElement>(null);

  const handlePlay = (musicRef: RefObject<HTMLAudioElement>) => {
    if (currentAudio && currentAudio !== musicRef.current) {
      currentAudio.pause();
    }

    setCurrentAudio(musicRef.current);
  };

  return (
    <div className="h-svh" style={{ background: `url(${Bg3})` }}>
      <div className="bg-black opacity-50 h-svh" />
      {question}
      <div className="">
        <Button className="answer-card" size="full" onClick={qaItem.nextQa}>
          {isMusic ? (
            <audio
              ref={musicRef1}
              controls
              src={'public/music/' + answer1.answer + '.mp3'}
              onPlay={() => handlePlay(musicRef1)}
            ></audio>
          ) : (
            answer1.answer
          )}
        </Button>
        <Button className="answer-card" size="full" onClick={qaItem.nextQa}>
          {isMusic ? (
            <audio
              ref={musicRef2}
              controls
              src={'public/music/' + answer2.answer + '.mp3'}
              onPlay={() => handlePlay(musicRef2)}
            ></audio>
          ) : (
            answer2.answer
          )}
        </Button>
      </div>
    </div>
  );
};

export default QaItem;
