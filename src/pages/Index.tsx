import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { popularCategories } from "@/data/menu";
import heroBurger from "@/assets/hero-burger.jpg";
import restaurantExterior from "@/assets/restaurant-exterior.png";

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroBurger} alt="Delicious burger" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>

        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 mb-6">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-primary-foreground text-sm font-medium">Rated 4.6 • 698+ Reviews</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Taste the<span className="block text-primary">Difference</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg">
              Experience the best burgers, pizzas, and more at Quetta's favorite food destination.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-large">
                <Link to="/menu">View Menu<ChevronRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
                <a href="tel:03112111191"><Phone className="mr-2 w-5 h-5" />Call Now</a>
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap gap-6 mt-12">
              <div className="flex items-center gap-2 text-primary-foreground/70"><MapPin className="w-5 h-5 text-primary" /><span className="text-sm">Airport Road, Quetta</span></div>
              <div className="flex items-center gap-2 text-primary-foreground/70"><Clock className="w-5 h-5 text-primary" /><span className="text-sm">Opens 12:30 PM</span></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ value: 4.6, label: "Google Rating", decimals: 1, prefix: "⭐ " }, { value: 698, label: "Happy Reviews", suffix: "+" }, { value: 100, label: "Menu Items", suffix: "+" }, { value: 3, label: "Service Types" }].map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix || ""} prefix={stat.prefix || ""} decimals={stat.decimals || 0} />
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
              <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Serve</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Popular Categories</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularCategories.map((category, index) => (
              <ScrollReveal key={category.id} delay={index * 0.1}>
                <Link to={`/menu?category=${category.id}`}>
                  <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} className={`relative p-6 rounded-2xl bg-gradient-to-br ${category.color} text-primary-foreground text-center shadow-medium hover:shadow-large transition-shadow cursor-pointer`}>
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
              <img src={restaurantExterior} alt="Lala's Food Restaurant" className="rounded-2xl shadow-large w-full" />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Quality Food, <span className="text-primary">Exceptional Service</span></h2>
                <p className="text-muted-foreground leading-relaxed">At Lala's Food, we believe in serving more than just meals – we serve experiences.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[{ icon: "🍔", title: "Fresh Ingredients" }, { icon: "⚡", title: "Fast Service" }, { icon: "🏆", title: "Top Rated" }, { icon: "🚗", title: "Delivery" }].map((feature) => (
                    <div key={feature.title} className="flex items-start gap-3 p-4 bg-background rounded-xl">
                      <span className="text-2xl">{feature.icon}</span>
                      <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-brand-orange" />
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">Ready to Order?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Call us now or visit our restaurant for the best dining experience in Quetta.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold px-8 shadow-large">
                <a href="tel:03112111191"><Phone className="mr-2 w-5 h-5" />0311-2111191</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
                <Link to="/menu">Browse Menu</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;