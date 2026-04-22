import type { userlogin } from "../Type/Login";
import API from "./api";

export const AuthUsernewAccount = async (data: FormData) => {
  try {
    const response = await API.post(
      "/monitoring/AuthUser/NewAccount",
      data
    );
    return response;
  } catch (error) {
    throw error;
  }
};
export const AuthLoginUser = async (userinfo: userlogin) => {
  try {
    const response = await API.get(
      "/monitoring/AuthUser/Login", {
      params: {
        userEmail: userinfo.userEmail,
        userPassword: userinfo.userPassword,
        role: userinfo.role
      }
    }
    );
    return response;
  } catch (error:any) {
    console.log(error,'error APi')
    throw error

  }
};