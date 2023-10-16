"use client";
import React, { useEffect, useState } from "react";
import { Modal, notification } from "antd";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/router";
import { useData } from "@context/DataProviders";
import { useAuth } from "@context/AuthProviders";
import { updateDocument } from "@config/Services/Firebase/FireStoreDB";

const Verify = ({ verify, isId }: any) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const { Accounts } = useData();
  const { setVerify } = useAuth();
  const router = useRouter();

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
    setTimeout(() => {
      setIsLogin(true);
    }, 2000);
  };

  const onFinish = (values: any) => {
    if (
      values.username === Accounts.username &&
      values.password === Accounts.password
    ) {
      const newData = {
        status: "active",
      };
      updateDocument("users", isId, newData).then(() => {
        setVerify(true);
        notification["success"]({
          message: "Đăng nhập thành công !",
          description: `Chào mừng đến với ${window.location.hostname} !`,
        });
        setTimeout(() => {
          router.push("/admin");
        }, 2000);
      });
    } else {
      notification["error"]({
        message: "Đăng nhập không thành công !",
        description: `
        Vui lòng đăng nhập bằng tài khoản đã được CẤP QUYỀN QUẢN TRỊ !`,
      });
    }
  };

  return (
    <>
      <Modal
        title="Lần đầu đăng nhập bằng Google?"
        open={open}
        onOk={handleOk}
        okText="Tiếp tục"
        okType="danger"
        confirmLoading={confirmLoading}
        onCancel={() => verify(false)}
        cancelText="Hủy bỏ"
      >
        <p>"Tiếp tục" để nhập tài khoản và mật khẩu QUẢN TRỊ</p>
      </Modal>

      {isLogin && (
        <div className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          {" "}
          <div>
            <Form
              name="basic"
              onFinish={onFinish}
              autoComplete="off"
              className="bg-white shadow-2xl flex flex-col items-center justify-center p-8 rounded-xl "
            >
              <label className="uppercase mb-5 text-[33px] font-LexendDeca">
                Xác thực quyền Quản trị
              </label>
              <div className="bg-[#7b7b7b3d] p-5 flex flex-col items-center  rounded-2xl">
                <div>
                  <label>Username</label>

                  <Form.Item className="w-[300px]" name="username">
                    <Input />
                  </Form.Item>
                </div>
                <div>
                  <label>Password</label>

                  <Form.Item className="w-[300px]" name="password">
                    <Input.Password />
                  </Form.Item>
                </div>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="text-blue-600 border border-blue-600 hover:bg-blue-600 hover:border-none"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};
export default Verify;
