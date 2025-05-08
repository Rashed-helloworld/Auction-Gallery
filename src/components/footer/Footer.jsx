import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col bg-white text-black">
      <div className="flex justify-around h-80 p-8">
        <div className="h-full">
          <h3 className="border-b-2 mb-12 text-2xl font-bold text-center">
            Contact Us
          </h3>
          <p className="text-lg text-center">
            <PiPhoneCallFill className="inline" /> 1234567**
          </p>
          <p className="text-lg text-center my-4">
            <MdEmail className="inline" /> sample@email.com
          </p>
          <p className="text-lg text-center">
            **Texting ( <FaMessage className="inline" /> ) is also allowed for
            You.
          </p>
        </div>
        <div>
          <h3 className="border-b-2 mb-12 text-2xl font-bold text-center">Social</h3>
          <div className="flex gap-8">
            <FaFacebook size={28} />
            <FaSquareXTwitter size={28} />
            <FaGlobe size={28} />
            <FaSquareInstagram size={28} />
          </div>
        </div>
      </div>
        <p className="text-center mb-4">
          &copy; Copyright, All rights reserved 2039 by Auction Gallery Pvt.
          Ltd.
        </p>
    </div>
  );
};

export default Footer;
