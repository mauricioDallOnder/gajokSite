import { authOptions } from '@/app/utils/authOptions';
import NextAuth from 'next-auth'

// Exportação padrão para a configuração do NextAuth
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

