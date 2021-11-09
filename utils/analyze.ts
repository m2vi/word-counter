import { config } from './default';
import read from 'reading-time';

export const getReadingTime = (text: string, wpm: number) => {
  const res = read(text, {
    wordsPerMinute: wpm,
  });

  return res.time / 60000;
};

export const removeDuplicates = (array: Array<any>) => {
  return array.filter((v, i) => array.indexOf(v) == i);
};

export const getAverage = (array: Array<number>) => {
  const sum = array.reduce((a, b) => a + b, 0);
  return sum / array.length || 0;
};

export const analyze = (text: string) => {
  const words = text.split(' ');
  const uniqueWords = removeDuplicates(words);
  const averageWordLength = getAverage(words.map((word) => word.length));
  const characters = text.split('');
  const charactersWithoutSymbols = characters.filter((char) => !char.match(/[^A-Za-z0-9]+/g));
  const sentences = text.match(/[^\.!\?]+[\.!\?]+/g);
  const averageWordsPerSentence = getAverage(sentences?.map((sentence) => sentence.split(' ')).map((word) => word.length) as any);

  const readingTime = getReadingTime(text, config.wpm.reading);
  const speakingTime = getReadingTime(text, config.wpm.speaking);
  const writingTime = getReadingTime(text, config.wpm.writing);

  return {
    words: words.length,
    uniqueWords: uniqueWords.length,
    averageWordLength,
    characters: characters.length,
    charactersWithoutSymbols: charactersWithoutSymbols.length,
    sentences: sentences?.length,
    averageWordsPerSentence,
    readingTime,
    speakingTime,
    writingTime,
  };
};

export default analyze;
