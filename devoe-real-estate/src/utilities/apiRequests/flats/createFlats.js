import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const createFlats = async (flatsBody) => {
  const token = await getAuth().currentUser.getIdToken();
  const { data } = await apiCaller.post("flats/create", flatsBody, {
    authorization: `Bearer ${token}`,
  });

  return data;
};

export default createFlats;
