import React, { useState } from "react";
import SrpHeader from "../SRP/headerSrp";
import { Checkbox } from "@/components/ui/checkBox";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SrpIntro: React.FC = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (isChecked: boolean) => {
    setIsCheckboxChecked(isChecked);
  };

  return (
    <div className="overflow-hidden bg-[#101413] flex flex-col  w-full  h-[600px]">
      <div className="bg-[#101413] flex flex-row justify-between mb-11 items-center ">
        <SrpHeader />
      </div>
      <div className="  text-3xl	text-[#FFFFFF] font-sans font-normal   mb-20 mx-6">
        Now, we'll generate your Secret Recovery Phrase (SRP)
      </div>
      <div className="flex flex-row items-start ml-6 mr-8 mb-[6.63rem] ">
        <div className="w-10 pt-1 mt-1 pr-1">
          <Checkbox
            checked={isCheckboxChecked}
            onCheckedChange={handleCheckboxChange}
            className="  shadow-[inset_0px_1px_1px_-1px_rgba(74,_74,_104,_0.1)] bg-[#f4f2ee]  shrink-0 h-4 rounded"
          />
        </div>{" "}
        <div className="  text-base font-normal  font-sans	leading-6	 tracking-[0.5] 	text-[#FFFFFF] w-64 ">
          I understand that if I lose my Secret Recovery Phrase, I will
          <strong> never </strong>
          be able to recover my account.
        </div>
      </div>
      <div className="flex flex-col items-stretch justify-start ml-4 overflow-hidden">
        <Link
          to="/Srp"
          // className="flex flex-col justify-center w-full "
        >
          <Button
            variant={isCheckboxChecked ? "default" : "disabled"}
            size={"lg"}
          >
            Next
          </Button>
        </Link>

        <Link
          to="/Srp"
          className="flex flex-col items-stretch justify-center w-full h-10 px-3 overflow-hidden "
        >
          <Button
            variant="link"
            size={"default"}
            className="whitespace-nowrap text-base font-medium leading-[20px] text-[#86d992] "
          >
            What is SRP?
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SrpIntro;
