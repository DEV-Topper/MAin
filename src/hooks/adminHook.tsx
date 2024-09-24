import useSWR from "swr";
import {
  getAdminById,
  getAdminByName,
  getAdminUsers,
  getAdminComplaints,
  logoutAdmin,
} from "../page/api/adminApi";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface AdminDecodedToken extends JwtPayload {
  id?: string; // id might be undefined, so it's optional
}

export const useAdminCookie = () => {
  const token = localStorage.getItem("token");

  let id: string | undefined;
  if (token) {
    try {
      const decodedToken = jwtDecode<AdminDecodedToken>(token); // Cast the result to AdminDecodedToken
      id = decodedToken?.id; // Access the id if it exists
    } catch (error) {
      console.error("Error decoding admin token:", error);
    }
  }

  const { data, error, isLoading } = useSWR(
    id ? `/get-admin-cookie` : null, // Make request only if ID is valid
    () => getAdminById(id!)
  );

  return { data, error, isLoading };
};
// Hook to get admin by ID
export const useAdminById = (adminID: string) => {
  const { data, error, isLoading } = useSWR(adminID ? `/getById/${adminID}` : null, () =>
    getAdminById(adminID)
  );
  return { data, error, isLoading };
};

export const getAdminDetails = () => {
  const { data: adminID } = useAdminCookie();
  const adminData = useAdminById(adminID?.admin?._id);

  return { data: adminData.data };
};

// Hook to get admin by name
export const useAdminByName = (adminName: string) => {
  const { data, error } = useSWR(
    adminName ? `/view-by-name/${adminName}` : null,
    () => getAdminByName(adminName)
  );
  const isLoading = !data && !error;
  return { data, error, isLoading };
};

// Hook to get all users associated with an admin
export const useAdminUsers = () => {
  const { data, error } = useSWR(`/get-all-users`, () => getAdminUsers());
  const isLoading = !data && !error;
  return { data: data?.data, error, isLoading };
};

// Hook to get all complaints associated with an admin
export const useAdminComplaints = (adminID: string) => {
  const { data, error } = useSWR(
    adminID ? `/complaints/${adminID}` : null,
    () => getAdminComplaints(adminID)
  );
  const isLoading = !data && !error;
  return { data, error, isLoading };
};

// Hook to handle admin logout
export const useLogoutAdmin = () => {
  const { data, error } = useSWR("/logout", logoutAdmin, {
    shouldRetryOnError: false,
  });
  const isLoading = !data && !error;
  return { data, error, isLoading };
};
