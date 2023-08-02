import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { ReactComponent as Khelmet } from "@/assets/img/Khelmet.svg";

export const SrpHeader: React.FC = () => {
  return (
    <div className="bg-[#101413] flex flex-row justify-between w-full mb-[1.81rem] items-center pl-1 pr-4">
      <Link to="/srpIntro">
        <Button
          size="icon"
          variant="ghost"
          className="flex flex-col items-center justify-center w-12 h-12 my-2 shrink-0"
        >
          <ChevronLeftIcon className="w-8 h-8 text-[#c4c7c5]" />
        </Button>
      </Link>
      <Khelmet alt="Kadet Helmet" />
    </div>
  );
};

export default SrpHeader;
