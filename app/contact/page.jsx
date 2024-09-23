"use client";
import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you can implement your desired logic for handling form submissions,
    // such as sending an email or storing the data in a database.
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Contact page for [Your Website Name]"
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Our Contact Information</h2>
          <p>
            <span className="font-bold">PO Box Address:</span> PO Box 12345,
            Nairobi, Kenya
          </p>
          <p>
            <span className="font-bold">Phone Number:</span> +254 712 345 678
          </p>
          <p>
            <span className="font-bold">Location:</span> Nairobi, Kenya
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block   
 text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full   
 px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full   
 px-3 py-2 border rounded-lg"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
