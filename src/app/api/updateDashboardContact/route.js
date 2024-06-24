import { connectionStr } from "@/utils/db";
import { Contact } from "@/utils/models/contact";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { _id, ...payload } = await request.json();

    await mongoose.connect(connectionStr);

    // Find the contact by its ID and update the fields
    const result = await Contact.findByIdAndUpdate(_id, payload, { new: true });

    if (!result) {
      return NextResponse.json({ error: "Contact not found", success: false });
    }

    return NextResponse.json({ result, success: true });
  } catch (error) {
    console.error("Error updating contact:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}
