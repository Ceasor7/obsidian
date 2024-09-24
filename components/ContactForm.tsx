import { Mail, MessageSquare, User } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const ContactForm = () => {
  return (
    <div>
      <form className="space-y-4 w-full">
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="pl-10 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="pl-10 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
          <textarea
            name="message"
            placeholder="Your Message"
            className="pl-10 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            rows={4}
            required
          ></textarea>
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-200 transition-colors duration-200"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
