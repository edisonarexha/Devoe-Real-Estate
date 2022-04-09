import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const editHouses = async (housesBody) => {
  const token = await getAuth().currentUser.getIdToken();
  const { data } = await apiCaller.put("houses/update", housesBody, {
    authorization: `Bearer ${token}`,
  });

  return data;
};

export default editHouses;
