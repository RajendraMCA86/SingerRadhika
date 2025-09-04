import { Youtube, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center flex-row justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
            Let’s Connect
          </h2>
          <p className="text-lg text-gray-400">
            For bookings, collaborations, or just to say hello.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 text-center ">
          <div  >
            <h3 className="text-white font-semibold mb-2">Management</h3>
            <a href="mailto:hr@kvstechflow.com" className="text-gray-400">hr@kvstechflow.com</a>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">General</h3>
            <a href="mailto:radhika311014@gmail.com"
              className="text-gray-400">radhika311014@gmail.com</a>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Enuiry</h3>
            <a href="tel:+91 8458829844"
              className="text-gray-400">+91 8458829844</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.instagram.com/radhikachouhan_indore/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-pink-500 hover:scale-130 transition-transform duration-300 " />
          </a>
          {/* <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6 text-blue-400 hover:scale-130 transition-transform duration-300" />
          </a> */}
          <a
            href="https://www.facebook.com/radhika.shyam.premi.chouhan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6 text-blue-600 hover:scale-130 transition-transform duration-300" />
          </a>
          <a
            href="https://www.youtube.com/@radhikachouhanrao"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6 text-red-500 hover:scale-130 transition-transform duration-300" />
          </a>
        </div>

        {/* Branding & Copyright */}
        <div className="text-center border-t border-gray-700 pt-6">
          <a href="https://kvstechflow.com/" target="_blank">
            <p className="text-sm text-gray-500">
              © 2025 <span className="font-semibold">KVSTECHFLOW</span>. All rights reserved.
            </p></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
