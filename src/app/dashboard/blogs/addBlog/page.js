'use client'
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import './AddBlog.css';  // Add CSS styling for the AddBlog component

const Admin_Add_Blog = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/adminLogin");
    }
  }, [router]);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [descriptions, setDescriptions] = useState([""]);
  const [list, setList] = useState([""]);
  const [imageUrls, setImageUrls] = useState([""]); // Initialize with an empty string for the first image URL
  const [creatorName, setCreatorName] = useState("");
  const [creatorNiche, setCreatorNiche] = useState("");
  const [creatorPicture, setCreatorPicture] = useState("");
  const [creatorProfile, setCreatorProfile] = useState("");
  const [projectType, setProjectType] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "slug":
        setSlug(value);
        break;
      case "creatorName":
        setCreatorName(value);
        break;
      case "creatorNiche":
        setCreatorNiche(value);
        break;
      case "creatorPicture":
        setCreatorPicture(value);
        break;
      case "creatorProfile":
        setCreatorProfile(value);
        break;
      case "projectType":
        setProjectType(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "subCategory":
        setSubCategory(value);
        break;
      default:
        break;
    }
  };

  const handleDescriptionChange = (e, index) => {
    const newDescriptions = [...descriptions];
    newDescriptions[index] = e.target.value;
    setDescriptions(newDescriptions);
  };

  const handleAddDescription = () => {
    setDescriptions([...descriptions, ""]);
  };

  const handleRemoveDescription = (index) => {
    const newDescriptions = descriptions.filter((_, i) => i !== index);
    setDescriptions(newDescriptions);
  };

  const handleListChange = (e, index) => {
    const newList = [...list];
    newList[index] = e.target.value;
    setList(newList);
  };

  const handleAddListItem = () => {
    setList([...list, ""]);
  };

  const handleRemoveListItem = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  const handleImageUrlChange = (e, index) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = e.target.value;
    setImageUrls(newImageUrls);
  };

  const handleAddImageUrl = () => {
    setImageUrls([...imageUrls, ""]);
  };

  const handleRemoveImageUrl = (index) => {
    const newImageUrls = imageUrls.filter((_, i) => i !== index);
    setImageUrls(newImageUrls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      slug,
      descriptions,
      list,
      images: imageUrls.map((url) => ({ url })),
      creatorName,
      creatorNiche,
      creatorPicture,
      creatorProfile,
      projectType,
      category,
      subCategory,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/addBlog`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setTitle("");
        setSlug("");
        setDescriptions([""]);
        setList([""]);
        setImageUrls([""]); // Reset image URLs
        setCreatorName("");
        setCreatorNiche("");
        setCreatorPicture("");
        setCreatorProfile("");
        setProjectType("");
        setCategory("");
        setSubCategory("");
        toast.success("Blog added successfully", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Something went wrong", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="db_container db_ab_container">
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <form className="a_form" onSubmit={handleSubmit}>
          <div className="a_form_content">
            <h1 className="contact_heading admin_contact_heading">Add Blog</h1>
            <div className="form admin_form db_add_blog">
              <div className="group group_title">
                <input
                  value={title}
                  onChange={handleChange}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  required
                />
                <span className="highlight"></span>
                <label className="label" htmlFor="title">
                  Title
                </label>
              </div>
              <div className="group">
                <input
                  value={slug}
                  onChange={handleChange}
                  type="text"
                  name="slug"
                  id="slug"
                  placeholder="Slug"
                  required
                />
                <span className="highlight"></span>
                <label className="label" htmlFor="slug">
                  Slug
                </label>
              </div>
              <div className="group">
                <input
                  value={creatorName}
                  onChange={handleChange}
                  type="text"
                  name="creatorName"
                  id="creatorName"
                  placeholder="Creator Name"
                  required
                />
                <span className="highlight"></span>
                <label className="label" htmlFor="creatorName">
                  Creator Name
                </label>
              </div>
              <div className="group">
                <input
                  value={creatorNiche}
                  onChange={handleChange}
                  type="text"
                  name="creatorNiche"
                  id="creatorNiche"
                  placeholder="Creator Niche"
                  required
                />
                <span className="highlight"></span>
                <label className="label" htmlFor="creatorNiche">
                  Creator Niche
                </label>
              </div>
              <div className="group">
                <input
                  value={creatorPicture}
                  onChange={handleChange}
                  type="text"
                  name="creatorPicture"
                  id="creatorPicture"
                  placeholder="Creator Picture"
                  required
                />
                <span className="highlight"></span>
                <label className="label" htmlFor="creatorPicture">
                  Creator Picture
                </label>
              </div>
              <div className="group">
                <input
                  value={creatorProfile}
                  onChange={handleChange}
                  type="text"
                  name="creatorProfile"
                  id="creatorProfile"
                  placeholder="Creator Profile"
                  required
                />
                <span className="highlight"></span>
                <label className="label" htmlFor="creatorProfile">
                  Creator Profile
                </label>
              </div>
              <div className="group">
                <input
                  value={projectType}
                  onChange={handleChange}
                  type="text"
                  name="projectType"
                  id="projectType"
                  placeholder="Project Type"
                  required
                />
                <span className="highlight"></span>
                <label className="label" htmlFor="projectType">
                  Project Type
                </label>
              </div>
              <div className="ab_group_dropdowns">
                <div className="group admin_group group_dd_db">
                  <select
                    value={category}
                    onChange={handleChange}
                    name="category"
                    id="category"
                    required
                  >
                    <option className="selction_option" value="">Category</option>
                    <option value="Gfx Design">Gfx Design</option>
                    <option value="Web Developing">Web Developing</option>
                    <option value="Video Editing">Video Editing</option>
                  </select>
                  <span className="highlight"></span>
                </div>
                <div className="group admin_group group_dd_db">
                  <select
                    value={subCategory}
                    onChange={handleChange}
                    name="subCategory"
                    id="subCategory"
                    required
                  >
                    <option className="selction_option" value="">Sub Category</option>
                    <option value="Illustration">Illustration</option>
                    <option value="Gfx">Gfx</option>
                    <option value="Logo Design">Logo Design</option>
                    <option value="3d">3d</option>
                    <option value="E-shop">E-shop</option>
                    <option value="Business">Business</option>
                    <option value="Portfolio">Portfolio</option>
                  </select>
                  <span className="highlight"></span>
                </div>
              </div>
              <div className="group_multi group_images">
              {imageUrls.map((imageUrl, index) => (
                <div className="group image_group" key={index}>
                  <input
                    value={imageUrl}
                    onChange={(e) => handleImageUrlChange(e, index)}
                    type="text"
                    name={`imageUrl${index}`}
                    id={`imageUrl${index}`}
                    placeholder={`Image URL ${index + 1}`}
                    required={index === 0} // First image URL is required
                  />
                  <span className="highlight"></span>
                  <button
                  className="group_multi_remove_btn"
                    type="button"
                    onClick={() => handleRemoveImageUrl(index)}
                  >
                    Remove Image
                  </button>
                </div>
              ))}
              <button className="group_mutli_button" type="button" onClick={handleAddImageUrl}>
                Add Image URL
              </button>
              </div>
              <div className="group_multi group_description">
              {descriptions.map((description, index) => (
                <div className="group desc_group" key={index}>
                  <textarea
                    value={description}
                    onChange={(e) => handleDescriptionChange(e, index)}
                    name={`description${index}`}
                    id={`description${index}`}
                    rows={5}
                    placeholder={`Description ${index + 1}`}
                    required
                    autoComplete="off"
                  />
                  <span className="highlight"></span>
                  <button
                  className="group_multi_remove_btn"
                    type="button"
                    onClick={() => handleRemoveDescription(index)}
                  >
                    Remove Description
                  </button>
                </div>
              ))}
               <button className="group_mutli_button " type="button" onClick={handleAddDescription}>
                Add Description
              </button>
              </div>
              <div className="group_multi group_lists">
              {list.map((listItem, index) => (
                <div className="group list_group" key={index}>
                  <textarea
                    value={listItem}
                    onChange={(e) => handleListChange(e, index)}
                    type="text"
                    name={`listItem${index}`}
                    id={`listItem${index}`}
                    placeholder={`List Item ${index + 1}`}
                    required
                  />
                  <span className="highlight"></span>
                  <button
                  className="group_multi_remove_btn"
                    type="button"
                    onClick={() => handleRemoveListItem(index)}
                  >
                    Remove List Item
                  </button>
                </div>
              ))}
              <button className="group_mutli_button " type="button" onClick={handleAddListItem}>
                Add List Item
              </button>
              </div>
              <button type="submit" className="btn db_ab_btn">
                Add Blog
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Admin_Add_Blog;
