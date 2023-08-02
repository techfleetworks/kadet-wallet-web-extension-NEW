import react from "react";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

import { ReactComponent as Khelmet } from "@/assets/img/Khelmet.svg";
import { ReactComponent as Klogo } from "@/assets/img/Klogo copy.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeaderLanding = () => {
  console.log("HeaderLanding");
  return (
    <div className="bg-[#101413] mb-24 gap-3 flex flex-row justify-startgap-3 items-center px-1">
      <Link to="/">
        <Button
          size="icon"
          variant="ghost"
          className="flex flex-col items-center justify-center w-12 h-12 my-2 mr-12 shrink-0"
        >
          <ChevronLeftIcon className="w-8 h-8 text-[#c4c7c5]" />
        </Button>
      </Link>
      <Khelmet className="w-6 min-w-0 min-h-0 shrink-0" alt="Kadet Helmet" />
      <Klogo className="min-w-0 min-h-0" alt="Kadet Logo" />
    </div>
  );
};

export default HeaderLanding;
