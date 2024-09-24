import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const page = () => {
  return (
    <div className="max-w-5xl py-16 mx-auto px-4">
      <div className="flex flex-col ">
        <div className="p-4">
          <div className=" flex flex-col justify-center">
            <div className=" flex items-center gap-x-4 text-lg mb-4">
              <span className=" w-[30px] h-[2px] bg-primary"></span>
              Get in Touch 📞
            </div>
          </div>
          <div className=" flex flex-col md:flex-row gap-x-5 sm:gap-x-16 ">
            <div className="flex flex-col gap-y-3 text-center shadow-xl p-5 md:p-10 items-center mb-4 w-full">
              <MapPin className="w-6 h-6 text-[#004aad] mr-2" />
              <p className="w-full">P.O. Box 1234, Nairobi, Kenya</p>
            </div>
            <div className="flex flex-col gap-y-3 text-center shadow-xl p-5 md:p-10 items-center mb-4 w-full">
              <Phone className="w-6 h-6 text-[#004aad] mr-2" />
              <p className="w-full">+254 720 417002</p>
            </div>
            <div className="flex flex-col gap-y-3 text-center shadow-xl p-5 md:p-10 items-center mb-4 w-full">
              <Mail className="w-6 h-6 text-[#004aad] mr-2" />
              <p className="w-full">Info@obsidiantours.com</p>
            </div>
          </div>
        </div>
        <div className=" p-4">
          <div className=" flex flex-col justify-center">
            <div className=" flex items-center gap-x-4 text-lg mb-4">
              <span className=" w-[30px] h-[2px] bg-primary"></span>
              Get in Touch 📥
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default page;
