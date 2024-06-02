import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye, FaArrowRight } from "react-icons/fa";
import './Products.css'

const Products = () => {
  return (
    <section className="products">
      <div className="products_header">Header</div>
      <div className="all_products_showcase">
        <div className="ap_product">
          <div className="ap_product_img">
            <img
              src={
                // "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
                '/imgs/about.png'
              }
              alt="product"
            />
          </div>
          <div className="ap_product_details">
          <div className="ap_product_code_status">
            <p className="product_code">#7897</p>
            <p className="product_status">
            <span className="status_sale"></span> For Sale
            </p>
          </div>
          <div className="ap_listing_view">
            <Link className="ap_listing_view_btn view_listing" href={"/products/product-name"}>
              View Listing
              <span className="view_listing_icon">
                <FaArrowRight />
              </span>
            </Link>
            <Link className="ap_listing_view_btn view_project" href={"/products/product-name"}>
              Watch
              <span className="view_project_icon">
                <FaEye />
              </span>
            </Link>
          </div>
          <div className="ap_title_description">
            <span className="ap_title">
              <p className="ap_category">Website</p> |{" "}
              <p className="ap_subcategory">E-commerce</p>
            </span>
            <p className="ap_description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis quia quis eaque eligendi facere incidunt sit nobis
              vero saepe est rerum ab consequatur qui, id sapiente eius.
              Voluptatibus ut sequi a iusto neque, omnis quam, dolorum tempora
              inventore autem facere reiciendis officia error laborum, tempore
              aliquid quasi vel natus nam!
            </p>
            <Link href={"/products/product-name"} className='ap_read_more'>Read more</Link>
          </div>
          <div className="ap_price_level">
            <div className="ap_levels">
              <span className="ap_level ap_lowest">Basic</span>
              <span className="ap_level ap_medium">Intermediate</span>
              <span className="ap_level ap_high">Advance</span>
              <span className="ap_level ap_highest">Advance</span>
            </div>
            <div className="ap_level_price">
              {/* <span className="ap_levels_price ap_basic_price">
                <p className="ap_price">
                  <b className="ap_currency_icon">USD $</b>1000
                </p>
              </span> */}
              <span className="ap_levels_price ap_intermediate_price">
                <p className="ap_price">
                  <b className="ap_currency_icon">USD $</b>2000
                </p>
              </span>
              {/* <span className="ap_levels_price ap_advance_price">
                <p className="ap_price">
                  <b className="ap_currency_icon">USD $</b>3000
                </p>
              </span> */}
               {/* <span className="ap_levels_price ap_advance_price">
                <p className="ap_price">
                  <b className="ap_currency_icon">USD $</b>5000
                </p>
              </span>  */}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
