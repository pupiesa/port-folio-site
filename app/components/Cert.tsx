import React from "react";
import CircularGallery from "./CircularGallery";
import { lateef } from "../fonts";

const Cert = () => {
    return (
        <>
            {/* certificate */}
            <div className={`${lateef.className} text-center mt-4`}>
                <div className="font-bold text-[4rem]">My Certificates</div>
            </div>
            <div style={{ height: "600px", position: "relative" }} className="mt-[-4rem] px-1">
                <CircularGallery
                    items={[
                        {
                            image: "/cert/intro.svg",
                            text: "1#Intro Frontend dev",
                            link: "https://coursera.org/share/dc6a55b79042aa0488be3c06e840ee24",
                        },
                        {
                            image: "/cert/js.svg",
                            text: "2#Js programming",
                            link: "https://www.coursera.org/account/accomplishments/verify/OZ2F1YMQGFB3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
                        },
                        {
                            image: "/cert/git.svg",
                            text: "3#Version control",
                            link: "https://coursera.org/share/e654578c58c94b144f74f77eb9397755",
                        },
                        {
                            image: "/cert/depth.svg",
                            text: "4#Html Css in depth",
                            link: "https://coursera.org/share/3d1dd6165fe29b3979b2aa740516d4f2",
                        },
                    ]}
                />
            </div>
        </>
    );
};

export default Cert;
