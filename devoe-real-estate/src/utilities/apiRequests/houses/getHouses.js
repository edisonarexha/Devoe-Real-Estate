import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getHouses = async (housesId) => {
  const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get(`houses/${housesId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getHouses;
