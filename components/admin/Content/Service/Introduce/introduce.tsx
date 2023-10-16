"use client";
import { useState, useEffect } from "react";
import { Drawer, Empty, Input, Modal, Select, Space, notification } from "antd";
import { useStateProvider } from "@context/StateProvider";
import { useData } from "@context/DataProviders";
import { updateDocumentByField } from "@config/Services/Firebase/FireStoreDB";
import { IntroduceItems } from "@assets/item";
import TextEditor from "@components/admin/Item/CKEditor/TextEditor";

const Introduce = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isType, setIsType] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [editorData, setEditorData] = useState("");
  const { Introduction } = useData();
  const { setIsRefetch } = useStateProvider();
  const { Option } = Select;
  //refetch data when Introduction change

  const initIntroduction =
    "<p>Chưa có thông tin giới thiệu?</p> <p>Thêm ngay...</p> ";

  const HandleSubmit = () => {
    const data: any = {
      title: title,
      type: isType,
      url: url,
      content: editorData,
    };

    for (let key in data) {
      if (
        data[key] === undefined ||
        data[key] === "" ||
        data[key] === null ||
        data[key].length === 0
      ) {
        delete data[key];
      }
    }
    updateDocumentByField("Introduction", "type", isType, data).then(() => {
      notification.success({
        message: "Thành công!",
        description: `Cập nhật bài viết thành công!`,
      });
      setOpenDrawer(false);
      setIsRefetch("CRUD website");
      setIsModalOpen(false);
    });
  };

  const HandleSelect = (data: any) => {
    setUrl(data);
    IntroduceItems.filter((item: any) => {
      if (item.value === data) {
        setIsType(item.label);
      }
    });
  };
  return (
    <div className="flex flex-col gap-5 w-full">
      <h3 className=" text-[44px] text-center font-bold mb-2 uppercase ">
        Cập nhật trang giới thiệu
      </h3>
      <div className="flex justify-end  py-2">
        <div className=" fixed ">
          <div
            className="px-4 py-2 bg-none rounded-l-full   duration-300 text-white bg-red-400  hover:bg-red-600 cursor-pointer"
            onClick={() => setOpenDrawer(true)}
          >
            Thay đổi
          </div>
        </div>
      </div>
      <div
        className={`${
          Introduction.content
            ? "items-start justify-start"
            : "items-center justify-center"
        } bg-white min-h-screen w-full rounded-md flex  `}
      >
        <div className="py-3 px-6 ">
          {Introduction.content ? (
            <div
              className="text-black font-light"
              dangerouslySetInnerHTML={{ __html: Introduction.content }}
            ></div>
          ) : (
            <>
              <div
                className="px-4 py-2 bg-none border  text-red-500 border-red-500 duration-300 hover:text-white hover:bg-red-500 cursor-pointer"
                onClick={() => setOpenDrawer(true)}
              >
                Cập nhật
              </div>
            </>
          )}
        </div>
      </div>

      <>
        <Drawer
          title="Cập nhật bài giới thiệu"
          placement={"bottom"}
          onClose={() => setOpenDrawer(false)}
          open={openDrawer}
          key={"bottom"}
          height={"90%"}
        >
          <div className="h-[90%] overflow-y-auto">
            <TextEditor
              initialValue={editorData ? editorData : initIntroduction}
              onChange={setEditorData}
            />
          </div>
          <div className="flex justify-center mt-5 gap-4">
            <div
              className="px-4 py-2 bg-none border  text-red-500 border-red-500 duration-300 hover:text-white hover:bg-red-500 cursor-pointer"
              onClick={() => setOpenDrawer(false)}
            >
              Hủy
            </div>
            <div
              className="px-4 py-2 bg-none border  text-blue-500 border-blue-500 duration-300 hover:text-white hover:bg-blue-500 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              Cập nhật bài viết
            </div>
          </div>
        </Drawer>
      </>
      <>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={() => HandleSubmit()}
          okType="danger"
          onCancel={() => {
            setIsModalOpen(false);
          }}
        >
          <div className="flex flex-col gap-3">
            <Input
              placeholder="Tiêu đề bài giới thiệu"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            ></Input>
            <Select
              style={{ width: "100%" }}
              placeholder="Chọn loại cho bài viết"
              onChange={HandleSelect}
              optionLabelProp="label"
            >
              {IntroduceItems.map((item: any, idx: any) => (
                <Option key={idx} value={item.value} label={item.label}>
                  <Space>{item.label}</Space>
                </Option>
              ))}
            </Select>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default Introduce;
