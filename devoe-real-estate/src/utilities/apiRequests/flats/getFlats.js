import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getFlats = async (flatsId) => {
  const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get(`flats/${flatsId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getFlats;
