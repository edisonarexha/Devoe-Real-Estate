import admin from "firebase-admin";

import serviceAccount from "../../credentials/devoev2-firebase-adminsdk-8npbo-8f4302839c.json";


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin;