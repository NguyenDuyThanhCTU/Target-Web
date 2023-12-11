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
  limitToLast,
} from "firebase/firestore";
import { db } from "../../Firebase";

export const addDocument = async (CollectioneName: string, data: any) => {
  data.createdAt = serverTimestamp();

  try {
    const collectionRef = collection(db, CollectioneName);

    const newDocument = await addDoc(collectionRef, data);

    return newDocument.id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const addDataToArrayField = async (
  CollectioneName: string,
  documentId: string,
  fieldName: string,
  newData: object
) => {
  try {
    const ref = doc(db, CollectioneName, documentId);
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
  CollectioneName: string,
  documentId: string
) => {
  try {
    const docRef = doc(db, CollectioneName, documentId);
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

export const getAllDocuments = async (CollectioneName: string) => {
  try {
    const q = query(collection(db, CollectioneName), orderBy("createdAt"));
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

export const getDocumentsByField = async (
  CollectioneName: string,
  field: string,
  value: any
) => {
  try {
    const q = query(collection(db, CollectioneName), where(field, "==", value));
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

export const getDocumentsBy2Field = async (
  CollectioneName: string,
  field1: string,
  value1: any,
  field2: string,
  value2: any
) => {
  try {
    const q = query(
      collection(db, CollectioneName),
      where(field1, "==", value1),
      where(field2, "==", value2)
    );
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
  CollectioneName: string,
  id: string,
  newData: any
) => {
  newData.createdAt = serverTimestamp();
  await updateDoc(doc(db, CollectioneName, id), newData);
};

export const updateDocumentByField = async (
  CollectioneName: string,
  id: string,
  newData: any,
  fieldName: string
) => {
  const updatedData = {
    [fieldName]: newData,
    createdAt: serverTimestamp(),
  };

  await updateDocument(CollectioneName, id, updatedData);
};

export const updateArrayFieldAtIndex = async (
  CollectioneName: string,
  id: string,
  fieldName: string,
  newData: any,
  index: number
) => {
  try {
    const ref = doc(db, CollectioneName, id);
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
  CollectioneName: string,
  documentId: string,
  fieldName: string,
  dataIndex: any
) => {
  try {
    const ref = doc(db, CollectioneName, documentId);
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

export const deleteDataFromArrayValue = async (
  collectionName: string,
  documentId: string,
  fieldName: string,
  idValue: any
) => {
  try {
    const ref = doc(db, collectionName, documentId);
    const snapshot = await getDoc(ref);

    if (snapshot.exists()) {
      const documentData = snapshot.data();
      const arrayField = documentData[fieldName] || [];

      const updatedArrayField = arrayField.filter(
        (item: any) => item !== idValue
      );

      await updateDoc(ref, { [fieldName]: updatedArrayField });

      console.log(
        `Xóa dữ liệu có giá trị ${idValue} khỏi trường ${fieldName} thành công!`
      );
    } else {
      console.error("Không tìm thấy tài liệu!");
    }
  } catch (error) {
    console.error(
      `Lỗi khi xóa dữ liệu có giá trị ${idValue} khỏi trường ${fieldName}:`,
      error
    );
  }
};
