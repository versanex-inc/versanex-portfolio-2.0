import React from "react";
import Link from "next/link";
import { FaArrowRight, FaEye, FaTimes, FaDotCircle } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
import "./ProductSlug.css";

const page = () => {
  return (
    <section className="products_slug">
      <div className="ap_product">
        <div className="ap_product_img">
          <img
            src={
              // "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
              "/imgs/about.png"
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
            <Link
              className="ap_listing_view_btn view_listing"
              href={"/products/product-name"}
            >
              Contact
              <span className="view_listing_icon">
                <FaArrowRight />
              </span>
            </Link>
            <Link
              className="ap_listing_view_btn view_project"
              href={"/products/product-name"}
            >
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
          </div>
        </div>
      </div>
      <div className="product_price_listing">
        <div className="ap_levels">
          <h3 className="ap_levels_heading">
            See details about features by level.
          </h3>
          <p className="ap_levels_para">
            Advanced, and Premium tiers. The Free Package is perfect for
            startups, providing up to 10 product listings, 1 GB of storage,
            basic SEO tools, limited discount codes, and email support. The
            Basic Package suits growing businesses, supporting up to 100
            products with 5 GB of storage, detailed sales and traffic reports,
            premium template access, email plus chat support, and major payment
            integrations. The Advanced Package is designed for expanding
            enterprises, offering up to 1,000 product listings, 50 GB of
            storage, advanced SEO tools, multiple international payment
            gateways, real-time shipping rates, advanced analytics, social media
            integration, and 24/7 phone support. The Premium Package is tailored
            for large-scale businesses, featuring unlimited product listings and
            storage, full design freedom with custom CSS/HTML, a dedicated
            account manager, a marketing consultant, 0% transaction fees,
            advanced shipping options, custom reports, and extensive promotional
            tools. Contact our team to find the perfect package for your
            e-commerce store.
          </p>
        </div>
        <div className="ap_price_levels_listings_features">
          <div className="ap_features_container ap_feature_lowest_container">
            <h3 className="ap_feature_heading">Feature Name</h3>
            <div className="feature_pricing_details ap_feature_heading_feature_details">
              <p>
                All the details of features.carefully read them and make a
                fruitfull deal to dominate the market with our project.
              </p>
            </div>
            <div className="ap_feature_purpose ap_feature_name_container">
              <div className="ap_feature ap_feature_lowest feature_one">
                <p className="feature_detail">Product listing limits</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_two">
                <p className="feature_detail">Transaction fees</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_three">
                <p className="feature_detail">Storage space</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_four">
                <p className="feature_detail">Support access</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_five">
                <p className="feature_detail">Customization options</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_six">
                <p className="feature_detail">Marketing tools</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_seven">
                <p className="feature_detail">Payments integrations</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_eight">
                <p className="feature_detail">Analytics and reporting</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_nine">
                <p className="feature_detail">Shipping integrations</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_ten">
                <p className="feature_detail">Discount and promotions</p>
              </div>
            </div>
          </div>
          <div className="ap_features_container ap_feature_lowest_container">
            <h3 className="ap_feature_heading">Free</h3>
            <div className="feature_pricing_details">
              <span className="ap_feature_pricng_detal">
                <p className="ap_feature_pricing_price">$0</p>
                <p className="ap_feature_pricing_time">/Year</p>
              </span>
              <p className="ap_feature_pricing_detail_para">
                Includes basic level marketing need for starters
              </p>
            </div>
            <div className="ap_feature_purpose">
              <div className="ap_feature ap_feature_lowest feature_one">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">10</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_two">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">5%</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_three">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">1GB</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_four">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Email</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_five">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Basic</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_six">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Basuc SEO</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_seven">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Limited</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_eight">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Basic</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_nine">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Manual</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_ten">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Limited</p>
              </div>
            </div>
          </div>
          <div className="ap_features_container ap_feature_medium_container">
            <h3 className="ap_feature_heading">Basic</h3>
            <div className="feature_pricing_details">
              <span className="ap_feature_pricng_detal">
                <p className="ap_feature_pricing_price">$100</p>
                <p className="ap_feature_pricing_time">/Year</p>
              </span>
              <p className="ap_feature_pricing_detail_para">
                Includes a little bit advance level marketin needs.
              </p>
            </div>
            <div className="ap_feature_purpose">
              <div className="ap_feature ap_feature_lowest feature_one">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">100</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_two">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">3%</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_three">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">5G</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_four">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Email + Chat</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_five">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Premier</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_six">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">SEO + Email</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_seven">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Major + Paypal</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_eight">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Detailed</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_nine">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Baisc</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_ten">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Unlimited</p>
              </div>
            </div>
          </div>
          <div className="ap_features_container ap_feature_high_container">
            <h3 className="ap_feature_heading">Premium</h3>
            <div className="feature_pricing_details">
              <span className="ap_feature_pricng_detal">
                <p className="ap_feature_pricing_price">$300</p>
                <p className="ap_feature_pricing_time">/Year</p>
              </span>
              <p className="ap_feature_pricing_detail_para">
                Includes all features for need to dominate market.
              </p>
            </div>
            <div className="ap_feature_purpose">
              <div className="ap_feature ap_feature_lowest feature_one">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">1000</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_two">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">1.5%</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_three">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">50GB</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_four">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">24/7 Phone</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_five">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Customizable</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_six">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Advanced tools</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_seven">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Multiple intl</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_eight">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Advanced</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_nine">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Real time-rates</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_ten">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Advanced rules</p>
              </div>
            </div>
          </div>
          <div className="ap_features_container ap_feature_high_container">
            <h3 className="ap_feature_heading">Permanent</h3>
            <div className="feature_pricing_details">
              <span className="ap_feature_pricng_detal">
                <p className="ap_feature_pricing_price">$500</p>
                <p className="ap_feature_pricing_time">/Year</p>
              </span>
              <p className="ap_feature_pricing_detail_para">
                Inclueds all features plus sorce code of product.
              </p>
            </div>
            <div className="ap_feature_purpose">
              <div className="ap_feature ap_feature_lowest feature_one">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Unlimited</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_two">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">0%</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_three">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Unlimited</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_four">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Dedicated Am</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_five">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Full design</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_six">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Dedicated Mc</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_seven">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Custom</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_eight">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Custom reports</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_nine">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Advanced</p>
              </div>
              <div className="ap_feature ap_feature_lowest feature_ten">
                <span className="feature_icon">
                  <FaDotCircle />
                </span>
                <p className="feature_detail">Custom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ap_information_containers">
        <div className="ap_how_to_buy">
          <h4>How to buy ?</h4>
          <p>
            To purchase a package, please contact the Versanex team for
            assistance. Our team will guide you through the selection process,
            ensuring you choose the best package for your needs. Once you have
            made your choice, they will help you complete the transaction
            smoothly and efficiently.
          </p>
        </div>
        <div className="ap_buying_advice">
          <div className="bofore_buy">
            <h4>Before Buy?</h4>
            <p>
              Before buying, please reach out to the Versanex team. Our experts
              will help you understand each packages features and benefits,
              ensuring you select the right one. They will also answer any
              questions you have and assist with the purchasing process for a
              seamless experience.
            </p>
          </div>
          <div className="after_buy">
            <h4>After Buy?</h4>
            <p>
              After purchasing, you can contact us for ongoing maintenance of
              your project. The Versanex team is available to provide support,
              updates, and any necessary adjustments to ensure your e-commerce
              store operates smoothly and efficiently. We are here to help you
              succeed every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
