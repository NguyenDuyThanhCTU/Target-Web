"use client";
import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export type StateContextType = {
  isDropDown: any;
  setDropDown: (dropdown: any) => void;
  isRefetch: any;
  setIsRefetch: (refetch: any) => void;
  isLoading: any;
  setIsLoading: (loading: any) => void;
  isSelected: any;
  setSelected: (selected: any) => void;
  Search: string;
  setSearch: (search: string) => void;
  OpenCart: boolean;
  setOpenCart: (openCart: boolean) => void;
  Refetch: any;
  setRefetch: (refetch: any) => void;
};

export const StateContext = createContext<StateContextType>({
  isDropDown: "",
  setDropDown: () => {},
  isRefetch: "",
  setIsRefetch: () => {},
  isLoading: [],
  setIsLoading: () => {},
  isSelected: 0,
  setSelected: () => {},
  Search: "",
  setSearch: () => {},
  OpenCart: false,
  setOpenCart: () => {},
  Refetch: "",
  setRefetch: () => {},
});

export const StateProvider = ({ children }: Props) => {
  const [isDropDown, setDropDown] = useState("");

  const [isRefetch, setIsRefetch] = useState("");
  //Refetch large data like products, posts
  const [Refetch, setRefetch] = useState("");

  const [isSelected, setSelected] = useState(0);
  const [Search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [OpenCart, setOpenCart] = useState(false);
  return (
    <StateContext.Provider
      value={{
        Refetch,
        setRefetch,
        OpenCart,
        setOpenCart,
        isSelected,
        setSelected,
        isDropDown,
        setDropDown,
        isRefetch,
        setIsRefetch,
        isLoading,
        setIsLoading,
        Search,
        setSearch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
