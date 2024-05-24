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
      <div className="absolute left-0 flex content-center justify-center w-full p-10 text-2xl font-bold text-center text-white top-64">
        {question}
      </div>
      <div className="absolute left-0 w-full px-5 bottom-12">
        <Button
          variant="primary"
          size="full"
          className="px-5 py-5 text-0.5xl bg-zinc-900/70 rounded-lg hover:bg-zinc-900 mb-10"
          onClick={() => qaItem.nextQa(answer1.code)}
        >
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
        <Button
          variant="primary"
          size="full"
          className="px-5 py-5 text-0.5xl bg-zinc-900/70 rounded-lg hover:bg-zinc-900 mb-10"
          onClick={() => qaItem.nextQa(answer2.code)}
        >
          {' '}
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
