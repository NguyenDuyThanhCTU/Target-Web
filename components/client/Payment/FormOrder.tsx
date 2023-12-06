"use client";
import Input from "@components/admin/Item/Input";
import { useData } from "@context/DataProviders";
import { notification } from "antd";
import React, { useState } from "react";

const FormOrder = ({ setStep }: any) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const { Bill, setBill } = useData();

  const HandleContinue = () => {
    const Data = {
      ...Bill,
      name: name,
      phone: phone,
      address: address,
      email: Email,
    };
    if (name || phone || address || Email) {
      setBill(Data);
    }

    setStep(2);
  };

  return (
    <div className="flex flex-col gap-2">
      <Input
        text="Họ và tên"
        Value={name ? name : Bill?.name}
        setValue={(e: any) => {
          setName(e.target.value);
        }}
        Input={true}
      />
      <Input
        text="Địa chỉ"
        Value={address ? address : Bill?.address}
        setValue={(e: any) => {
          setAddress(e.target.value);
        }}
        Input={true}
      />
      <Input
        text="Email"
        Value={Email ? Email : Bill?.email}
        setValue={(e: any) => {
          setEmail(e.target.value);
        }}
        Input={true}
      />
      <Input
        text="Số điện thoại"
        Value={phone ? phone : Bill?.phone}
        setValue={(e: any) => {
          setPhone(e.target.value);
        }}
        Input={true}
      />

      <div className="flex w-full justify-center">
        <div
          className="py-2  px-10 duration-300 cursor-pointer text-white bg-mainyellow border-mainyellow uppercase border rounded-full font-normal hover:bg-orange-500 hover:border-orange-500"
          onClick={() => HandleContinue()}
        >
          Tiếp tục
        </div>
      </div>
    </div>
  );
};

export default FormOrder;
