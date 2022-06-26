import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyCUwPcI0W9Y3JMPjL1_7SxLGOdSgTyuII4",

	authDomain: "brookehowse-5ce94.firebaseapp.com",

	databaseURL: "https://brookehowse-5ce94-default-rtdb.firebaseio.com",

	projectId: "brookehowse-5ce94",

	storageBucket: "brookehowse-5ce94.appspot.com",

	messagingSenderId: "1057421189565",

	appId: "1:1057421189565:web:bb08399da15e75509b72d4",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
