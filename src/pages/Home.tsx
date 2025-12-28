import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { popularCategories } from "@/data/menu";
import heroBurger from "@/assets/hero-burger.jpg";
import restaurantExterior from "@/assets/restaurant-exterior.png";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBurger}
            alt="Delicious burger"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 mb-6"
            >
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-primary-foreground text-sm font-medium">
                Rated 4.6 • 698+ Reviews
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
            >
              Taste the
              <span className="block text-primary">Difference</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg"
            >
              Experience the best burgers, pizzas, and more at Quetta's favorite
              food destination. Fresh ingredients, bold flavors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-large hover:shadow-glow transition-all duration-300"
              >
                <Link to="/menu">
                  View Menu
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="
                  border-black 
                  text-black 
                  bg-white
                  hover:bg-transparent 
                  hover:text-white
                  hover:border-white
                  font-semibold 
                  px-8
                  transition-all 
                  duration-300
                "
              >
                <a href="tel:03112111191" className="flex items-center">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </Button>

            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 mt-12"
            >
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-[#E6B65C]" />
                <span className="text-base text-white text-bold">Airport Road, Quetta</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Clock className="w-5 h-5 text-primary text-[#E6B65C]" />
                <span className="text-base text-white text-bold">Opens 12:30 PM</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 4.6, label: "Google Rating", suffix: "", decimals: 1, prefix: "⭐ " },
              { value: 698, label: "Happy Reviews", suffix: "+", decimals: 0 },
              { value: 100, label: "Menu Items", suffix: "+", decimals: 0 },
              { value: 3, label: "Service Types", suffix: "", decimals: 0 },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals}
                  />
                </div>
                <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                What We Serve
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
                Popular Categories
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularCategories.map((category, index) => (
              <ScrollReveal key={category.id} delay={index * 0.1}>
                <Link to={`/menu?category=${category.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative p-6 rounded-2xl bg-gradient-to-br ${category.color} text-primary-foreground text-center shadow-medium hover:shadow-large transition-shadow cursor-pointer overflow-hidden group`}
                  >
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                    <span className="text-4xl mb-3 block">{category.icon}</span>
                    <h3 className="font-semibold text-sm">{category.name}</h3>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src={restaurantExterior}
                  alt="Lala's Food Restaurant"
                  className="rounded-2xl shadow-large w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-large hidden md:block">
                  <div className="text-3xl font-display font-bold">
                    <AnimatedCounter end={698} suffix="+" />
                  </div>
                  <p className="text-sm text-primary-foreground/80">Happy Customers</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Quality Food, <br />
                  <span className="text-primary">Exceptional Service</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Lala's Food, we believe in serving more than just meals – we
                  serve experiences. Every dish is prepared with fresh ingredients
                  and love, ensuring you get the best taste every single time.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: "🍔", title: "Fresh Ingredients", desc: "Daily fresh produce" },
                    { icon: "⚡", title: "Fast Service", desc: "Quick & efficient" },
                    { icon: "🏆", title: "Top Rated", desc: "4.6 star rating" },
                    { icon: "🚗", title: "Delivery", desc: "No-contact delivery" },
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-background rounded-xl"
                    >
                      <span className="text-2xl">{feature.icon}</span>
                      <div>
                        <h4 className="font-semibold text-foreground">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Find Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
                Visit Our Restaurant
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-card rounded-2xl overflow-hidden shadow-medium">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-2 h-[300px] md:h-[400px]">
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
                <div className="p-8 flex flex-col justify-center bg-foreground text-background">
                  <h3 className="text-2xl font-display font-bold mb-6">
                    Lala's Food
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <p className="text-background/80">
                        Airport Road, Inside Al Mehmood Supermart, Quetta
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <a
                        href="tel:03112111191"
                        className="text-background/80 hover:text-primary transition-colors"
                      >
                        0311-2111191
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <p className="text-background/80">Opens at 12:30 PM</p>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a
                      href="https://maps.google.com/?q=Lalas+Food+Airport+Road+Quetta"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-brand-orange" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Call us now or visit our restaurant for the best dining experience in
              Quetta.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 font-semibold px-8 shadow-large"
              >
                <a href="tel:03112111191">
                  <Phone className="mr-2 w-5 h-5" />
                  0311-2111191
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8"
              >
                <Link to="/menu">Browse Menu</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
