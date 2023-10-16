import {
  getAllDocuments,
  getDocumentsByField,
  getProducts,
} from "@config/Services/Firebase/FireStoreDB";

export async function getDataByPaginationProps(Collection: string) {
  const Data = await JSON.parse(JSON.stringify(await getProducts(Collection)));

  return Data;
}

export async function getDataByTypeProps(
  Collection: string,
  field: string,
  id: string
) {
  const Data = await JSON.parse(
    JSON.stringify(await getDocumentsByField(Collection, field, id))
  );
  return Data;
}

export async function getAllDataProps(Collection: string) {
  const Data = await JSON.parse(
    JSON.stringify(await getAllDocuments(Collection))
  );
  // const Data = await getAllDocuments(Collection);

  return Data;
}
