import React from 'react';
import './ActiveProjects.css';

const ActiveProjects = () => {
  return (
    <div className='db_container db_active_projects'>
      <table>
        <caption className='db_active_projects_caption'>Active Projects</caption>
        <thead className='db_ap_thead'>
          <tr>
            <th>Project Name</th>
            <th>Hours</th>
            <th>Priority</th>
            <th>Members</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr className='db_ap_rows'>
            <td className='project_name_td'>
              <img src="https://images.unsplash.com/photo-1608541737042-87a12275d313?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZXxlbnwwfHwwfHx8MA%3D%3D" alt="Project 1" />
              <span className="db_ap_project_name">Nike</span>
            </td>
            <td>120</td>
            <td>
              <span className='priority High'>High</span>
            </td>
            <td className="db_team-members">
              <span className='db_ap_team_members'><img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D" alt="Member 1" /></span>
              <span className='db_ap_team_members'><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8fDA%3D" alt="Member 2" /></span>
              <span className='db_ap_team_members'><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8fDB8fHww" alt="Member 3" /></span>
              <span className='db_ap_team_members more_team_members'>5+</span>
            </td>
            <td className='progress_bar_td'>
            <span className='progress_bar_counter'>90%</span>
              <div className="progress-bar">
                <div className="progress_inner_bar" style={{ width: '90%'}}></div>
              </div>
            </td>
          </tr>
          <tr className='db_ap_rows'>
            <td className='project_name_td'>
              <img src="https://images.unsplash.com/photo-1591254460606-fab865bf82b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvY2ElMjBjb2xhfGVufDB8fDB8fHww" alt="Project 1" />
              <span className="db_ap_project_name">Coca Cola</span>
            </td>
            <td>90</td>
            <td>
              <span className='priority Medium'>Medium</span>
            </td>
            <td className="db_team-members">
              <span className='db_ap_team_members'><img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D" alt="Member 1" /></span>
              <span className='db_ap_team_members'><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8fDB8fHww" alt="Member 3" /></span>
              <span className='db_ap_team_members'><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8fDA%3D" alt="Member 2" /></span>
              <span className='db_ap_team_members more_team_members'>4+</span>
            </td>
            <td className='progress_bar_td'>
            <span className='progress_bar_counter'>70%</span>
              <div className="progress-bar">
                <div className="progress_inner_bar" style={{ width: '70%'}}></div>
              </div>
            </td>
          </tr>
          <tr className='db_ap_rows'>
            <td className='project_name_td'>
              <img src="https://images.unsplash.com/photo-1540726811314-7648cc1b4426?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGUlMjBsb2dvfGVufDB8fDB8fHww" alt="Project 1" />
              <span className="db_ap_project_name">Apple</span>
            </td>
            <td>50</td>
            <td>
              <span className='priority Low'>Low</span>
            </td>
            <td className="db_team-members">
              <span className='db_ap_team_members'><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8fDB8fHww" alt="Member 3" /></span>
              <span className='db_ap_team_members'><img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D" alt="Member 1" /></span>
              <span className='db_ap_team_members'><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8fDA%3D" alt="Member 2" /></span>
              <span className='db_ap_team_members more_team_members'>4+</span>
            </td>
            <td className='progress_bar_td'>
            <span className='progress_bar_counter'>40%</span>
              <div className="progress-bar">
                <div className="progress_inner_bar" style={{ width: '40%'}}></div>
              </div>
            </td>
          </tr>
          <tr className='db_ap_rows'>
            <td className='project_name_td'>
              <img src="https://images.unsplash.com/photo-1529612700005-e35377bf1415?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="Project 1" />
              <span className="db_ap_project_name">Microsoft</span>
            </td>
            <td>40</td>
            <td>
              <span className='priority Track'>Track</span>
            </td>
            <td className="db_team-members">
              <span className='db_ap_team_members'><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8fDA%3D" alt="Member 2" /></span>
              <span className='db_ap_team_members'><img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D" alt="Member 1" /></span>
              <span className='db_ap_team_members'><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8fDB8fHww" alt="Member 3" /></span>
              <span className='db_ap_team_members more_team_members'>4+</span>
            </td>
            <td className='progress_bar_td'>
            <span className='progress_bar_counter'>20%</span>
              <div className="progress-bar">
                <div className="progress_inner_bar" style={{ width: '20%'}}></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
          <div className='db_view_all_active_projects'>View All Projects</div>
    </div>
  );
}

export default ActiveProjects;