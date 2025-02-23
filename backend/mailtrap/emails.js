import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { mailtrapClient, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationToken) => {
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

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];

    try {
        const res = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "0f0bd7a8-bfab-4137-90c7-2654ea9f3e5c",
            template_variables: {
                "company_info_name": "Auth Inc",
                "name": name
            }
        })
        console.log("Email sent successfully",res);
    } catch (error) {
        console.error(`Error sending welcome email`, error)
        
        throw new Error(`Error sending welcome email: ${error}`)
    }
}