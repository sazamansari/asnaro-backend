// sesUtils.ts

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const region = process.env.AWS_REGION || ''; // Provide a default region if needed
const accessKeyId = process.env.AWS_ACCESS_KEY_ID || '';
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || '';

const sesClient = new SESClient({
    region,
    credentials: {
        accessKeyId,
        secretAccessKey
    }
});

export const sendEmail = async (emailParams: any): Promise<void> => {
    try {
        const command = new SendEmailCommand(emailParams);
        await sesClient.send(command);
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};

// You can add more SES-related utility functions here
