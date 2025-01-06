import { section } from 'motion/react-client';
import { RefObject } from 'react';

function Button({text, ref}: {text: string, ref?: RefObject<HTMLDivElement | null>}) {
  return (
    <button
        className="text-2xl text-center px-4 py-2 border-2 bg-black rounded-full hover:shadow-[0px_0px_16px_0_rgba(253,230,138,0.6)] transition-shadow"
        onClick={() => {
          if(ref?.current) {
            ref.current.scrollIntoView({behavior: 'smooth'});
          }
        }}
    >
        {text}
    </button>
  )
}

export default Button