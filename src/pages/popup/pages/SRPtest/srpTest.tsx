import React from "react";
import { SrpHeader } from "@src/pages/popup/pages/SRP/headerSrp";
import { SrpOutBadge } from "./badgeOut";
import { SrpInBadge } from "./badgeIn";
import { Button } from "@/components/ui/button";

const SrpTest: React.FC = () => {
  return (
    <div className=" bg-[#101413] flex flex-col  w-full h-[600px]">
      <SrpHeader />
      <div className="text-2xl mx-4 font-sans font-semibold mb-[1.18rem] leading-[28px] text-[#fff] w-[20.5rem]">
        Reenter my SRP
      </div>
      <div className="text-sm font-sans mx-4 tracking-[0.25] mb-[1.81rem] leading-[20px] text-[#fff] w-[20.5rem]">
        Place the highlighted word into the correct box.
      </div>
      <div className="flex flex-col self-center  justify-center mb-[1.12rem] justify-self-center">
        <SrpInBadge phrase="mother" />
      </div>
      <div className="flex flex-col w-[20.5rem] mx-4 mb-[3.3rem] gap-y-[1rem]">
        <div className="flex flex-row justify-center w-full gap-x-2 ">
          <SrpOutBadge number="1." />
          <SrpOutBadge number="2." />
          <SrpOutBadge number="3." />
        </div>
        <div className="z-0 flex flex-row justify-center mx-0 mt-0 gap-x-2 ">
          <SrpOutBadge number="4." />
          <SrpOutBadge number="5." />

          <SrpOutBadge number="6." />
        </div>

        <div className="flex flex-row justify-center mx-0 mt-0 gap-x-2 ">
          <SrpOutBadge number="7." />
          <SrpOutBadge number="8." />
          <SrpOutBadge number="9." />
        </div>

        <div className="flex flex-row items-center mx-0 mt-0 gap-x-2 ">
          <SrpOutBadge number="10." />
          <SrpOutBadge number="11." />
          <SrpOutBadge number="12." />
        </div>
      </div>
      <Button variant={"disabled"} size={"lg"} className="mx-4">
        Continue
      </Button>
      <Button
        variant={"link"}
        size={"lg"}
        className="mx-4 text-[#FFFFFF] text-base "
      >
        Clear All
      </Button>
    </div>
  );
};

export default SrpTest;
