import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyDYH59OM_hx8abldxhdstdYcwKhj1goIcI',
  authDomain: 'siab-cde7a.firebaseapp.com',
  databaseURL: 'https://siab-cde7a.firebaseio.com',
  projectId: 'siab-cde7a',
  storageBucket: 'siab-cde7a.appspot.com',
  messagingSenderId: '191030904791',
  appId: '1:191030904791:web:ca0d32d5ff729b50a82d92',
  measurementId: 'G-F9CBT0DKEP',
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase
