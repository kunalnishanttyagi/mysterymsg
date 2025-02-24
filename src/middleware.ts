import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import  dbconnect  from "./lib/dbconnect";
import User from "@/Model/User";

export default clerkMiddleware(async (auth,req) => {
    const { userId } = req.auth; // Correct way to access userId

    if (userId) {
        await dbconnect();
        const user = await User.findOne({ clerkId: userId });

        if (!user) {
            await User.create({
                clerkId: userId,
                email: req.auth?.sessionClaims?.email, // Get email from session
                role: "user",
            });
        }
    }

    return NextResponse.next();
});

// Apply middleware only to specific routes
export const config = {
    matcher: ["/dashboard/:path*"], // Protect dashboard routes
};
