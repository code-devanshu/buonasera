/**
 * Everything you need to edit to make this site your own lives in this file:
 * name, copy, menu items, prices, hours, address, and the colours of each section.
 *
 * Sections appear in this order: hero, then every entry in `stages`, then visit.
 * The 3D bean gets one "look" per section, so adding or removing a stage
 * automatically adds or removes a stop on the bean's journey.
 */

export type Look = {
  /** Page background while this section is centred. Keep it dark enough for the light text. */
  bg: string;
  /** Colour of the bean in this section. */
  bean: string;
  /** Wrinkle depth, 0 to about 1.2. */
  bump: number;
  /** Surface roughness, 0 (glossy) to 1 (matte). */
  rough: number;
  /** Glossy oil layer, 0 to 1. */
  coat: number;
  /** What the big 3D object is in this section. Defaults to a pizza. */
  shape?: "pizza" | "pasta" | "plates" | "bean" | "drink";
};

export type MenuItem = { name: string; note: string; price?: string };

export type Stage = {
  /** Used for the anchor link, e.g. "#green". */
  id: string;
  /** Short label shown in the top navigation. */
  nav: string;
  /** The huge word behind the bean. Keep it short: 4 to 6 letters fits best. */
  word: string;
  /** Which side the text sits on. The bean takes the opposite side. */
  side: "left" | "right";
  lead: string;
  items: MenuItem[];
  look: Look;
};

export type Review = { quote: string; author: string; detail?: string };
export type Rating = { platform: string; score: string; count: string };

