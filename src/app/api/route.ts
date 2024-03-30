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

  // Certifique-se de que o accessToken está sendo corretamente armazenado na sessão
  // Este passo depende da sua implementação específica no callback jwt de authOptions
  const accessToken = session.accessToken;

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
    Response.json(data.data);
  } catch (error:any) {
    return Response.json({ message: 'erro.' }, { status: 500 })
  }
}
