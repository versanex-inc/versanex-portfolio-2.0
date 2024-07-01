import Image from 'next/image'
import React from 'react'
import { FaTwitter, FaFacebookF, FaRegEnvelope, FaHeart, FaLocationArrow } from "react-icons/fa";
const NewsLatter = () => {
  return (
    <div className="blog_newsletter_sectionn">
    <div className="blog_newsletter_sectionn_card_main">
      <div className="blog_newsletter_sectionn_card">
        <div className="blog_card_img">
          <Image
            src={"/imgs/envalop.png"}
            height={100}
            width={100}
            alt="Envalop pmg"
          />
        </div>
        <div className="blog_card_content">
          <h1>SUBSCRIBE</h1>
          <p>Subscribe to our newsletter & stay update</p>
        </div>
        <div className="blog_card_buttons">
          <div className="blog_card_buttons_input_email">
            <span><FaRegEnvelope /></span>
            <input type="text" placeholder="Your Email" />
          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewsLatter