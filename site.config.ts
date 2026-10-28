import type { SiteConfig } from "@/lib/types";

const g = (n: number, w: number, h: number, alt: string, caption: string, href: string) => ({ src: `/images/dog-${n}.webp`, width: w, height: h, alt, caption, href });

export const site: SiteConfig = {
  name: "Melissa Grooming & Pet Care",
  tagline: "Luxury dog grooming, enriching dog walks and trusted pet sitting in The Beaches, Toronto.",
  category: "Dog grooming and pet care",
  schemaType: "LocalBusiness",
  area: "The Beaches, Toronto, ON",
  siteUrl: "https://melissa-grooming-pet-care.vercel.app",

  theme: { preset: "salon-chic", colors: { accent: "#7b5845" } },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "The Beaches, Toronto",
    headline: "Stress free grooming and care for your dog",
    subhead: "Luxury and professional dog grooming, enriching dog walks and trusted pet sitting by Melissa. Send a DM on Instagram to book.",
    images: [
      { src: "/images/dog-4.webp", alt: "Fluffy doodle with a bow tie after a fresh groom" },
      { src: "/images/dog-1.webp", alt: "Grey and white doodle with a red bow tie" },
      { src: "/images/dog-6.webp", alt: "Shih Tzu Charlie after his groom" },
    ],
    secondaryCta: { label: "See recent grooms", href: "#gallery" },
  },

  highlights: ["Luxury dog grooming", "Enriching dog walks", "Trusted pet sitting", "Booking by Instagram DM"],

  about: {
    title: "Stress free care in The Beaches",
    body: [
      "Melissa offers luxury and professional dog grooming, enriching dog walks and trusted pet sitting for dog families in The Beaches, Toronto.",
      "From puppy first grooms to regular six week visits and deshedding treatments, every dog gets calm, stress free care. Fresh grooms are posted almost daily on Instagram.",
    ],
    image: { src: "/images/dog-5.webp", alt: "Freshly groomed dog with a red bow tie" },
  },

  menu: {
    label: "Services",
    title: "Services",
    variant: "list",
    showPrices: false,
    priceNote: "Send a DM for pricing and availability.",
    groups: [
      {
        title: "Grooming",
        items: [
          { name: "Luxury dog grooming", description: "Professional full grooms, finished with a bow tie or bandana." },
          { name: "Puppy first grooms", description: "A gentle first grooming experience for puppies.", href: "https://www.instagram.com/p/De7NrWLoEAn/" },
          { name: "Deshedding treatment", description: "Helps manage shedding coats.", href: "https://www.instagram.com/p/De0jidpIDzy/" },
        ],
      },
      {
        title: "Walks and sitting",
        items: [
          { name: "Dog walks", description: "Enriching walks in The Beaches." },
          { name: "Pet sitting", description: "Trusted, stress free pet sitting." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent grooms",
    items: [
      g(1, 1080, 1440, "Grey and white doodle with a red bow tie", "Doodle", "https://www.instagram.com/p/De-rJNEoLrO/"),
      g(2, 1080, 1080, "Doodle with a patterned bandana", "Doodle", "https://www.instagram.com/p/De-qoalhGC8/"),
      g(3, 1080, 1080, "Doodle standing on the grooming table", "Doodle", "https://www.instagram.com/p/De-qUG5hLHb/"),
      g(4, 1080, 1350, "Bichpoo puppy after a first groom", "Puppy first grooming", "https://www.instagram.com/p/De7NrWLoEAn/"),
      g(5, 1080, 1440, "Dog with a red bow tie", "Every six weeks", "https://www.instagram.com/p/De27IbEIA_I/"),
      g(6, 1080, 1440, "Shih Tzu with a blue bow tie", "Charlie Boy", "https://www.instagram.com/p/De0l6v4kRLv/"),
      g(7, 1080, 1440, "Shih Tzu mix with a bandana", "Griffin boy", "https://www.instagram.com/p/De0lgjykSZs/"),
      g(8, 1080, 1080, "Shih Tzu with a teal bow tie", "Archie", "https://www.instagram.com/p/De0lH5xEfDr/"),
      g(9, 1080, 1440, "Black dog with a bandana after deshedding", "Deshedding", "https://www.instagram.com/p/De0jidpIDzy/"),
      g(10, 1080, 1440, "Cockapoo with a purple bow tie", "Cockapoo", "https://www.instagram.com/p/De0jF1HIKkv/"),
    ],
  },

  instagram: { handle: "groomels", embeds: [] },

  order: {
    label: "How to book",
    title: "Book in a quick DM",
    intro: "Bookings are taken through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Melissa! I would like to book.\nService (grooming, walk or pet sitting):\nDog's name and breed:\nPreferred date:",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a DM on Instagram to @groomels with your dog's breed, the service and your preferred date." },
    { q: "What services are offered?", a: "Luxury dog grooming, puppy first grooms, deshedding treatments, dog walks and pet sitting." },
    { q: "What area do you serve?", a: "The Beaches, Toronto." },
  ],

  contact: { title: "Contact and booking", area: "The Beaches, Toronto, Ontario", socials: [] },

  seo: {
    title: "Melissa Grooming & Pet Care | Dog grooming in The Beaches, Toronto",
    description: "Luxury dog grooming, puppy first grooms, deshedding, dog walks and pet sitting in The Beaches, Toronto. Book by Instagram DM with @groomels.",
    keywords: ["dog grooming The Beaches", "dog groomer Toronto", "dog walker The Beaches", "pet sitting Toronto"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
