'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import '../addProject/addProject.css'
import './AllProjectsSlug.css'
const All_Projects_Slug = ({ params }) => {
    const router = useRouter();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            router.push("/adminLogin");
        }
    }, []);

    const [projectData, setProjectData] = useState({
        title: "",
        slug: "",
        description: "",
        images: [{ url: "" }, { url: "" }, { url: "" }, { url: "" }, { url: "" }, { url: "" }],
        creatorName: "",
        creatorNiche: "",
        creatorPicture: "",
        creatorProfile: "",
        projectType: "",
        category: "",
        subCategory: "",
        status: "",
        deadline: ""
    });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getProjects`);
                if (!response.ok) {
                    throw new Error("Failed to fetch project data");
                }
                const projectsResponse = await response.json();
                const project = projectsResponse.result.find(project => project.slug === params.slug);
                if (project) {
                    setProjectData(project);
                } else {
                    setError(`Project with slug ${params.slug} not found.`);
                }
            } catch (error) {
                console.error("Error fetching project data:", error);
                setError("Error fetching project data");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [params.slug]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProjectData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (index, url) => {
        const updatedImages = projectData.images.map((image, i) =>
            i === index ? { ...image, url } : image
        );
        setProjectData(prevState => ({
            ...prevState,
            images: updatedImages
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/editProject`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(projectData),
            });
            const result = await response.json();
            if (result.success) {
                alert("Project updated successfully!");
            } else {
                throw new Error(result.error || "Failed to update project");
            }
        } catch (error) {
            console.error("Error updating project:", error);
            alert("Error updating project");
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="db_container db_ap_container">
            <h1 className="contact_heading admin_contact_heading">Edit Project</h1>
            {projectData && (
                <form className="a_form" onSubmit={handleSubmit}>
                    <div className="a_form_content">
                        <div className="form admin_form db_add_project">
                            <div className="group">
                                <input
                                    value={projectData.title}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Title"
                                    required
                                />
                                <span className="highlight"></span>
                                <label className="label" htmlFor="title">Title</label>
                            </div>
                            <div className="group">
                                <input
                                    value={projectData.slug}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="slug"
                                    id="slug"
                                    placeholder="Slug"
                                    required
                                />
                                <span className="highlight"></span>
                                <label className="label" htmlFor="slug">Slug</label>
                            </div>
                            <div className="group desc_group">
                                <textarea
                                    value={projectData.description}
                                    onChange={handleInputChange}
                                    name="description"
                                    id="description"
                                    rows={5}
                                    placeholder="Description"
                                    required
                                    autoComplete="off"
                                />
                                <span className="highlight"></span>
                            </div>
                            <div className="group">
                                <input
                                    value={projectData.creatorName}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="creatorName"
                                    id="creatorName"
                                    placeholder="Creator Name"
                                    required
                                />
                                <span className="highlight"></span>
                                <label className="label" htmlFor="creatorName">Creator Name</label>
                            </div>
                            <div className="group">
                                <input
                                    value={projectData.creatorNiche}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="creatorNiche"
                                    id="creatorNiche"
                                    placeholder="Creator Niche"
                                    required
                                />
                                <span className="highlight"></span>
                                <label className="label" htmlFor="creatorNiche">Creator Niche</label>
                            </div>
                            <div className="group">
                                <input
                                    value={projectData.creatorPicture}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="creatorPicture"
                                    id="creatorPicture"
                                    placeholder="Creator Picture"
                                    required
                                />
                                <span className="highlight"></span>
                                <label className="label" htmlFor="creatorPicture">Creator Picture</label>
                            </div>
                            <div className="group">
                                <input
                                    value={projectData.creatorProfile}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="creatorProfile"
                                    id="creatorProfile"
                                    placeholder="Creator Profile"
                                    required
                                />
                                <span className="highlight"></span>
                                <label className="label" htmlFor="creatorProfile">Creator Profile</label>
                            </div>
                            <div className="group">
                                <input
                                    value={projectData.projectType}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="projectType"
                                    id="projectType"
                                    placeholder="Project Type"
                                    required
                                />
                                <span className="highlight"></span>
                                <label className="label" htmlFor="projectType">Project Type</label>
                            </div>
                            <div className="group">
                                <input
                                    value={projectData.images[0].url}
                                    onChange={(e) => handleImageChange(0, e.target.value)}
                                    type="text"
                                    name="imageUrl1"
                                    id="imageUrl1"
                                    placeholder="Image URL (Required)"
                                    required
                                />
                                <span className="highlight"></span>
                                <label className="label" htmlFor="imageUrl1">Image URL (Required)</label>
                            </div>
                            {projectData.images.slice(1).map((image, index) => (
                                <div className="group" key={index + 1}>
                                    <input
                                        value={image.url}
                                        onChange={(e) => handleImageChange(index + 1, e.target.value)}
                                        type="text"
                                        name={`imageUrl${index + 2}`}
                                        id={`imageUrl${index + 2}`}
                                        placeholder={`Image URL ${index + 2} (Optional)`}
                                    />
                                    <span className="highlight"></span>
                                </div>
                            ))}
                            <div className="group">
                                <input
                                    value={new Date(projectData.deadline).toISOString().slice(0, 16)}
                                    onChange={handleInputChange}
                                    type="datetime-local"
                                    name="deadline"
                                    id="deadline"
                                    placeholder="Deadline"
                                    required
                                />
                                <span className="highlight"></span>
                            </div>
                            <div className="group_dropdowns">
                                <div className="group admin_group group_dd_db">
                                    <select
                                        value={projectData.status}
                                        onChange={handleInputChange}
                                        name="status"
                                        id="status"
                                        required
                                    >
                                        <option className="selction_option" value="">Status</option>
                                        <option value="Progress">Progress</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Holding">Holding</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                    <span className="highlight"></span>
                                </div>
                                <div className="group admin_group group_dd_db">
                                    <select
                                        value={projectData.category}
                                        onChange={handleInputChange}
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
                                        value={projectData.subCategory}
                                        onChange={handleInputChange}
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
                                        <option value="Buisness">Buisness</option>
                                        <option value="Portfolio">Portfolio</option>
                                    </select>
                                    <span className="highlight"></span>
                                </div>
                            </div>
                            <button className="submit_button admin_submit_button edit_project_submit" type="submit">
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default All_Projects_Slug;
