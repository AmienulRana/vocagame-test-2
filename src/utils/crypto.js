import CryptoJS from "crypto-js";


export const key = "secretKey";
export function encryptData(data){
    const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        key
      ).toString();
      return encryptedData;
}

export function decryptData(data){
    const decryptedBytes = CryptoJS.AES.decrypt(encryptData(data), key);
    const decryptedData = JSON.parse(
      decryptedBytes.toString(CryptoJS.enc.Utf8)
    );
    return decryptedData
}