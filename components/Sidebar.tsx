import { useEffect, useState } from 'react';
import analyze from '../utils/analyze';

const Sidebar = ({ text }: { text: string }) => {
  const [analyzed, setAnalyzed] = useState(analyze(text));

  useEffect(() => {
    setAnalyzed(analyze(text));
  }, [text]);

  return <div className='h-full w-full col-span-2 bg-primary-800 rounded-8 p-4'>{analyzed.words}</div>;
};

export default Sidebar;
