import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates"
import { mailtrapClient, sender } from "./mailtrap.config"

export const sendVerificationEmail = async (sendVerificationEmail, verificationToken) => {
    const recipient = [{ email }]
    
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification",
        })
        console.log("Email sent succesfully", response)
    } catch (error) {
        console.log("Error sending email", error)
        throw new Error(`Error sending verification email: ${error}`)
    }
}