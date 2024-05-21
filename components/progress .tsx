// "use client";

import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  item: number;
  indx: number;
  setItem: Dispatch<SetStateAction<number>>;
}

export default function Progress({ item, indx, setItem }: IProps) {
  return (
    <div
      className=" cursor-pointer w-full px-4   "
      onClick={() => setItem(indx)}
    >
      <div className=" relative w-full rounded-full h-1 bg-gray-300   ">
        {item === indx && (
          <AnimatePresence>
            <motion.div
              className=" absolute inset-y-0 w-6 bg-indigo-500 rounded-full  "
              initial={{
                width: 0,
              }}
              animate={{
                width: "100%",
                transition: {
                  duration: 5,
                },
              }}
              exit={{
                opacity: 0,
              }}
              onAnimationComplete={() => {
                if (indx < 2) {
                  setItem(item + 1);
                  console.log("Completed 33 animating ", item);
                } else {
                  setItem(0);
                  console.log("Completed animating", item);
                }
              }}

              //   onAnimationComplete={(definition) => {
              //     console.log("Completed animating", definition);
              //   }}
            />
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
