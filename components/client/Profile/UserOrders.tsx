"use client";
import { useData } from "@context/DataProviders";
import { Modal } from "antd";
import { usePathname } from "next/navigation";
import React from "react";

const UserOrders = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [order, setOrder] = React.useState<any>(null);
  const { Orders } = useData();
  const HandleClickOrder = (id: any) => {
    const sort = Orders?.filter((item: any) => item.id === id);
    if (sort) {
      setOrder(sort[0]);
      setIsModalOpen(true);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-7 gap-3  py-3 px-2 font-normal bg-mainyellow text-white items-center">
        <div>Ngày đặt hàng</div>
        <div>Mã đơn hàng</div>
        <div>Tên người nhận</div>
        <div>Địa chỉ nhận hàng</div>
        <div className="p:w-auto d:w-max">Tổng tiền thanh toán</div>
        <div className="w-full flex justify-end">Tổng sản phẩm</div>
        <div className="w-full flex justify-center">Trạng thái</div>
      </div>
      <div className="">
        {Orders.map((order: any, idx: number) => {
          const date = new Date(order.createdAt.seconds * 1000); // Convert seconds to milliseconds

          const formattedDate = `${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
          return (
            <div
              key={idx}
              className="grid grid-cols-7 gap-3 py-3  border-b bg-gray-50 hover:bg-gray-100 duration-300 px-2"
            >
              <div className="text-[14px] truncate">{formattedDate}</div>
              <div
                className="truncate cursor-pointer text-mainyellow font-normal"
                onClick={() => HandleClickOrder(order.id)}
              >
                {order.id}
              </div>
              <div className="w-full truncate flex justify-start">
                {order.name}
              </div>
              <div className="w-full truncate flex justify-center">
                {order.address}
              </div>
              <div className="w-full truncate flex justify-center">
                € {order.totalAmount}
              </div>
              <div className="w-full truncate flex justify-center">
                {order.count}
              </div>
              <div className="w-full truncate flex justify-center">Đơn mới</div>
            </div>
          );
        })}
      </div>
      <>
        <Modal
          open={isModalOpen}
          footer={null}
          width={800}
          onCancel={() => setIsModalOpen(false)}
        >
          <div className="flex flex-col items-center  font-LexendDeca font-extralight">
            <h2 className="py-4 border-b w-full text-center text-[25px] font-bold">
              "Thông tin đơn hàng
            </h2>
            <div className="grid grid-cols-2 gap-2 w-full mt-2">
              <div className="border">
                <div className="p-2">
                  <h2 className="font-normal text-[18px]">
                    Địa chỉ thanh toán
                  </h2>
                  <div className="flex flex-col ">
                    <div>Địa chỉ: {order?.address}</div>
                    <div>Thành phố: {order?.city}</div>
                    <div>Quốc gia: {order?.country}</div>
                    <div>Số điện thoại: {order?.phone}</div>
                    <div>Post code: {order?.postCode}</div>
                  </div>
                </div>
              </div>
              <div className="border">
                <div className="p-2">
                  <h2 className="font-normal text-[18px]">Địa chỉ giao hàng</h2>
                  <div className="flex flex-col ">
                    <div>Địa chỉ: {order?.address}</div>
                    <div>Thành phố: {order?.city}</div>
                    <div>Quốc gia: {order?.country}</div>
                    <div>Số điện thoại: {order?.phone}</div>
                    <div>Post code: {order?.postCode}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 w-full">
              <div className="grid grid-cols-7 w-full font-bold py-2 border-b px-2">
                <div className="col-span-2">Tên sản phẩm</div>
                <div className="col-span-2">Mã sản phẩm</div>
                <div>Số lượng</div>
                <div>Giá</div>
                <div>Tạm tính</div>
              </div>
              {order?.products.map((product: any, idx: number) => (
                <div
                  className="grid grid-cols-7 w-full  py-2 border-b px-2"
                  key={idx}
                >
                  <div className="col-span-2 font-normal truncate">
                    {product.title}
                  </div>
                  <div className="col-span-2">{product.id}</div>
                  <div>{product.count}</div>
                  <div>€ {product.price}</div>
                  <div>€ {product.total}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 w-full flex  flex-col items-end gap-2 text-[18px] font-normal">
              <div>Tổng tạm tính: € {order?.totalAmount}</div>
              <div>Phí vận chuyển: € 0</div>
              <div>Tổng cộng: € {order?.totalAmount}</div>
            </div>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default UserOrders;
