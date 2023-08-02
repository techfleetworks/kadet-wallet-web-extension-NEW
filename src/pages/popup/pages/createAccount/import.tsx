import React from "react";
import { Link } from "react-router-dom";
// import { ButtonDemo } from "@src/pages/popup/shared/Components/shadenButton";

function Import(): JSX.Element {
  return (
    <Link
      to="/createPassword"
      className="overflow-hidden flex flex-col justify-center w-full h-10 items-stretch px-3 rounded-[100px]"
    >
      <button className="whitespace-nowrap text-sm font-['Work_Sans'] font-medium tracking-[0.10000000149011612] leading-[20px] text-[#86d992]">
        Import Existing Wallet
      </button>
    </Link>
  );
}

export default Import;
