import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { styled } from "@mui/system";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string, TypeOf } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { usePasswordStore } from "@src/pages/popup/Store/Create/Store";

const CustomTextInput = styled(FormControl)`
  && {
    margin: 1;
    width: 320px;
    height: 32px;

    & .MuiOutlinedInput-root {
      & fieldset {
        border-color: #8b9389; /* Customize default border color */
        border-width: 1px; /* Customize default border size */
        border-radius: 8px; /* Customize border radius */
      }
      &:hover fieldset {
        border-color: #c4c7c5; /* Customize hover border color */
      }
      &.Mui-focused fieldset {
        border-color: #86d992; /* Customize focus border color */
      }
      &.Mui-disabled fieldset {
        /* Customize disabled border color */
        border-color: #313633;
      }
      &.Mui-error fieldset {
        /* Customize error border color */
        border-color: #ffb4ab;
      }
      &.error-focused .MuiOutlinedInput-root.Mui-focused fieldset {
        border-color: #ffb4ab; /* Customize focus border color when there's an error */
        /* Customize focus text color when there's an error */
      }
    }
    & .MuiInputLabel-root {
      color: #8b9389; /* Customize input label color */
      font-weight: 400; /* Customize input label font weight */
      &.Mui-focused {
        color: #86d992; /* Customize focused input label color */
      }
      &.Mui-disabled {
        color: #313633; /* Customize disabled input label color */
      }
      &.Mui-error {
        color: #ffb4ab; /* Customize error input label color */
      }
    }
    & .MuiOutlinedInput-input {
      color: #c4c7c5; /* Customize text color in input field */
      &.Mui-focused {
        font-size: 18px; /* Customize focused input writing font size */
      }
      &.Mui-disabled {
        /* Customize disabled text color */
        color: #313633;
      }
      &.Mui-error {
        /* Customize error text color */
        color: #ffb4ab;
      }
    }

    & .custom-helper-text {
      color: #c1c9be;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
    }

    & .custom-helper-text-error {
      color: #ffb4ab;
    }

    & .MuiIconButton-root {
      color: #8b9389; /* Customize icon button color */
      &:hover {
        color: #c4c7c5; /* Customize hover icon button color */
      }
      &:disabled {
        color: #313633; /* Customize disabled icon button color */
      }
      &.Mui-focusVisible {
        color: #c4c7c5; /* Customize focused icon button color */
      }
    }
  }
`;
interface CustomTextInputComponentProps {}
const CustomTextInputComponent: React.FC<
  CustomTextInputComponentProps
> = () => {
  const {
    showPassword,
    passwordError,
    confirmPasswordError,
    isPasswordValidated,
    errorMessage,
    setShowPassword,
    setPasswordError,
    setConfirmPasswordError,
    setIsPasswordValidated,
    setErrorMessage,
  } = usePasswordStore();

  const PassSchema = object({
    password: string()
      .min(8, " must be more than 8 characters")
      .max(18, " must be less than 18 characters"),
    passwordConfirm: string().min(1, "Please confirm your password"),
  }).refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });

  const defaultValues: IPass = {
    password: "",
    passwordConfirm: "",
  };

  type IPass = TypeOf<typeof PassSchema>;

  const methods = useForm<IPass>({
    resolver: zodResolver(PassSchema),
    defaultValues,
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    setPasswordError("");
    setConfirmPasswordError("");
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setPasswordError("");
    setConfirmPasswordError("");
  };

  const onSubmit: SubmitHandler<IPass> = (data) => {
    methods.trigger();

    if (methods.formState.isValid) {
      if (data.password !== data.passwordConfirm) {
        setPasswordError("Passwords do not match");
        setConfirmPasswordError("Passwords do not match");
        setIsPasswordValidated(false);
      } else {
        setPasswordError("");
        setConfirmPasswordError("");
        setIsPasswordValidated(true);
      }
    }
  };

  const handleBlur = () => {
    methods.trigger();

    if (methods.formState.isValid) {
      if (
        methods.getValues().password !== methods.getValues().passwordConfirm
      ) {
        setConfirmPasswordError("Passwords do not match");
        setIsPasswordValidated(false);
      } else {
        setConfirmPasswordError("");
        setIsPasswordValidated(true);
      }
    } else {
      const passwordErrors: any = methods.formState.errors?.password;
      if (passwordErrors) {
        setPasswordError(passwordErrors.message);
        setErrorMessage(passwordErrors.message);
        setIsPasswordValidated(false);
      } else {
        setPasswordError("");
        setErrorMessage("Minimum 8 characters");
        setIsPasswordValidated(true);
      }
    }
  };

  const handleFocus = () => {
    handleBlur();
    if (methods.getValues().password !== methods.getValues().passwordConfirm) {
      setConfirmPasswordError("Passwords do not match");
      setIsPasswordValidated(true);
    } else {
      setConfirmPasswordError("");
      setIsPasswordValidated(true);
    }
  };

  return (
    <div>
      <FormControl
        variant="outlined"
        error={!!passwordError}
        sx={{ marginTop: "16px" }}
      >
        <CustomTextInput
          variant="outlined"
          id="margin-normal"
          margin="normal"
          size="small"
        >
          <InputLabel
            htmlFor="outlined-adornment-password"
            size="small"
            defaultValue="Password"
          >
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            size="small"
            type={showPassword ? "text" : "password"}
            inputProps={{
              style: {
                fontFamily: "work sans",
                fontSize: "18px",
                fontWeight: "500",
                letterSpacing: "0.14em",
              },
              autoComplete: "new-password",
              inputMode: "decimal",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="small"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            error={!!passwordError}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={(e) => {
              methods.setValue("password", e.target.value);
              methods.trigger("password");
            }}
          />
          <FormHelperText
            margin="dense"
            id="component-error-text"
            className={
              passwordError
                ? "custom-helper-text custom-helper-text-error"
                : "custom-helper-text"
            }
          >
            {passwordError || errorMessage}
          </FormHelperText>
        </CustomTextInput>
      </FormControl>

      <FormControl
        variant="outlined"
        error={!!confirmPasswordError}
        sx={{ marginTop: "40px" }}
      >
        <CustomTextInput
          variant="outlined"
          error={!!confirmPasswordError}
          margin="normal"
          id="margin-normal"
        >
          <InputLabel
            size="small"
            htmlFor="outlined-adornment-confirmPassword"
            defaultValue="Password"
          >
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-confirmPassword"
            type={showPassword ? "text" : "password"}
            size="small"
            inputProps={{
              style: {
                fontFamily: "work sans",
                fontSize: "18px",
                fontWeight: "500",
                letterSpacing: "0.14em",
              },
              autoComplete: "new-password",
              inputMode: "decimal",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="small"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
            onChange={(e) => {
              methods.setValue("passwordConfirm", e.target.value);
              methods.trigger("passwordConfirm");
            }}
            disabled={!isPasswordValidated} // Disable initially
            onBlur={handleBlur} // Add onBlur event handler
            onFocus={handleFocus}
            error={!!confirmPasswordError}
          />
          {confirmPasswordError && (
            <FormHelperText
              className={
                confirmPasswordError
                  ? "custom-helper-text custom-helper-text-error"
                  : "custom-helper-text"
              }
              error
            >
              {confirmPasswordError}
            </FormHelperText>
          )}
        </CustomTextInput>
      </FormControl>
    </div>
  );
};

export default CustomTextInputComponent;
