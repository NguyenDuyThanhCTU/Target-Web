"use client";
import React, { useState } from "react";
import FormOrder from "./FormOrder";
import FormConfirm from "./FormConfirm";
import Success from "./Success";

const Payment = () => {
  const [step, setStep] = React.useState(1);
  const [DataFormOrder, setDataFormOrder] = useState<any>();
  const [OrderId, setOrderId] = useState<any>();
  return (
    <div>
      <div className="d:w-[1300px] d:mx-auto p:w-auto p:mx-2 py-10">
        <div className="d:px-20 p:px-0">
          <div className="grid items-center grid-cols-8 gap-2 justify-center">
            <div className="flex items-center gap-2 col-span-2">
              <div
                className={`${
                  step === 1 || step === 2
                    ? "bg-mainyellow text-white"
                    : "bg-gray-400 text-white"
                } w-8 flex items-center  justify-center  h-8 rounded-full `}
              >
                <span>1</span>
              </div>
              <p>Chọn địa chỉ giao hàng</p>
            </div>
            <div className="h-[1px] w-full bg-black"></div>
            <div className="flex items-center gap-2 w-full col-span-2 justify-center ">
              <div
                className={`${
                  step === 2
                    ? "bg-mainyellow text-white"
                    : "bg-gray-400 text-white"
                } w-8 flex items-center  justify-center  h-8 rounded-full `}
              >
                <span>2</span>
              </div>
              <p>Xác nhận Thông tin đơn hàng</p>
            </div>
            <div className="h-[1px] w-full bg-black"></div>

            <div className="flex items-center gap-2 col-span-2 justify-center">
              <div
                className={`${
                  step === 3
                    ? "bg-mainyellow text-white"
                    : "bg-gray-400 text-white"
                } w-8 flex items-center  justify-center  h-8 rounded-full `}
              >
                <span>3</span>
              </div>
              Đặt hàng thành công
            </div>
          </div>

          <div>
            <div
              className={`${
                step === 1 ? "block" : "hidden"
              } p:px-0 d:px-20 my-5`}
            >
              <FormOrder setStep={setStep} />
            </div>
            <div
              className={`${
                step === 2 ? "block" : "hidden"
              } p:px-0 d:px-20 my-5`}
            >
              <FormConfirm
                setStep={setStep}
                Data={DataFormOrder}
                setOrderId={setOrderId}
              />
            </div>
            <div
              className={`${
                step === 3 ? "block" : "hidden"
              } p:px-0 d:px-20 my-5`}
            >
              <Success OrderId={OrderId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
