import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PopProps {
  visible: boolean;
  onConfirm: () => void;
}

const Pop: React.FC<PopProps> = ({ visible, onConfirm }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="flex flex-col self-center w-[312px] z-100  ">
      <div className="overflow-hidden  bg-[#272b2a] flex flex-col justify-center gap-5 h-32 shrink-0 items-start   px-6 rounded-[28px] ">
        <div className="text-sm font-sans tracking-[0.25] leading-[20px] text-[#c1c9be] ml-1 w-2/3">
          I have saved my SRP.
        </div>
        <div className="flex flex-row items-center self-end w-3/5 gap-2">
          <Link to="/">
            <Button
              variant="default"
              size="sm"
              className="w-20"
              onClick={onConfirm}
            >
              Yes
            </Button>
          </Link>
          <Link to="/srp">
            <Button
              variant="outline"
              size="sm"
              className="w-16"
              onClick={onConfirm}
            >
              No
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pop;
