import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const editOffices = async (officesBody) => {
  const token = await getAuth().currentUser.getIdToken();
  const { data } = await apiCaller.put("offices/update", officesBody, {
    authorization: `Bearer ${token}`,
  });

  return data;
};

export default editOffices;
