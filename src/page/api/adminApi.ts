import axios from "axios";

const URL: string = "http://localhost:2244/api/v1/admin";

export const loginAdmin = async (data: any) => {
  try {
    return await axios
      .post(`${URL}/signin`, data, { withCredentials: true })
      .then((res: any) => {
        if (res.status === 200)
          localStorage.setItem("token", JSON.stringify(res.data.token));
        return res?.data;
      });
  } catch (error: any) {
    return error?.response;
  }
};

export const getAdminById = async (adminID: string) => {
  try {
    return await axios
      .get(`${URL}/getById/${adminID}`)
      .then((res: any) => res?.data);
  } catch (error: any) {
    return error;
  }
};

// Get admin details by name
export const getAdminByName = async (adminName: string) => {
  try {
    return await axios
      .get(`${URL}/view-by-name/${adminName}`)
      .then((res: any) => res?.data);
  } catch (error: any) {
    return error;
  }
};

// Get all users associated with an admin
export const getAdminUsers = async () => {
  try {
    return await axios
      .get(`${URL.replace("admin", "")}/get-all-users/`)
      .then((res: any) => res?.data);
  } catch (error: any) {
    return error;
  }
};

// Get all complaints associated with an admin
export const getAdminComplaints = async (adminID: string) => {
  try {
    return await axios
      .get(`${URL}/complaints/${adminID}`)
      .then((res: any) => res?.data);
  } catch (error: any) {
    return error;
  }
};

// Logout admin
export const logoutAdmin = async () => {
  try {
    return await axios
      .post(`${URL}/logout`, {}, { withCredentials: true })
      .then((res: any) => res?.data);
  } catch (error: any) {
    return error;
  }
};

// Read admin cookie
export const readAdminCookie = async () => {
  try {
    return await axios
      .get(`${URL}/get-admin-cookie`, { withCredentials: true })
      .then((res: any) => {
        return res.data;
      });
  } catch (error: any) {
    return error;
  }
};
