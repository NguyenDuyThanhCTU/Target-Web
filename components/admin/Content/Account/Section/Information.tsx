"use client";
import { useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  Upload,
  notification,
} from "antd";
import { AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import moment from "moment";

import { MdOutlineUpdate } from "react-icons/md";

import InfoAccount from "../Item/AccountInfo";
import { useData } from "@context/DataProviders";
import { updateDocument } from "@config/Services/Firebase/FireStoreDB";
import { uploadImage } from "@components/items/server-items/Handle";

const { TextArea } = Input;

const Information = ({ showModal }: any) => {
  const [imageUrl, setImageUrl] = useState<any>();
  const { HeaderAdmin } = useData();

  const onFinish = (values: any) => {
    const formattedDate = values.dateofbirth
      ? moment(values.dateofbirth.$d).format("DD-MM-YYYY")
      : null;
    values.dateofbirth = formattedDate;
    values.photoURL = imageUrl?.url;

    for (let key in values) {
      if (values[key] === undefined || values[key] === "") {
        delete values[key];
      }
    }

    updateDocument("accounts", HeaderAdmin.id, values).then(() => {
      notification.success({
        message: "Cập nhật thành công",
      });
    });
  };

  type FormType = {
    displayName: string;
    email: string;
    phone: string;
    address: string;
    dateofbirth: string;
    gender: string;
    introduce: string;
    photoURL: string;
  };

  // const customRequest = async (options: any) => {
  //   options.onSuccess({});

  //   try {
  //     const url = await uploadImage(options.file, "avatar");
  //     const newUrl = {
  //       uid: options.file.uid,
  //       url: url,
  //     };
  //     setImageUrl((prev: any) => [...prev, newUrl]);
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //   }
  // };
  // const handleRemove = (file: any) => {
  //   const newImageUrl = imageUrl.filter((item: any) => item.uid !== file.uid);
  //   setImageUrl(newImageUrl);
  // };
  const customRequest = async (options: any) => {
    options.onSuccess({});

    try {
      const url = await uploadImage(options.file, "avatar");
      const newUrl = {
        uid: options.file.uid,
        url: url,
      };
      setImageUrl(newUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  const handleRemove = (file: any) => {
    setImageUrl({});
  };

  return (
    <div className="flex ">
      <div className="flex-[40%]">
        <div className="   mb-3 text-[17px] cursor-pointer  w-full flex justify-between">
          <div>
            <div className="flex items-center gap-2 text-[14px] text-red-400 border-red-4 00 border p-2">
              <AiOutlineUser className=" text-[20px]" />
              Tài khoản: <span className=" ">{HeaderAdmin.username}</span>
            </div>
          </div>
          {HeaderAdmin.daysSinceCreation > 0 ? (
            <div className="flex items-center gap-2 text-[14px] text-orange-300 border-orange-300 border p-2">
              <MdOutlineUpdate className=" text-[20px]" />
              <p className=" truncate   ">
                <span className="underline">Lần cuối cập nhật:</span>{" "}
                <span className="">
                  {HeaderAdmin.daysSinceCreation} ngày trước
                </span>
              </p>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-[14px] text-green-300 border-green-300 border p-2">
              <MdOutlineUpdate className=" text-[20px]" />
              <p className=" truncate   ">
                <span className="underline">Lần cuối cập nhật:</span>{" "}
                <span className="">Vừa cập nhật</span>
              </p>
            </div>
          )}
        </div>
        <Form
          onFinish={onFinish}
          labelCol={{ span: 5 }}
          labelAlign="left"
          wrapperCol={{ span: 16 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
        >
          <div className="ml-5 border">
            <div className="p-2">
              <Form.Item<FormType>
                name="displayName"
                label="Họ Tên"
                tooltip="What do you want others to call you?"
              >
                <Input />
              </Form.Item>
              <Form.Item<FormType>
                name="email"
                label="Email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item<FormType> name="phone" label="Số điện thoại">
                <Input />
              </Form.Item>
              <Form.Item<FormType> name="address" label="Địa chỉ">
                <Input />
              </Form.Item>
              <Form.Item<FormType> name="dateofbirth" label="Ngày sinh">
                <DatePicker />
              </Form.Item>
              <Form.Item<FormType> name="gender" label="Giới tính">
                <Radio.Group>
                  <Radio value="Nam"> Nam </Radio>
                  <Radio value="Nữ"> Nữ </Radio>
                  <Radio value="Khác"> Khác </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item<FormType> name="introduce" label="Giới thiệu">
                <TextArea rows={4} />
              </Form.Item>

              <Form.Item label="Ảnh đại diện">
                <Upload
                  customRequest={customRequest}
                  listType="picture-card"
                  onRemove={handleRemove}
                  maxCount={1}
                >
                  <div className="flex flex-col items-center">
                    <AiOutlinePlus className="text-[24px]" />
                    <div className="mt-2">Upload</div>
                  </div>
                </Upload>
              </Form.Item>
              <Form.Item label="Mật khẩu">
                <Button onClick={() => showModal(true)}>
                  Thay đổi mật khẩu
                </Button>
              </Form.Item>
            </div>
          </div>
          <div className="w-full justify-center flex mt-3">
            <Form.Item>
              <div className="flex gap-3">
                <Button
                  style={{
                    backgroundColor: "#ff4d4f",
                    color: "white",
                  }}
                  htmlType="submit"
                >
                  Cập nhật
                </Button>
                <Button htmlType="button">Nhập lại</Button>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>

      <InfoAccount HeaderAdmin={HeaderAdmin} />
    </div>
  );
};

export default Information;
