import React from "react";
import { Link } from "react-router-dom";

function Create() {
  return (
    <Link
      className="overflow-hidden bg-[#86d992] flex flex-col justify-center w-full h-10 items-center rounded-[100px]"
      to="/importWallet"
    >
      <button className="whitespace-nowrap font-['Work_Sans'] font-medium tracking-[0.08] leading-[20px] text-[#005321] w-[108px]">
        Create Wallet
      </button>
    </Link>
  );
}

export default Create;
