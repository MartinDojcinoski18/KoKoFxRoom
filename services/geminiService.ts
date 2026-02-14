import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client safely
// IMPORTANT: The API key must be provided in the environment variable API_KEY
let ai: GoogleGenAI | null = null;

try {
  const apiKey = process.env.API_KEY;
  if (apiKey && apiKey.length > 0) {
    ai = new GoogleGenAI({ apiKey: apiKey });
  } else {
    console.warn("Gemini API Key is missing. AI features will use fallback text.");
  }
} catch (error) {
  console.error("Failed to initialize Gemini Client:", error);
}

export const getTradingWisdom = async (): Promise<string> => {
  // If AI client is not initialized, return fallback immediately
  if (!ai) {
    return "Discipline is the bridge between goals and accomplishment.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    const prompt = `
      Act as a world-class senior trading mentor with decades of experience (like Mark Douglas or Tom Hougaard).
      Give me a short, powerful, and unique piece of advice about trading psychology, risk management, or discipline.
      Keep it under 2 sentences.
      Make it motivating but realistic for a beginner trader who has struggled for years but is now finding consistency.
      Write the response in English.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Discipline is the bridge between goals and accomplishment.";
  } catch (error) {
    console.error("Error fetching wisdom:", error);
    return "The market rewards patience. Stay focused on the process, not the profit.";
  }
};