import SHA3 from "crypto-js/sha3";
import AES from "crypto-js/aes";
import Utf8 from "crypto-js/enc-utf8";
import bcrypt from "bcryptjs";

export const encryptPassword = (password: string): string =>
  SHA3(password).toString();

export const encryptKey = (message: string, secret: string): string =>
  AES.encrypt(message, secret).toString();

export const decryptKey = (message: string, secret: string): string =>
  AES.decrypt(message, secret).toString(Utf8);

export const checkIsValidOldPassword = (
  passwordInput: string,
  storedPasswordHash: string
) => bcrypt.compareSync(passwordInput, storedPasswordHash);
