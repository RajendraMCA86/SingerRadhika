import { Phone, Instagram, Facebook, Youtube } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function TopBanner() {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900 text-gray-200 text-lg z-50 ">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between px-4 py-2 gap-2 sm:gap-0">
        
        {/* Contact Info */}
        <div className="flex items-center gap-4">   
          <a href="tel:+91 8458829844" className="flex items-center hover:text-blue-400 transition">
            <Phone size={16} />
            <span>+91 8458829844</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a href="https://www.instagram.com/radhikachouhan_indore/#" target="_blank" className="hover:text-pink-500 transition">
            <Instagram size={18} />
          </a>
          <a href="https://www.facebook.com/radhika.shyam.premi.chouhan" target="_blank" className="hover:text-blue-500 transition">
            <Facebook size={18} />
          </a>
          <a href="https://www.youtube.com/@radhikachouhanrao" target="_blank" className="hover:text-red-400 transition">
            <Youtube size={18} />
          </a>
          <a href="https://wa.me/+918458829844?text=Hi%20there!%20I%20want%20to%20know%20more." target="_blank" className="hover:text-green-500 transition">
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
