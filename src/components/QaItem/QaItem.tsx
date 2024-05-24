import { TQaItem } from '@/store/qa/qa';
import { Button } from '../ui/button';
import useQaItemController from './QaItem.controller';
import React, { useState, useEffect, useRef, RefObject } from 'react';
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
    <div className="grid-container">
      <div className="grid-item question-title">{question}</div>
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
