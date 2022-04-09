import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const createOffices = async (officesBody) => {
  const token = await getAuth().currentUser.getIdToken();
  const { data } = await apiCaller.post("offices/create", officesBody, {
    authorization: `Bearer ${token}`,
  });

  return data;
};

export default createOffices;
