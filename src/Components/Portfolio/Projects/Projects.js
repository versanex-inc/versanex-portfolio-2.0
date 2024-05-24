'use client';
import React from 'react';
import './Projects.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    const projects = document.querySelectorAll('.p_project');

    projects.forEach((project) => {
      // Animate all projects on scroll
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
          ease: 'power3.out',
          scrollTrigger: {
            trigger: project,
            start: 'top 90%',
            end: 'bottom 40%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.fromTo(
                project,
                { y: 60, opacity: 0, scale: 0.8 },
                { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' }
              );
            },
            onLeave: () => {
              gsap.to(project, { y: -60, opacity: 0, scale: 0.8, duration: 1.5, ease: 'power3.out' });
            },
            onEnterBack: () => {
              gsap.fromTo(
                project,
                { y: -60, opacity: 0, scale: 0.8 },
                { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' }
              );
            },
            onLeaveBack: () => {
              gsap.to(project, { y: 60, opacity: 0, scale: 0.8, duration: 1.5, ease: 'power3.out' });
            },
            // markers: true,
          },
        }
      );
    });
  });

  return (
    <div className="p_projects">
      <div className="p_project p_project_one">
        <div className="p_project_bg_img">
          <img src="https://images.unsplash.com/photo-1595830039485-1bbbacb903b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8NGslMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" />
          <div className="lower_part_img">
            <p className="p_project_title">Nike brand embasy</p>
            <p className="p_project_category">Logo Design</p>
            <p className="p_project_read_more"><MdArrowOutward/></p>
          </div>
        </div>
      </div>
      <div className="p_project">
        <div className="p_project_bg_img">
          <img src="https://images.unsplash.com/photo-1627455241702-ae77954cd299?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fDRrJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="" />
          <div className="lower_part_img">
            <p className="p_project_title">Nike brand embasy</p>
            <p className="p_project_category">Logo Design</p>
            <p className="p_project_read_more"><MdArrowOutward/></p>
          </div>
        </div>
      </div>
      <div className="p_project">
        <div className="p_project_bg_img">
          <img src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJpZ2h0JTIwaW1hZ2UlMjA0a3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <div className="lower_part_img">
            <p className="p_project_title">Nike brand embasy</p>
            <p className="p_project_category">Logo Design</p>
            <p className="p_project_read_more"><MdArrowOutward/></p>
          </div>
        </div>
      </div>
      <div className="p_project">
        <div className="p_project_bg_img">
          <img src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyaWdodCUyMGltYWdlJTIwNGt8ZW58MHx8MHx8fDA%3D" alt="" />
          <div className="lower_part_img">
            <p className="p_project_title">Nike brand embasy</p>
            <p className="p_project_category">Logo Design</p>
            <p className="p_project_read_more"><MdArrowOutward/></p>
          </div>
        </div>
      </div>
      <div className="p_project">
        <div className="p_project_bg_img">
          <img src="https://images.unsplash.com/photo-1689957354932-94b17719d8e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyaWdodCUyMGltYWdlJTIwNGt8ZW58MHx8MHx8fDA%3D" alt="" />
          <div className="lower_part_img">
            <p className="p_project_title">Nike brand embasy</p>
            <p className="p_project_category">Logo Design</p>
            <p className="p_project_read_more"><MdArrowOutward/></p>
          </div>
        </div>
      </div>
      <div className="p_project">
        <div className="p_project_bg_img">
          <img src="https://images.unsplash.com/photo-1506849041215-e76092bdaa7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyaWdodCUyMGltYWdlJTIwNGt8ZW58MHx8MHx8fDA%3D" alt="" />
          <div className="lower_part_img">
            <p className="p_project_title">Nike brand embasy</p>
            <p className="p_project_category">Logo Design</p>
            <p className="p_project_read_more"><MdArrowOutward/></p>
          </div>
        </div>
      </div>
      <div className="p_project">
        <div className="p_project_bg_img">
          <img src="https://images.unsplash.com/photo-1648901843017-60053c0dcd24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJyaWdodCUyMGltYWdlJTIwNGt8ZW58MHx8MHx8fDA%3D" alt="" />
          <div className="lower_part_img">
            <p className="p_project_title">Nike brand embasy</p>
            <p className="p_project_category">Logo Design</p>
            <p className="p_project_read_more"><MdArrowOutward/></p>
          </div>
        </div>
      </div>
      <div className="p_project">
        <div className="p_project_bg_img">
          <img src="https://images.unsplash.com/photo-1642598555975-37fd1cb68b83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D" alt="" />
          <div className="lower_part_img">
            <p className="p_project_title">Nike brand embasy</p>
            <p className="p_project_category">Logo Design</p>
            <p className="p_project_read_more"><MdArrowOutward/></p>
          </div>
        </div>
      </div>
      <div className="p_project">
        <div className="p_project_bg_img">
          <img src="https://images.unsplash.com/photo-1704556795726-949f5a97e22d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJyaWdodCUyMGltYWdlJTIwNGt8ZW58MHx8MHx8fDA%3D" alt="" />
          <div className="lower_part_img">
            <p className="p_project_title">Nike brand embasy</p>
            <p className="p_project_category">Logo Design</p>
            <p className="p_project_read_more"><MdArrowOutward/></p>
          </div>
        </div>
      </div>
      <div className="p_project">
        <div className="p_project_bg_img">
          <img src="https://images.unsplash.com/photo-1490682143684-14369e18dce8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJyaWdodCUyMGltYWdlJTIwNGt8ZW58MHx8MHx8fDA%3D" alt="" />
          <div className="lower_part_img">
            <p className="p_project_title">Nike brand embasy</p>
            <p className="p_project_category">Logo Design</p>
            <p className="p_project_read_more"><MdArrowOutward/></p>
          </div>
        </div>
      </div>
      <div className="p_project">
        <div className="p_project_bg_img">
          <img src="https://images.unsplash.com/photo-1506849041215-e76092bdaa7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyaWdodCUyMGltYWdlJTIwNGt8ZW58MHx8MHx8fDA%3D" alt="" />
          <div className="lower_part_img">
            <p className="p_project_title">Nike brand embasy</p>
            <p className="p_project_category">Logo Design</p>
            <p className="p_project_read_more"><MdArrowOutward/></p>
          </div>
        </div>
      </div>
      <div className="p_project">
        <div className="p_project_bg_img">
          <img src="https://images.unsplash.com/photo-1595830039485-1bbbacb903b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8NGslMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" />
          <div className="lower_part_img">
            <p className="p_project_title">Nike brand embasy</p>
            <p className="p_project_category">Logo Design</p>
            <p className="p_project_read_more"><MdArrowOutward/></p>
          </div>
        </div>
      </div>
      <div className="p_project">
        <div className="p_project_bg_img">
          <img src="https://images.unsplash.com/photo-1716404084927-176ee37a9dbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className="lower_part_img">
            <p className="p_project_title">Nike brand embasy</p>
            <p className="p_project_category">Logo Design</p>
            <p className="p_project_read_more"><MdArrowOutward/></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
