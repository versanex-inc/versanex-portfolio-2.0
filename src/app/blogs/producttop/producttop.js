import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./producttop.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

const producttop = () => {
  return (
    <>
      <div className="container">
        <div className="prod_topheading">
          <h1>Best of the week</h1>
          <div className="prod_topheadinglink">
            <Link href={"/"}>See Posts </Link>
            <FaArrowRightLong className="topheading" />
          </div>
        </div>
        <div className="bg_prod_mainpage">
          <div className="pg_left">
            <div className="pg_left_mainimage">
              <Image
                src={"/imgs/H_resolution.jpg"}
                height={4500}
                width={4500}
                objectFit="contain"
              />
              <div className="leftimgcontent">
                <div className="leftconbtns">
                  <div className="leftconbtn1">
                    <span>New Outfits</span>
                  </div>
                  <div className="leftconbtn2">
                    <span>Trending</span>
                  </div>
                </div>
                <div className="prod_rightcontent">
                  <span className="prod_rightcontenttopspan"><p>Travel</p></span>
                  <span><h1>Get to your dream now</h1></span>
                  <span><h1>destination with</h1></span>
                  <span className="prod_rightcontentbottomspan"><h1>TravelPro</h1></span>
                </div>
                <div className="prod_rightcontentarrow">
                  <BiSolidRightTopArrowCircle/>
                </div>
              </div>
            </div>
          </div>
          <div className="pg_right">
            <div className="pg_rigt_top">
              <Image
                src={"/imgs/flash.webp"}
                height={300}
                width={300}
                objectFit="contain"
              />
                 <div className="rightimgsecimgicon">
                  <IoArrowForwardCircleOutline/>
                  </div>
                  <div className="rightimgsecimgiconbtn">
                    <h1>Show all picks
                    <FaArrowRightLong/></h1>
                  </div>
            </div>
            <div className="pg_right_bottom">
              <Image
                src={"/imgs/flash.webp"}
                height={300}
                width={300}
                objectFit="contain"
              />
                <div className="rightimgsecimgicon">
                  <IoArrowForwardCircleOutline/>
                  </div>
                  <div className="rightimgsecimgiconbtn">
                    <h1>Show all picks
                    <FaArrowRightLong/></h1>
                  </div>
            </div>
          </div>
        </div>
      </div>

      </>
  );
};

export default producttop;










    // <>
    //   <div className="container">
    //         <div className="prod_topheading">
    //           <h1>Best of the week</h1>
    //           <div className="prod_topheadinglink">
    //             <Link href={"/"}>See Posts </Link>
    //             <FaArrowRightLong className="topheading" />
    //           </div>
    //         </div>
    //     <div className="prod_mainpage">
    //       <div className="left">
    //         <div className="left_mainimage">
              
    //           <Image
    //             src={"/imgs/H_resolution.jpg"}
    //             height={4500}
    //             width={4500}
    //             objectFit="contain"
    //           />
    //           <div className="leftimgcontent">
    //             <div className="leftconbtns">
    //               <div className="leftconbtn1">
    //                 <span>New Outfits</span>
    //               </div>
    //               <div className="leftconbtn2">
    //                 <span>Trending</span>
    //               </div>
    //             </div>
    //             <div className="prod_rightcontent">
    //               <span className="prod_rightcontenttopspan"><p>Travel</p></span>
    //               <span><h1>Get to your dream now</h1></span>
    //               <span><h1>destination with</h1></span>
    //               <span className="prod_rightcontentbottomspan"><h1>TravelPro</h1></span>
    //             </div>
    //             <div className="prod_rightcontentarrow">
    //               <BiSolidRightTopArrowCircle/>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="right">
    //         <div className="rightsecmain">
    //           <div className="rightimgsec">
    //             <div className="rightimgseccontentcard">
    //               <div className="productcardtop">
    //                 <div className="prd_leftbox">
    //                   <span className="aos">  <span></span>  AOS</span>
    //                 </div>
    //                 <div className="prd_rigtbox">
    //                   <FaArrowCircleRight/>
    //                 </div>
    //               </div>
    //               <div className="prod_fheading">
    //                 Become A <span>pinkpenther</span>
    //               </div>
    //               <div className="prod_sheading">
    //                 Real talk in a<span>corporate world</span>
    //               </div>
    //               <div className="prod_rightimgseccontentcardbtn">
    //                 <Link href={"/"}>Load more</Link>
    //               </div>
    //             </div>
    //             <div className="rightimgsecimg">
    //               <Image
    //                 src={"/imgs/flash.webp"}
    //                 height={300}
    //                 width={300}
    //                 objectFit="contain"
    //               />
    //               <div className="rightimgsecimgicon">
    //               <IoArrowForwardCircleOutline/>
    //               </div>
    //               <div className="rightimgsecimgiconbtn">
    //                 <h1>Show all picks
    //                 <FaArrowRightLong/></h1>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>

