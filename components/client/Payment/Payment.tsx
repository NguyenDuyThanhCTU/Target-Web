"use client";
import React, { useState } from "react";
import FormOrder from "./FormOrder";
import FormConfirm from "./FormConfirm";

const Payment = () => {
  const [step, setStep] = React.useState(1);
  const [DataFormOrder, setDataFormOrder] = useState<any>();

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
              <FormConfirm setStep={setStep} Data={DataFormOrder} />
            </div>
            {/* <div
              className={`${
                step === 3 ? "block" : "hidden"
              } p:px-0 d:px-20 my-5`}
            >
              <Result
                status="success"
                title="Đặt hàng thành công!"
                subTitle="Mã đơn hàng:2017182818828182881. Bạn có thể theo dõi trong mục đơn hàng của tôi"
                extra={[
                  <div className="flex w-full  gap-5 justify-center">
                    <Link
                      href={`/`}
                      className="py-2 px-6  duration-300 cursor-pointer text-mainyellow border-mainyellow uppercase border rounded-full font-normal hover:text-orange-500 hover:border-orange-500"
                    >
                      Quay về
                    </Link>
                    <Link
                      href={`/tai-khoan`}
                      className="py-2  px-10 duration-300 cursor-pointer text-white hover:text-white bg-mainyellow border-mainyellow uppercase border rounded-full font-normal hover:bg-orange-500 hover:border-orange-500"
                    >
                      Đến trang đơn hàng
                    </Link>
                  </div>,
                ]}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
