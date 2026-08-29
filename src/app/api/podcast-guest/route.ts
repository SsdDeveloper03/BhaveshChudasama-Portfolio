import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, companyName, industry, topicStory } = body;

    // Log the lead details server-side
    console.log("=== NEW PODCAST GUEST APPLICATION RECEIVED ===");
    console.log("Target Number:", "8200414301");
    console.log("Full Name:", fullName);
    console.log("Phone:", phone);
    console.log("Company:", companyName);
    console.log("Industry:", industry);
    console.log("Topic/Story:", topicStory);
    console.log("Timestamp:", new Date().toISOString());
    console.log("===============================================");

    // Return success response to the client
    return NextResponse.json(
      {
        success: true,
        message: "Podcast guest application received successfully.",
        targetPhone: "8200414301",
        data: { fullName, phone, companyName, industry, topicStory },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing podcast guest application:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process application." },
      { status: 500 }
    );
  }
}
