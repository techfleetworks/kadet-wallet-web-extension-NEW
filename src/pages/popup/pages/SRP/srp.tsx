import React, { useState } from "react";
import SrpBadge from "./badge";
import SrpHeader from "./headerSrp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@src/pages/popup/pages/SRP/alertDialog";

const Srp: React.FC = () => {
  const [Hide, setHide] = useState(false);

  const handleHideClick = () => {
    setHide(true);
  };

  return (
    <div className=" bg-[#101413] flex flex-col  w-full h-[600px]">
      <SrpHeader />
      <div className="text-2xl mx-4 font-sans font-semibold mb-[0.75rem] leading-[28px] text-[#fff] w-[20.5rem]">
        Generate my Secret Recovery Phrase (SRP)
      </div>
      <div className="text-sm font-sans mx-4 tracking-[0.25] mb-[2.3rem] leading-[20px] text-[#fff] w-[20.5rem]">
        This is your Secret Recovery Phrase.{" "}
        <div className="text-[#86d992] contents">Write it down</div>
        <div className="contents">
          {" "}
          and keep it safe. You must reenter it on the next screen.
        </div>
      </div>

      <div className="flex flex-col w-[20.5rem] mx-4 mb-[3.3rem] gap-y-[1rem]">
        <div className="flex flex-row justify-center w-full gap-x-2 ">
          <SrpBadge number="1." phrase="father" Border={Hide} blurSm={!Hide} />
          <SrpBadge number="2." phrase="monkey" Border={Hide} blurSm={!Hide} />
          <SrpBadge
            number="3."
            phrase="building"
            Border={Hide}
            blurSm={!Hide}
          />
        </div>
        <div className="z-0 flex flex-row justify-center mx-0 mt-0 gap-x-2 ">
          <SrpBadge number="4." phrase="seed" Border={Hide} blurSm={!Hide} />
          <SrpBadge
            number="5."
            phrase="mother"
            Border={Hide}
            blurSm={!Hide}
          />{" "}
          <button
            className={`absolute z-50 justify-center w-6 min-w-0 min-h-0 mt-4 ${
              Hide ? "hidden" : ""
            }`}
            onClick={handleHideClick}
          >
            <img
              src="https://file.rendit.io/n/yzvFikGNr8Ldy6uuPCkf.svg"
              alt="eye"
            />
          </button>
          <SrpBadge number="6." phrase="hat" Border={Hide} blurSm={!Hide} />
        </div>

        <div className="flex flex-row justify-center mx-0 mt-0 gap-x-2 ">
          <SrpBadge number="7." phrase="dodge" Border={Hide} blurSm={!Hide} />
          <SrpBadge number="8." phrase="him" Border={Hide} blurSm={!Hide} />
          <SrpBadge number="9." phrase="market" Border={Hide} blurSm={!Hide} />
          <button
            onClick={handleHideClick}
            className={`absolute z-50 justify-center  mb-4 ${
              Hide ? "hidden" : ""
            }`}
          >
            <div className="whitespace-nowrap text-sm font-sans  font-semibold tracking-[0.5] leading-[24px] capitalize text-[#f4f2ee]">
              Click <div className="contents">to reveal </div>
              <div className="contents">Secret Recovery Phrase (SRP)</div>
            </div>
          </button>
        </div>

        <div className="flex flex-row items-center mx-0 mt-0 gap-x-2 ">
          <SrpBadge number="10." phrase="show" Border={Hide} blurSm={!Hide} />
          <SrpBadge number="11." phrase="dad" Border={Hide} blurSm={!Hide} />
          <SrpBadge number="12." phrase="body" Border={Hide} blurSm={!Hide} />
        </div>
      </div>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button
            variant={Hide ? "default" : "disabled"}
            size="lg"
            className="mx-4"
          >
            Confirm
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle> I have saved my SRP.</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-row self-end w-3/5 gap-2 ml-32">
            <AlertDialogCancel>
              <Link to="/SrpTest">
                <Button variant="default" size="sm" className="w-20">
                  Yes
                </Button>
              </Link>
            </AlertDialogCancel>

            <AlertDialogAction>
              <Button variant="outline" size="sm" className="w-16">
                No
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* <Link to="/Pop">
        <Button
          variant={Hide ? "default" : "disabled"}
          size="lg"
          className="mx-4"
        >
          Confirm
        </Button>
      </Link> */}
    </div>
  );
};

export default Srp;
