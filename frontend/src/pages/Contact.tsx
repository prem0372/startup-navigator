function Contact() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">

      <h1 className="text-5xl font-bold">
        Contact Us
      </h1>

      <div className="mt-10 space-y-6">

        <input
          placeholder="Name"
          className="w-full rounded-lg border p-4"
        />

        <input
          placeholder="Email"
          className="w-full rounded-lg border p-4"
        />

        <textarea
          rows={5}
          placeholder="Message"
          className="w-full rounded-lg border p-4"
        />

        <button className="rounded-lg bg-blue-600 px-6 py-3 text-white">
          Send Message
        </button>

      </div>

    </main>
  );
}

export default Contact;