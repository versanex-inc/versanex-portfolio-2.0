import React from 'react'
import './contact.css'
import Joins from './join_us/joinus'
const contact = () => {
  return (
    <>
        <div className="container">
            <div className="Contact_main">
                <div className="left_con">
                    <div className="f_title">
                        <h1>Initiate your project with us!</h1>
                    </div>
                    <div className="content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis commodi minima laudantium impedit magnam sequi qui aspernatur nesciunt tenetur eius.
                    </div>
                    <div className="s_title">
                        <h1>Complete the contact form to inform us of your needs</h1>
                    </div>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                </div>
                <div className="form_arrow">

                </div>
                <div className="right_con">
                    <div className="form_main">
                    <form className='form'>
                        <select className='form_cel' name="" id="">
                            <option hidden>Select the service You Need</option>
                            <option value="">Graphic Designer</option>
                            <option value="">Contact Writer</option>
                            <option value="">SEO Master</option>
                        </select>
                        <div className="f_group">
                            <input type="text" placeholder='Your Name'/>
                        </div>
                        <div className="f_group">
                            <input type="text" placeholder='Yout Email' />
                        </div>
                        <div className="f_group">
                            <input type="text" placeholder='Your Organization' />
                        </div>
                        <div className="f_group">
                            <textarea name="" placeholder='How can we help you?' id=""rows={4}></textarea>
                        </div>
                        <select name="" className='form_cel' id="">
                            <option hidden>What Is Your Budget</option>
                            <option value="">3000$</option>
                            <option value="">8000$</option>
                            <option value="">12000$</option>
                        </select>
                    <div className="submit_btn">
                        <button className='form_btn '>Submit</button>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
            <div className="">
                            <Joins/>
            </div>
    </>
  )
}

export default contact