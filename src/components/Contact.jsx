import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

        <p className="text-gray-300 mb-8">
          Want to collaborate or discuss a project? Click the button below to
          send me an email!
        </p>

        {/* Send Email Button */}
        <a
          href="mailto:tanishqth83508@gmail.com"
          className="inline-block bg-purple-600 hover:bg-purple-700 transition-all duration-300 px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-purple-500/40"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
