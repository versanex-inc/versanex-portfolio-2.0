"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BiSolidCheckSquare } from "react-icons/bi";
import { FaTools } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import "./Slug.css";

import Link from "next/link";

const Project_page = ({ params }) => {
  const [projectData, setProjectData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/getProjects`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch project data");
        }
        const projectsResponse = await response.json();
        const project = projectsResponse.result.find(
          (project) => project.slug === params.slug
        );
        if (project) {
          setProjectData(project);
        } else {
          setError(`Project with slug ${params.slug} not found.`);
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
        setError("Error fetching project data");
      }
    };

    fetchData();
  }, [params]);

  if (!projectData && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="project_detail">
      <div className="pd_container">
        <div className="pd_creator">
          <div className="creator_img">
            <Image
              src={projectData.creatorPicture}
              alt="user"
              width={1000}
              height={1000}
              quality={100}
            />
          </div>
          <Link href={projectData.creatorProfile} className="creator_name">
            {projectData.creatorName}
          </Link>
          <div className="project_category">{projectData.creatorNiche}</div>
        </div>
        <div className="pd_project_details">
          <p className="project_title">{projectData.title}</p>
          <div className="project_category_status_deadline">
            <div className="project_category">
              <p>
              <b>Category</b> : {projectData.category} - {projectData.subCategory}
              </p>
            </div>
            <div className="project_status">
              {projectData.status === "Completed" && (
                <div className="status_completed statys_type">
                  <b>Status</b> : {projectData.status}
                  <span>
                    <BiSolidCheckSquare />
                  </span>
                </div>
              )}
              {projectData.status === "Progress" && (
                <div className="status_progress statys_type">
                  <b>Status</b> : {projectData.status}
                  <span>
                    <FaTools />
                  </span>
                </div>
              )}
              {projectData.status === "Holding" && (
                <div className="status_hold statys_type">
                  <b>Status</b> : {projectData.status}
                  <span>
                    <FaCirclePlay />
                  </span>
                </div>
              )}
              {projectData.status === "Cancelled" && (
                <div className="status_canceled statys_type">
                  <b>Status</b> : {projectData.status}
                  <span>
                    <MdCancel />
                  </span>
                </div>
              )}
            </div>
            <div className="project_deadline">
              <p>
              <b>Updated on : </b>
                {projectData.deadline && formatDeadline(projectData.deadline)}
              </p>
            </div>
          </div>
          <p className="project_details">{projectData.description}</p>
        </div>
        <div className="project_pictures">
          {projectData.projectType === "iframe" ? (
            <iframe
            className="slug_video"
              width="100%"
              height="350"
              src={projectData.images[1]?.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            projectData.images.map((image, index) => (
              <div className="slug_image" key={index}>
                <Image
                  className=""
                  src={image.url}
                  width={1000}
                  height={1000}
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Project_page;
function formatDeadline(deadline) {
  const date = new Date(deadline);
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  return `${year}-${month}-${day}`;
}

function padZero(num) {
  return num.toString().padStart(2, "0");
}
