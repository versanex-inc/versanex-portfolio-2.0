import React from "react";
import "./MainDetails.css";
import { GrProjects } from "react-icons/gr";
import { RiTeamFill } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
const MainDetails = () => {
  return (
    <div className="db_container db_md">
      <div className="db_md_projects_create">
        <h3 className="db_md_projects">Details</h3>
        <div className="md_db_tasks_buttons">
          <button className="db_md_create_project">Create&nbsp;Projecct</button>
        </div>
      </div>
      <div className="db_md_details">
        <div className="db_md_detail">
          <div className="dt_name_icon">
            <p className="db_md_detail_name">Projects</p>
            <span className="db_md_detail_icon">
              <GrProjects />
            </span>
          </div>
          <span className="db_md_detail_cout">120</span>
          <div className="db_md_detail_cout_completed">
            <div className="db_md_project_completed">90 Completed</div>
            <div className="db_md_project_completed">10 progress</div>
            <div className="db_md_project_completed">10 cancelled</div>
          </div>
        </div>
        <div className="db_md_detail">
          <div className="dt_name_icon">
            <p className="db_md_detail_name">Acive Tasks</p>
            <span className="db_md_detail_icon">
              <FaTasks />
            </span>
          </div>
          <span className="db_md_detail_cout">10</span>
          <div className="db_md_detail_cout_completed">
            <div className="db_md_project_completed">5 Completed</div>
            <div className="db_md_project_completed">3 progress</div>
            <div className="db_md_project_completed">2 cancelled</div>
          </div>
        </div>
        <div className="db_md_detail">
          <div className="dt_name_icon">
            <p className="db_md_detail_name">Teams</p>
            <span className="db_md_detail_icon">
              <RiTeamFill />
            </span>
          </div>
          <span className="db_md_detail_cout">10</span>
          <div className="db_md_detail_cout_completed">
            <div className="db_md_project_completed">5 Completed</div>
            <div className="db_md_project_completed">3 progress</div>
            <div className="db_md_project_completed">2 cancelled</div>
          </div>
        </div>
        <div className="db_md_detail">
          <div className="dt_name_icon">
            <p className="db_md_detail_name">Revenue</p>
            <span className="db_md_detail_icon">
              <FaDollarSign />
            </span>
          </div>
          <span className="db_md_detail_cout">2000$</span>
          <div className="db_md_detail_cout_completed">
            <div className="db_md_project_completed">200$ Pending</div>
            <div className="db_md_project_completed">100$ Cancelled</div>
            <div className="db_md_project_completed">300$ Paid</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;
