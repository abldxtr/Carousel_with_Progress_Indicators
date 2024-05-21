"use client";

import Img from "./rotate_img";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Progress from "./progress ";

export default function Rotate() {
  const [show, setShow] = useState(0);
  const text = [
    "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
    "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
    "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
  ];
  const name = ["Jessie J-Acme LTD", "Nick V-Malika Inc.", "Amelia W-Panda AI"];
  const image = [
    "https://cruip-tutorials-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-01.61efd5df.jpg&w=64&q=75",
    "https://cruip-tutorials-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-02.838e6892.jpg&w=64&q=75",
    "https://cruip-tutorials-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-03.1031c744.jpg&w=64&q=75",
  ];
  return (
    <div className="w-full max-w-3xl mx-auto text-center">
      {/* 1 */}
      <div className="relative h-32">
        <div className="absolute top-0  left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
          <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
            {image.map((item, index) => {
              return <Img img={item} key={index} num={show} indx={index} />;
            })}
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="mb-9 transition-all duration-150 delay-300 ease-in-out">
        <div className="flex flex-col gap-4">
          {text.map((item, index) => {
            if (index === show) {
              return (
                <motion.h2
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -4,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  className="text-2xl font-bold text-slate-900 before:content-['\201C'] after:content-['\201D']"
                >
                  {item}
                </motion.h2>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      {/* 3 */}
      <div className="flex flex-wrap justify-center -m-1.5">
        {name.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col cursor-pointer "
              onClick={() => setShow(index)}
            >
              <button
                className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ${show === index ? "bg-indigo-500 text-white shadow-indigo-950/10" : "bg-white hover:bg-indigo-100 text-slate-900"}`}
              >
                {item}
              </button>
              <Progress
                key={index}
                item={show}
                setItem={setShow}
                indx={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
