import { motion } from "motion/react";
import { useState } from "react";
import msgIcon from "../assets/icons/mail.png";
import { Footer } from "./footer";
export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("https://irfan-devs.vercel.app/api/server", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send the message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error occurred. Try again.");
    }
  };

  return (
    <>
      <div id="Contact" className="h-screen">
        <div className="project-title text-7xl md:text-9xl h-screen tracking-wide font-extrabold leading-snug uppercase text-white flex items-center md:justify-center">
          <div className="bg-color1/40 rounded-full absolute size-80 blur-[100px] z-10"></div>
          <div className="z-30 animate-pulse pl-5 flex max-md:flex-col gap-x-8">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="will-change-transform will-change-opacity"
            >
              Get
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
              className="will-change-transform will-change-opacity"
            >
              in
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
              className="will-change-transform will-change-opacity"
            >
              Touch
            </motion.div>
          </div>
        </div>
        <div className="form h-screen py-10 px-3 flex max-md:flex-col mt-10 gap-5">
          <div className="illustration w-full flex justify-center items-center h-1/4 md:h-full">
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="w-3/4 max-md:max-w-[20rem] md:w-[30rem]"
              src={msgIcon}
              alt=""
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 py-10 px-3 w-full items-center h-full rounded-xl"
          >
            <div className="input-name w-full md:w-3/4">
              <motion.input
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                autoComplete="off"
                className="bg-transparent border-color2 border-b py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
              />
            </div>
            <div className="input-name w-full md:w-3/4">
              <motion.input
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                autoComplete="off"
                className="bg-transparent border-color2 border-b py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email ID"
              />
            </div>
            <div className="input-name w-full md:w-3/4">
              <motion.input
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                autoComplete="off"
                className="bg-transparent border-color2 border-b py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className="input-name w-full md:w-3/4">
              <motion.textarea
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                rows={5}
                autoComplete="off"
                className="bg-transparent border-color2 border-b rounded-none py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2 resize-none"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Subject"
              />
            </div>
            <button
              type="submit"
              className="bg-color2 text-color3 hover:bg-color2/80 hover:scale-105 transition duration-200 rounded-xl text-center font-semibold cursor-pointer w-2/3 h-[5vh] tracking-wide self-center md:w-[15rem]"
            >
             {status === "Sending..." ? "Sending..." : "Send it Now"}
            </button>
            <p className="text-color2 text-xs">{status}</p>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};