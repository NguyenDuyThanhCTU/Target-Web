"use client";
import { updateDocument } from "@config/Services/Firebase/FireStoreDB";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Drawer, notification } from "antd";
import React, { useEffect, useState } from "react";

const EditFare = ({ open, setOpen }: any) => {
  const [Adult, setAdult] = useState<string>("");
  const [Elderly, setElderly] = useState<string>("");
  const [DisablePeople, setDisablePeople] = useState<string>("");
  const [Children, setChildren] = useState<string>("");
  const { UpdateId } = useData();
  const { setIsRefetch } = useStateProvider();

  const HandleSubmit = () => {
    const data: any = {
      Adult: Adult,
      Elderly: Elderly,
      DisablePeople: DisablePeople,
      Children: Children,
    };
    for (let key in data) {
      if (
        data[key] === undefined ||
        data[key] === "" ||
        data[key] === null ||
        data[key].length === 0
      ) {
        delete data[key];
      }
    }
    updateDocument("fare", UpdateId, data).then(() => {
      notification.success({
        message: "Thành công !",
        description: "Tải lên thành công !",
      });
      setIsRefetch(`CRUD fare`);
      setOpen(false);
    });
  };

  return (
    <div>
      {" "}
      <>
        <Drawer
          title="Chi tiết giá vé"
          width={700}
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
        >
          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Người lớn</label>
            <input
              value={Adult}
              onChange={(e: any) => {
                setAdult(e.target.value);
              }}
              type="text"
              className="p-2 border border-mainorange outline-none text-black"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Người cao tuổi</label>
            <input
              value={Elderly}
              onChange={(e: any) => {
                setElderly(e.target.value);
              }}
              type="text"
              className="p-2 border border-mainorange outline-none text-black"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Người khuyết tật</label>
            <input
              value={DisablePeople}
              onChange={(e: any) => {
                setDisablePeople(e.target.value);
              }}
              type="text"
              className="p-2 border border-mainorange outline-none text-black"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Trẻ em</label>
            <input
              value={Children}
              onChange={(e: any) => {
                setChildren(e.target.value);
              }}
              type="text"
              className="p-2 border border-mainorange outline-none text-black"
            />
          </div>
          <div className="flex justify-center mt-3">
            <div
              className="bg-mainorange hover:bg-orange-600 duration-300 cursor-pointer uppercase px-14 text-white rounded-full py-2"
              onClick={() => HandleSubmit()}
            >
              Cập nhật
            </div>
          </div>
        </Drawer>
      </>
    </div>
  );
};

export default EditFare;
