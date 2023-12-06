
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore, collection, addDoc, getDoc, getDocs, where, query, setDoc, doc, deleteDoc} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROYECTID,
  storageBucket: import.meta.env.VITE_STORAGE,
  messagingSenderId: import.meta.env.VITE_MESSAGING,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENT
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const firestore = getFirestore()

export async function userExists(uid) {
  try {
    const docref = doc(firestore, "users", uid)
    const res = await getDoc(docref)
    return res.exists()
  } catch (error) {
    console.error(error)
  }
}

export async function registerUser(user) {
  try {
    const collectionRef = collection(firestore, "users")
    const docRef = doc(collectionRef, user.uid)
    await setDoc(docRef, user)
  } catch (error) {
    console.error(error)
  }
}

export async function registerMessage(message) {
  const collectionRef = collection(firestore, "message")
  const docRef = doc(collectionRef, message.id)
  await setDoc(docRef, message)
}

export async function signout(){
  try {
    await auth.signOut()
  } catch (error) {
    console.log(error)
  }
}

export async function getMessage(uid) {
  const messages = []
  const collectionRef = collection(firestore, "message")
  const q = query(collectionRef, where("userId", "==", uid))
  const res = await getDocs(q)

  res.forEach(m => {
    messages.push(m.data())
  })

  return messages
}

export async function getUserInfo(uid) {
  try {
    const docref = doc(firestore, "users", uid)
    const document = await getDoc(docref)
    return document.data()
  } catch (error) {
    console.error(error)
  }
 
}

export async function getAllMessage() {
  try {
    const m = []
    const collectionRef = collection(firestore, "message")
    const res = await getDocs(collectionRef)

    res.forEach((d) => {
      m.push(d.data())
    })
    return m
  } catch (error) {
    
  }
}

export async function getPhoto(uid) {
  try {
    const docref = doc(firestore, "users", uid)
    const res = await getDoc(docref)
    return res.data().photo
  } catch (error) {
    console.log(error)
  }
}

export async function deleteMessage(id){
  try {
    const docRef = doc(firestore, "message", id)
    const res =  deleteDoc(docRef)
    return res
  } catch (error) {
    console.error(error)
  }
}