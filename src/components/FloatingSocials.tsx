import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingSocials() {
  const whatsappNumber = '919217807801';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const instagramUrl = 'https://www.instagram.com/budgettrips2025?igsh=MXFhZm8wY3pqbjhqdA==';

  const socialLinks = [
    {
      id: 'instagram',
      icon: <Instagram className="h-6 w-6 stroke-[2px]" />,
      url: instagramUrl,
      color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
      label: 'Follow on Instagram',
      title: 'Instagram'
    },
    {
      id: 'whatsapp',
      icon: <MessageCircle className="h-6 w-6 stroke-[3px]" />,
      url: whatsappUrl,
      color: 'bg-[#25D366]',
      label: 'Chat on WhatsApp',
      title: 'WhatsApp'
    }
  ];

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-4">
      {socialLinks.map((link, i) => (
        <motion.a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0, x: 20 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`${link.color} text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all group relative`}
          title={link.label}
        >
          {link.icon}
          <span className="absolute right-full mr-4 bg-white text-gray-900 px-3 py-1 rounded-lg text-sm font-bold shadow-xl border border-gray-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block pointer-events-none">
            {link.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
