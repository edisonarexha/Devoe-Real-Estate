import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const deleteHouses = async (id) => {
  const token = await getAuth().currentUser.getIdToken();

  return apiCaller.delete(`houses/${id}`, {
    headers: { authorization: `Bearer ${token}` },
  });
};

export default deleteHouses;
