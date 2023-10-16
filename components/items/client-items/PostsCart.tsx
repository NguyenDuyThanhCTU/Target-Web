import Link from "next/link";
import React from "react";

const PostCart = ({ url, image, title }: any) => {
  return (
    <Link href={`/bai-viet/${url}`}>
      <div className="w-full overflow-hidden">
        <img
          src={image}
          alt="Handbook Cart"
          className="hover:scale-110 duration-300"
        />
      </div>
      <h2 className="text-center font-bold text-[18px] hover:text-mainorange py-1 uppercase">
        {title}
      </h2>
    </Link>
  );
};

export default PostCart;
