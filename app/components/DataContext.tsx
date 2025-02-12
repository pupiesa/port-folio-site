'use client'
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface DataContextProps {
  data1: any[];
  data2: any[];
}

export const DataContext = createContext<DataContextProps | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data1, setData1] = useState<any[]>([]);
  const [data2, setData2] = useState<any[]>([]);
  const aboutUrl = "https://api.sheety.co/d54e9a5acaa281d75ae637b433a3d09d/test/about";
  const projectUrl = "https://api.sheety.co/d54e9a5acaa281d75ae637b433a3d09d/test/projects";

  const callApi = async () => {
    try {
      const res1 = await axios.get(aboutUrl);
      const res2 = await axios.get(projectUrl);
      setData1(res1.data);
      setData2(res2.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <DataContext.Provider value={{ data1, data2 }}>
      {children}
    </DataContext.Provider>
  );
};