import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
	apiKey: 'AIzaSyCotb9o8OMBxxV4pj-0Yyw4-mrOu2Iwai8',
	authDomain: 'popping-torch-1541.firebaseapp.com',
	databaseURL: 'https://popping-torch-1541.firebaseio.com',
	projectId: 'popping-torch-1541',
	storageBucket: 'popping-torch-1541.appspot.com',
	messagingSenderId: '533665826590',
	appId: '1:533665826590:web:550c09773338aad8',
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
