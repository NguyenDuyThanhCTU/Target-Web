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
};

export const ContractContext = createContext<ContractContextType>({
  address: "",
  contract: "",
  connect: () => {},
  createShoe: () => {},
});

export const ContractProvider: React.FC<Props> = ({ children }) => {
  const { contract } = useContract(
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

  return (
    <ContractContext.Provider
      value={{ address, contract, connect, createShoe: publishShoe }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export const useSmartContract = () => useContext(ContractContext);
