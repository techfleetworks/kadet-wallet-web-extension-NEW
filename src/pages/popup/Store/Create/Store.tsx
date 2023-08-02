import { create } from "zustand";

interface PasswordStoreState {
  showPassword: boolean;
  passwordError: string;
  confirmPasswordError: string;
  isPasswordValidated: boolean;
  errorMessage: string;
  isCheckboxChecked: boolean;
}

interface PasswordStoreActions extends PasswordStoreState {
  setShowPassword: (showPassword: boolean) => void;
  setPasswordError: (error: string) => void;
  setConfirmPasswordError: (error: string) => void;
  setIsPasswordValidated: (isValidated: boolean) => void;
  setErrorMessage: (message: string) => void;
  setCheckboxChecked: (isChecked: boolean) => void;
}

export const usePasswordStore = create<PasswordStoreActions>((set) => ({
  showPassword: false,
  passwordError: "",
  confirmPasswordError: "",
  isPasswordValidated: false,
  errorMessage: "Minimum 8 characters",
  isCheckboxChecked: false,
  setShowPassword: (showPassword) => set({ showPassword }),
  setPasswordError: (error) => set({ passwordError: error }),
  setConfirmPasswordError: (error) => set({ confirmPasswordError: error }),
  setIsPasswordValidated: (isValidated) =>
    set({ isPasswordValidated: isValidated }),
  setErrorMessage: (message) => set({ errorMessage: message }),
  setCheckboxChecked: (isChecked) => set({ isCheckboxChecked: isChecked }),
}));
