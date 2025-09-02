'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendContactMessage - A function that handles sending the contact message.
 * - ContactMessageInput - The input type for the sendContactMessage function.
 * - ContactMessageOutput - The return type for the sendContactMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContactMessageInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email of the person sending the message.'),
  phone: z.string().optional().describe('The phone number of the person sending the message.'),
  message: z.string().describe('The message content.'),
});
export type ContactMessageInput = z.infer<typeof ContactMessageInputSchema>;

const ContactMessageOutputSchema = z.object({
  success: z.boolean(),
});
export type ContactMessageOutput = z.infer<typeof ContactMessageOutputSchema>;

export async function sendContactMessage(input: ContactMessageInput): Promise<ContactMessageOutput> {
  return contactFlow(input);
}

const contactFlow = ai.defineFlow(
  {
    name: 'contactFlow',
    inputSchema: ContactMessageInputSchema,
    outputSchema: ContactMessageOutputSchema,
  },
  async (input) => {
    // In a real application, you would integrate with an email service
    // like SendGrid, Resend, or Nodemailer to send the email.
    // For this example, we'll just log the intended action.
    console.log(`Simulating sending email to info@numera.live:`);
    console.log(`From: ${input.name} <${input.email}>`);
    if(input.phone) {
      console.log(`Phone: ${input.phone}`);
    }
    console.log(`Message: ${input.message}`);

    // Here, you would add the actual email sending logic.
    // For example (using a hypothetical email service):
    //
    // import { Email } from "@third-party/email-service";
    // await new Email({
    //   to: "info@numera.live",
    //   from: "contact-form@numera.live",
    //   subject: `New message from ${input.name}`,
    //   body: `
    //     Name: ${input.name}
    //     Email: ${input.email}
    //     Phone: ${input.phone || 'Not provided'}
    //     Message: ${input.message}
    //   `,
    // }).send();

    return { success: true };
  }
);
