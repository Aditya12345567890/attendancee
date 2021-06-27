import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAoK7mmutp9lDXHD7ncRDcSIc57cOm0NVc',
  authDomain: 'pro-c60-8de76.firebaseapp.com',
  databaseURL: 'https://pro-c60-8de76-default-rtdb.firebaseio.com',
  projectId: 'pro-c60-8de76',
  storageBucket: 'pro-c60-8de76.appspot.com',
  messagingSenderId: '897530357813',
  appId: '1:897530357813:web:5022b311ef89c55892e97c',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
