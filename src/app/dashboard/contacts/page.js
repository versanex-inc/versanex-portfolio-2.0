'use client'
import React, { useEffect, useState } from 'react';
import './Contacts.css';
import { IoSearchSharp } from "react-icons/io5";
import Link from 'next/link';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import moment from 'moment';

const ContactsDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getContacts`);
        const data = await response.json();
        if (data.success && Array.isArray(data.result)) {
          const reversedData = data.result.reverse();  // Show latest contacts on top
          setContacts(reversedData);
          setFilteredContacts(reversedData);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  useEffect(() => {
    const results = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(results);
  }, [searchTerm, contacts]);

  const handleReadMore = async (contactId) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateDashboardContact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: contactId, read: true }),
      });
      const data = await response.json();
      if (data.success) {
        setContacts(prevContacts =>
          prevContacts.map(contact =>
            contact._id === contactId ? { ...contact, read: true } : contact
          )
        );
        setFilteredContacts(prevFilteredContacts =>
          prevFilteredContacts.map(contact =>
            contact._id === contactId ? { ...contact, read: true } : contact
          )
        );
      } else {
        console.error('Failed to update contact:', data);
      }
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <div className='db_container db_contacts'>
      <div className="db_search_contact">
        <div className="serachbar_db_cntact">
          <input
            type="search"
            placeholder='Search Here'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="db_search_icon_button"><IoSearchSharp /></span>
        </div>
        <div className="db_total_contacts">
          <span>Number of Contacts: </span><span>{filteredContacts.length}</span>
        </div>
      </div>
      <div className="db_all_contacts">
        {Array.isArray(filteredContacts) && filteredContacts.map(contact => (
          <div key={contact._id} className="db_contact">
            <p className="db_con_name"><span className='db_con_h'>Name: </span>{contact.name}</p>
            <p className="db_con_email"><span className='db_con_h'>Email: </span>{contact.email}</p>
            <p className="db_con_detail"><span className='db_con_h'>Details: </span>{contact.details}</p>
            <p className="db_con_time"><span className='db_con_h'>Posted: </span>{moment(contact.createdAt).fromNow()}</p>
            <div className="db_rm_read_icon">
              <Link className='db_con_readmore' href={`/dashboard/contacts/${contact.email}`} onClick={() => handleReadMore(contact._id)}>Read More</Link>
              <span className={`read_icon ${contact.read ? 'readed_db_contact' : ''}`}><IoCheckmarkDoneSharp /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactsDashboard;
