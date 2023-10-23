import { useData } from "@context/DataProviders";
import { Modal } from "antd";
import React from "react";

const Contact = ({ setOpenContact, OpenContact }: any) => {
  const { ContactData } = useData();
  return (
    <>
      <Modal
        title="Liên hệ đặt hàng"
        open={OpenContact}
        onCancel={() => setOpenContact(false)}
        width={600}
        footer={null}
      >
        <h2 className="font-LexendDeca text-[24px] text-red-500 font-bold text-center">
          LIÊN HỆ HOTTLINE:{" "}
          <div
            className="text-red-600 underline"
            onClick={() => {
              window.open(`tel:${ContactData.phone}`, "_self");
            }}
          >
            {ContactData.phone}
          </div>
        </h2>
        <p>Trụ sở văn phòng: {ContactData.address}</p>
      </Modal>
    </>
  );
};

export default Contact;
