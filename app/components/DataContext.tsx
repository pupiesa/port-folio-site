'use client'
import React, { createContext, ReactNode } from 'react';
import axios from 'axios';
import useSWR from 'swr';

interface DataContextProps {
  data1: any[];
  data2: any[];
  data3: any[];
}

export const DataContext = createContext<DataContextProps | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const { data: data1, error: error1 } = useSWR('https://api.sheety.co/d54e9a5acaa281d75ae637b433a3d09d/test/about', fetcher);
  const { data: data2, error: error2 } = useSWR('https://api.sheety.co/d54e9a5acaa281d75ae637b433a3d09d/test/projects', fetcher);
  const { data: data3, error: error3 } = useSWR('https://api.sheety.co/d54e9a5acaa281d75ae637b433a3d09d/test/cert', fetcher);

  if (error1 || error2 || error3) return <div>Error loading data</div>;
  if (!data1 || !data2 || !data3) return <div>Loading...</div>;

  return (
    <DataContext.Provider value={{ data1, data2, data3 }}>
      {children}
    </DataContext.Provider>
  );
};