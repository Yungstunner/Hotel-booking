import { Webhook } from "svix";
import getRawBody from "raw-body";
import User from "../../models/User.js";
import connectDB from "../../utils/connectDB.js"; // Add your DB connect function

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req, res) => {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  await connectDB(); // connect to MongoDB

  try {
    const payload = await getRawBody(req);
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const evt = wh.verify(payload, headers);
    const { data, type } = evt;

    const userData = {
      clerkId: data.id,
      email: data.email_addresses[0].email_address,
      username: `${data.first_name} ${data.last_name}`,
      image: data.image_url,
    };

    switch (type) {
      case "user.created":
        await User.create(userData);
        break;
      case "user.updated":
        await User.findOneAndUpdate({ clerkId: data.id }, userData);
        break;
      case "user.deleted":
        await User.findOneAndDelete({ clerkId: data.id });
        break;
      default:
        console.log(`Unhandled event type: ${type}`);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Webhook Error:", err.message);
    return res.status(400).json({ success: false, error: err.message });
  }
};

export default handler;
