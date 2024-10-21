import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "@/app/lib/mongoClient"; // Adjusted import statement
 


export const authOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
      ],

      adapter: MongoDBAdapter(client),


};
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }