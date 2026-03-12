import * as React from "react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

const TEXTS = ["Most resumes lie", "Yours will just... fit"];

function HeroText() {
  return (
    <div className="h-[200px] flex items-center justify-center">
      <GooeyText
        texts={TEXTS}
        morphTime={1}
        cooldownTime={2}
        className="font-bold"
      />
    </div>
  );
}

export { HeroText };