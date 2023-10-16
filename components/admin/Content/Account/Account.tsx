"use client";
import { Tabs, Form, Input, Modal, Button, notification } from "antd";
import { useState } from "react";
import Manage from "./Section/Manage";
import Information from "./Section/Information";
import { BiSolidUserDetail } from "react-icons/bi";
import { SiPhpmyadmin } from "react-icons/si";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { useRouter } from "next/navigation";
import { updateDocument } from "@config/Services/Firebase/FireStoreDB";

type FormType = {
  password: string;
  newPassword: string;
  reNewPassword: string;
};

const Account: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { HeaderAdmin } = useData();
  const { setIsRefetch, setIsLoading } = useStateProvider();
  const router = useRouter();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    //compare password with HeaderAdmin.password if true then update password with values.newPassword using updateDocument
    if (values.password === HeaderAdmin.password) {
      const Data = {
        password: values.newPassword,
      };
      updateDocument("accounts", HeaderAdmin.id, Data).then(() => {
        notification["success"]({
          message: "Đổi mật khẩu thành công !",
          description: `Mật khẩu của bạn đã được cập nhật !`,
        });
        setIsRefetch("CRUD accounts");
        setIsLoading(true);
        router.push("/login");
      });
    } else {
      notification["error"]({
        message: "Lỗi !",
        description: `
        Mật khẩu không hợp lệ !`,
      });
    }
  };

  return (
    <div className="w-full bg-white rounded-md min-h-[50vh]">
      <>
        <Modal
          title="Thay đổi mật khẩu"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <Form labelCol={{ span: 8 }} labelAlign="left" onFinish={onFinish}>
            <Form.Item<FormType>
              label="Nhập mật khẩu cũ"
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu cũ" }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item<FormType>
              label="Nhập mật khẩu mới"
              name="newPassword"
              rules={[
                { required: true, message: "Vui lòng nhập mật khẩu mới" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item<FormType>
              label="Nhập lại mật khẩu mới"
              name="reNewPassword"
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <div className="w-full justify-center flex mt-3">
              <Form.Item>
                <div className="flex gap-3">
                  <Button htmlType="button" onClick={handleCancel}>
                    Hủy
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#ff4d4f",
                      color: "white",
                    }}
                    htmlType="submit"
                  >
                    Thay đổi
                  </Button>
                </div>
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </>
      <div className="p-2">
        <Tabs
          style={{ color: "black" }}
          type="card"
          defaultActiveKey="1"
          items={[
            {
              label: (
                <div className="flex items-center gap-3">
                  <div className="b">
                    <BiSolidUserDetail className="text-[20px] " />
                  </div>
                  <span className="font-LexendDeca font-bold">
                    Thông tin tài khoản
                  </span>
                </div>
              ),
              key: "1",
              children: <Information showModal={setIsModalOpen} />,
            },
            {
              label: (
                <div className="flex items-center gap-3">
                  <div className="">
                    <SiPhpmyadmin className="text-[20px] " />
                  </div>
                  <span className="font-LexendDeca font-bold">
                    Quản lý tài khoản
                  </span>
                </div>
              ),
              key: "2",
              children: <Manage />,
              disabled: `${HeaderAdmin.role}` === `admin` ? false : true,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Account;
