import { NextResponse } from 'next/server';

const API_KEY = process.env.GOOGLE_TRANSLATE_API_KEY || 'AIzaSyAhqpQk67cx_PTrUx4SX_fuSyALxl5S4-g';


export async function POST(request: Request) {
  try {
    const { text, targetLang } = await request.json();

    if (!text || !targetLang) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }

    if (targetLang === 'en') {
      return NextResponse.json({ translatedText: text }); // No cost for English
    }

    const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: text,
        target: targetLang,
        format: 'text',
      }),
    });

    const data = await response.json();
    
    if (data.error) {
       console.error('Google API Error:', data.error);
       return NextResponse.json({ translatedText: text }, { status: 200 }); // Fallback to original
    }

    const translatedText = data.data.translations[0].translatedText;
    return NextResponse.json({ translatedText });

  } catch (error) {
    console.error('Translation Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
