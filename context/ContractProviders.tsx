"use client";
import React, { createContext, useContext, useState } from "react";
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
  address?: string;
  contract?: any;
  connect: () => any;
  createShoe: (form: any) => void;
  getShoes: () => any;
  getShoe: (pId: any) => any;
};

export const ContractContext = createContext<ContractContextType>({
  address: "",
  contract: "",
  connect: () => {},
  createShoe: () => {},
  getShoes: () => {},
  getShoe: () => {},
});

export const ContractProvider: React.FC<Props> = ({ children }) => {
  const { contract }: any = useContract(
    "0xb73B22e75028C24A81B6F4A5052AaBb9B08cd97C"
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
          form.typeurl,
          form.parenturl,
          form.limitspeed,
          form.limitdistance,
          form.limitcoinearning,
          form.limittime,
          form.nightmode,
          form.test,
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
      typeurl: shoe.typeurl,
      parenturl: shoe.parenturl,
      limitspeed: shoe.limitspeed,
      limitdistance: shoe.limitdistance,
      limitcoinearning: shoe.limitcoinearning,
      limittime: shoe.limittime,
      nightmode: shoe.nightmode,
      test: shoe.test,
      level: shoe.level,
      pId: i,
    }));

    return parsedShoes;
  };

  const getShoe = async (pId: any) => {
    const shoes = await contract.call("getShoe", [pId]);

    return shoes;
  };

  return (
    <ContractContext.Provider
      value={{
        getShoe,

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
