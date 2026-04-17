import API from "./api";

export const AuthUsernewAccount = async (data: FormData) => {
  try {
    const response = await API.post(
      "/monitoring/AuthUser/NewAccount",
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};