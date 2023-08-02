import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { usePasswordStore } from "@src/pages/popup/Store/Create/Store";
import { Button } from "@/components/ui/button";
import CustomTextInputComponent from "./passInput";
import { Checkbox } from "@/components/ui/checkBox";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import HeaderLanding from "../../shared/Components/headerPassword";

const CreatePassword: FC = () => {
  const { isPasswordValidated, isCheckboxChecked, setCheckboxChecked } =
    usePasswordStore();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleFormSubmit = () => {
    if (isPasswordValidated && isCheckboxChecked) {
      // Save the validated password to local storage
      localStorage.setItem("userPassword", formData.password);

      // Form submission was successful
      console.log("Form submitted successfully!");
      // You can redirect the user to the next page or display a success message here
    }
  };

  return (
    <div className="overflow-hidden bg-[#101413] flex flex-col justify-start gap-1 w-full h-[600px] items-stretch">
      <HeaderLanding />

      <div className=" text-3xl  leading-[40px] text-[#c4c7c5]  ml-4 mr-20 ">
        Create password
      </div>
      <div className="relative flex flex-col items-start justify-start mb-8 ml-5 mr-20 ">
        <CustomTextInputComponent />
      </div>

      <div className="flex flex-row items-center justify-start gap-2 mb-20 ml-6 mr-24">
        <Checkbox
          onCheckedChange={(e: any) => setCheckboxChecked(e)} // Update the state when the checkbox value changes
          checked={isCheckboxChecked} // Set the checkbox value to the state
          className="shadow-[inset_0px_1px_1px_-1px_rgba(74,_74,_104,_0.1)] bg-[#f4f2ee] w-4 shrink-0 h-4 rounded"
        />
        <div className=" text-sm tracking-[0.56] text-white justify-start w-56">
          I agree to the
          <div className="text-sm  font-semibold tracking-[0.56] text-white contents">
            {" "}
          </div>
          <Button
            variant="link"
            size={"sm"}
            className="text-sm font-medium tracking-[0.56] text-[#86d992] contents"
          >
            Terms of Service
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-stretch justify-start ml-4 overflow-hidden">
        <Link to="/srpIntro">
          <Button
            variant={
              isPasswordValidated && isCheckboxChecked ? "default" : "disabled"
            }
            onClick={handleFormSubmit}
            size={"lg"}
          >
            Create password
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CreatePassword;
