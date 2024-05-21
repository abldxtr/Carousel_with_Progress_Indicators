import { motion, AnimatePresence } from "framer-motion";

export default function Img({
  img,
  num,
  indx,
}: {
  img: string;
  num: number;
  indx: number;
}) {
  return (
    <AnimatePresence mode="sync">
      {indx === num && (
        <motion.div
          className="absolute inset-0 h-full -z-10  "
          initial={{
            rotate: 60,
          }}
          animate={{
            rotate: 0,
            transition: {
              duration: 1 / 2,
            },
          }}
          exit={{
            rotate: -60,
            opacity: 0,
            transition: {
              duration: 1 / 2,
            },
          }}
        >
          <motion.img
            src={img}
            alt="aa"
            className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
