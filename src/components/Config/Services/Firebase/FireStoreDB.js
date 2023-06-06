import { addDoc, collection, getDoc, query, where } from "firebase/firestore";
import { db } from "../../Firebase";

export const addDocument = async (Collection, data) => {
  try {
    return await addDoc(collection(db, Collection), data);
  } catch (error) {
    console.log(error);
  }
};

export const getDocuments = async () => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const getDocumentById = async (collection, Id) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const getDocumentByField = async (Collection, value, field) => {
  try {
    const collectionRef = collection(db, Collection);
    const q = query(collectionRef, where(field, "==", value));

    const querSnapshot = getDoc(q);
    return querSnapshot;
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
