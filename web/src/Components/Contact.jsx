import React, { useRef, useState } from "react";
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from "lucide-react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

export const Contact = () => {
  const socialLinks = {
    whatsapp: "https://api.whatsapp.com/send/?phone=34601866199&text=Hola%2C+Centro+Te+Ayudo.+Mi+nombre+es+%5Bnombre+paciente%5D.+Me+gustar%C3%ADa+agendar+una+consulta+con+ustedes+porque+estoy+pasando+por+%5Buna+breve+descripci%C3%B3n+opcional%5D.+%C2%BFPodr%C3%ADan+darme+mas+informaci%C3%B3n%3F%0D%0A%0D%0AGracias+de+antemano+por+su+atenci%C3%B3n.+Quedo+atento%2Fa+a+su+respuesta.&type=phone_number&app_absent=0",
    instagram: "",
    linkedin: "https://www.linkedin.com/company/centroteayudojerez/?viewAsMember=true",
    facebook: "https://www.facebook.com/profile.php?id=61577033498767"
  };

  const SITE_KEY = "6Lfxx0wrAAAAALxvV0UDxBBob9sK76pfXjGI8BBm";

  const form = useRef();
  const recaptchaRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSuccess(false);

    try {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      if (!token) {
        setError("Please verify reCAPTCHA");
        setSending(false);
        return;
      }

      await emailjs.sendForm(
        "service_rwryy9g", // reemplaza con tu Service ID de EmailJS
        "template_t92omfk", // reemplaza con tu Template ID
        form.current,
        "k3dU6E1XfxdArftZV" // reemplaza con tu User/Public Key
      );

      setSuccess(true);
      form.current.reset();
    } catch (err) {
      console.error(err);
      setError("Error sending message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="!py-20 bg-[#FEF6F1] w-full">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center !py-8">
          <h2 className="!text-3xl !md:text-5xl !font-bold !mb-4 !text-[#d37466]">
            Contacto
          </h2>
          <p className="!text-[#D0B59A] text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out and let's create something amazing together.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 py-4">
                <div className="p-3 bg-[#D37466] rounded-full">
                  <MailIcon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg !font-bold !text-[#D0B59A]">Email</h3>
                  <a
                    href="mailto:americochiclana@gmail.com"
                    className="!text-[#D0B59A] hover:text-white transition-colors"
                  >
                    hola@centroteayudo.es
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 py-4">
                <div className="p-3 bg-[#D37466] rounded-full">
                  <PhoneIcon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg !font-bold !text-[#D0B59A]">Teléfono</h3>
                  <a
                    href="tel:+34744729453"
                    className="!text-[#D0B59A] hover:text-white transition-colors"
                  >
                    +34 601866199
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 py-4">
                <div className="p-3 bg-[#D37466] rounded-full">
                  <MapPinIcon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg !font-bold !text-[#D0B59A]">Calle</h3>
                  <p className="text-[#D0B59A]">Avenida Alcalde Jesus Mantaras, 5</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-xl !font-bold mb-4 !text-[#D0B59A]">Siguenos en nuestras redes sociales</h3>
              <div className="flex gap-4">
                {["facebook", "linkedin", "whatsapp", "instagram"].map((platform) => (
                  <a
                    key={platform}
                    href={socialLinks[platform]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#D37466] rounded-full hover:bg-[#D0B59A] transition-colors"
                    aria-label={`Connect on ${platform}`}
                  >
                    <img
                      src={`https://api.iconify.design/simple-icons:${platform}.svg?color=ffffff`}
                      alt={platform}
                      className="w-5 h-5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#D0B59A] mb-1"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:border-white text-white"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#D0B59A] mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:border-white text-white"
                    placeholder="Tu email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#D0B59A] mb-1"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:border-white text-white"
                  placeholder="Asunto"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium !text-[#D0B59A] mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:border-white text-white resize-none"
                  placeholder="Tu mensaje aquí"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="!px-8 py-3 !bg-[#D37466] text-white font-medium !rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                {sending ? "Sending..." : "Enviar Mensaje"} <SendIcon size={16} />
              </button>

              <ReCAPTCHA
                sitekey={SITE_KEY}
                size="invisible"
                ref={recaptchaRef}
                badge="bottomright"
              />

              {error && <p className="text-red-500">{error}</p>}
              {success && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
