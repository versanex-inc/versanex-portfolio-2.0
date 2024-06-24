import React from 'react'
import './TeamMembers.css'
import Image from 'next/image'

const TeamMembers = () => {
  return (
    <div className='db_container db_team_members'>
    <table>
      <caption className='db_teammembers_caption'>Team Members</caption>
      <thead className='db_tm_thead'>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Role</th>
          <th>Contact</th>
          <th>Last Activity</th>
        </tr>
      </thead>
      <tbody>
        <tr className='db_tm_rows'>
          <td className='db_tm_name'>
            <div className="db_tm_img">
                <Image src={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D'} alt="member" width={100} height={100}/>
            </div>
            <span className="db_tm_name_email">
            <p className="db_tm_username">Moaz Ahmed</p>
            <p className="db_tm_mail_id">moaz@gmail.com</p>
            </span>
          </td>
          <td className='db_tm_role'>
            Founder
          </td>
          <td>
            MERN Stack
          </td>
          <td>
            +92 3235342994
          </td>
          <td>
            2 days ago
          </td>
        </tr>
        <tr className='db_tm_rows'>
          <td className='db_tm_name'>
            <div className="db_tm_img">
                <Image src={'/imgs/img2.png'} alt="member" width={100} height={100}/>
            </div>
            <span className="db_tm_name_email">
            <p className="db_tm_username">Hisham Hussain</p>
            <p className="db_tm_mail_id">hisham@gmail.com</p>
            </span>
          </td>
          <td className='db_tm_role'>
          Co - Founder
          </td>
          <td>
            Graphics Designer
          </td>
          <td>
            +92 3458899447
          </td>
          <td>
            9 days ago
          </td>
        </tr>
        <tr className='db_tm_rows'>
          <td className='db_tm_name'>
            <div className="db_tm_img">
                <Image src={'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8fDB8fHww'} alt="member" width={100} height={100}/>
            </div>
            <span className="db_tm_name_email">
            <p className="db_tm_username">Fahad Joyia</p>
            <p className="db_tm_mail_id">fahad@gmail.com</p>
            </span>
          </td>
          <td className='db_tm_role'>
            Manager
          </td>
          <td>
          Full Stack
          </td>
          <td>
            +92 3458899447
          </td>
          <td>
            9 days ago
          </td>
        </tr>
        <tr className='db_tm_rows'>
          <td className='db_tm_name'>
            <div className="db_tm_img">
                <Image src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJzfGVufDB8fDB8fHww'} alt="member" width={100} height={100}/>
            </div>
            <span className="db_tm_name_email">
            <p className="db_tm_username">Our Tiger</p>
            <p className="db_tm_mail_id">tiger@gmail.com</p>
            </span>
          </td>
          <td className='db_tm_role'>
            CEO
          </td>
          <td>
            Graphics Designer
          </td>
          <td>
            +92 3458899447
          </td>
          <td>
            2 days ago
          </td>
        </tr>
      </tbody>
    </table>
        <div className='db_view_all_team_members'>View All Team Members</div>
  </div>
  )
}

export default TeamMembers