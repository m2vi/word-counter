import { LoremIpsum, loremIpsum } from 'lorem-ipsum';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
  const [text, setText] = useState(new LoremIpsum().generateWords(69));

  return (
    <>
      <NextSeo title='Word Counter' description='' />
      <div className='h-screen w-full overflow-y-auto flex items-center justify-center '>
        <div className='px-8 grid grid-cols-6 gap-4 py-11 w-full h-full max-w-4xl'>
          <textarea
            name=''
            id=''
            className='col-span-4 bg-primary-800 rounded-8 p-4'
            defaultValue={text}
            onChange={({ currentTarget }) => setText(currentTarget.value)}
          ></textarea>
          <Sidebar text={text} />
        </div>
      </div>
    </>
  );
};

export default Home;
