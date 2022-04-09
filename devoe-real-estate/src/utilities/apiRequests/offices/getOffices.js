import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getOffices = async (officesId) => {
  const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get(`offices/${officesId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getOffices;
