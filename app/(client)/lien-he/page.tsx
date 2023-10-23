import Contact from "@components/client/Contact/Contact";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div className="flex flex-col d:w-[1300px] d:mx-auto p:w-auto p:mx-2 py-5">
        <>
          <Contact />
        </>
      </div>
    </div>
  );
};

export default ContactPage;
