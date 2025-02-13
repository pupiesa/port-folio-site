'use client'
import React,{ useContext} from "react";
import { DataContext } from "./DataContext";
import CircularGallery from "./CircularGallery";
import { lateef } from "../fonts";

interface DataContextProps {
    key: any;
  }

const Cert = () => {
    const myContext = useContext(DataContext);
    const about = (myContext?.data1 as { about?: any })?.about
    const items = (myContext?.data3 as { cert?: any })?.cert
   
    const mappedItems = items?.map((item: any) => ({
        image: item.image,
        text: item.text,
        link: item.link,
      })) || [];
    return (
        <>
            {/* certificate */}
            <div className={`${lateef.className} text-center mt-4`}>
                <div className="font-bold text-[4rem]">{about ? about[3].value : ""}</div>
            </div>
            <div style={{ height: "600px", position: "relative" }} className="mt-[-4rem] px-1">
                <CircularGallery
                    items={mappedItems}
                />
            </div>
        </>
    );
};

export default Cert;
