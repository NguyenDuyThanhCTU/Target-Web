import React from "react";
import { getDataByTypeProps } from "@components/lib/get-data";
import PostsCategory from "@components/client/Posts/PostsCategory";
import ThemeLayout from "@components/items/ThemeLayout";

const PostsPage = async ({ params }: { params: { slug: string } }) => {
  const Data = await getDataByTypeProps("posts", "url", params.slug);

  const markup = { __html: Data[0]?.content };

  return (
    <ThemeLayout>
      <div className=" bg-no-repeat bg-cover bg-[url(https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/9.jpg?alt=media&token=41b38725-8996-48c6-93aa-542687df6bf0)] ">
        <div className="bg-[rgba(255,255,255,0.8)] ">
          <div className="p:w-auto d:w-[1470px] p:mx-2 d:mx-auto grid p:grid-cols-1 d:grid-cols-5 gap-10 py-10">
            <div className="flex flex-col gap-5">
              <div className="border h-max border-gray-400">
                <PostsCategory />
              </div>
            </div>
            <div className="col-span-4">
              <div className="  ">
                <h1 className="text-[28px] font-semibold">{Data[0]?.topic}</h1>
                {Data.content ? (
                  <>
                    {" "}
                    <div
                      dangerouslySetInnerHTML={markup}
                      className="mt-5"
                    ></div>
                  </>
                ) : (
                  <>
                    <div>Bài viết đang cập nhật</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeLayout>
  );
};

export default PostsPage;
