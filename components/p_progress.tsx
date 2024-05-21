"use client";

import Progress from "@/components/progress ";
import { useState } from "react";

export default function P_progress() {
  const [item, setItem] = useState(0);
  return (
    <div className="flex items-center justify-center gap-4 h-40 w-full ">
      {[...new Array(3)].map((_, index) => {
        return (
          <Progress key={index} item={item} setItem={setItem} indx={index} />
        );
      })}
    </div>
  );
}
