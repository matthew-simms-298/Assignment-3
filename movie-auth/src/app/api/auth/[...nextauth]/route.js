import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    {/* This is where you put the Auth Provider, A local .env / .env.local (Enviroment file is required to run this code) */},
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };