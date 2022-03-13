import admin from "firebase-admin";

import serviceAccount from "../../credentials/devoe-2b5b3-firebase-adminsdk-7hy9r-e3b1e98304.json";


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin;