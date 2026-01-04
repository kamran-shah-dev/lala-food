import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl">🍴</span>
              <div>
                <h3 className="text-2xl font-display font-bold text-primary-foreground">
                  Lala's Food
                </h3>
                <p className="text-sm text-background/60">
                  Taste the Difference
                </p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Serving delicious food with love since day one. Experience the best
              burgers, pizzas, and more at Quetta's favorite food spot.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-display font-semibold mb-6 text-primary-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Our Menu", path: "/menu" },
                { name: "About Us", path: "/about" },
                { name: "Reviews", path: "/reviews" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-display font-semibold mb-6 text-primary-foreground">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#EFBF04] shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Airport Road, Inside Al Mehmood Supermart, Quetta
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#EFBF04] shrink-0" />
                <a
                  href="tel:03112111191"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  0311-2111191
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#EFBF04] shrink-0" />
                <span className="text-background/70 text-sm">
                  Opens at 12:30 PM
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-display font-semibold mb-6 text-primary-foreground">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <span className="w-2 h-2 bg-[#EFBF04] rounded-full" />
                Dine-in
              </li>
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <span className="w-2 h-2 bg-[#EFBF04] rounded-full" />
                Kerbside Pickup
              </li>
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <span className="w-2 h-2 bg-[#EFBF04] rounded-full" />
                No-contact Delivery
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-background/10 text-center"
        >
          <p className="text-background/50 text-sm">
            © {currentYear} Lala's Food. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
