import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { SendHorizonal } from "lucide-react";

const ContactForm = () => {
  return (
    <form className="w-1/2 self-stretch flex flex-col gap-5" action="">
      <h1 className="text-4xl font-bold">Contact me</h1>
      <div className="space-y-3 self-stretch">
        <div className="space-y-1">
          <Label>Your full name</Label>
          <Input
            type="text"
            placeholder="Anurag Tiwari"
            required
            minLength={5}
          />
        </div>
        <div className="space-y-1">
          <Label>Your email</Label>
          <Input
            type="email"
            placeholder="contact@anuragtiwari.me"
            required
            pattern="/^[^\s@]+@[^\s@]+\.[^\s@]+$/"
          />
        </div>
        <div className="space-y-1">
          <Label>Your message</Label>
          <Textarea
            placeholder="I loved watching your youtube videos"
            minLength={20}
            className="h-40 resize-none"
          />
        </div>
      </div>
      <Button
        type="submit"
        className="w-full flex items-center gap-2"
        size={"lg"}
      >
        Send message <SendHorizonal size={15} />
      </Button>
    </form>
  );
};

export default ContactForm;
