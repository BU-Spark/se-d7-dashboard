import type { FC } from 'react';
import {clsx} from 'clsx'

interface IStepper{
  currentStep: number
  totalStep: number
}

export const Stepper: FC<IStepper> = ({currentStep, totalStep}: IStepper) => {
  return (
    <>
      <div
        className="max-w-[60%] mx-auto relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-[0.1rem] after:-translate-y-1/2 after:rounded-lg after:bg-red"
      >
        <ol
          className="relative z-10 flex justify-between text-sm font-medium text-red"
        >
          {
            Array.from({ length: totalStep }, (_, i) => (
              <li key={i} className={clsx(
                i === 0 && "pe-2",
                i === totalStep - 1 && "ps-2",
                "grid place-items-center gap-2"
              )}>
                <span
                  className={clsx(
                    "h-6 w-8 rounded-full grid place-items-center font-bold ring-red ring-2",
                    currentStep === i + 1 ? 'bg-red text-white' : 'bg-white text-red'
                  )}
                >
                  {i + 1}
                </span>
              </li>
            ))
          }
        </ol>
      </div>
    </>
  );
};