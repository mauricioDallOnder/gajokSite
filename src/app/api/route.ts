// src/pages/api/instagram-photos.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from "next-auth/next";
import { authOptions } from '../utils/authOptions';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  const session = await getServerSession(
    req as unknown as NextApiRequest,
    {
      ...res,
      getHeader: (name: string) => res.headers?.get(name),
      setHeader: (name: string, value: string) => res.headers?.set(name, value),
    } as unknown as NextApiResponse,
    authOptions
  );

  if (!session) {
    return Response.json({ message: 'You must be logged in.' }, { status: 401 })
  }

  
  const accessToken = "IGQWRNbm5BSlN6OXN4Wm55NzZASU2JWY2lZASElULVl6QS1OY0tZAUzd0V2gtWmhUbzZABMXVqekJWQlVIaGJRQWktMFdPX0pFM0thTzR0aXR3MjRtaGlRRGF6N1diUjhWUUl0M1ZAaWlVoM1c4QQZDZD";
 

  if (!accessToken) {
    return Response.json({ message: 'token nao disponivel.' }, { status: 401 })
    
  }

  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${accessToken}`;

  try {
    const instagramResponse = await fetch(url);
    const data = await instagramResponse.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    // Envia os dados obtidos da API do Instagram como resposta
    return new Response(JSON.stringify(data.data), { status: 200, headers: { 'Content-Type': 'application/json' }});
  } catch (error: any) {
    return new Response(JSON.stringify({ message: 'Error fetching Instagram media.' }), { status: 500, headers: { 'Content-Type': 'application/json' }});
  }
}
