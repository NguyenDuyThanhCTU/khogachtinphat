import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../Firebase";

export const addDocument = async (Collection, data) => {
  try {
    return await addDoc(collection(db, Collection), data);
  } catch (error) {
    console.log(error);
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

export const getDocumentById = async (collection, Id) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const getDocumentsByField = async (Collection, field, value) => {
  try {
    const q = query(collection(db, Collection), where(field, "==", value));
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

export const updateDocument = async (collection, data) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const delDocument = async (collection) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
