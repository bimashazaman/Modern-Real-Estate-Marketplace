import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'real-estate-b8fef.firebaseapp.com',
  projectId: 'real-estate-b8fef',
  storageBucket: 'real-estate-b8fef.appspot.com',
  messagingSenderId: '875328151106',
  appId: '1:875328151106:web:2443b6f4df6eaee3ee17db',
  measurementId: 'G-SKH9PLSX1V',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
