"use client";
import TextEditor from "@components/admin/Item/CKEditor/TextEditor";
import { uploadImage } from "@components/items/server-items/Handle";
import { updateDocument } from "@config/Services/Firebase/FireStoreDB";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Drawer, Radio, Select, Space, notification } from "antd";
import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const EditDepartureSchedule = ({ open, setOpen }: any) => {
  const [DepartureTime, setDepartureTime] = useState<string>("");
  const [DockedTime, setDockedTime] = useState<string>("");
  const [FastFerry, setFastFerry] = useState<string>("");
  const [Weight, setWeight] = useState<string>("");
  const [Speed, setSpeed] = useState<string>("");
  const [Transshipment, setTransshipment] = useState<string>("");
  const [Notes, setNotes] = useState<string>("");
  const [DepartureTime1, setDepartureTime1] = useState<string>("");
  const [DockedTime1, setDockedTime1] = useState<string>("");
  const [FastFerry1, setFastFerry1] = useState<string>("");
  const [Weight1, setWeight1] = useState<string>("");
  const [Speed1, setSpeed1] = useState<string>("");
  const [Transshipment1, setTransshipment1] = useState<string>("");
  const [Notes1, setNotes1] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const { UpdateId, Fare } = useData();
  const { setIsRefetch } = useStateProvider();
  const [typeFare, setTypeFare] = useState<string>("");
  const [fare, setFare] = useState<string>("");

  const { Option } = Select;

  const HandleUploadImage = (e: any, locate: string): void => {
    uploadImage(e, locate).then((data: any) => {
      setImageUrl(data);
    });
  };
  const HandleDiscard = () => {
    setDepartureTime("");
    setDockedTime("");
    setFastFerry("");
    setWeight("");
    setSpeed("");
    setTransshipment("");
    setNotes("");
    setDepartureTime1("");
    setDockedTime1("");
    setFastFerry1("");
    setWeight1("");
    setSpeed1("");
    setTransshipment1("");
    setNotes1("");
    setImageUrl("");
  };

  const HandleSubmit = () => {
    const data: any = {
      DepartureTime: DepartureTime,
      DockedTime: DockedTime,
      FastFerry: FastFerry,
      Weight: Weight,
      Speed: Speed,
      Transshipment: Transshipment,
      Notes: Notes,
      DepartureTime1: DepartureTime1,
      DockedTime1: DockedTime1,
      FastFerry1: FastFerry1,
      Weight1: Weight1,
      Speed1: Speed1,
      Transshipment1: Transshipment1,
      Notes1: Notes1,
      image: imageUrl,
      fare: fare,
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

    updateDocument("departureschedule", UpdateId, data).then(() => {
      notification.success({
        message: "Thành công !",
        description: "Tải lên thành công !",
      });
      setIsRefetch(`CRUD departureschedule`);
      setOpen(false);
      HandleDiscard();
    });
  };

  return (
    <div>
      {" "}
      <>
        <Drawer
          title="Chi tiết lịch chạy tàu"
          width={700}
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
        >
          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Giờ khởi hành</label>
            <div className="flex gap-2 py-2">
              <input
                value={DepartureTime}
                onChange={(e: any) => {
                  setDepartureTime(e.target.value);
                }}
                placeholder="Lượt đi"
                type="text"
                className="p-2 border border-mainorange outline-none text-black"
              />
              <input
                value={DepartureTime1}
                onChange={(e: any) => {
                  setDepartureTime1(e.target.value);
                }}
                placeholder="Lượt về"
                type="text"
                className="p-2 border border-mainorange outline-none text-black"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Giờ cập bến</label>
            <div className="flex gap-2 py-2">
              <input
                value={DockedTime}
                onChange={(e: any) => {
                  setDockedTime(e.target.value);
                }}
                placeholder="Lượt đi"
                type="text"
                className="p-2 border border-mainorange outline-none text-black"
              />
              <input
                value={DockedTime1}
                onChange={(e: any) => {
                  setDockedTime1(e.target.value);
                }}
                placeholder="Lượt về"
                type="text"
                className="p-2 border border-mainorange outline-none text-black"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Tàu</label>
            <div className="flex gap-2 py-2">
              <input
                value={FastFerry}
                onChange={(e: any) => {
                  setFastFerry(e.target.value);
                }}
                placeholder="Lượt đi"
                type="text"
                className="p-2 border border-mainorange outline-none text-black"
              />
              <input
                value={FastFerry1}
                onChange={(e: any) => {
                  setFastFerry1(e.target.value);
                }}
                placeholder="Lượt về"
                type="text"
                className="p-2 border border-mainorange outline-none text-black"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Tải trọng</label>
            <div className="flex gap-2 py-2">
              <input
                value={Weight}
                onChange={(e: any) => {
                  setWeight(e.target.value);
                }}
                placeholder="Lượt đi"
                type="text"
                className="p-2 border border-mainorange outline-none text-black"
              />
              <input
                value={Weight1}
                onChange={(e: any) => {
                  setWeight1(e.target.value);
                }}
                placeholder="Lượt về"
                type="text"
                className="p-2 border border-mainorange outline-none text-black"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Vận tốc</label>
            <div className="flex gap-2 py-2">
              <input
                value={Speed}
                onChange={(e: any) => {
                  setSpeed(e.target.value);
                }}
                placeholder="Lượt đi"
                type="text"
                className="p-2 border border-mainorange outline-none text-black"
              />
              <input
                value={Speed1}
                onChange={(e: any) => {
                  setSpeed1(e.target.value);
                }}
                placeholder="Lượt về"
                type="text"
                className="p-2 border border-mainorange outline-none text-black"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Hình ảnh</label>
            <div className="flex ">
              <label>
                <div className="cursor-pointer">
                  <div className="flex gap-1 items-center p-2 px-4 bg-red-500 hover:bg-red-600 border text-white rounded-full">
                    <AiOutlineCloudUpload className="text-[32px] " />
                  </div>

                  <input
                    type="file"
                    className="w-0 h-0"
                    onChange={(e) => HandleUploadImage(e, "posts")}
                  />
                </div>
              </label>
              <div>{imageUrl && <img src={imageUrl} alt="demo" />}</div>
            </div>
          </div>
          <div>
            <Radio.Group
              onChange={(e) => setTypeFare(e.target.value)}
              value={typeFare}
            >
              <Radio value={"FastFerry"}>Tàu cao tốc</Radio>
              <Radio value={"ROROFerry"}>Phà</Radio>
            </Radio.Group>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Giá vé</label>
            <div className="flex flex-col gap-2">
              <Select
                style={{ width: "100%" }}
                placeholder="Chọn loại bài viết"
                onChange={setFare}
                optionLabelProp="label"
              >
                {Fare?.filter((item: any) => item.type === typeFare).map(
                  (item: any, idx: any) => (
                    <Option
                      value={item.id}
                      key={idx}
                      label={`${item.start} - ${item.end}`}
                    >
                      <Space>{`${item.start} - ${item.end}`}</Space>
                    </Option>
                  )
                )}
              </Select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Trung chuyển</label>
            <div className="flex flex-col gap-2">
              <TextEditor
                initialValue={`<p>Lượt đi</p>`}
                value={Transshipment}
                onChange={(e: any) => {
                  setTransshipment(e);
                }}
              />
              <TextEditor
                initialValue={`<p>Lượt về</p>`}
                value={Transshipment1}
                onChange={(e: any) => {
                  setTransshipment1(e);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Ghi chú</label>
            <div className="flex flex-col gap-2">
              <TextEditor
                initialValue={`<p>Lượt đi</p>`}
                value={Notes}
                onChange={(e: any) => {
                  setNotes(e);
                }}
              />
              <TextEditor
                initialValue={`<p>Lượt về</p>`}
                value={Notes1}
                onChange={(e: any) => {
                  setNotes1(e);
                }}
              />
            </div>
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

export default EditDepartureSchedule;
