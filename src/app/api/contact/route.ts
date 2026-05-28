import { NextResponse } from "next/server"
import { Resend } from "resend"
import twilio from "twilio"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, caseType, details, inJail } = body

    // 1. Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Required fields (name, email, phone) are missing." },
        { status: 400 }
      )
    }

    const isUrgent = inJail === true || caseType === "jail-release"
    const subjectLine = isUrgent
      ? `[URGENT: JAIL RELEASE] New Case Evaluation Request - ${name}`
      : `New Case Evaluation Request - ${name}`

    // 2. Resend Email block (wrapped in a try-catch for fault tolerance)
    let emailSent = false
    let emailErrorMsg = ""
    try {
      if (!process.env.RESEND_API_KEY) {
        throw new Error("RESEND_API_KEY environment variable is not defined.")
      }

      const resend = new Resend(process.env.RESEND_API_KEY)
      const recipient = process.env.OFFICE_EMAIL || "jessica@atxcrimdefense.com"

      await resend.emails.send({
        from: "Law Office Inquiries <inquiries@atxcrimdefense.com>",
        to: recipient,
        subject: subjectLine,
        html: `
          <h3>New Case Evaluation Request</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Case Type:</strong> ${caseType}</p>
          <p><strong>Urgent/In Jail:</strong> ${inJail ? "Yes (Urgent Action Required)" : "No"}</p>
          <p><strong>Details:</strong></p>
          <p>${details || "No details provided."}</p>
        `,
      })
      emailSent = true
    } catch (err: any) {
      console.error("Resend email integration failed:", err)
      emailErrorMsg = err.message || "Unknown Resend error"
    }

    // 3. Twilio SMS block (wrapped in a completely separate try-catch)
    let smsSent = false
    let smsErrorMsg = ""
    if (isUrgent) {
      try {
        const sid = process.env.TWILIO_ACCOUNT_SID
        const token = process.env.TWILIO_AUTH_TOKEN
        const fromNumber = process.env.TWILIO_PHONE_NUMBER
        const toNumber = process.env.OFFICE_NOTIFICATION_PHONE || "+15128872028"

        if (!sid || !token || !fromNumber) {
          throw new Error("Twilio environment variables are missing.")
        }

        const twilioClient = twilio(sid, token)
        await twilioClient.messages.create({
          body: `[URGENT JAIL RELEASE]\nName: ${name}\nPhone: ${phone}\nCase: ${caseType}\nDetails: ${details ? details.substring(0, 100) : "None"}`,
          from: fromNumber,
          to: toNumber,
        })
        smsSent = true
      } catch (err: any) {
        console.error("Twilio SMS integration failed:", err)
        smsErrorMsg = err.message || "Unknown Twilio error"
      }
    }

    // 4. Fault tolerance evaluation
    // If both integrations fail, return a 500 error
    if (!emailSent && (!isUrgent || !smsSent)) {
      return NextResponse.json(
        { 
          error: "Failed to process lead submission.", 
          details: { emailError: emailErrorMsg, smsError: smsErrorMsg } 
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Lead processed successfully.",
      emailSent,
      smsSent: isUrgent ? smsSent : "N/A"
    })

  } catch (error: any) {
    console.error("API route handler error:", error)
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    )
  }
}
