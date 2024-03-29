import NextAuth from 'next-auth'
import InstagramProvider from "next-auth/providers/instagram";

export const authOptions = {
  providers: [
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
      authorization: {
        url: "https://api.instagram.com/oauth/authorize",
        params: { scope: "user_profile,user_media" },
      },
    }),
  ],
  callbacks: {
    // @ts-ignore
    async jwt({ token, user }) {
      // Aqui você adiciona propriedades ao token JWT. O exemplo supõe que `user` tem uma propriedade `role`.
      if (user?.role) {
        token.role = user.role;
      }
      return token;
    },
    // @ts-ignore
    async session({ session, token }) {
      // Adiciona a `role` do token JWT ao objeto `session`.
      if (token.role) {
        session.user.role = token.role;
      }
      return session;
    },
    // Adicione o callback redirect aqui
    // @ts-ignore
    async redirect({ url, baseUrl }) {
      // Se o login for bem-sucedido e a URL de destino não for especificada,
      // redireciona para o Google. Caso contrário, redireciona para a URL de destino ou para a baseUrl.
      if (url === baseUrl) {
        return 'https://seara-do-bem.vercel.app/';
      }
      return url ?? baseUrl;
    }
  },
  // Defina um secret seguro aqui.
  secret: process.env.NEXTAUTH_SECRET,
  // Você pode adicionar configurações adicionais aqui se necessário.
}


// Exportação padrão para a configuração do NextAuth
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

