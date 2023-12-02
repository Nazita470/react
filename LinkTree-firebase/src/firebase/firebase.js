import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage, uploadBytes, ref, getBytes, getDownloadURL } from "firebase/storage"
import { getFirestore, collection, getDoc, getDocs, addDoc, setDoc, where, query, deleteDoc, doc, QuerySnapshot } from "firebase/firestore"
const firebaseConfig = {

  apiKey:  import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH,
  projectId: import.meta.env.VITE_PROYECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE,
  messagingSenderId: import.meta.env.VITE_MESAGING_ID,
  appId: import.meta.env.VITE_APP_ID
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const storage = getStorage(app)
const firestore = getFirestore(app)

export async function userExists(uid) {
  const docRef = doc(firestore, "users", uid)
  const res = await getDoc(docRef)
  return res.exists()
}

export async function usernameExists(username) {
  const user = []
  const docsRef = collection(firestore, "users")
  const q = query(docsRef, where("username", "==", username))
  const consulta = await getDocs(q)

  consulta.forEach(doc => {
    user.push(doc.data())
  })

  return user.length > 0 ? user[0].uid : null
}

export async function getLinksUser(uid) {
  const links = []
  try {
    const collectionRef = collection(firestore, "links")
    const q = query(collectionRef, where("uid", "==", uid))
    const consulta = await getDocs(q)

    consulta.forEach(doc => {
      links.push(doc.data())
    })

    return links
    
  } catch (error) {
    console.log(error)
  }
}

export async function registerUser(user) {
  try{
    const collectionRef = collection(firestore, "users")
    const docRef = doc(collectionRef, user.uid)
    await setDoc(docRef, user)
  }catch (error) {
    console.log(error)
  }

}


export async function updateUser(user) {
  try{
    const collectionRef = collection(firestore, "users")
    const docRef = doc(collectionRef, user.uid)
    await setDoc(docRef, user)
  }catch (error) {
    console.log(error)
  }

}


export async function getUserInfo(uid) {
  try {
      const docRef = doc(firestore, "users", uid)
      const document = await getDoc(docRef)
      return document.data()
  } catch (error) {
    
  }
}

export async function insertNewLink(link){
 try {
    const docRef = collection(firestore, "links")
    const res = await addDoc(docRef, link)
    return res
 } catch (error) {
    console.log(error)
 }
}

export async function updateLink(docId, link) {
  try {
    const docRef = doc(firestore, "links", docId)
    const res = await setDoc(docRef, link)
    return res
  } catch (error) {
    console.log(error)
  }
}

export async function deleteLink(docId) {
  try {
    const docRef = doc(firestore, "links", docId)
    const res = deleteDoc(docRef)
    return res
  } catch (error) {
    console.log(error)
  }
}

export async function updateImageProfile(uid, file) {
  try {
    const imageRef = ref(storage, `images/${uid}`)
    const resUpload = await uploadBytes(imageRef, file)
    return resUpload
  } catch (error) {
    console.error(error)
  }
}

export async function getImageProfile(path) {
  try {
      const docRef = ref(storage, path)
      const res = await getDownloadURL(docRef)
      return res
  } catch (error) {
    console.error(error)
  }
}

export async function getPublicProfile(uid) {
  try {
    const userInfo = await getUserInfo(uid)
    const links = await getLinksUser(uid)
    const publicProfile = {
      userInfo: userInfo,
      link: links
    }

    return publicProfile
  } catch (error) {
    console.error(error)
  }
}

export async function signout(){
  try {
    await auth.signOut()
  } catch (error) {
    console.log(error)
  }
}

