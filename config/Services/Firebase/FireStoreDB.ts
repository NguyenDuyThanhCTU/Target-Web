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
  Timestamp,
  deleteDoc,
  setDoc,
  limit,
  startAfter,
  getCountFromServer,
  endAt,
  startAt,
  limitToLast,
} from "firebase/firestore";
import { db } from "../../Firebase";

export const addDocument = async (Collection: string, data: any) => {
  data.createdAt = serverTimestamp();

  try {
    const collectionRef = collection(db, Collection);

    const newDocument = await addDoc(collectionRef, data);

    return newDocument.id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const addDataToDocument = async (
  collectionName: string,
  documentId: string,
  data: any
) => {
  data.createdAt = serverTimestamp();

  try {
    const documentRef = doc(db, collectionName, documentId);

    await setDoc(documentRef, data);
    return documentRef.id;
  } catch (error) {
    console.error("Error adding data to document: ", error);
  }
};

export const addDataToArrayField = async (
  collectionName: string,
  documentId: string,
  fieldName: string,
  newData: object
) => {
  try {
    const ref = doc(db, collectionName, documentId);
    const snapshot = await getDoc(ref);

    if (snapshot.exists()) {
      const documentData = snapshot.data();
      const arrayField = documentData[fieldName] || [];
      arrayField.push(newData);

      await updateDoc(ref, { [fieldName]: arrayField });

      console.log("Success!");
    } else {
      console.error("Document Not Found!");
    }
  } catch (error) {
    console.error(error);
  }
};

export const getDocumentById = async (
  Collection: string,
  documentId: string
) => {
  try {
    const docRef = doc(db, Collection, documentId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
      console.log("Document not found.");
      return null;
    }
  } catch (error) {
    console.error("Error get document by ID: ", error);
    throw error;
  }
};

export const getAllDocuments = async (Collection: string) => {
  try {
    const q = query(collection(db, Collection), orderBy("createdAt"));
    const querySnapshot = await getDocs(q);
    const data: Array<any> = [];

    querySnapshot.forEach((doc: any) => {
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

export const getProducts = async (Collection: string) => {
  try {
    const q = query(
      collection(db, Collection),
      orderBy("createdAt"),
      limitToLast(12)
    );
    const querySnapshot = await getDocs(q);
    const data: Array<any> = [];

    querySnapshot.forEach((doc: any) => {
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

// export const getCollectionLength = async (Collection: string) => {
//   try {
//     const collectionRef = collection(db, Collection);
//     const querySnapshot = await getCountFromServer(collectionRef);

//     return querySnapshot.data().count;
//   } catch (error) {
//     console.error("Error getting collection length: ", error);
//     throw error;
//   }
// };

export const getDocumentsByOrder = async (Collection: string, by: string) => {
  try {
    const q = query(collection(db, Collection), orderBy(by), limitToLast(11));
    const querySnapshot = await getDocs(q);
    const data: Array<any> = [];

    querySnapshot.forEach((doc: any) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    console.error("Error get document: ", error);
  }
};

export const getDocumentsByField = async (
  Collection: string,
  field: string,
  value: any
) => {
  try {
    const q = query(collection(db, Collection), where(field, "==", value));
    const querySnapshot = await getDocs(q);
    const data: Array<any> = [];

    querySnapshot.forEach((doc: any) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    console.error("Error get document: ", error);
  }
};

export const updateDocument = async (
  collectionName: string,
  id: string,
  newData: any
) => {
  newData.createdAt = serverTimestamp();
  await updateDoc(doc(db, collectionName, id), newData);
};

export const updateDocumentByField = async (
  collectionName: string,
  field: string,
  value: any,
  newData: any
) => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, where(field, "==", value));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.size === 0) {
    throw new Error(`Document with ${field} = ${value} not found.`);
  } else if (querySnapshot.size > 1) {
    throw new Error(`Multiple documents found with ${field} = ${value}.`);
  } else {
    const docSnapshot = querySnapshot.docs[0];
    await updateDoc(doc(db, collectionName, docSnapshot.id), newData);
  }
};

export const updateArrayFieldAtIndex = async (
  collectionName: string,
  id: string,
  fieldName: string,
  newData: any,
  index: number
) => {
  try {
    const ref = doc(db, collectionName, id);
    const snapshot = await getDoc(ref);

    if (snapshot.exists()) {
      const currentData = snapshot.data();

      if (Array.isArray(currentData[fieldName])) {
        const updatedArray = [...currentData[fieldName]];
        if (index >= 0 || index < updatedArray.length) {
          updatedArray[index] = newData;

          await updateDoc(ref, { [fieldName]: updatedArray });
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export const delDocument = async (CollectionName: string, id: string) => {
  try {
    await deleteDoc(doc(db, CollectionName, id));
  } catch (error) {
    console.log(error);
  }
};

export const deleteDataFromArrayField = async (
  collectionName: string,
  documentId: string,
  fieldName: string,
  dataIndex: any
) => {
  try {
    const ref = doc(db, collectionName, documentId);
    const snapshot = await getDoc(ref);

    if (snapshot.exists()) {
      const documentData = snapshot.data();
      const arrayField = documentData[fieldName] || [];

      if (dataIndex >= 0 && dataIndex < arrayField.length) {
        arrayField.splice(dataIndex, 1);

        await updateDoc(ref, { [fieldName]: arrayField });

        console.log(`Xóa dữ liệu khỏi trường ${fieldName} thành công!`);
      } else {
        console.error("Số thứ tự dữ liệu không hợp lệ!");
      }
    } else {
      console.error("Không tìm thấy tài liệu!");
    }
  } catch (error) {
    console.error(`Lỗi khi xóa dữ liệu khỏi trường ${fieldName}:`, error);
  }
};
