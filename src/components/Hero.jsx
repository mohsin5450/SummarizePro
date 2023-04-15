import React from "react";



const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <h2 className='text-black  text-2xl font-bold'>
      SummarizePro
      </h2>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>GPT-4</span>
      </h1>
      <h2 className='desc'>
      Make reading easier with SummarizePro, a free tool that turns long articles into short summaries
      </h2>
    </header>
  );
};

export default Hero;
