'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './AdminLogin.css'
import '../admin.css'

const AdminLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/adminLogin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        // Store user information in localStorage
        localStorage.setItem("user", JSON.stringify(responseData));
        
        // Redirect to the /admin page
        router.push("/admin");
        
        toast.success("Login Successful", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        // Handle login error
        console.error(responseData.message);
        toast.error(responseData.message, {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Error during login", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div className="cm_container admin_login_form">
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
        <form className="cm_form" onSubmit={handleSubmit}>
          <div className="cm_form_content">
            <h1 className="contact_heading">Admin Login</h1>
            <div className="form">
              <div className="group">
                <input
                  value={email}
                  onChange={handleChange}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  autoComplete="off"
                />
                <span className="highlight"></span>
                <label className="label" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="group">
                <input
                  value={password}
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                  autoComplete="off"
                />
                <span className="highlight"></span>
                <label className="label" htmlFor="password">
                  Password
                </label>
              </div>
              <div>
                <button type="submit" className="button button_small form_submit">
                  <p>Login</p>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;