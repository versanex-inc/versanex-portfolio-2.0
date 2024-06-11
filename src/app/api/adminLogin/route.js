import { connectionStr } from "@/utils/db";
import { Admin } from "@/utils/models/admin";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
var jwt = require("jsonwebtoken");
var CryptoJS = require("crypto-js");

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    // console.log("Received Login Payload:", { email, password });

    await mongoose.connect(connectionStr);

    // Check if the user exists with the provided email
    const existingUser = await Admin.findOne({ email });

    if (!existingUser) {
      console.log("User not found");
      return NextResponse.json({ success: false, message: "User not found" });
    }

    // Decrypt the stored password and check if it matches the provided password
    const bytes = CryptoJS.AES.decrypt(
      existingUser.password,
      process.env.JWT_SECRET
    );
    const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (decryptedPassword !== password) {
      console.log("Incorrect password");
      return NextResponse.json({
        success: false,
        message: "Incorrect password",
      });
    }

    // Generate a JWT token upon successful login
    const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("Login successful");
    return NextResponse.json({
      success: true,
      message: "Login successful",
      token,
    });

    NextResponse.cookie("token",token)
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ error, success: false });
  }
}