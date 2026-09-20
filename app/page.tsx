import BeanScene from "@/components/BeanScene";
import Nav from "@/components/Nav";
import OurStory from "@/components/OurStory";
import { Hero, Reviews, StageSection, Visit } from "@/components/Sections";
import { cafe } from "@/lib/content";
import { buildKeyframes } from "@/lib/roast";

/** Structured data so Google can show hours, rating and address for the cafe. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: `${cafe.name} Cafe`,
  description: cafe.description,
  telephone: cafe.phone,
  servesCuisine: ["Italian", "Lebanese", "Cafe"],
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "HA 05, near Sanskar Public School, Block A, Sector 104, Hajipur",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201304",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 10:30-23:30",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.2", reviewCount: "389" },
  sameAs: [cafe.instagram.href, cafe.visit.zomatoHref],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <BeanScene keyframes={buildKeyframes()} />
      <main>
        <Hero />
        {cafe.stages.map((stage) => (
          <StageSection key={stage.id} stage={stage} />
        ))}
        <Reviews />
        <OurStory />
        <Visit />
      </main>
    </>
  );
}
