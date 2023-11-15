import {
  getAllDocuments,
  getDocumentsBy2Field,
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

export async function getDataBySortProps(
  Collection: string,
  field1: string,
  value1: string,
  field2: string,
  value2: any
) {
  const Data = await JSON.parse(
    JSON.stringify(
      await getDocumentsBy2Field(Collection, field1, value1, field2, value2)
    )
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
