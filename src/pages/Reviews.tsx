import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const reviews = [
  {
    name: "Ahmed Khan",
    rating: 5,
    text: "Best burgers in Quetta! The Chicken Zinger Burger is absolutely amazing. Fresh ingredients and quick service. Highly recommended!",
    date: "2 weeks ago",
  },
  {
    name: "Fatima Baloch",
    rating: 5,
    text: "We love coming here with family. The pizzas are delicious and the staff is very friendly. Great ambiance too!",
    date: "1 month ago",
  },
  {
    name: "Muhammad Ali",
    rating: 5,
    text: "The Lala's Special Shake is out of this world! Perfect blend and so creamy. Will definitely come back for more.",
    date: "3 weeks ago",
  },
  {
    name: "Sara Hussain",
    rating: 4,
    text: "Good food and reasonable prices. The Chicken Manchurian is a must-try. Service could be a bit faster during peak hours.",
    date: "1 month ago",
  },
  {
    name: "Usman Shah",
    rating: 5,
    text: "Finally a place that serves quality food in Quetta! Their steaks are perfectly cooked. 10/10 would recommend.",
    date: "2 months ago",
  },
  {
    name: "Ayesha Malik",
    rating: 5,
    text: "The ice cream here is amazing! So many flavors to choose from. My kids love it. Clean environment and great taste.",
    date: "3 weeks ago",
  },
  {
    name: "Hassan Raza",
    rating: 5,
    text: "Great location inside Al Mehmood Supermart. The food quality is consistently good. Their sandwiches are the best!",
    date: "1 month ago",
  },
  {
    name: "Zainab Bibi",
    rating: 4,
    text: "Love the variety in their menu. From desi chaat to continental food, they have it all. Prices are fair too.",
    date: "2 weeks ago",
  },
];

const Reviews = () => {
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
              What People Say
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mt-2 mb-4">
              Customer Reviews
            </h1>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-6 h-6 ${
                      star <= 4.6
                        ? "text-accent fill-accent"
                        : "text-primary-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-primary-foreground">
                <AnimatedCounter end={4.6} decimals={1} />
              </span>
              <span className="text-primary-foreground/70">
                (<AnimatedCounter end={698} suffix="+" /> reviews)
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="py-12 bg-secondary">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { stars: 5, percentage: 78 },
              { stars: 4, percentage: 15 },
              { stars: 3, percentage: 5 },
              { stars: 2, percentage: 1 },
              { stars: 1, percentage: 1 },
            ].map((rating) => (
              <motion.div
                key={rating.stars}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-foreground">
                    {rating.stars}
                  </span>
                  <Star className="w-4 h-4 text-accent fill-accent" />
                </div>
                <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${rating.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
                <span className="text-sm text-muted-foreground w-12">
                  {rating.percentage}%
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ScrollReveal key={review.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-medium transition-all h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xl font-display font-bold text-primary">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {review.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {review.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating
                            ? "text-accent fill-accent"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="relative flex-1">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/10" />
                    <p className="text-muted-foreground text-sm leading-relaxed pl-4">
                      {review.text}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-foreground">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-background mb-4">
              Loved Our Food?
            </h2>
            <p className="text-background/70 mb-8 max-w-xl mx-auto">
              Leave us a review on Google and help others discover the best food in
              Quetta!
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://g.page/lalas-food/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-large hover:shadow-glow transition-all"
            >
              <Star className="w-5 h-5" />
              Leave a Review
            </motion.a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
