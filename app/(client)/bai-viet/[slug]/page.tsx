import React from "react";
import { getDataByTypeProps } from "@components/lib/get-data";
import { useRouter } from "next/navigation";
import PostsCategory from "@components/client/Posts/PostsCategory";
import ThemeLayout from "@components/items/ThemeLayout";

const PostsPage = async ({ params }: { params: { slug: string } }) => {
  const Data = await getDataByTypeProps("posts", "url", params.slug);
  const markup = { __html: Data[0]?.content };

  return (
    <ThemeLayout>
      <div className="p:w-auto d:w-[1470px] p:mx-2 d:mx-auto grid p:grid-cols-1 d:grid-cols-5 font-LexendDeca font-extralight gap-10">
        <div className="border h-max border-gray-400">
          <PostsCategory />
        </div>
        <div className="col-span-4">
          <div className="font-LexendDeca font-extralight ">
            <h1 className="text-[28px] font-semibold">{Data[0]?.topic}</h1>
            <div dangerouslySetInnerHTML={markup} className="mt-5"></div>
          </div>
        </div>
      </div>
    </ThemeLayout>
  );
};

export default PostsPage;
