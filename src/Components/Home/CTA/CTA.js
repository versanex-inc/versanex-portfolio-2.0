import React from 'react'
import './CTA.css'
import Link from 'next/link'
const CTA = () => {
  return (
    <section className='container top_container cta'>
        <div className="cta_content sub_container">
        <p className="cta_heading">We have helped brands of all kinds and businesses of every size grow their online revenue</p>
        <p className="cta_about">Are you ready to start your project? Contact us today and get started!</p>
          <button className="button button_small cta_contact">
            <Link  href={"/contact"}>
            Contact&nbsp;us
            </Link>
          </button>
        </div>
    </section>
  )
}

export default CTA