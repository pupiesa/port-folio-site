'use client'
import React, { createContext, ReactNode } from 'react';
import axios from 'axios';
import useSWR from 'swr';

interface DataContextProps {
  data1: object;
  data2: object;
  data3: object;
}

export const DataContext = createContext<DataContextProps | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const { data: data1, error: error1 } = useSWR('https://script.google.com/macros/s/AKfycbzqYoGv1ezwof3etUwpd2i8O41RPmPyeASs_aBJA8swk2KgP63dd4VRhyrSI91SbKBV-w/exec', fetcher);
  const { data: data2, error: error2 } = useSWR('https://script.google.com/macros/s/AKfycbwqU6nHMVeQA_Gw6vAOdWsQMg-thMtKw7RDQmlVvX4XPCIDp3P0VioIMaS2SoSlGAGyQQ/exec', fetcher);
  const { data: data3, error: error3 } = useSWR('https://script.google.com/macros/s/AKfycbxNoxm7-oMm3GB1cK1trsaByM8hT5sSDeCP6KviVNLkX6MUBMM0GjrZf_ms-DZNoBSD0Q/exec', fetcher);
  if (error1 || error2 || error3) return <div>Error loading data</div>;
  if (!data1 || !data2 || !data3) return <div>Loading...</div>;

  return (
    <DataContext.Provider value={{ data1,data2,data3}}>
    {children}
    </DataContext.Provider>
  );
};