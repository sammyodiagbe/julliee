import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const joinWaitlist = mutation({
  args: {
    email: v.string(),
  },

  handler: async (ctx, args) => {
    const { email } = args;
    const entry = await ctx.db
      .query("waitlist")
      .filter((q) => q.eq(q.field("email"), email))
      .unique();
    if (!entry) {
      const { email } = args;
      await ctx.db.insert("waitlist", { email, date: Date.now() });
      return true;
    }
    return false;
  },
});
