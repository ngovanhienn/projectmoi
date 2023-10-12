import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database'; // Thêm dòng này

import firebaseConfig from '../firebase/firebaseConfig';

// Khởi tạo Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

// import firebase from 'firebase/app';
// import 'firebase/database';

// const firebaseConfig = {
//   // Thêm cấu hình của bạn từ Firebase Console
//   apiKey: 'AIzaSyAzSmhJjHUi7ioA-8jObLcKZCfikpaezqE',
//   authDomain: 'myproject-1eea5.firebaseapp.com',
//   projectId: 'myproject-1eea5',
//   storageBucket: 'myproject-1eea5.appspot.com',
//   messagingSenderId: '1010560918706',
//   appId: '1:1010560918706:web:207780e76b3418152895ab',
//   measurementId: 'G-Z2NEE2HCTN',

// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export const database = firebase.database();