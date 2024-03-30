// pages/api/instagram-photos.ts

import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../utils/authOptions";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: "Não autenticado" });
  }

  const accessToken = session.accessToken as string; // Supondo que o accessToken é armazenado na sessão

  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${accessToken}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

    if (data.error) {
      throw new Error(data.error.message);
    }

    res.status(200).json(data.data); // Envie as fotos como resposta
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
}
