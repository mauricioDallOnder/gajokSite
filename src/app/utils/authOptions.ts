import NextAuth from 'next-auth'
import InstagramProvider from "next-auth/providers/instagram";
//auth
export const authOptions = {
  providers: [
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
      authorization: {
        url: 'https://api.instagram.com/oauth/authorize',
        params: { 
          scope: 'user_profile,user_media',
          redirect_uri: 'https://gajok.vercel.app/api/auth/callback/instagram' // Substitua com sua URL exata
        },
      },
    }),
  ],
  callbacks: {
    // @ts-ignore
    async jwt({ token, account }) {
      // Se o login foi bem-sucedido e temos um account, então podemos definir o accessToken
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    // @ts-ignore
    async session({ session, token }) {
      // Adiciona a `role` do token JWT ao objeto `session`.
      session.accessToken = token.accessToken;
      return session;
    },
    // Adicione o callback redirect aqui
    // @ts-ignore
    async redirect({ url, baseUrl }) {
      // Se o login for bem-sucedido e a URL de destino não for especificada,
      // redireciona para o Google. Caso contrário, redireciona para a URL de destino ou para a baseUrl.
      if (url === baseUrl) {
        return 'https://gajok.vercel.app/GalleryPage';
      }
      return url ?? baseUrl;
    }
  },
  // Defina um secret seguro aqui.
  secret: process.env.NEXTAUTH_SECRET,
  // Você pode adicionar configurações adicionais aqui se necessário.
}


