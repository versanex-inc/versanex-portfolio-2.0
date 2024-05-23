import React from 'react'
import './CTA.css'
const CTA = () => {
  return (
    <section className='container top_container cta'>
        <div className="cta_content">
        <p className="cta_heading">We have helped brands of all kinds and businesses of every size grow their online revenue</p>
        <p className="cta_about">Are you ready to start your project? Contact us today and get started!</p>
        <button className="button nav_link cta_contact">
            <a className="nav_link_a" href="#">
              Contact&nbsp;us
            </a>
          </button>
        </div>
    </section>
  )
}

export default CTA