import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Email setup
  const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

  // Gemini API setup
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || "",
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // API Routes
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: message,
        config: {
          systemInstruction: "You are a helpful travel assistant for Budget Trips. You help users plan trips to Indian hill stations like Manali, Munnar, Shimla, Darjeeling, Gulmarg, and Ooty. Be concise, professional, and enthusiastic about Indian tourism.",
        },
      });
      res.json({ text: response.text });
    } catch (error) {
      console.error("Gemini Error:", error);
      res.status(500).json({ error: "Failed to generate AI response" });
    }
  });

  app.post("/api/booking", async (req, res) => {
    try {
      const { name, email, phone, packageId, packageName, date, travelers, message } = req.body;

      console.log("New Booking Request:", { name, email, phone, packageId, packageName, date, travelers });

      if (resend) {
        try {
          await resend.emails.send({
            from: 'Budget Trips <onboarding@resend.dev>',
            to: [email],
            subject: 'Trip Confirmation - Budget Trips Journey',
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111; line-height: 1.6;">
                <div style="text-align: center; margin-bottom: 32px;">
                  <h1 style="color: #059669; font-size: 32px; margin-bottom: 8px;">Adventure Awaits, ${name}!</h1>
                  <p style="color: #666; font-size: 16px;">Your mountain journey is officially in the works.</p>
                </div>

                <p>Namaste! Thank you for choosing Budget Trips. We've received your booking request and our mountain experts are already preparing the perfect itinerary for you.</p>
                
                <div style="display: flex; gap: 20px; margin: 32px 0;">
                  <div style="flex: 1; background-color: #f0fdf4; padding: 24px; border-radius: 20px; border: 1px solid #d1fae5;">
                    <h2 style="margin-top: 0; font-size: 18px; color: #065f46;">Trip Details</h2>
                    <p style="margin: 8px 0;"><strong>Package:</strong><br/> ${packageName || packageId}</p>
                    <p style="margin: 8px 0;"><strong>Travel Date:</strong><br/> ${date}</p>
                    <p style="margin: 8px 0;"><strong>Group Size:</strong><br/> ${travelers} Persons</p>
                  </div>

                  <div style="flex: 1; background-color: #f9fafb; padding: 24px; border-radius: 20px; border: 1px solid #f3f4f6;">
                    <h2 style="margin-top: 0; font-size: 18px; color: #374151;">Traveler Profile</h2>
                    <p style="margin: 8px 0;"><strong>Full Name:</strong><br/> ${name}</p>
                    <p style="margin: 8px 0;"><strong>Email:</strong><br/> ${email}</p>
                    <p style="margin: 8px 0;"><strong>Contact:</strong><br/> ${phone}</p>
                  </div>
                </div>

                ${message ? `
                <div style="background-color: #fffbeb; padding: 20px; border-radius: 16px; border: 1px solid #fef3c7; margin-bottom: 32px;">
                  <h3 style="margin-top: 0; font-size: 14px; color: #92400e; text-transform: uppercase; letter-spacing: 1px;">Specific Requests</h3>
                  <p style="margin: 0; italic; color: #92400e;">"${message}"</p>
                </div>
                ` : ''}

                <div style="text-align: center; padding: 32px; border-top: 1px solid #f3f4f6; margin-top: 32px;">
                  <p style="margin-bottom: 24px;">One of our mountain experts will contact you within the next 24 hours to discuss the next steps.</p>
                  <p style="font-size: 14px; color: #999;">
                    Happy Travels,<br/>
                    <strong style="color: #059669; font-size: 18px;">Budget Trips Team</strong>
                  </p>
                </div>
              </div>
            `
          });
          console.log("Confirmation email sent to:", email);
        } catch (emailError) {
          console.error("Failed to send email:", emailError);
          // Don't fail the whole request if email fails
        }
      } else {
        console.warn("RESEND_API_KEY not set. Skipping email sending.");
      }

      res.json({ success: true, message: "Booking request received" });
    } catch (error) {
      console.error("Booking Error:", error);
      res.status(500).json({ error: "Failed to process booking" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
