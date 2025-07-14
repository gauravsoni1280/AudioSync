import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDSw7_oxU4bgyAsKVNLK8FUH9aPLBRYciU',
    authDomain: 'audiosync-8afa9.firebaseapp.com',
    projectId: 'audiosync-8afa9',
    storageBucket: 'audiosync-8afa9.appspot.com',
    messagingSenderId: '167154814109',
    appId: '1:167154814109:web:e82951a30ef2cef5c71874',
    measurementId: 'G-XWQYL2VYDW'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            result.user.getIdToken().then((token) => {
                localStorage.setItem('authToken', token);
                console.log('User signed in', result.user);
            });
        })
        .catch((error) => console.error('Auth error:', error));
};

export const logout = () => {
    signOut(auth);
    localStorage.removeItem('authToken');
};