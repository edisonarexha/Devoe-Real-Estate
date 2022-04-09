import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getHousesList = async () => {
  const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get("houses/list", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getHousesList;
