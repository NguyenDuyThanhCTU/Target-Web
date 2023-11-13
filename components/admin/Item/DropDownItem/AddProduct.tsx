"use client";
import React, { useEffect, useState } from "react";
import { AiFillCloseCircle, AiOutlinePlus } from "react-icons/ai";
import {
  Checkbox,
  Drawer,
  Form,
  Radio,
  Select,
  Space,
  Upload,
  notification,
} from "antd";
import Input from "../Input";
import { useStateProvider } from "@context/StateProvider";
import { useData } from "@context/DataProviders";
import {
  convertToCodeFormat,
  uploadImage,
} from "@components/items/server-items/Handle";
import { addDocument } from "@config/Services/Firebase/FireStoreDB";
import { TypeProductItems } from "@assets/item";
import TextEditor from "@components/admin/Item/CKEditor/TextEditor";
import { useSmartContract } from "@context/ContractProviders";
import { ethers } from "ethers";

const AddProduct = ({}) => {
  const { setDropDown, setIsRefetch } = useStateProvider();
  const { productTypes } = useData();
  const { createShoe } = useSmartContract();
  const [open, setOpen] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);
  const [openFunction, setOpenFunction] = useState(false);

  const [formSmartContract, setFormSmartContract] = useState<any>({
    name: "",
    url: "",
    image: "",
    price: "0",
    typeurl: "",
    parenturl: "",
    limitspeed: "0",
    limitdistance: "0",
    limitcoinearning: "0",
    limittime: "0",
    nightmode: false,
    test: false,
    level: "0",
  });

  const [form, setForm] = useState<any>({
    url: "",
    description: "",
    introduction: "",
    subimage: [],
    state: false,
  });

  const { Option } = Select;

  const initial1 =
    "<p>Chất liệu: </p> <br/> <p>Màu sắc: </p> <br/> <p>Size: </p> <br/> <p>Chiều dài: </p> <br/> <p>Chiều rộng: </p> <br/> <p>Chiều cao: </p> <br/> <p>Trọng lượng: </p> <br/> <p>Thương hiệu: </p> <br/> <p>Xuất xứ: </p> <br/> <p>Chất liệu";
  const initDescribe = "<p> mô tả giày </p>";

  const handleDiscard = () => {};

  useEffect(() => {
    const formattedName = convertToCodeFormat(formSmartContract.name);
    if (formattedName) {
      setForm({ ...form, url: formattedName });
      setFormSmartContract({ ...formSmartContract, url: formattedName });
    }
  }, [formSmartContract.name]);
  const HandleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formSmartContract.name) {
      notification["error"]({
        message: "Lỗi !!!",
        description: `Vui lòng điền đầy đủ các mục cho sản phẩm !`,
      });
    } else {
      // await createShoe({
      //   ...formSmartContract,
      //   price: ethers.utils.parseUnits(formSmartContract.price, 18),
      //   limitspeed: ethers.utils.parseUnits(formSmartContract.limitspeed, 18),
      //   limitdistance: ethers.utils.parseUnits(
      //     formSmartContract.limitdistance,
      //     18
      //   ),
      //   limitcoinearning: ethers.utils.parseUnits(
      //     formSmartContract.limitcoinearning,
      //     18
      //   ),
      //   limittime: ethers.utils.parseUnits(formSmartContract.limittime, 18),
      //   level: ethers.utils.parseUnits(formSmartContract.level, 18),
      // });
      const data = {
        url: form.url,
        description: form.description,
        introduction: form.introduction,
        subimage: form.subimage,
        state: form.state,
      };
      addDocument("products", data).then(() => {
        notification["success"]({
          message: "Tải lên thành công!",
          description: `giày của bạn đã được tải lên !`,
        });
        setIsRefetch("CRUD products");
        handleDiscard();
        setDropDown("");
      });
    }
  };

  const HandleUploadImage = (e: any, locate: string, type: string) => {
    if (type === "mainImage") {
      uploadImage(e, locate).then((data: any) => {
        setFormSmartContract({ ...formSmartContract, image: data });
      });
    }
  };

  const customRequest = async (options: any) => {
    options.onSuccess({});

    try {
      const url = await uploadImage(options.file, "avatar");

      const newUrl: any = {
        uid: options.file.uid,
        url: url,
      };
      setForm({ ...form, subimage: [...form.subimage, newUrl] });
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleRemove = (file: any) => {
    const newImageUrl = form.subimage.filter(
      (item: any) => item.uid !== file.uid
    );
    setForm({ ...form, image: newImageUrl });
  };

  // const handleFormFieldChange = (fieldName: any, e: any) => {
  //   setForm({ ...form, [fieldName]: e.target.value });
  // };
  const handleSmartContractFormFieldChange = (fieldName: any, e: any) => {
    if (fieldName === "name") {
      setFormSmartContract({
        ...formSmartContract,
        [fieldName]: e.target.value,
      });
      setForm({ ...form, url: convertToCodeFormat(e.target.value) });
    } else {
      setFormSmartContract({
        ...formSmartContract,
        [fieldName]: e.target.value,
      });
    }
  };

  return (
    <div
      className={`bg-[rgba(0,0,0,0.3)] w-full 
       h-full
      z-50 absolute rounded-md duration-300 flex items-center justify-center`}
    >
      <div className="w-auto h-auto bg-white relative p-10  font-LexendDeca cursor-pointer rounded-sm flex flex-col justify-center">
        <p className="text-2xl font-bold text-center text-[30px] mb-5">
          Tải lên sản phẩm giày của bạn
        </p>
        <form onSubmit={HandleSubmit} className="flex flex-col">
          <div className="justify-center w-full grid grid-cols-3 items-start gap-5">
            <div className="">
              <div className="">
                <p className="text-md text-gray-400 mt-1">
                  Chọn ảnh cho giày của bạn
                </p>
              </div>
              <div className=" border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center  outline-none mt-5 w-[260px] h-[458px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100">
                <label className="cursor-pointer">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col  items-center">
                      <label>
                        <p className="bg-[#0047AB] hover:bg-[#0000FF]  text-center rounded text-white text-md font-medium p-2 w-52 outline-none">
                          Chọn từ thiết bị
                        </p>
                        <input
                          type="file"
                          onChange={(e) =>
                            HandleUploadImage(e, "products", "mainImage")
                          }
                          className="w-0 h-0"
                          id="fileInput"
                        />
                      </label>
                    </div>
                  </div>
                </label>

                <div className="overflow-y-auto border rounded-xl w-full  h-[200px] mt-5">
                  <div className="p-1">
                    <img src={formSmartContract.image} alt="product" />
                  </div>
                </div>
              </div>
            </div>
            <div className="  flex flex-col gap-3">
              <Input
                text="Tên giày"
                Value={formSmartContract.name}
                setValue={(e: any) =>
                  handleSmartContractFormFieldChange("name", e)
                }
              />
              <Input
                text="Giá giày"
                Value={formSmartContract.price}
                setValue={(e: any) =>
                  handleSmartContractFormFieldChange("price", e)
                }
              />

              <div className="">
                <label>Thông tin giày</label>
                <div
                  className="bg-gray-100 hover:bg-gray-200 duration-300 mt-2 py-3 text-center  cursor-pointer"
                  onClick={() => setOpen(true)}
                >
                  Thêm thông tin giày
                </div>
              </div>
              <div className="">
                <label>Mô tả giày</label>
                <div
                  className="bg-gray-100 hover:bg-gray-200  duration-300 mt-2 py-3 text-center  cursor-pointer"
                  onClick={() => setOpenDescription(true)}
                >
                  Thêm mô tả giày
                </div>
              </div>
              <Form.Item label="Ảnh phụ">
                <Upload
                  customRequest={customRequest}
                  listType="picture-card"
                  onRemove={handleRemove}
                >
                  <div className="flex flex-col items-center">
                    <AiOutlinePlus className="text-[24px]" />
                    <div className="mt-2">Upload</div>
                  </div>
                </Upload>
              </Form.Item>
            </div>
            <div className="  flex flex-col gap-3">
              <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-col gap-2">
                  <label className="text-md font-medium ">Mục bài viết:</label>
                  <select
                    className="outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
                    onChange={(e) =>
                      setFormSmartContract({
                        ...formSmartContract,
                        parenturl: e.target.value,
                      })
                    }
                  >
                    <option> -- Chọn mục bài viết --</option>

                    {TypeProductItems.slice(0, TypeProductItems.length - 1).map(
                      (item, idx) => (
                        <option
                          key={idx}
                          className=" outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
                          value={item.value}
                        >
                          {item.label}
                        </option>
                      )
                    )}
                  </select>
                </div>
                <div className="flex flex-col gap-2 w-[190px]">
                  <label className="text-md font-medium ">Loại bài viết</label>
                  <Select
                    style={{ width: "100%" }}
                    placeholder="Chọn loại bài viết"
                    onChange={(values) =>
                      setForm({ ...formSmartContract, typeurl: values })
                    }
                    optionLabelProp="label"
                  >
                    {productTypes
                      ?.filter(
                        (item: any) =>
                          item.parentUrl === formSmartContract.parenturl
                      )
                      .map((item: any, idx: any) => (
                        <Option value={item.type} label={item.type} key={idx}>
                          <Space>{item.type}</Space>
                        </Option>
                      ))}
                  </Select>
                </div>
              </div>

              <div className="  flex flex-col gap-3">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex flex-col gap-2">
                    <label className="text-md font-medium ">
                      Thông số giày
                    </label>
                    <div
                      className="py-3 bg-gray-100 text-center hover:bg-gray-200 duration-300"
                      onClick={() => setOpenFunction(true)}
                    >
                      Thêm thông số giày
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-md font-medium ">Cấp giày</label>
                    <div>
                      <Radio.Group
                        onChange={(e) =>
                          setForm({
                            ...formSmartContract,
                            level: e.target.value,
                          })
                        }
                        value={form.level}
                      >
                        <Radio value={"1"}>1</Radio>
                        <Radio value={"2"}>2</Radio>
                        <Radio value={"3"}>3</Radio>
                      </Radio.Group>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 mt-10 w-full justify-center">
            <button
              onClick={() => handleDiscard()}
              type="button"
              className="border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
            >
              Xóa
            </button>
            <button
              type="submit"
              className="bg-[#df6cad] hover:bg-red-500 focus:outline-none focus:shadow-outline text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
            >
              Tải lên
            </button>
          </div>
        </form>

        <AiFillCloseCircle
          className="absolute -top-5 -right-5 text-[40px] border-white border-4 bg-black rounded-3xl text-white "
          onClick={() => {
            setDropDown("");
          }}
        />
      </div>
      <>
        <Drawer
          title="Thêm thông tin giày"
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
          width={800}
        >
          <TextEditor
            onChange={(values: any) =>
              setForm({ ...form, introduction: values })
            }
            initialValue={initial1}
          />
        </Drawer>
      </>
      <>
        <Drawer
          title="Thêm mô tả giày"
          placement="right"
          onClose={() => setOpenDescription(false)}
          open={openDescription}
          width={800}
        >
          <TextEditor
            onChange={(values: any) =>
              setForm({ ...form, description: values })
            }
            initialValue={initDescribe}
          />
        </Drawer>
      </>

      <>
        <Drawer
          title="Thêm mô tả giày"
          placement="right"
          onClose={() => setOpenFunction(false)}
          open={openFunction}
          width={800}
        >
          <Input
            text="Tốc độ tối đa (Km/h)"
            Value={formSmartContract.limitspeed}
            setValue={(e: any) =>
              handleSmartContractFormFieldChange("limitspeed", e)
            }
          />
          <Input
            text="Quãng đường tối đa (Km)"
            Value={formSmartContract.limitdistance}
            setValue={(e: any) =>
              handleSmartContractFormFieldChange("limitdistance", e)
            }
          />
          <Input
            text="Tỷ lệ coin nhận được  "
            Value={formSmartContract.limitcoinearning}
            setValue={(e: any) =>
              handleSmartContractFormFieldChange("limitcoinearning", e)
            }
          />
          <Input
            text="Thời gian giữa các lần chạy (phút)"
            Value={formSmartContract.limittime}
            setValue={(e: any) =>
              handleSmartContractFormFieldChange("limittime", e)
            }
          />

          <div className="flex flex-col gap-3 p-6 border rounded-xl">
            <Checkbox
              onChange={(e) =>
                setFormSmartContract({
                  ...formSmartContract,
                  nightmode: e.target.checked,
                })
              }
            >
              Night Mode
            </Checkbox>
            <Checkbox
              onChange={(e) =>
                setFormSmartContract({
                  ...formSmartContract,
                  test: e.target.checked,
                })
              }
            >
              Thử Nghiệm
            </Checkbox>
            <Checkbox
              onChange={(e) => setForm({ ...form, test: e.target.checked })}
              defaultChecked={form.test}
            >
              Trạng thái
            </Checkbox>
          </div>
        </Drawer>
      </>
    </div>
  );
};

export default AddProduct;
