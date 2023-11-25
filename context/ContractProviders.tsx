"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { BaseContract, ethers } from "ethers";
import { EditionMetadataWithOwnerOutputSchema } from "@thirdweb-dev/sdk";

interface Props {
  children: React.ReactNode;
}

export type ContractContextType = {
  Shoes: any[];
  setShoes: (value: any[]) => void;
  address?: string;
  contract?: any;
  connect: () => any;
  createShoe: (form: any) => void;
  getShoes: () => any;
  getShoe: (pId: any) => any;
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
});

export const ContractProvider: React.FC<Props> = ({ children }) => {
  const [Shoes, setShoes] = useState<any[]>([]);
  const { contract }: any = useContract(
    "0x1006C5D5e1EC1710686cCf8eE34ffd8Db9096e68"
  );
  const { mutateAsync: createShoe } = useContractWrite(contract, "createShoe");

  const address = useAddress();
  const connect = useMetamask();

  const publishShoe = async (form: any) => {
    try {
      const data: any = await createShoe({
        args: [
          address, // owner
          form.name,
          form.url,
          form.image,
          form.price,
          form.level,
        ],
      });

      console.log("contract call success", data);
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

  const fetchCampaigns = async () => {
    const data = await getShoes();
    setShoes(data);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <ContractContext.Provider
      value={{
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
