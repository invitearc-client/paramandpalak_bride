"use client";
import { useState } from "react";
import ScratchText from "../components/ScratchText";
import MarriageCountdown from "../components/MarriageCountdown";
import Events from "../components/Events";
import Weather from "../components/Weather";
import Venues from "../components/Venues";

export default function LadkeDetails() {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      <div className="mx-auto w-full max-w-4xl text-center md:p-2 mt-4">
        {/* <p className="text-[17px] md:text-2xl text-[#BC610A] font-cormorant-garamond">
          With the blessings of Late Jamunadevi R. Lohiya & Late Rameshwardasji Lohiya
        </p>{" "} */}
        <br />
        <p className="text-[17px] md:text-2xl text-[#BC610A] font-cormorant-garamond">
          We cordially invite you to the wedding ceremony of
        </p>
        <div className="mt-8 text-center">
          <h2 className="text-[#BC610A] great-vibes-regular text-center mt-14 md:text-4xl text-[38px] lg:text-[60px] leading-tight font-bold">
              Palak
          </h2>
<p className="text-[#BC610A] font-cormorant-garamond lg:text-[30px] md:text-2xl text-[16px]">
            (Gd/o Smt. Kamla Devi & Shri. Omprakashji Sanghi)
          </p>
          <p className="text-[#BC610A] font-cormorant-garamond lg:text-[30px] md:text-2xl mt-2 text-[16px]">
           (D/o Smt. Megha & Shri. Manish Sanghi)
          </p>

          <h2 className="text-[#BC610A] great-vibes-regular text-center text-[38px] sm:text-7xl lg:text-[60px] leading-tighter font-bold mt-2">
            <span className="text-[#BC610A] font-cormorant-garamond text-center md:text-3xl text-[22px] lg:text-[36px] leading-tight font-medium">
              With
            </span>
            <br />
            Param
          </h2>
<p className="text-[#BC610A] font-cormorant-garamond lg:text-[30px] md:text-2xl text-[16px]">
           (Gs/o Late Jamunadevi & Late Shri Rameshwardasji Lohiya)
          </p>
          <p className="text-[#BC610A] font-cormorant-garamond lg:text-[30px] md:text-2xl mt-2 text-[16px]">
            (S/o Smt. Jyoti & Deepak Lohiya)
          </p>

          <ScratchText onReveal={() => setRevealed(true)} />

          {revealed && (
            <div className="countdown-fade-in">
              <MarriageCountdown />
            </div>
          )}
        </div>
      </div>
      <Events />
        
        <Weather />
        <Venues />
    </>
  );
}
