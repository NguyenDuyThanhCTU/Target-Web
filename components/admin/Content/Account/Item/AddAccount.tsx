"use client";
import { addDocument } from "@config/Services/Firebase/FireStoreDB";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Button, Form, Input, Select, notification } from "antd";

type FormType = {
  username: string;
  password: string;
  rePassword: string;
  role: string;
};

const AddAccount = ({ setOpen }: any) => {
  const { setIsRefetch } = useStateProvider();
  const { Accounts } = useData();
  const onFinish = (values: any) => {
    //check if username is exist

    const checkUsername = Accounts?.find(
      (item: any) => item.username === values.username
    );
    if (checkUsername) {
      notification["error"]({
        message: "Tài khoản đã tồn tại !",
        description: `Vui lòng chọn tài khoản khác !`,
      });
      return;
    } else {
      const { rePassword, ...newValues } = values;
      newValues.photoURL =
        "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/avatar%2Flogo.png?alt=media&token=bac2943c-767e-4b00-9666-2a7712e142cc";
      newValues.status = "active";

      addDocument("accounts", newValues).then(() => {
        notification["success"]({
          message: "Đổi mật khẩu thành công !",
          description: `Mật khẩu của bạn đã được cập nhật !`,
        });
        setIsRefetch("CRUD accounts");
        setOpen(false);
      });
    }
  };

  return (
    <>
      {" "}
      <div className="w-full flex items-center py-2 flex-col">
        <div className=" d:h-[100px] d:w-[100px] p:w-[250px] p:h-[250px] overflow-hidden rounded-full shadow-xl">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/avatar%2Flogo.png?alt=media&token=bac2943c-767e-4b00-9666-2a7712e142cc"
            alt="avatar"
            className=" object-cover object-top hover:scale-125 duration-1000 w-full h-full"
          />
        </div>
        <h3 className="font-LexendDeca text-[18px]">
          Nhập thông tin thành viên mới cho website của bạn!!!
        </h3>
      </div>{" "}
      <Form
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        labelAlign="left"
        wrapperCol={{ span: 16 }}
        layout="horizontal"
      >
        <div className="border">
          <div className="p-3">
            <Form.Item
              name="username"
              label="Tài khoản"
              rules={[
                { required: true, message: "Tài khoản không được trống" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: "Mật khẩu không được trống" }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Xác nhận mật khẩu"
              name="rePassword"
              rules={[
                {
                  required: true,
                  message: "Vui lòng xác nhận mật khẩu",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Mật khẩu không khớp!"));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item<FormType> name="role" label="Quyền Hạn">
              <Select placeholder="Phân quyền ...">
                <Select.Option value="manager">Quản trị</Select.Option>
                <Select.Option value="editor">Biên tập viên</Select.Option>
              </Select>
            </Form.Item>
          </div>
        </div>
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
    </>
  );
};

export default AddAccount;
