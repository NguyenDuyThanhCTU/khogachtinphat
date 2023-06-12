import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  serverTimestamp,
  orderBy,
  onSnapshot,
  Timestamp,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../Firebase";
import { MdCollectionsBookmark } from "react-icons/md";

export const addDocument = async (Collection, data) => {
  data.createdAt = serverTimestamp();
  try {
    const newDocument = await addDoc(collection(db, Collection), data);

    console.log("Document written with ID: ", newDocument.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const getDocuments = async (Collection) => {
  try {
    const q = query(collection(db, Collection));
    const querySnapshot = await getDocs(q);
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    console.error("Error get document: ", error);
  }
};

export const getDocumentsById = async (CollectionName, id) => {
  try {
    const Data = await getDoc(doc(db, CollectionName, id));
    return Data;
  } catch (error) {}
};

export const getProducts = async (Collection) => {
  try {
    const q = query(collection(db, Collection), orderBy("createdAt"));
    const querySnapshot = await getDocs(q);
    const data = [];

    querySnapshot.forEach((doc) => {
      const createdAt = doc.data().createdAt.toDate();
      const serverTime = Timestamp.now().toDate();

      const timeDiff = serverTime.getTime() - createdAt.getTime();
      const daysDiff = Math.round(timeDiff / 86400000);

      data.push({ id: doc.id, ...doc.data(), daysSinceCreation: daysDiff });
    });

    return data;
  } catch (error) {
    console.error("Error get document: ", error);
  }
};
// export const useGetDocumentByField = (CollectionName,field,value){

// }
export const getDocumentByField = async (collection, field, value) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const getDocumentsByField = async (Collection, Type, Size) => {
  try {
    let q = query(
      collection(db, Collection),
      where("brickType", "==", Type),
      where("brickSize", "==", Size)
    );
    if (Type === " " && Size === " ") {
      q = query(collection(db, Collection));
    } else if (Size === " ") {
      q = query(collection(db, Collection), where("brickType", "==", Type));
    } else if (Type === " ") {
      q = query(collection(db, Collection), where("brickSize", "==", Size));
    }

    const querySnapshot = await getDocs(q);
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const checkDocument = async (Collection, currentData) => {
  return new Promise((resolve, reject) => {
    const q = query(
      collection(db, Collection),
      where("password", "==", currentData)
    );

    getDocs(q)
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          reject(new Error("Không có dữ liệu."));
        } else {
          resolve();
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateDocument = async (collectionName, id, newData) => {
  await updateDoc(doc(db, collectionName, id), newData);
};

export const delDocument = async (CollectionName, id) => {
  try {
    await deleteDoc(doc(db, CollectionName, id));
  } catch (error) {
    console.log(error);
  }
};
