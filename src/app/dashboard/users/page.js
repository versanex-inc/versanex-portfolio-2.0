'use client'
import React, { useEffect, useState } from 'react';
import './Users.css';
import { FaUserEdit } from "react-icons/fa";
import { MdBlock } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getUsers`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data.result);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="db_container user_container">
      <div className="db_search_user">
        <div className="serachbar_db_user">
          <input
            type="search"
            placeholder='Search Here'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="db_search_icon_button"><IoSearchSharp /></span>
        </div>
        <div className="db_total_users">
          <span>Number of Users: </span><span>{filteredUsers.length}</span>
        </div>
      </div>
      <table className="all_users_container_db">
        <caption className='db_all_users_heading'>All Users</caption>
        <thead>
          <tr>
            <th className='db_user_info_headiog'>User Info</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user._id}>
              <td>
                <div className="db_user_info">
                  <div className="db_user_img">
                    <img src={user.image || "/imgs/img2.png"} alt={user.name} />
                  </div>
                  <span className="db_user_name_email_c">
                    <p className="db_user_name">{user.name}</p>
                    <p className="db_user_email">{user.email}</p>
                  </span>
                </div>
              </td>
              <td className='db_user_control_container'>
                <div className="edit_read_block_delete">
                  <span className="db_user_control_icon db_user_edit"><FaUserEdit /></span>
                  <span className="db_user_control_icon db_user_block"><MdBlock /></span>
                  <span className="db_user_control_icon db_user_delete"><MdDelete /></span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="view_all_db_users">View All Users</div>
    </div>
  );
}

export default Users;
