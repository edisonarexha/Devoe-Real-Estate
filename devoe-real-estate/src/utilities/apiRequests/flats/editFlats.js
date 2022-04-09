import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const editFlats = async (flatsBody) => {
  const token = await getAuth().currentUser.getIdToken();
  const { data } = await apiCaller.put("flats/update", flatsBody, {
    authorization: `Bearer ${token}`,
  });

  return data;
};

export default editFlats;
