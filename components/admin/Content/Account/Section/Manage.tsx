"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Drawer,
  Dropdown,
  Form,
  MenuProps,
  Modal,
  Popconfirm,
  Progress,
  Select,
  Statistic,
  message,
  notification,
} from "antd";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import CountUp from "react-countup";
import { BsPersonPlus } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import AddAccount from "../Item/AddAccount";
import InfoAccount from "../Item/AccountInfo";

import { FaUserEdit, FaUserShield } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import {
  delDocument,
  updateDocument,
} from "@config/Services/Firebase/FireStoreDB";

interface DataType {
  id: React.Key;
  username: string;
  photoURL: string;
  role: string;
  status: string;
  displayName: string;
}

const Manage = () => {
  const [data, setData] = useState<DataType[]>([
    {
      id: "",
      username: "",
      photoURL: "",
      role: "",
      status: "",
      displayName: "",
    },
  ]);
  const [open, setOpen] = useState(false);
  const [selectId, setSelectId] = useState<any>("");
  const [AccountInfo, setAccountInfo] = useState<any>("");
  const [openAccountInfo, setOpenAccountInfo] = useState(false);
  const [ProgressData, setProgressData] = useState<any>({
    active: 0,
    activepercent: 0,
    block: 0,
    blockpercent: 0,
    user: 0,
  });
  const conicColors = { "0%": "#d06868", "50%": "#ff8f8f", "100%": "#ff9c8f" };
  const twoColors = { "0%": "#108ee9", "100%": "#68acd0" };
  const { Accounts } = useData();
  const { setIsRefetch } = useStateProvider();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const HandlesetAccountInfo = () => {
    const sort = Accounts.filter((item: any) => item.id === selectId);
    if (sort.length > 0) {
      setAccountInfo(sort[0]);
    }
    setOpenAccountInfo(true);
  };

  const confirm = (e: any) => {
    delDocument("accounts", selectId).then(() => {
      notification["success"]({
        message: "Xóa tài khoản thành công !",
        description: `Tài khoản đã được xóa !`,
      });
      setIsRefetch("CRUD accounts");
    });
  };

  const onFinish = (values: any) => {
    for (let key in values) {
      if (values[key] === undefined || values[key] === "") {
        delete values[key];
      }
    }

    updateDocument("accounts", selectId, values).then(() => {
      notification["success"]({
        message: "Cập nhật thành công !",
        description: `Thông tin tài khoản đã được cập nhật !`,
      });
      setIsRefetch("CRUD accounts");
      setIsModalOpen(false);
    });
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          onClick={() => {
            HandlesetAccountInfo();
          }}
        >
          Xem thông tin
        </div>
      ),
    },
    {
      key: "2",
      label: <div onClick={() => setIsModalOpen(true)}>Quản lý</div>,
    },
    {
      key: "3",
      label: (
        <Popconfirm
          title="Bạn có chắc chắn muốn xóa tài khoản này không?"
          onConfirm={confirm}
          onCancel={() => message.success("Tài khoản chưa được xóa")}
          okButtonProps={{ danger: true }}
          okText="Có"
          cancelText="Không"
        >
          <div className="text-red-500">Xóa</div>
        </Popconfirm>
      ),
    },
  ];

  const columns: ColumnsType<DataType> = [
    {
      title: "Tài khoản",
      dataIndex: "username",

      width: "20%",
    },
    {
      title: "Họ tên",
      dataIndex: "displayName",

      filterSearch: true,
      width: "25%",
    },
    {
      title: "Ảnh đại diện",
      width: "15%",
      dataIndex: "photoURL",
      render: (photoURL) => (
        <img
          src={photoURL}
          alt="avatar"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
      ),
    },

    {
      title: "Quyền hạn",
      dataIndex: "role",

      filters: [
        {
          text: "Quản trị",
          value: "manager",
        },
        {
          text: "Biên tập viên",
          value: "editor",
        },
      ],
      //if role = editor => icon FaUserEdit + text editor
      //if role = manager => icon FaUserShield + text manager
      render: (role) => (
        <div className="flex items-center gap-2 ">
          {role === "editor" ? (
            <div className="flex items-center gap-2">
              <FaUserEdit className="text-yellow-400 text-[20px]" />
              <p>Biên tập viên</p>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <FaUserShield className="text-blue-400 text-[20px]" />
              <p>Quản trị</p>
            </div>
          )}
        </div>
      ),
      filterSearch: true,
      onFilter: (value: any, record) => record.role.includes(value),
      width: "15%",
    },
    {
      title: "Trạng thái tài khoản",
      dataIndex: "status",
      // if status = active => dot green + text active
      // if status = block => dot red + text block
      render: (status) => (
        <div className="flex items-center gap-2">
          {status === "active" ? (
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <p>Đang hoạt động</p>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <p>Đã khóa</p>
            </div>
          )}
        </div>
      ),

      filterSearch: true,
      onFilter: (value: any, record) => record.role.includes(value),
      width: "15%",
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

  //set data for table with Accounts data
  useEffect(() => {
    const newData = Accounts.filter((items: any) => items.role !== "admin").map(
      (item: any) => {
        return {
          id: item.id,
          username: item.username,
          photoURL: item.photoURL,
          role: item.role,
          status: item.status,
          displayName: item.displayName,
        };
      }
    );

    setData(newData);
  }, [Accounts]);

  useEffect(() => {
    //set data for progress
    const user = data.length;
    const active = data.filter((item: any) => item.status === "active").length;
    const activepercent = (active / user) * 100;
    const block = data.filter((item: any) => item.status === "block").length;
    const blockpercent = (block / user) * 100;
    setProgressData({
      active: active,
      activepercent: activepercent,
      block: block,
      blockpercent: blockpercent,
      user: user,
    });
  }, [data]);

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const formatter = (value: any) => <CountUp end={value} />;

  return (
    <>
      <Table
        onRow={(record) => {
          return {
            onClick: () => {
              setSelectId(record.id);
            },
          };
        }}
        bordered={true}
        pagination={false}
        columns={columns}
        dataSource={data}
        onChange={onChange}
        scroll={{ y: 240 }}
        title={() => (
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <div className="font-bold text-[20px]">Danh sách tài khoản</div>
            </div>
          </div>
        )}
        //add account footer
        footer={() => (
          <div className="flex justify-end items-center gap-3">
            <Button
              onClick={() => setOpen(true)}
              style={{
                backgroundColor: "#ff4d4f",
                color: "white",
              }}
            >
              <div className="flex items-center gap-2">
                <p> Thêm tài khoản</p>
                <BsPersonPlus />
              </div>
            </Button>
          </div>
        )}
      />

      <div className="border w-[80%] rounded-md my-5 border-black">
        <div className="p-4 flex w-full justify-between">
          <div className="w-full">
            <h3 className="pb-4 text-[18px] font-LexendDeca w-full border-b ">
              Tổng quan tài khoản
            </h3>

            <div className="flex items-center gap-5 pt-2">
              <Progress
                type="circle"
                percent={ProgressData.activepercent}
                strokeColor={twoColors}
              />
              <Progress
                percent={ProgressData.activepercent}
                size="small"
                strokeColor={twoColors}
              />
              <div className="truncate flex-[30%]"> Đang hoạt động </div>
            </div>
            <div className="flex items-center gap-5 mt-3 text-red-500">
              <Progress
                type="circle"
                percent={ProgressData.blockpercent}
                strokeColor={conicColors}
              />
              <Progress
                percent={ProgressData.blockpercent}
                size="small"
                strokeColor={conicColors}
              />
              <div className="flex-[30%]"> Đã khóa </div>
            </div>
          </div>
          <div className="w-[30%] flex justify-center ml-10">
            <div className=" ">
              <h3>Tổng số tài khoản</h3>

              <div className="flex items-center gap-3 w-full">
                <Statistic value={ProgressData.user} formatter={formatter} />{" "}
                <AiOutlineUser className="text-[20px]" />
              </div>
              <div className="flex justify-between items-center flex-col">
                <div className="flex justify-between w-full">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <p>{ProgressData.active}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <p>{ProgressData.block}</p>
                  </div>
                </div>

                <div className="flex gap-3 mt-5 border">
                  <div className="p-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <p>Đang hoạt động</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <p>Đã khóa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <Drawer
          title="Thêm tài khoản"
          placement="right"
          width={736}
          closable={false}
          onClose={() => setOpen(false)}
          open={open}
          getContainer={false}
        >
          <AddAccount setOpen={setOpen} />
        </Drawer>
      </>

      <>
        <Drawer
          title="Thêm tài khoản"
          placement="left"
          width={736}
          closable={false}
          onClose={() => setOpenAccountInfo(false)}
          open={openAccountInfo}
          getContainer={false}
        >
          {AccountInfo && <InfoAccount HeaderAdmin={AccountInfo} />}
        </Drawer>
      </>
      <>
        <Modal
          title="Quản lý trạng thái và quyền của tài khoản"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={false}
        >
          <div className="py-4">
            <Form onFinish={onFinish} labelAlign="left" labelCol={{ span: 4 }}>
              <Form.Item name="role" label="Quyền Hạn">
                <Select placeholder="Phân quyền ...">
                  <Select.Option value="manager">Quản trị</Select.Option>
                  <Select.Option value="editor">Biên tập viên</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item name="status" label="Trạng thái">
                <Select placeholder="Thay đổi Trạng thái tài khoản ...">
                  <Select.Option value="active">Hoạt động</Select.Option>
                  <Select.Option value="block">Khóa</Select.Option>
                </Select>
              </Form.Item>
              <div className="flex gap-3 w-full justify-center mt-3">
                <Button htmlType="button">Nhập lại</Button>
                <Button
                  htmlType="submit"
                  style={{ background: "red", color: "white" }}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </Modal>
      </>
    </>
  );
};

export default Manage;
