import React from "react";
import { getDataByTypeProps } from "@components/lib/get-data";
import PostsCategory from "@components/client/Posts/PostsCategory";
import ThemeLayout from "@components/items/ThemeLayout";

const PostsPage = async ({ params }: { params: { slug: string } }) => {
  const Data = await getDataByTypeProps("posts", "url", params.slug);
  const markup = { __html: Data[0]?.content };

  return (
    <ThemeLayout>
      <div className="p:w-auto d:w-[1470px] p:mx-2 d:mx-auto grid p:grid-cols-1 d:grid-cols-5 gap-10">
        <div className="flex flex-col gap-5">
          <div className="border h-max border-gray-400">
            <PostsCategory />
          </div>
          <div className="mt-5 overflow-hidden">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/UI%2Fphoto_2023-10-23_14-03-33.jpg?alt=media&token=1a1af3cb-aff5-4e94-bc25-8655c72b1d27&_gl=1*1k7bv8d*_ga*MTAyMjQwNTAxNS4xNjk4MDI4NjI0*_ga_CW55HF8NVT*MTY5ODA0MzU5My40LjEuMTY5ODA0NDYxOC41OC4wLjA."
              alt="category  "
              className=" shadow-2xl hover:scale-125 duration-1000 "
            />
          </div>
        </div>
        <div className="col-span-4">
          <div className="  ">
            <h1 className="text-[28px] font-semibold">{Data[0]?.topic}</h1>
            <div dangerouslySetInnerHTML={markup} className="mt-5"></div>
          </div>
        </div>
      </div>
    </ThemeLayout>
  );
};

export default PostsPage;
