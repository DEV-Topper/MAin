import useSWR from "swr";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { readUser,  viewUserByName } from "../page/api/userAPI";

interface DecodedToken extends JwtPayload {
  id?: string; // id might be undefined, so it's optional
}

export const useUserCookie = () => {
  const token = localStorage.getItem("token");

  let id: string | undefined;
  if (token) {
    try {
      const decodedToken = jwtDecode<DecodedToken>(token); // Cast the result to DecodedToken
      id = decodedToken?.id; // Access the id if it exists
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }

  const { data, error, isLoading } = useSWR(id ? `/view-user/${id}` : null, () => readUser(id!)); // Ensure id is non-null with !

  
  return { data, isLoading, error };
};
export const useUserData = () => {
  const { data: userData } = useUserCookie();
  const userID = userData?.user?._id;
  
  const { data, error , isLoading} = useSWR(userID ? `get-user/${userID}` : null, () =>
    readUser(userID)
);

 

  return { data, isLoading, error };
};

export const useUserDataByName = (userName: string) => {
  const { data, error, isLoading } = useSWR(
    userName ? `api/view-school/${userName}` : null,
    () => viewUserByName(userName).then((res) => res.data)
  );
  return { data, isLoading, error };
};
