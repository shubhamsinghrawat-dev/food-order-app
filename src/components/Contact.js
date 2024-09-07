import React from "react";

const Contact = () => {
  return (
    <div>
     
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Contact Us</h2>
          <p className="text-lg text-center text-gray-600 mb-8">
            Get in touch with us. We are always here to help you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <form action="https://formspree.io/f/xrbzqlnd" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      required
                      autoComplete="off"
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="off"
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    autoComplete="off"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="5"
                    required
                    autoComplete="off"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29370.211439308885!2d84.5204977765637!3d23.050325065847442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398ae92212b83f1d%3A0x40bc44947fc0dc6!2sGumla%2C%20Jharkhand%20835207!5e0!3m2!1sen!2sin!4v1720780611954!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="rounded shadow-md"
                style={{ minHeight: "400px", border: "none" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
