import { Result } from "antd";
import Link from "next/link";
import React from "react";

const Success = ({ OrderId }: any) => {
  return (
    <div>
      {" "}
      <Result
        status="success"
        title="Đặt hàng thành công!"
        subTitle={`Mã giao dịch: ${OrderId}. Bạn có thể theo dõi trong mục lịch sử giao dịch.`}
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
    </div>
  );
};

export default Success;
