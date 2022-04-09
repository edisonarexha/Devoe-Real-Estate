import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getFlatsList = async () => {
  const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get("flats/list", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getFlatsList;
