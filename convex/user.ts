import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { ArrowBigLeft } from "lucide-react";

export const CreateNewUser=mutation({
  args:{
    name:v.string(),
    imageUrl:v.string(),
    email:v.string(),
    
  }, 
  handler:async(ctx,args)=>{
    // if user already exists, do not create
    const user=await ctx.db.query("userTable").filter((q)=>q.eq(q.field("email"),args.email)).collect();

    if (user.length === 0) {
    const userData = {
      name: args.name,
      email: args.email,
      imageUrl: args.imageUrl,
    };

    // If not, then create new user
    const result = await ctx.db.insert("userTable", userData);
    return userData;
  }

  // If user already exists, return existing user
  return user[0];
  }

})