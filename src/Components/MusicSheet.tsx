import { useEffect, useRef, FC } from 'react';
import abcjs from 'abcjs';

interface MusicSheetProps {
  notation: string;
}

const MusicSheet: FC<MusicSheetProps> = ({ notation }) => {
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (notation && sheetRef.current) {
      abcjs.renderAbc(sheetRef.current, notation, {
        wrap: {
          minSpacing: 1.8, // 最小间距
          maxSpacing: 2.8, // 最大间距
          preferredMeasuresPerLine: 4, // 一行首选的小节数
        },
      });
    }
  }, [notation]);

  return <div ref={sheetRef}></div>;
};

export default MusicSheet;
