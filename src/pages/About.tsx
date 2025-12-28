import { motion } from "framer-motion";
import { Heart, Users, Award, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import restaurantExterior from "@/assets/restaurant-exterior.png";

const About = () => {
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
              Get to Know Us
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mt-2">
              Our Story
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <img
                src={restaurantExterior}
                alt="Lala's Food Restaurant"
                className="rounded-2xl shadow-large w-full"
              />
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  Welcome to Lala's Food
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  A Passion for <span className="text-primary">Great Food</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Located in the heart of Airport Road, Quetta, inside Al Mehmood
                    Supermart, Lala's Food has been serving the community with
                    delicious, high-quality food that brings people together.
                  </p>
                  <p>
                    Our journey began with a simple mission: to create a place where
                    families and friends can enjoy exceptional food in a warm,
                    welcoming environment. Every dish we serve is prepared with the
                    freshest ingredients and crafted with care.
                  </p>
                  <p>
                    From our signature burgers and pizzas to refreshing shakes and
                    traditional chai, we take pride in offering a diverse menu that
                    caters to every taste. Our commitment to quality and customer
                    satisfaction has earned us a 4.6-star rating with over 698
                    reviews from our valued customers.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                What We Stand For
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
                Our Core Values
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Made with Love",
                description:
                  "Every dish is prepared with passion and care, ensuring the best taste in every bite.",
              },
              {
                icon: Users,
                title: "Community First",
                description:
                  "We're proud to serve our Quetta community and be a part of their special moments.",
              },
              {
                icon: Award,
                title: "Quality Always",
                description:
                  "We never compromise on quality, using only the freshest ingredients daily.",
              },
              {
                icon: Clock,
                title: "Fast Service",
                description:
                  "Quick preparation without compromising taste - your time matters to us.",
              },
            ].map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-background p-8 rounded-2xl text-center shadow-soft hover:shadow-medium transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 698, label: "Happy Customers", suffix: "+" },
              { value: 4.6, label: "Google Rating", suffix: "", decimals: 1 },
              { value: 100, label: "Menu Items", suffix: "+" },
              { value: 3, label: "Service Options", suffix: "" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                  />
                </div>
                <p className="text-background/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                How We Serve
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
                Our Services
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "🍽️",
                title: "Dine-in",
                description:
                  "Enjoy your meal in our comfortable, air-conditioned restaurant with family and friends.",
              },
              {
                emoji: "🚗",
                title: "Kerbside Pickup",
                description:
                  "Order ahead and pick up your food without leaving your car. Quick and convenient!",
              },
              {
                emoji: "📦",
                title: "No-contact Delivery",
                description:
                  "Safe and hygienic delivery right to your doorstep. Your health is our priority.",
              },
            ].map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card p-8 rounded-2xl border border-border text-center hover:border-primary/30 transition-colors"
                >
                  <span className="text-5xl mb-6 block">{service.emoji}</span>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
