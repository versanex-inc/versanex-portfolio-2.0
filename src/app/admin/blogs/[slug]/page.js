"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const All_Blogs_Slug = ({ params }) => {
    const router = useRouter();

    useEffect(() => {
      // Check if user exists in localStorage
      const user = localStorage.getItem("user");
      if (!user) {
        // Redirect to /admin/adminLogin page if user doesn't exist
        router.push("/admin/adminLogin");
      }
    }, []);
    const [projectData, setProjectData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getBlogs`);
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
            const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/editBlog`, {
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
        <div className="container top_container edit_project_container">
            <h1>Edit Blog</h1>
            {projectData && (
                <form className='top_container edit_p_form' onSubmit={handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input 
                            type="text" 
                            name="title" 
                            value={projectData.title || ''} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea 
                            name="description" 
                            value={projectData.description || ''} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div>
                        <label>Category:</label>
                        <input 
                            type="text" 
                            name="category" 
                            value={projectData.category || ''} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div>
                        <label>SubCategory:</label>
                        <input 
                            type="text" 
                            name="subCategory" 
                            value={projectData.subCategory || ''} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div>
                        <label>Images:</label>
                        {projectData.images.map((image, index) => (
                            <div key={index}>
                                <input 
                                    type="text" 
                                    value={image.url || ''} 
                                    onChange={(e) => handleImageChange(index, e.target.value)} 
                                />
                            </div>
                        ))}
                    </div>
                    <div>
                        <label>Creator Name:</label>
                        <input 
                            type="text" 
                            name="creatorName" 
                            value={projectData.creatorName || ''} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div>
                        <label>Creator Niche:</label>
                        <input 
                            type="text" 
                            name="creatorNiche" 
                            value={projectData.creatorNiche || ''} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div>
                        <label>Creator Picture:</label>
                        <input 
                            type="text" 
                            name="creatorPicture" 
                            value={projectData.creatorPicture || ''} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div>
                        <label>Creator Profile:</label>
                        <input 
                            type="text" 
                            name="creatorProfile" 
                            value={projectData.creatorProfile || ''} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <button className="button button_small form_submit" type="submit"><p>Updata&nbsp;Blog</p></button>
                </form>
            )}
        </div>
    );
};

export default All_Blogs_Slug;
