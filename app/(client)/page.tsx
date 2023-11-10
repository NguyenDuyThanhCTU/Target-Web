import GetApp from "@components/client/Home/GetApp";
import Hero from "@components/client/Home/Hero";
import HomeNews from "@components/client/Home/HomeNews";
import HomeProducts from "@components/client/Home/HomeProducts";
import { ProductFunction } from "@components/client/Home/ProductFunction";
import ProductType from "@components/client/Home/ProductType";
import { getDataByTypeProps } from "@components/lib/get-data";

const HomePage = async () => {
  const Data = await getDataByTypeProps("posts", "topic", "Tin tức");

  return (
    <div className="bg-cover bg-fixed bg-[url(https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/UI%2Fphoto_2023-11-10_08-27-17.jpg?alt=media&token=2824aa59-45ef-4eb4-9857-9431a81b310https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/UI%2Fphoto_2023-10-23_14-02-31.jpg?alt=media&token=7832b674-a9be-434d-a524-d04c8e5a3d50)]">
      <div className="bg-fixed bg-[rgba(255,255,255,0.71)]">
        {/* <Hero />
        <HomeProducts />
        <ProductFunction /> */}
        <ProductType />
        <HomeNews Data={Data} />
        <GetApp />
      </div>
    </div>
  );
};

export default HomePage;
