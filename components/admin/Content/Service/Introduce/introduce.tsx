import { useState, useEffect } from "react";
import { Drawer, Empty, notification } from "antd";

import TextEditor from "../../../Item/CKEditor/TextEditor";
import { useStateProvider } from "@context/StateProvider";
import { useData } from "@context/DataProviders";
import { addDataToDocument } from "@config/Services/Firebase/FireStoreDB";

const Introduce = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [editorData, setEditorData] = useState("");
  const { Introduction } = useData();
  const { setIsRefetch } = useStateProvider();

  //refetch data when Introduction change

  const initIntroduction =
    "<p>Chưa có thông tin giới thiệu?</p> <p>Thêm ngay...</p> ";

  const HandleSubmit = () => {
    const data = {
      content: editorData,
    };
    addDataToDocument("website", "Introduction", data).then((data: any) => {
      notification.success({
        message: "Thành công!",
        description: `Cập nhật bài viết thành công!`,
      });
      setOpenDrawer(false);
      setIsRefetch("CRUD website");
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
              <Empty description={<span>Chưa có thông tin giới thiệu?</span>}>
                <div
                  className="px-4 py-2 bg-none border  text-red-500 border-red-500 duration-300 hover:text-white hover:bg-red-500 cursor-pointer"
                  onClick={() => setOpenDrawer(true)}
                >
                  Cập nhật
                </div>
              </Empty>
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
              initialValue={
                Introduction?.content ? Introduction.content : initIntroduction
              }
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
              onClick={() => HandleSubmit()}
            >
              Cập nhật bài viết
            </div>
          </div>
        </Drawer>
      </>
    </div>
  );
};

export default Introduce;
