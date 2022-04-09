import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getOfficesList = async () => {
  const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get("offices/list", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getOfficesList;
