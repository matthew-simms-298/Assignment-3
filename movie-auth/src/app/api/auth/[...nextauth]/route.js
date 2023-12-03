import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    {/* 
    This is where you put the Auth Provider, A .env / .env.local (Enviroment file is required to run this code)
    The .env file should contain the following:
    CLIENT_ID=YOUR_CLIENT_ID
    CLIENT_SECRET=YOUR_CLIENT_SECRET
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=YOUR_SECRET

    The Providers and Documentation are listed here: https://next-auth.js.org/providers
    */},
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };