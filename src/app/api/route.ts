// pages/api/instagram-photos.ts


import { getServerSession } from "next-auth/next";
import { authOptions } from "../utils/authOptions";

export async function GET(request: Request) {
  // Converta a requisição Next.js em algo que getServerSession possa usar
  const req = { headers: Object.fromEntries(request.headers) };
  const res = {};
  const session = await getServerSession(req as any, res as any, authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: "Não autenticado" }), { status: 401 });
  }

  const accessToken = session.accessToken as string;

  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${accessToken}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    // Retorne as fotos como resposta JSON
    return new Response(JSON.stringify(data.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}