import { Webhook } from "svix";
import User from "../models/User.js";

const clerkWebhooks = async (req, res) => {
  try {
    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // ✅ Use raw body (req.body is a Buffer due to bodyParser.raw)
    const evt = wh.verify(req.body, headers);

    const { data, type } = evt;

    const userData = {
      clerkId: data.id,
      email: data.email_addresses[0]?.email_address,
      username: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
      image: data.image_url,
    };

    switch (type) {
      case "user.created":
        await User.create(userData);
        console.log("✅ User created:", userData.email);
        break;

      case "user.updated":
        await User.findOneAndUpdate({ clerkId: data.id }, userData);
        console.log("🔁 User updated:", userData.email);
        break;

      case "user.deleted":
        await User.findOneAndDelete({ clerkId: data.id });
        console.log("🗑️ User deleted:", data.id);
        break;

      default:
        console.log(`⚠️ Unhandled event type: ${type}`);
        break;
    }

    res.status(200).json({ success: true, message: "Webhook received" });
  } catch (error) {
    console.error("❌ Webhook error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;
