import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDuBHQ30NlWqA5ZPo4uW-heePcrH8dBvBY",
	authDomain: "brookhowse-8963d.firebaseapp.com",
	projectId: "brookhowse-8963d",
	storageBucket: "brookhowse-8963d.appspot.com",
	messagingSenderId: "492070596650",
	appId: "1:492070596650:web:dbbc6de1f9c43cf61d9353",
	measurementId: "G-E0PF00TEZD",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);
