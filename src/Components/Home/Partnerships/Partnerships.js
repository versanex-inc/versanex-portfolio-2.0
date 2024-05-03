import React from "react";
import "./Partnerships.css";
import Image from "next/image";

const Partnerships = () => {
  // Assuming you have an array of partner images
  const partnerImages = [
    "/imgs/partners/partnerone.png",
    "/imgs/partners/partnertwo.png",
    "/imgs/partners/partnerthree.png",
    "/imgs/partners/partnerfour.png",
    "/imgs/partners/partnerfive.png",
    "/imgs/partners/partnersix.png",
    // Add more partner image paths as needed
  ];

  // Duplicate partner images to create a loop
  const duplicatePartnerImages = [...partnerImages, ...partnerImages, ...partnerImages];

  return (
    <section className="container partnerships">
      <h1 className="heading partnerships_heading">Featured Partners</h1>
      <h2 className="sub_heading partnerships_subheading">
        Leading review and rating platforms say we are the top development
        company. We don’t mind.
      </h2>
      <div className="partners">
        {duplicatePartnerImages.map((partner, index) => (
          <div className="partner" key={index}>
            <Image src={partner} alt="partnerimg" width={1000} height={1000} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partnerships;
