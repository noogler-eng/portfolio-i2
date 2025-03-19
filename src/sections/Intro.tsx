"use client";
import Intro1 from "@/components/specific/Intro1";
import Intro2 from "@/components/specific/Intro2";
import Intro3 from "@/components/specific/Intro3";
import Intro4 from "@/components/specific/Intro4";
import Intro5 from "@/components/specific/Intro5";
import Intro6 from "@/components/specific/Intro6";

export default function Intro() {
  return (
    <div className="flex min-h-screen items-start md:mt-36 md:px-24 flex-col gap-4">
      <div className="flex items-center w-full md:px-24">
        <div className="flex flex-col justify-center w-1/2">
          <Intro1 />
          <Intro2 />
          <Intro3 />
        </div>
        <div className="md:pl-36">
          <Intro6 />
        </div>
      </div>
      <Intro4 />
      <Intro5 />
    </div>
  );
}
