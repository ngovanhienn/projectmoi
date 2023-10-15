import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database'; // Thêm dòng này

import firebaseConfig from '../firebase/firebaseConfig';

// Khởi tạo Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
