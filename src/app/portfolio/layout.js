import Portfolio_Header from "@/Components/Portfolio/Portfolio_header/Portfolio_Header";

// 'use client'
export const metadata = {
  title: "VersaNex - Portfolio",
  description:
    "Unlock your digital potential with VersaNex inc. We excel in graphic design and website development, delivering impactful solutions tailored to you. Elevate your brand online with our expertise.",
};

export default function PortfolioLayout({ children }) {
  return (
      <section className="portfolio">
            <Portfolio_Header/>
            {children}
      </section>
  );
}
