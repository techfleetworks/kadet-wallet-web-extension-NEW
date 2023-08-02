import React from "react";

interface SrpBadgeProps {
  number: string;
  phrase: string;
  Border: boolean | "border-[#9aeca4]" | "border-white";
  blurSm?: boolean;
}

const SrpBadge: React.FC<SrpBadgeProps> = ({
  number,
  phrase,
  Border = false,
  blurSm = true,
}) => {
  const borderColor = Border ? "border-white" : "border-[#9aeca4]";
  const blurClass = blurSm ? "blur-sm" : "";

  return (
    <div
      className={`border-solid w-[6.5rem] flex flex-row h-10 z-0 border rounded ${borderColor}`}
    >
      <div
        className={`flex flex-row  pl-2 pr-[1.62rem] py-[0.62rem] items-center ${blurClass}`}
      >
        <div className="text-sm font-semibold text-[#9aeca4] pr-[0.25rem]">
          {number}
        </div>
        <div className="text-sm font-medium text-white">{phrase}</div>
      </div>
    </div>
  );
};

export default SrpBadge;
