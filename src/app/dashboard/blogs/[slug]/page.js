"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../addBlog/AddBlog.css"; // Ensure correct path to your CSS

const All_Blogs_Slug = ({ params }) => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/admin/adminLogin");
    }
  }, []);

  const [blogData, setBlogData] = useState({
    title: "",
    slug: "",
    descriptions: [""],
    list: [""],
    images: [{ url: "" }], // Initialize with one empty image URL
    category: "",
    subCategory: "",
    creatorName: "",
    creatorNiche: "",
    creatorPicture: "",
    creatorProfile: "",
    projectType: "",
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/getBlogs`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const blogsResponse = await response.json();
        const blog = blogsResponse.result.find(
          (blog) => blog.slug === params.slug
        );
        if (blog) {
          setBlogData(blog);
        } else {
          setError(`Blog with slug ${params.slug} not found.`);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setError("Error fetching blog data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.slug]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDescriptionChange = (e, index) => {
    const newDescriptions = [...blogData.descriptions];
    newDescriptions[index] = e.target.value;
    setBlogData((prevState) => ({
      ...prevState,
      descriptions: newDescriptions,
    }));
  };

  const handleAddDescription = () => {
    setBlogData((prevState) => ({
      ...prevState,
      descriptions: [...prevState.descriptions, ""],
    }));
  };

  const handleRemoveDescription = (index) => {
    const newDescriptions = blogData.descriptions.filter((_, i) => i !== index);
    setBlogData((prevState) => ({
      ...prevState,
      descriptions: newDescriptions,
    }));
  };

  const handleListChange = (e, index) => {
    const newList = [...blogData.list];
    newList[index] = e.target.value;
    setBlogData((prevState) => ({
      ...prevState,
      list: newList,
    }));
  };

  const handleAddListItem = () => {
    setBlogData((prevState) => ({
      ...prevState,
      list: [...prevState.list, ""],
    }));
  };

  const handleRemoveListItem = (index) => {
    const newList = blogData.list.filter((_, i) => i !== index);
    setBlogData((prevState) => ({
      ...prevState,
      list: newList,
    }));
  };

  const handleImageChange = (index, url) => {
    const updatedImages = blogData.images.map((image, i) =>
      i === index ? { ...image, url } : image
    );
    setBlogData((prevState) => ({
      ...prevState,
      images: updatedImages,
    }));
  };

  const handleAddImage = () => {
    setBlogData((prevState) => ({
      ...prevState,
      images: [...prevState.images, { url: "" }],
    }));
  };

  const handleRemoveImage = (index) => {
    const updatedImages = blogData.images.filter((_, i) => i !== index);
    setBlogData((prevState) => ({
      ...prevState,
      images: updatedImages,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/editBlog`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogData),
        }
      );
      const result = await response.json();
      if (result.success) {
        alert("Blog updated successfully!");
      } else {
        throw new Error(result.error || "Failed to update blog");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Error updating blog");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="db_container db_ab_container">
      <h1 className="contact_heading admin_contact_heading">Edit Blog</h1>
      {blogData && (
        <form className="a_form" onSubmit={handleSubmit}>
          <div className="a_form_content">
            <div className="form admin_form db_add_blog">
              <div className="group group_title">
                <input
                  value={blogData.title}
                  onChange={handleInputChange}
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
                  value={blogData.slug}
                  onChange={handleInputChange}
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
                  value={blogData.creatorName}
                  onChange={handleInputChange}
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
                  value={blogData.creatorNiche}
                  onChange={handleInputChange}
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
                  value={blogData.creatorPicture}
                  onChange={handleInputChange}
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
                  value={blogData.creatorProfile}
                  onChange={handleInputChange}
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
                  value={blogData.projectType}
                  onChange={handleInputChange}
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
                    value={blogData.category}
                    onChange={handleInputChange}
                    name="category"
                    id="category"
                    required
                  >
                    <option className="selction_option" value="">
                      Category
                    </option>
                    <option value="Gfx Design">Gfx Design</option>
                    <option value="Web Developing">Web Developing</option>
                    <option value="Video Editing">Video Editing</option>
                  </select>
                  <span className="highlight"></span>
                </div>
                <div className="group admin_group group_dd_db">
                  <select
                    value={blogData.subCategory}
                    onChange={handleInputChange}
                    name="subCategory"
                    id="subCategory"
                    required
                  >
                    <option className="selction_option" value="">
                      Sub Category
                    </option>
                    <option value="Illustration">Illustration</option>
                    <option value="Gfx">Gfx</option>
                    <option value="Logo Design">Logo Design</option>
                    <option value="3d">3d</option>
                    <option value="E-shop">E-shop</option>
                    <option value="Buisness">Buisness</option>
                    <option value="Portfolio">Portfolio</option>
                  </select>
                  <span className="highlight"></span>
                </div>
              </div>

              {/* Image URL Inputs */}
              <div className="group_multi group_images">
              {blogData.images.map((image, index) => (
                <div className="group image_group" key={index}>
                  <input
                    value={image.url}
                    onChange={(e) => handleImageChange(index, e.target.value)}
                    type="text"
                    name={`imageUrl${index + 1}`}
                    id={`imageUrl${index + 1}`}
                    placeholder={`Image URL ${index + 1} ${
                      index === 0 ? "(Required)" : "(Optional)"
                    }`}
                    required={index === 0} // Only the first image is required
                  />
                  <span className="highlight"></span>
                  <button
                  className="group_multi_remove_btn"
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    disabled={index === 0} // Prevent removing the first image
                  >
                    Remove Image
                  </button>
                </div>
              ))}
               <button className="group_mutli_button" type="button" onClick={handleAddImage}>
                Add Image
              </button>
              </div>
              {/* Description and List Handlers */}
              <div className="group_multi group_description">
              {blogData.descriptions.map((description, index) => (
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
              <button className="group_mutli_button" type="button" onClick={handleAddDescription}>
                Add Description
              </button>
              </div>
              <div className="group_multi group_lists">
              {blogData.list.map((listItem, index) => (
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
              <button className="group_mutli_button" type="button" onClick={handleAddListItem}>
                Add List Item
              </button>
              </div>
              <button
                className="btn db_ab_btn"
                type="submit"
              >
                Update Blog
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default All_Blogs_Slug;
