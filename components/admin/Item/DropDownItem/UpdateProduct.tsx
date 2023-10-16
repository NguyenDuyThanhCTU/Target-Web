"use client";
import React, { useEffect, useState } from "react";
import { notification } from "antd";
import { useStateProvider } from "@context/StateProvider";
import { useData } from "@context/DataProviders";
import { updateDocument } from "@config/Services/Firebase/FireStoreDB";
import TextEditor from "@components/admin/Item/CKEditor/TextEditor";

const UpdateProduct: React.FC = () => {
  const [discount, setDiscount] = useState<number>(0);
  const [newPrice, setNewPrice] = useState<number>(0);
  const [productStatus, setProductStatus] = useState<string>("Còn hàng");
  const [DataSort, setDataSort] = useState<any>();
  const [editorData, setEditorData] = useState<string>("");

  const { setIsRefetch } = useStateProvider();
  const { Products, UpdateId } = useData();

  useEffect(() => {
    const sort = Products.filter((item: any) => item.id === UpdateId);

    if (sort.length > 0) {
      setDataSort(sort[0]);
    }
  }, [Products, UpdateId]);

  const calculateNewPrice = () => {
    if (discount === 0) {
      setDiscount(0);
      setNewPrice(0);
    } else {
      const discountedAmount = (DataSort?.price * discount) / 100;
      const calculatedNewPrice = DataSort?.price - discountedAmount;
      setNewPrice(calculatedNewPrice);
    }
  };

  const handleDiscard = () => {
    setDiscount(0);
    setNewPrice(0);
    setProductStatus("Còn hàng");
    setEditorData("");
  };

  const HandleSubmit = () => {
    const data = {
      sale: {
        discount: discount,
        newPrice: newPrice.toFixed(3),
      },
      ...(productStatus && { state: productStatus }),
      ...(editorData && { detail: editorData }),
    };

    updateDocument("products", UpdateId, data).then(() => {
      notification["success"]({
        message: "Tải lên thành công!",
        description: `Sản phẩm của bạn đã được cập nhật !`,
      });

      setIsRefetch("CRUD products");
      handleDiscard();
    });
  };

  return (
    <>
      <p className="text-2xl font-bold text-center text-[30px] mb-5">
        Cập nhật sản phẩm {DataSort?.title}
      </p>
      <div className="flex d:flex-row p:flex-col">
        <div className="justify-center w-full flex items-center gap-20">
          <div className="">
            <div className=""></div>
            <div className=" border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center  outline-none mt-5 w-[260px] h-[458px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100">
              <div className="overflow-y-auto border rounded-xl w-full  h-[400px] mt-5">
                <div className="p-1"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className=" w-[700px] flex flex-col  items-center ">
              <div className=" w-full grid grid-cols-2 gap-5 h-[400px]">
                <div className="  flex flex-col gap-10 ">
                  <div className="p-2">
                    <label className="uppercase font-bold ">
                      Phần trăm giảm giá
                    </label>
                    <input
                      type="number"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-5"
                      value={discount}
                      placeholder={DataSort?.sale.discount}
                      onChange={(e) => setDiscount(parseFloat(e.target.value))}
                    />

                    <div className="flex  justify-between mt-5">
                      <div
                        className="rounded-md p-3 bg-red-400 text-white hover:bg-red-600"
                        onClick={calculateNewPrice}
                      >
                        Tiếp tục
                      </div>
                      <div className="flex flex-col">
                        <span>Giá gốc : {DataSort?.price} VNĐ</span>
                        <span>Giá mới : {newPrice.toFixed(3)} VNĐ</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    Trạng thái sản phẩm:{" "}
                    <span
                      className={`${
                        DataSort?.state === "Còn hàng"
                          ? "text-green-500 border-green-500"
                          : DataSort?.state === "Hết hàng"
                          ? "text-red-500 border-red-500"
                          : DataSort?.state === "Đang cập nhật" &&
                            "text-blue-500 border-blue-500"
                      } ml-2 p-2 border-2`}
                    >
                      {DataSort?.state}
                    </span>
                  </div>
                  <div>
                    <label className="uppercase font-bold">
                      Thay đổi Trạng thái sản phẩm:
                    </label>
                    {["Còn hàng", "Hết hàng", "Đang cập nhật"].map((status) => (
                      <div key={status}>
                        <input
                          type="radio"
                          value={status}
                          checked={productStatus === status}
                          onChange={(e) => setProductStatus(e.target.value)}
                        />
                        <label className="ml-3">{status}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="  flex flex-col gap-3 pt-3 h-[400px] overflow-y-auto">
                  <h3 className="uppercase font-bold">Chi tiết sản phẩm</h3>
                  <div className="">
                    <TextEditor
                      editorData={editorData}
                      setEditorData={setEditorData}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-6 w-full justify-center py-5  border-t border-black">
                <button
                  // onClick={() => handleDiscard()}
                  type="button"
                  className="border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
                >
                  Xóa
                </button>
                <button
                  //disabled={videoAsset?.url ? false : true}
                  onClick={() => HandleSubmit()}
                  type="button"
                  className="bg-[#df6cad] hover:bg-red-500 focus:outline-none focus:shadow-outline text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
                >
                  Tải lên
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
