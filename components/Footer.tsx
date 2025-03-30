import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxKKxLMi1ZwWxJvJg7DxMJFBWt5GYl-A1bGNKE66hnPh84wXYgjI9f22vdu7x8wU1Tb/exec"; // Replace with your Google Apps Script URL

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        mode: "no-cors", // Required for Google Apps Script
      });

      // Since no-cors mode doesn't return a readable response,
      // assume success if no error is thrown
      alert("Message Sent Successfully!");
      resetForm();
      setIsModalOpen(false); // Close modal after submission
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center justify-between min-h-screen relative">
        {/* background grid - fixed at bottom */}
        <div className="w-full absolute left-0 bottom-0 min-h-96">
          <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50"
          />
        </div>

        {/* Main content - centered */}
        <div className="flex-1 flex flex-col items-center justify-center z-10">
          <h1 className="heading lg:max-w-[45vw]">
            Contact <span className="text-purple">Me</span>
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Please contact me directly at{" "}
            <a
              href="mailto:lohitkumar1914@gmail.com"
              target="_blank"
              className="text-blue-400 underline hover:text-blue-600"
            >
              lohitkumar1914@gmail.com
            </a>{" "}
            or through this below button.
          </p>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            handleClick={() => setIsModalOpen(true)} // Open modal on click
          />
        </div>

        {/* Modal for Contact Form */}
        {isModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: "#04071d" }} // Popup background color
          >
            <div className="bg-blue text-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
              <button
                onClick={() => setIsModalOpen(false)} // Close modal
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition"
              >
                &times;
              </button>
              <h2 className="text-2xl font-semibold text-center mb-6">
                Send Me Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="bg-white text-black"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="bg-white text-black"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project..."
                    required
                    className="bg-white text-black"
                  />
                </div>
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    className="bg-purple text-white px-6 py-3 rounded-lg hover:bg-purple-dark transition"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Footer bottom section - fixed at bottom */}
        <div className="w-full border-t border-black-300 mt-16 pt-8 pb-4 z-10">
          <div className="container mx-auto px-4 flex md:flex-row flex-col justify-between items-center gap-4">
            <p className="md:text-base text-sm md:font-normal font-light">
              Copyright © 2030 Lohit Kumar
            </p>

            <div className="flex items-center gap-6">
              {socialMedia.map((info) => (
                <a
                  key={info.id}
                  href={info.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:opacity-80 transition-opacity"
                >
                  <img
                    src={info.img}
                    alt={`${info.id} icon`}
                    className="w-6 h-6 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