export const cafe = {
  name: "Buona Sera",
  /** The hero title is stacked on two lines because the full name is too wide for one giant word. */
  titleLines: ["Buona", "Sera"],
  fullName: "Buona Sera Cafe | Trattoria Cafe, Sector 104 Noida",
  description:
    "Buona Sera is a trattoria cafe in Sector 104, Hajipur, Noida. Wood-fired pizzas, pastas, Lebanese mezze and signature coffees, with indoor and outdoor seating. Open daily 10:30 AM to 11:30 PM.",
  subtitle: "Trattoria Cafe",
  tagline: "Where flavors dance and evenings sparkle. Wood-fired pizza, pasta, mezze and coffee in Sector 104, Noida.",
  hint: "Scroll for the menu. Move your mouse to spin the plate.",
  phone: "+91 98717 56513",
  phoneHref: "tel:+919871756513",
  /** Digits only, with country code. Reservation requests are sent to this WhatsApp number. */
  whatsapp: "919871756513",
  instagram: { handle: "@buonaseranoida", href: "https://www.instagram.com/buonaseranoida/", followers: "1.6K" },

  hero: {
    look: { bg: "#0d4a4a", bean: "#98582d", bump: 0.8, rough: 0.45, coat: 0.5, shape: "pizza" } satisfies Look,
    primaryCta: { label: "See the menu", href: "#pizza" },
    secondaryCta: { label: "Reserve a table", href: "#reserve" },
    facts: ["Open daily 10:30 AM to 11:30 PM", "Sector 104, Noida"],
  },

  stages: [
    {
      id: "pizza",
      nav: "Pizza",
      word: "Pizza",
      side: "right",
      lead: "Our wood-fired pizzas are the most-mentioned thing in the reviews. Come for these, stay for the rest of the menu.",
      items: [
        { name: "Farm House Pizza", note: "Wood-fired, loaded with vegetables.", price: "₹655" },
        { name: "Chicken Pepperoni Pizza", note: "Wood-fired, with chicken pepperoni.", price: "₹579" },
        { name: "Fungi Pizza", note: "Wood-fired mushroom pizza.", price: "₹525" },
      ],
      look: { bg: "#8a3320", bean: "#98ab55", bump: 0.12, rough: 0.62, coat: 0.0, shape: "pizza" },
    },
    {
      id: "pasta",
      nav: "Pasta",
      word: "Pasta",
      side: "left",
      lead: "Freshly prepared Italian comfort, at prices regulars call highly competitive.",
      items: [
        { name: "Alfredo Pasta", note: "Rich and creamy.", price: "₹545" },
        { name: "Pesto Pasta", note: "Basil pesto, the classic way." },
        { name: "Spinach Ravioli", note: "Filled pasta with spinach." },
      ],
      look: { bg: "#6b4a24", bean: "#cf9a5c", bump: 0.45, rough: 0.55, coat: 0.15, shape: "pasta" },
    },
    {
      id: "plates",
      nav: "Plates",
      word: "Plates",
      side: "right",
      lead: "Lebanese mezze, toasts, soups and salads to share. The mezze platter is a favourite at the table.",
      items: [
        { name: "Chicken Lebanese Mezze Platter", note: "Built for sharing.", price: "₹945" },
        { name: "Trilogy Hummus Falafel Pita", note: "Hummus and falafel in a pita.", price: "₹425" },
        { name: "Smoked Chicken Caesar", note: "Salad with smoked chicken.", price: "₹425" },
        { name: "Lemon Chicken Soup", note: "Tender chicken, fresh vegetables and zesty lemon, slow-cooked.", price: "₹295" },
        { name: "Chilli Chicken Dry", note: "Spicy, wok-tossed.", price: "₹465" },
        { name: "Cheese Chilli Toast", note: "Crisp toast, melted cheese, green chilli.", price: "₹395" },
        { name: "Peri Peri Fries", note: "Crisp fries, peri peri seasoning.", price: "₹205" },
        { name: "Avocado Dip Nachos", note: "Vegetarian. Nachos with avocado dip." },
      ],
      look: { bg: "#2d5a3f", bean: "#98582d", bump: 0.8, rough: 0.45, coat: 0.4, shape: "plates" },
    },
    {
      id: "coffee",
      nav: "Coffee",
      word: "Coffee",
      side: "left",
      lead: "Our Buona signature coffees, plus all the hot and cold brews you would expect from a proper cafe.",
      items: [
        { name: "Adams Choice", note: "Apple-cinnamon, orange zest, ice and espresso.", price: "₹399" },
        { name: "Coastal Mix", note: "Pineapple, coconut, maple and iced espresso.", price: "₹399" },
        { name: "Cranberry Coffee", note: "Espresso and cranberry juice, served chilled.", price: "₹399" },
        { name: "Mocha", note: "Espresso, chocolate and milk.", price: "₹329" },
        { name: "Classic Cold Coffee", note: "The everyday favourite.", price: "₹329" },
        { name: "Cappuccino", note: "Espresso under steamed milk foam." },
      ],
      look: { bg: "#3a2116", bean: "#2b1a12", bump: 1.0, rough: 0.3, coat: 0.9, shape: "bean" },
    },
    {
      id: "sips",
      nav: "Sips",
      word: "Sips",
      side: "right",
      lead: "Shakes and mocktails for the long evenings.",
      items: [
        { name: "Virgin Toddy", note: "A mocktail with a twist.", price: "₹399" },
        { name: "Parle-G Nutella Shake", note: "Nostalgia in a glass.", price: "₹389" },
      ],
      look: { bg: "#a5442a", bean: "#98582d", bump: 0.8, rough: 0.45, coat: 0.5, shape: "drink" },
    },
  ] satisfies Stage[],

  reviews: {
    id: "reviews",
    nav: "Reviews",
    word: "Loved",
    side: "left" as const,
    lead: "Rated 4.2 across Google, Zomato and EazyDiner by thousands of guests.",
    ratings: [
      { platform: "Google", score: "4.2", count: "389 reviews" },
      { platform: "Zomato", score: "4.2", count: "1,147 ratings" },
      { platform: "EazyDiner", score: "4.2", count: "367 reviews" },
      { platform: "Justdial", score: "4.1", count: "1,510 ratings" },
    ] satisfies Rating[],
    quotes: [
      {
        quote: "Our go to place, be it brunch, lunch or dinner. Authentic food, taste is awesome, freshly prepared and prices are highly competitive.",
        author: "Shwetangi Purohit",
        detail: "Local Guide, Google",
      },
      {
        quote: "The ambience is really warm and inviting, making it a great spot to relax or hang out with friends.",
        author: "Ayush Srivastava",
        detail: "Local Guide, Google",
      },
      {
        quote: "Best minestrone soup and chicken wings. The most beautiful vibe, both outside and in the coziest inside spot. A hidden gem.",
        author: "A Google visitor",
      },
      {
        quote: "Amazing place, best wood fired pizzas, rather the entire menu is yum!",
        author: "Google review",
      },
    ] satisfies Review[],
    look: { bg: "#5b2b33", bean: "#cf9a5c", bump: 0.6, rough: 0.5, coat: 0.3, shape: "pizza" } satisfies Look,
  },

  visit: {
    id: "visit",
    nav: "Visit",
    word: "Ciao",
    side: "right" as const,
    lead: "Indoor, outdoor or takeaway. Walk in, call ahead, or book through your favourite app.",
    hours: ["Every day, 10:30 AM to 11:30 PM"],
    address: "HA 05, near Sanskar Public School, Block A, Sector 104, Hajipur, Noida, Uttar Pradesh 201304",
    plusCode: "G9P8+94 Noida, Uttar Pradesh",
    cost: "About ₹1,700 for two",
    amenities: ["Dine-in", "Outdoor seating", "WiFi", "High chairs", "Kerbside pickup", "No-contact delivery"],
    bookingNote: "Also bookable on EazyDiner, District by Zomato and Swiggy Dineout.",
    zomatoHref: "https://www.zomato.com/ncr/buona-sera-1-hajipur-noida",
    directionsHref: "https://www.google.com/maps/search/?api=1&query=Buona+Sera+Cafe+Sector+104+Hajipur+Noida",
    mapEmbedSrc: "https://maps.google.com/maps?q=Buona+Sera+Cafe+Sector+104+Hajipur+Noida&output=embed",
    look: { bg: "#0d4a4a", bean: "#98582d", bump: 0.8, rough: 0.45, coat: 0.5, shape: "pizza" } satisfies Look,
  },

  footnote:
    "Buona Sera Cafe, Sector 104, Noida. Prices and ratings compiled from Google, Zomato, Justdial and EazyDiner in September 2026 and may change. Items without a price are on the menu; ask the staff. Demo site, not the official website. Food and oven photography and video from Pexels.",
};
