import { useEffect, useState } from 'react';
import analyze from '../utils/analyze';

const Sidebar = ({ text }: { text: string }) => {
  const [analyzed, setAnalyzed] = useState(analyze(text));

  useEffect(() => {
    setAnalyzed(analyze(text));
  }, [text]);

  return (
    <div className='h-full w-full col-span-2 bg-primary-800 rounded-8 p-4'>
      {Object.entries(analyzed).map((entry, i) => {
        const key = entry[0];
        const value = entry[1];

        if (key === 'query') return null;

        return (
          <p className='flex' key={i}>
            <span>{key}:&nbsp;</span>
            <span>{parseFloat((Math.round(value * 100) / 100).toFixed(2))}</span>
          </p>
        );
      })}
    </div>
  );
};

export default Sidebar;
