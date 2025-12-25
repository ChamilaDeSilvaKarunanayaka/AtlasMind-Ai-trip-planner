import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { em, image } from "motion/react-client";

export default defineSchema({
  userTable:defineTable({
    name:v.string(),
    imageUrl:v.string(),
    email:v.string(),
    subscription:v.optional(v.string()),
    
     })

})
