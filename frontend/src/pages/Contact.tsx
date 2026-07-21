import { useState } from "react";

import { sendContact } from "../api/contactService";

function Contact() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit() {

    if (!name || !email || !message) {

      alert("Please fill all fields");

      return;

    }

    try {

      setLoading(true);

      await sendContact(
        name,
        email,
        message
      );

      alert("Message Sent Successfully ✅");

      setName("");

      setEmail("");

      setMessage("");

    }

    catch {

      alert("Server Error");

    }

    finally {

      setLoading(false);

    }

  }

  return (

    <main className="mx-auto max-w-3xl px-6 py-16">

      <h1 className="text-5xl font-bold">

        Contact Us

      </h1>

      <div className="mt-10 space-y-5">

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full rounded-lg border p-4"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="w-full rounded-lg border p-4"
        />

        <textarea
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          className="w-full rounded-lg border p-4"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white"
        >

          {

            loading

              ? "Sending..."

              : "Send Message"

          }

        </button>

      </div>

    </main>

  );

}

export default Contact;