"use client";
import { Tooltip } from "antd";
import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

interface IconProps {
  className?: string;
}

interface CardProps {
  title: string;
  Icon?: React.ComponentType<IconProps>;
  ToolsTips: any;
  image: string;
  style: string;
  setSelected: React.Dispatch<React.SetStateAction<number | undefined>>;
  idx: number;
  setChange: React.Dispatch<React.SetStateAction<string>>;
  isSelected: number | undefined;
  HandleUpdate: (idx: number) => void;
  placeholder: string;
}

const Card: React.FC<CardProps> = ({
  title,
  ToolsTips,
  Icon,
  image,
  style,
  setSelected,
  idx,
  setChange,
  isSelected,
  HandleUpdate,
  placeholder,
}) => {
  return (
    <div className="py-3 flex flex-col gap-5 bg-[#353535] rounded-md justify-between shadow-xl cursor-pointer hover:shadow-slate-600 duration-300">
      <div className="">
        <div className="flex justify-between items-center mb-4  mx-5">
          <h3>{title}</h3>
          {Icon && <Icon className={`text-[25px] p-1 ${style}`} />}
        </div>
        <div>
          <img
            src={image}
            alt="img"
            className="h-[193px] w-full object-cover"
          />
        </div>
      </div>
      <div className="mx-2 ">
        <div className="flex justify-between items-center mb-4">
          <h3 className="italic">{title}</h3>
          <Tooltip title={ToolsTips} color="#2db7f5">
            <AiOutlineQuestionCircle className=" text-[24px] mr-2" />
          </Tooltip>
        </div>
        <div className="" onClick={() => setSelected(idx)}>
          <input
            type="text"
            placeholder={placeholder}
            className="outline-none text-black py-2 px-3 rounded-md w-full"
            onChange={(e) => setChange(e.target.value)}
          />
        </div>
      </div>
      {isSelected === idx ? (
        <div
          className="text-center duration-300 uppercase py-2 border mx-2 bg-purple hover:bg-purpleAdmin hover:text-purpleHover hover:border-purpleHover text-blueAdmin border-blueAdmin "
          onClick={() => HandleUpdate(idx)}
        >
          Cập nhật
        </div>
      ) : (
        <div className="text-center duration-300 uppercase py-2 border mx-2 bg-purple  ">
          Cập nhật
        </div>
      )}
    </div>
  );
};

export default Card;
