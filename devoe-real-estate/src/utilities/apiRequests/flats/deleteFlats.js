import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const deleteFlats = async (id) => {
  const token = await getAuth().currentUser.getIdToken();

  return apiCaller.delete(`flats/${id}`, {
    headers: { authorization: `Bearer ${token}` },
  });
};

export default deleteFlats;
