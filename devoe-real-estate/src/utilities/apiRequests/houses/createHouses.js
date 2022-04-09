import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const createHouses = async (housesBody) => {
  const token = await getAuth().currentUser.getIdToken();
  const { data } = await apiCaller.post("houses/create", housesBody, {
    authorization: `Bearer ${token}`,
  });

  return data;
};

export default createHouses;
