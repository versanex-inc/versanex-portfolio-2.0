"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import "../../../Components/Portfolio/Projects/Projects.css";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/getProjects`
        );
        const data = await response.json();

        if (isMounted) {
          // Filter projects based on subcategory being "Gfx Design"
          const filteredProjects = data.result.filter(
            (project) => project.category === "Video Editing"
          );
          setProjects(filteredProjects.reverse());
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        if (isMounted) setLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      const projectElements = document.querySelectorAll(".p_project");

      projectElements.forEach((project) => {
        gsap.fromTo(
          project,
          {
            y: 60,
            opacity: 0,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 90%",
              end: "bottom 40%",
              toggleActions: "play none none reverse",
              onEnter: () => {
                gsap.fromTo(
                  project,
                  { y: 60, opacity: 0, scale: 0.8 },
                  {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    ease: "power3.out",
                  }
                );
              },
              onLeave: () => {
                gsap.to(project, {
                  y: -60,
                  opacity: 0,
                  scale: 0.8,
                  duration: 1.5,
                  ease: "power3.out",
                });
              },
              onEnterBack: () => {
                gsap.fromTo(
                  project,
                  { y: -60, opacity: 0, scale: 0.8 },
                  {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    ease: "power3.out",
                  }
                );
              },
              onLeaveBack: () => {
                gsap.to(project, {
                  y: 60,
                  opacity: 0,
                  scale: 0.8,
                  duration: 1.5,
                  ease: "power3.out",
                });
              },
              // markers: true,
            },
          }
        );
      });
    }
  }, [projects]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="portfolio_data">
      <div className="p_projects">
        {projects.map((item) => (
          <div className="p_project" key={item._id}>
            <Link href={`/portfolio/${item.slug}`}>
            <div className="p_project_bg_img">
                <Image
                  src={item.images[0]?.url} // Use optional chaining to safely access the URL of the first image
                  alt="project"
                  width={1000}
                  height={1000}
                />
                <div className="lower_part_img">
                  <p className="p_project_title">{item.title}</p>
                  <p className="p_project_category">{item.subCategory}</p>
                  <p className="p_project_read_more"><MdArrowOutward /></p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
