import { z } from "zod";

const email = z
  .string()
  .trim()
  .email("Enter a valid business email.")
  .max(120, "Email is too long.");

const message = z
  .string()
  .trim()
  .min(12, "Share a little more detail.")
  .max(1200, "Message is too long.");

const honeypot = z.string().trim().max(200).optional().default("");

const chatContent = z
  .string()
  .trim()
  .min(1, "Enter a message.")
  .max(700, "Message must be 700 characters or fewer.");

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(80),
  email,
  company: z.string().trim().min(2, "Enter your company.").max(100),
  interest: z.string().trim().min(2, "Choose an area of interest.").max(80),
  message,
  website: honeypot,
});

export const demoSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(80),
  email,
  company: z.string().trim().min(2, "Enter your company.").max(100),
  teamSize: z.string().trim().min(1, "Choose a team size.").max(40),
  useCase: z.string().trim().min(2, "Choose a use case.").max(80),
  timeline: z.string().trim().min(2, "Choose a timeline.").max(80),
  message,
  website: honeypot,
});

export const chatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: chatContent,
});

export const chatRequestSchema = z.object({
  message: chatContent,
  history: z.array(chatMessageSchema).max(8).optional().default([]),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type DemoFormValues = z.infer<typeof demoSchema>;
export type ChatMessageValues = z.infer<typeof chatMessageSchema>;
export type ChatRequestValues = z.infer<typeof chatRequestSchema>;
