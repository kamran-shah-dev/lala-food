import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon. Thank you for reaching out!",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-brand-orange py-16 md:py-24">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mt-2">
              Contact Us
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                    We'd Love to Hear From You
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Have questions about our menu, want to make a reservation, or
                    just want to say hello? Reach out to us through any of the
                    channels below.
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 bg-secondary rounded-xl"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Location
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Airport Road, Inside Al Mehmood Supermart, Quetta
                      </p>
                    </div>
                  </motion.div>

                  <motion.a
                    href="tel:03112111191"
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 bg-secondary rounded-xl block"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground text-sm">
                        0311-2111191
                      </p>
                      <p className="text-primary text-sm font-medium mt-1">
                        Click to call →
                      </p>
                    </div>
                  </motion.a>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 bg-secondary rounded-xl"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Business Hours
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Opens at 12:30 PM daily
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* WhatsApp Button */}
                <motion.a
                  href="https://wa.me/923112111191"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 w-full p-4 bg-green-500 text-white rounded-xl font-semibold shadow-medium hover:shadow-large transition-shadow"
                >
                  <MessageSquare className="w-5 h-5" />
                  Chat on WhatsApp
                </motion.a>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right">
              <div className="bg-card p-8 rounded-2xl shadow-medium border border-border">
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="03XX-XXXXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16">
        <div className="container-custom">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden shadow-large h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.5!2d66.99!3d30.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDEwJzQ4LjAiTiA2NsKwNTknMjQuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lala's Food Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
