"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

interface Props {
  children: React.ReactNode;
}

export type ContractContextType = {
  Shoes: any[];
  setShoes: (value: any[]) => void;
  address?: string;
  contract?: any;
  connect: () => any;
  createShoe: (form: any) => any;
  getShoes: () => any;
  getShoe: (pId: any) => any;
  buyShoe: (pId: any, price: any) => any;
  countShoes: () => any;
  transfer: (receiver: any, amount: any) => any;
};

export const ContractContext = createContext<ContractContextType>({
  Shoes: [],
  setShoes: () => {},
  address: "",
  contract: "",
  connect: () => {},
  createShoe: () => {},
  getShoes: () => {},
  getShoe: () => {},
  buyShoe: () => {},
  countShoes: () => {},
  transfer: () => {},
});

export const ContractProvider: React.FC<Props> = ({ children }) => {
  const [Shoes, setShoes] = useState<any[]>([]);
  const { contract }: any = useContract(
    "0x53b8543a8dEcAa8991ad159047Ce2bF4712122a3"
  );
  const { mutateAsync: createShoe } = useContractWrite(contract, "createShoe");

  const address = useAddress();
  const connect = useMetamask();

  const publishShoe = async (form: any) => {
    try {
      const data: any = await createShoe({
        args: [
          address,
          form.name,
          form.url,
          form.image,
          form.price,
          form.level,
        ],
      });
      return data;
    } catch (error) {
      console.log("contract call failure", error);
    }
  };

  const getShoes = async () => {
    const shoes = await contract.call("getAllShoes");

    const parsedShoes = shoes.map((shoe: any, i: any) => ({
      owner: shoe.owner,
      name: shoe.name,
      url: shoe.url,
      image: shoe.image,
      price: shoe.price,
      level: shoe.level,
      pId: i,
    }));

    return parsedShoes;
  };

  const getShoe = async (pId: any) => {
    const shoes = await contract.call("getShoe", [pId]);

    return shoes;
  };

  const buyShoe = async (pId: any, price: any) => {
    const data = await contract.call("donateToCampaign", [pId], {
      value: ethers.utils.parseEther(price),
    });

    return data;
  };

  const countShoes = async () => {
    const count = await contract.call("getShoeCount");
    const parsedCount: any = ethers.utils.formatEther(count);
    let result = Math.round(parsedCount * 1000000000000000000);
    return result;
  };

  const fetchCampaigns = async () => {
    const data = await getShoes();
    setShoes(data);
  };

  //Write a transfer function Based on contract:
  //   function transferTo(address payable _receiver) external payable {
  //     require(msg.value > 0, "Transfer amount must be greater than 0");
  //     require(_receiver != address(0), "Invalid receiver address");

  //     (bool sent, ) = _receiver.call{value: msg.value}("");
  //     require(sent, "Failed to send Ether");
  // }
  const transfer = async (receiver: any, amount: any) => {
    const data = await contract.call("transferTo", [receiver], {
      value: ethers.utils.parseEther(amount),
    });
    return data;
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <ContractContext.Provider
      value={{
        transfer,
        countShoes,
        buyShoe,
        getShoe,
        Shoes,
        setShoes,
        address,
        contract,
        connect,
        createShoe: publishShoe,
        getShoes,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export const useSmartContract = () => useContext(ContractContext);
