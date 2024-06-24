'use client'
import React, { useState } from "react";
import Image from "next/image";
import "./slug_page.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdReply } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import '../slug_page.css'

const Comment_section = () => {
  return (
    <div>
       <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorem est neque reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni asperiores reiciendis fugiat voluptate necessitatibus. Quis eaque tempora ipsa maiores atque. Illo perspiciatis rerum quia
                tempora fuga amet eveniet.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                illo quasi dolore cumque consequuntur beatae autem deserunt
                reiciendis unde mollitia debitis at itaque nihil dicta odio vel,
                obcaecati tempor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, et quasi iure facere iste quod suscipit dicta ipsam hic asperiores vero earum natus necessitatibus distinctio sit? Quod quis blanditiis beatae quasi, eveniet voluptatum magni aspernatur ab ipsam similique alias autem?ibus velit?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae cupiditate voluptatibus adipisci nisi tempore
                repudiandae soluta ab dignissimos inventore iusto!
              </p>
 <div className="blog_read_page_text_more_dets">
              <h1>Some More details</h1>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum  Lorem, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, neque. ipsum dolor.dolor sit amet.</li>
                <li>Lorem, ipsum dolor.Lorem ipsum dolor sit amet  Lorem ipsum dolor sit..</li>
                <li>Lorem ipsum dolor sit amet. ipsum dolor sit amelore Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae accusantium voluptatem tempore assumenda neque commodi, unde error officia pariatur voluptate.t.</li>
                <li>Lorem ipsum dolor Lorem ipsum dolor sit.sit amet.</li>
              </ul>
            </div>
      {/* afdskjf  */}
         <div className="blog_newsletter_sectionn">
            <div className="blog_newsletter_sectionn_card_main">
              <div className="blog_newsletter_sectionn_card">
                <div className="blog_card_img">
                    <Image
                    src={"/imgs/envalop.png"}
                    height={100}
                    width={100}
                    alt="Envalop pmg"
                    ></Image>
                </div>
                <div className="blog_card_content">
                    <h1>SUBSCRIBE</h1>
                    <p>Subscribe to our newsletter & stay update</p>
                </div>
                <div className="blog_card_buttons">
                  <div className="blog_card_buttons_input_email">
                    <span><FaRegEnvelope/></span>
                    <input type="text" placeholder="Your Email" />
                  </div>
                  <button>Submit</button>

                </div>
              </div>

            </div>
          </div>
          <div className="blog_coment_section">
            {/* <!-- Contenedor Principal --> */}
            <div class="blog_comments-container">
              <h1>Comment Section</h1>
                <div className="blog_comentbox">
                  <div className="cometbox_main">
                    <div  onFocus={toggleonclick} className={`cometbox_main_input ${onclickhover ? 'hovercomentbox' : ''}`}  >
                    <input type="text"placeholder="Enter Your comment here"/>
                    <div className="comentbox_bnt">
                      <button>Post</button>
                    </div>
                    </div>
                  </div>
                </div>

               
                <ul id="comments-list" class="blog_comments-list">

                {/* ------------------------------- */}
{/* ---------------------------------------------- */}
                <li>
                  <div class="blog_comment-main-level">
                    {/* <!-- Avatar --> */}
                    <div class="blog_comment-avatar">
                      <Image
                        src={"/imgs/im2.png"}
                        height={50}
                        width={50}
                        alt="profile avatar"
                      ></Image>
                    </div>
                    {/* <!-- Contenedor del Comentario --> */}
                    <div class="blog_comment-box">
                      <div class="blog_comment-head">
                        <h6 class="blog_comment-name by-author">Fahad Joyia</h6>
                        <span>Joyia 20 minutos</span>
                        <div className="coment_sect_icons">
                        <MdReply onClick={toggleonclickshowcoment} className="Button_for_opening_reply_box"/>
                        <FaHeart />
                      </div>
                      </div>
                      <div class="blog_comment-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Velit omnis animi et iure laudantium vitae,
                        praesentium optio, sapiente distinctio illo?
                      </div>
                    </div>
                  </div>
                  <div className={`openthisreplycoment${onclickshowcoment ? 'openreplycoment' : ''}`}>
                  <div className="onclickreplyinput">
                  <div className="onclickreplyinputsection">
                    <input type="text" placeholder="Write your reply"/>
                    <span><FaLocationArrow/></span>
                  </div>
                </div>
                </div>
                  {/* <!-- Respuestas de los comentarios --> */}
                  <ul class="blog_comments-list blog_reply-list rep">
                    <li>
                      {/* <!-- Avatar --> */}
                      <div class="blog_comment-avatar">
                        <Image
                          src={"/imgs/im2.png"}
                          height={50}
                          width={50}
                          alt="profile avatar"
                        />
                      </div>
                      {/* <!-- Contenedor del Comentario --> */}
                      <div class="blog_comment-box">
                        <div class="blog_comment-head">
                          <h6 class="blog_comment-name">Hisham</h6>
                          <span>Hisham 10 minitus</span>
                          <div className="coment_sect_icons">
                        <MdReply onClick={toggleonclickshowcoment1} className="Button_for_opening_reply_box"/>
                        <FaHeart />
                      </div>
                        </div>
                        <div class="blog_comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Velit omnis animi et iure laudantium vitae,
                          praesentium optio, sapiente distinctio illo?
                        </div>
                      </div>
                    </li>
                    <div className={`openthisreplycoment${onclickshowcoment1 ? 'openreplycoment' : ''}`}>
                  <div className="onclickreplyinput">
                  <div className="onclickreplyinputsection">
                    <input type="text" placeholder="Write your reply"/>
                    <span><FaLocationArrow/></span>
                  </div>
                </div>
                </div>
                    <li>
                      {/* <!-- Avatar --> */}
                      <div class="blog_comment-avatar">
                        <Image
                          src={"/imgs/im2.png"}
                          height={50}
                          width={50}
                          alt="profile avatar"
                        />
                      </div>
                      {/* <!-- Contenedor del Comentario --> */}
                      <div class="blog_comment-box">
                        <div class="blog_comment-head">
                          <h6 class="blog_comment-name by-author">
                            Fahad Joyia
                          </h6>
                          <span>Joyia 10 minutos</span>
                          <div className="coment_sect_icons">
                        <MdReply onClick={toggleonclickshowcoment2} className="Button_for_opening_reply_box"/>
                        <FaHeart />
                      </div>
                        </div>
                        <div class="blog_comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Velit omnis animi et iure laudantium vitae,
                          praesentium optio, sapiente distinctio illo?
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <div className={`openthisreplycoment${onclickshowcoment2 ? 'openreplycoment' : ''}`}>
                  <div className="onclickreplyinput">
                  <div className="onclickreplyinputsection">
                    <input type="text" placeholder="Write your reply"/>
                    <span><FaLocationArrow/></span>
                  </div>
                </div>
                </div>
                <li>
                  <div class="blog_comment-main-level">
                    {/* <!-- Avatar --> */}
                    <div class="blog_comment-avatar">
                      <Image
                        src={"/imgs/im2.png"}
                        height={50}
                        width={50}
                        alt="profile avatar"
                      />
                    </div>
                    {/* <!-- Contenedor del Comentario --> */}
                    <div class="blog_comment-box">
                      <div class="blog_comment-head">
                        <h6 class="blog_comment-name">Mazz Jutt</h6>
                        <span>Maaz 10 minutos</span>
                        <div className="coment_sect_icons">
                        <MdReply onClick={toggleonclickshowcoment3} className="Button_for_opening_reply_box"/>
                        <FaHeart />
                      </div>
                      </div>
                      <div class="blog_comment-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Velit omnis animi et iure laudantium vitae,
                        praesentium optio, sapiente distinctio illo?
                      </div>
                    </div>
                  </div>
                </li>
                <div className={`openthisreplycoment${onclickshowcoment3 ? 'openreplycoment' : ''}`}>
                  <div className="onclickreplyinput">
                  <div className="onclickreplyinputsection">
                    <input type="text" placeholder="Write your reply"/>
                    <span><FaLocationArrow/></span>
                  </div>
                </div>
                </div>
              </ul>
            </div>
          </div>
    </div>
  )
}

export default Comment_section