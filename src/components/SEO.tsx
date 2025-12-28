import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO = ({
  title = "Lala's Food - Best Restaurant in Quetta | Burgers, Pizza & More",
  description = "Experience the best burgers, pizzas, shakes, and more at Lala's Food, Airport Road, Quetta. 4.6 star rated with 698+ reviews. Dine-in, pickup, and delivery available.",
  keywords = "Lala's Food, restaurant Quetta, best burgers Quetta, pizza Quetta, Airport Road food, fast food Quetta, ice cream Quetta, shakes Quetta",
  image = "/og-image.jpg",
  url = "https://lalasfood.pk",
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Lala's Food" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Lala's Food",
          "image": image,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Airport Road, Inside Al Mehmood Supermart",
            "addressLocality": "Quetta",
            "addressCountry": "PK"
          },
          "telephone": "+92-311-2111191",
          "servesCuisine": ["Fast Food", "Pakistani", "Continental"],
          "priceRange": "$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.6",
            "reviewCount": "698"
          },
          "openingHours": "Mo-Su 12:30-23:00"
        })}
      </script>
    </Helmet>
  );
};
