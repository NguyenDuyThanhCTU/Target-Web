import DisplayProduct from "@components/client/Product/DisplayProduct";
import ThemeLayout from "@components/items/ThemeLayout";
import React from "react";

const ProductPage = () => {
  return (
    <ThemeLayout>
      <div className="w-full h-[45vh] ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/UI%2Fkanchanara-V9N2JGUx94I-unsplash.jpg?alt=media&token=eaade372-4b31-4107-a21f-93daef8ee806&_gl=1*1k4tk3l*_ga*MTAyMjQwNTAxNS4xNjk4MDI4NjI0*_ga_CW55HF8NVT*MTY5ODA0OTIyMC41LjEuMTY5ODA0OTQ2Mi4yMC4wLjA."
          alt="banner"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p:w-auto p:mx-2 d:w-[1460px] d:mx-auto">
        <DisplayProduct />
      </div>
    </ThemeLayout>
  );
};

export default ProductPage;
