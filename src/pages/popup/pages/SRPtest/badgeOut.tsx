import React from "react";

interface SrpOutBadgeProps {
  number: string;
}

const SrpOutBadge: React.FC<SrpOutBadgeProps> = ({ number }) => {
  return (
    <div
      className={`border-dashed border-[#f4f2ee] w-[6.5rem] flex flex-row h-10 z-0 border rounded `}
    >
      <div
        className={`flex flex-row  pl-2 pr-[1.62rem] py-[0.62rem] items-center `}
      >
        <div className="text-sm font-semibold  text-[#f4f2ee] pr-[0.25rem]">
          {number}
        </div>
        {/* <div className="text-sm font-medium  text-[#f4f2ee]">{phrase}</div> */}
      </div>
    </div>
  );
};

export { SrpOutBadge };
