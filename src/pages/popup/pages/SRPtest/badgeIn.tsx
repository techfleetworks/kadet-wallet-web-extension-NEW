import React from "react";

interface SrpTestBadgeProps {
  phrase: string;
}

const SrpInBadge: React.FC<SrpTestBadgeProps> = ({ phrase }) => {
  return (
    <div
      className={`border-solid justify-self-center justify-center self-center  items-center border-[#9aeca4] w-[6.5rem] flex flex-row h-10 z-0 border rounded `}
    >
      <div
        className={`flex flex-row    justify-center self-center  items-center `}
      >
        <div className="text-sm font-medium  text-[#f4f2ee]">{phrase}</div>
      </div>
    </div>
  );
};

export { SrpInBadge };
