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
  connect?: () => void;
  createCampaign?: (form: any) => void;
};

export const ContractContext = createContext<ContractContextType>({
  address: undefined,
  contract: undefined,
  connect: undefined,
  createCampaign: undefined,
});

export const ContractProvider: React.FC<Props> = ({ children }) => {
  const { contract } = useContract(
    "0xf59A1f8251864e1c5a6bD64020e3569be27e6AA9"
  );
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );

  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (form: any) => {
    try {
      const data = await createCampaign({
        args: [
          address, // owner
          form.title, // title
          form.description, // description
          form.target,
          new Date(form.deadline).getTime(), // deadline,
          form.image,
        ],
      });

      console.log("contract call success", data);
    } catch (error) {
      console.log("contract call failure", error);
    }
  };

  return (
    <ContractContext.Provider
      value={{ address, contract, connect, createCampaign: publishCampaign }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export const useSmartContract = () => useContext(ContractContext);
