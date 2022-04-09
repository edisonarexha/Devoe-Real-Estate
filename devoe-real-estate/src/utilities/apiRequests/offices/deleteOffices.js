import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const deleteOffices = async (id) => {
  const token = await getAuth().currentUser.getIdToken();

  return apiCaller.delete(`offices/${id}`, {
    headers: { authorization: `Bearer ${token}` },
  });
};

export default deleteOffices;
