import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import analyze from '../utils/analyze';

const Home: NextPage = () => {
  useEffect(() => {
    const text =
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    console.log(analyze(text));
  });
  return (
    <>
      <NextSeo title='Word Counter' description='' />
      <div className='h-screen w-full overflow-y-auto grid place-items-center'>
        <p>Loading...</p>
      </div>
    </>
  );
};

export default Home;
