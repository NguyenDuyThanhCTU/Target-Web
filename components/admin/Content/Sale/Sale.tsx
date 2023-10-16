"use client";
import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Drawer,
  Dropdown,
  Form,
  MenuProps,
  Modal,
  Popconfirm,
  Switch,
  Table,
  message,
  notification,
} from "antd";
import { ColumnsType, TableProps } from "antd/es/table";
import { AiOutlineAppstoreAdd, AiOutlineFieldTime } from "react-icons/ai";
import moment from "moment";

import AddSaleList from "./Section/AddSaleList";
import HandleSale from "./Section/HandleSale";
import { SlOptionsVertical } from "react-icons/sl";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import {
  deleteDataFromArrayField,
  updateDocument,
} from "@config/Services/Firebase/FireStoreDB";
import TimeSale from "@components/items/client-items/TimeSale";

interface DataType {
  id: string;
  title: string;
  image: string;

  type: string;
  price: string;
  newPrice: string;
  discount: number;
}

type FormType = {
  start: string;
  end: string;
};

const Sale: React.FC = () => {
  const [selectId, setSelectId] = useState<any>("");
  const [selectIndex, setSelectIndex] = useState<any>("");
  const [OpenModel, setOpenModel] = useState(false);
  const [detail, setDetal] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { Sale, Products, setUpdateId } = useData();
  const { setIsRefetch } = useStateProvider();

  const cartMap: any = {};

  Sale?.salelist?.forEach((itemId: any) => {
    cartMap[itemId] = (cartMap[itemId] || 0) + 1;
  });

  const cartProducts: any = [];

  Object.keys(cartMap).forEach((itemId) => {
    const product = Products.find((product: any) => product.id === itemId);
    if (product) {
      cartProducts.push({
        ...product,
      });
    }
  });

  const HandleOpenModel = () => {
    setOpenModel(true);
    setUpdateId(selectId);
  };

  const confirm = (e: any) => {
    const data = {
      sale: {
        discount: 0,
        newPrice: "0",
      },
    };
    updateDocument("products", selectId, data).then(() => {
      deleteDataFromArrayField("website", "Sale", "salelist", selectIndex).then(
        () => {
          notification.success({
            message: "Xóa thành công",
          });
        }
      );
      setIsRefetch("CRUD");
    });
  };

  const HandleSelectItem = (record: any) => {
    setSelectId(record.id);
    setSelectIndex(record.index);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          onClick={() => {
            HandleOpenModel();
          }}
        >
          Chỉnh sửa thông tin Sale
        </div>
      ),
    },

    {
      key: "2",
      label: (
        <Popconfirm
          title="Bạn có chắc chắn muốn xóa tài khoản này không?"
          onConfirm={confirm}
          onCancel={() => message.success("Tài khoản chưa được xóa")}
          okButtonProps={{ danger: true }}
          okText="Có"
          cancelText="Không"
        >
          <div className="text-red-500">Xóa khỏi danh sách SALE</div>
        </Popconfirm>
      ),
    },
  ];

  const columns: ColumnsType<DataType> = [
    {
      title: "Tên sản phẩm",
      dataIndex: "title",
      key: "title",
      width: "15%",
      fixed: "left",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      width: "10%",
      fixed: "left",
      render: (photoURL) => (
        <img
          src={photoURL}
          alt="avatar"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
      ),
    },

    {
      title: "Giá sản phẩm",
      dataIndex: "price",
      key: "price",
      width: "10%",
      fixed: "left",
    },
    {
      title: "Giá mới",
      dataIndex: "newPrice",
      key: "newPrice",
      width: "10%",
      fixed: "left",
    },
    {
      title: "Giảm giá",
      dataIndex: "discount",
      key: "discount",
      width: "10%",
      fixed: "left",
    },
    {
      title: "",
      dataIndex: "handle",
      width: "10%",
      render: () => (
        //console.log id of account element in table when click
        <Dropdown
          trigger={["click"]}
          placement="bottomRight"
          overlay={
            <div className="flex flex-col gap-2 bg-white rounded-lg shadow-lg shadow-gray-400 cursor-pointer">
              <div className="">
                {items.map((item: any) => (
                  <div
                    className="py-2 px-4 hover:bg-slate-300 duration-300"
                    key={item.key}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          }
        >
          <div className="flex justify-center items-center cursor-pointer   ">
            <SlOptionsVertical className="text-[30px] hover:border-2 rounded-full p-1 duration-300 hover:border-red-400 hover:text-red-400" />
          </div>
        </Dropdown>
      ),
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const data: DataType[] = cartProducts.map((product: any, idx: number) => {
    return {
      id: product.id,
      index: idx,
      title: product.title,
      image: product.image,
      price: product.price,
      newPrice: product.sale.newPrice,
      discount: `${product.sale.discount}%`,
    };
  });

  const onFinish = (values: any) => {
    const currentTime = new Date();
    const formatCurrentTime = moment(currentTime).format("YYYY-MM-DD");
    const formattedStartDate: any = values.start
      ? moment(values.start.$d).format("YYYY-MM-DD")
      : null;
    const formattedEndDate: any = values.end
      ? moment(values.end.$d).format("YYYY-MM-DD")
      : null;

    if (formattedStartDate > formattedEndDate) {
      return notification.error({
        message: "Ngày bắt đầu không được sau ngày kết thúc",
      });
    } else if (formattedStartDate < formatCurrentTime) {
      return notification.error({
        message: "Ngày bắt đầu không được trước ngày hiện tại",
      });
    } else {
      //caculate discount days based on start and end date
      const startDate = moment(values.start.$d);
      const endDate = moment(values.end.$d);
      const discountDays = endDate.diff(startDate, "days");

      values.start = formattedStartDate;
      values.end = formattedEndDate;
      values.discountDays = discountDays;

      updateDocument("website", "Sale", values).then(() => {
        notification.success({
          message: "Cập nhật thành công",
        });

        setIsRefetch("CRUD website");
        setIsModalOpen(false);
      });
    }
  };

  return (
    <>
      <Table
        onRow={(record) => {
          return {
            onClick: () => {
              HandleSelectItem(record);
            },
          };
        }}
        bordered={true}
        pagination={false}
        columns={columns}
        dataSource={data}
        onChange={onChange}
        scroll={{ y: 360 }}
        title={() => (
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <div className="font-bold text-[20px]">
                Danh sách sản phẩm đang SALE
              </div>
            </div>
            <Switch
              checked={detail}
              onChange={() => setDetal(!detail)}
              checkedChildren="Empty"
              unCheckedChildren="Empty"
            />
          </div>
        )}
        //add account footer
        footer={() => (
          <div className="w-full justify-between">
            <div>
              <TimeSale />
            </div>
            <div className="flex justify-end items-center gap-3">
              <Button
                style={{
                  color: "white",
                }}
                className="bg-[#4da3ff]  hover:bg-blue-600 duration-300 border-none"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="flex items-center gap-2">
                  <p> Thời gian SALE</p>
                  <AiOutlineFieldTime />
                </div>
              </Button>
              <Button
                style={{
                  color: "white",
                }}
                className="bg-[#ff4d4f]  hover:bg-red-600 duration-300 border-none"
                onClick={() => setOpen(true)}
              >
                <div className="flex items-center gap-2">
                  <p> Thêm sản phẩm</p>
                  <AiOutlineAppstoreAdd />
                </div>
              </Button>
            </div>
          </div>
        )}
      />

      <>
        <Modal
          title="Thời gian SALE"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={false}
        >
          <Form onFinish={onFinish} labelCol={{ span: 6 }} labelAlign="left">
            <Form.Item<FormType>
              name="start"
              label="Ngày bắt đầu"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn ngày bắt đầu",
                },
              ]}
            >
              <DatePicker className="w-full" />
            </Form.Item>
            <Form.Item<FormType>
              name="end"
              label="Ngày kết thúc"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn ngày kết thúc",
                },
              ]}
            >
              <DatePicker className="w-full" />
            </Form.Item>
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
                    Tiếp tục
                  </Button>
                  <Button
                    htmlType="button"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Hủy
                  </Button>
                </div>
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </>

      <>
        <Drawer
          title="Thêm sản phẩm vào danh sách SALE"
          placement="right"
          onClose={() => setOpen(false)}
          width={800}
          open={open}
        >
          <AddSaleList />
        </Drawer>
      </>

      <>
        <Modal
          title={`Thông tin SALE sản phẩm ${cartProducts[selectIndex]?.title}`}
          open={OpenModel}
          onCancel={() => setOpenModel(false)}
          footer={false}
        >
          <HandleSale setOpen={setOpen} />
        </Modal>
      </>
    </>
  );
};

export default Sale;
