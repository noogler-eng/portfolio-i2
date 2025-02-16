"use client";
import Intro1 from "@/components/specific/Intro1";
import Intro2 from "@/components/specific/Intro2";
import Intro3 from "@/components/specific/Intro3";
import Intro4 from "@/components/specific/Intro4";
import Intro5 from "@/components/specific/Intro5";

export default function Intro() {
  return (
    <div className="flex min-h-screen items-start md:mt-36 md:px-24 flex-col gap-4">
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Intro4 />
      <Intro5 />
    </div>
  );
}
