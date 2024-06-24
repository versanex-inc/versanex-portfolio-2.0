'use client'
import React, { useEffect, useState } from 'react';
import './slug.css'

const ContactSlug = ({ params }) => {
  const [contactData, setContactData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getContacts`);
        if (!response.ok) {
          throw new Error("Failed to fetch contact data");
        }
        const contactsResponse = await response.json();
        const decodedEmail = decodeURIComponent(params.email);
        const contact = contactsResponse.result.find(contact => contact.email === decodedEmail);
        if (contact) {
          setContactData(contact);
        } else {
          setError(`Contact with email ${decodedEmail} not found.`);
        }
      } catch (error) {
        console.error("Error fetching contact data:", error);
        setError("Error fetching contact data");
      } finally {
        setIsLoading(false);
      }
    };

    if (params.email) {
      fetchData();
    } else {
      setError("Email parameter is missing");
      setIsLoading(false);
    }
  }, [params.email]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='db_container email_slug_contact'>
      <div className="inner_slug_contact">
      <h1>Contact Details</h1>
      {contactData && (
        <div>
          <p><strong>Name:</strong> {contactData.name}</p>
          <p><strong>Email:</strong> {contactData.email}</p>
          <p><strong>Organization:</strong> {contactData.organization}</p>
          <p><strong>Service:</strong> {contactData.service}</p>
          <p><strong>Budget:</strong> {contactData.budget}</p>
          <p><strong>Posted:</strong> {new Date(contactData.createdAt).toLocaleString()}</p>
          <p><strong>Details:</strong> {contactData.details}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default ContactSlug;
