import React from 'react'
import './Contact_Form.css'
const Contact_Form = () => {
  return (
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
  )
}

export default Contact_Form