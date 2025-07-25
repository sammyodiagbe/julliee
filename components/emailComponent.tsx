"use client";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const EmailComponent = () => {
  const [sendingData, setSettingData] = useState(false);
  const [email, setEmail] = useState("");
  const join = useMutation(api.mutations.joinWaitlist.joinWaitlist);
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", email);

    setSettingData(true);

    try {
      const joinlist = await join({ email });

      if (joinlist) {
        toast(
          "Thank you for joining our waitlist, we look forward to helping you breeze through your day in style.",
          {
            className: "bg-green-600 text-white font-bold",
            style: {
              backgroundColor: "green",
              color: "white",
              fontWeight: "bold",
            },
          }
        );
      } else {
        toast("You appear to be on our waitlist already", {
          style: { backgroundColor: "red", color: "white", fontWeight: "bold" },
        });
      }
      setEmail("");
      setSettingData(false);
    } catch (err) {
      console.log(err);
      toast("Oh snap something went wrong. please try again", {});
    }
    setSettingData(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex bg-gray-200 pl-2">
          <input
            placeholder="name@gmail.com "
            className="flex-1 py-4 outline-none"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name={"email"}
            value={email}
            required
          />
          {sendingData ? (
            <Button className="py-4 ">
              <Loader2 className="animate-spin" />
            </Button>
          ) : (
            <Button className="h-full py-4">Join Waitlist</Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EmailComponent;
