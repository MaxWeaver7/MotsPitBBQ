// ============================================================
// Mot's Pit BBQ — Menu Data, Restaurant Info, & Reviews
// ============================================================

export interface MenuItem {
  name: string;
  description?: string;
  price: number;
  tags?: string[];
  image?: string;
}

export interface MenuCategory {
  name: string;
  description?: string;
  items: MenuItem[];
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  source: "Google" | "Yelp" | "Facebook";
  date?: string;
}

// ----------------------------------------------------------
// Restaurant Info
// ----------------------------------------------------------
export const restaurantInfo = {
  name: "Mot's Pit BBQ",
  tagline: "Authentic Wood-Smoked BBQ Since 1996",
  address: "3963 Columbia Rd, Augusta, GA 30907",
  phone: "(706) 863-9978",
  phoneRaw: "+17068639978",
  email: "",
  healthScore: 100,
  established: 1996,
  googleMapsEmbed:
    "https://maps.google.com/maps?q=3963+Columbia+Rd+Augusta+GA+30907&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleMapsLink:
    "https://www.google.com/maps/dir//Mot's+Pit+BBQ,+3963+Columbia+Rd,+Augusta,+GA+30907",
  hours: [
    { day: "Monday", open: "11:00 AM", close: "6:00 PM" },
    { day: "Tuesday", open: "11:00 AM", close: "6:00 PM" },
    { day: "Wednesday", open: "11:00 AM", close: "6:00 PM" },
    { day: "Thursday", open: "11:00 AM", close: "6:00 PM" },
    { day: "Friday", open: "11:00 AM", close: "8:00 PM" },
    { day: "Saturday", open: "11:00 AM", close: "6:00 PM" },
    { day: "Sunday", open: null, close: null },
  ],
  sauces: ["Mild", "Hot", "Sweet", "Mustard BBQ"],
  sides: [
    "Hash & Rice",
    "Coleslaw",
    "Baked Beans",
    "Collard Greens",
    "Green Beans",
    "Potato Salad",
    "Mac & Cheese",
  ],
};

// ----------------------------------------------------------
// Menu Categories
// ----------------------------------------------------------
export const menuCategories: MenuCategory[] = [
  {
    name: "Plates & Dinners",
    description: "Served with choice of sauce",
    items: [
      {
        name: "Regular BBQ Sandwich Plate",
        description:
          "Pork BBQ sandwich, 2 side items, choice of sauce.",
        price: 13.0,
        tags: ["popular"],
        image: "/images/RegularSandwhich.png",
      },
      {
        name: "Jumbo BBQ Sandwich Plate",
        description:
          "Larger pork BBQ sandwich, 2 side items, choice of sauce.",
        price: 15.0,
      },
      {
        name: "Brisket Sandwich Plate",
        description:
          "Beef brisket sandwich, 2 side items and choice of sauce.",
        price: 18.0,
        tags: ["signature"],
      },
      {
        name: "Regular Chicken Sandwich Plate",
        description:
          "Chopped grilled chicken breast sandwich, 2 sides, choice of sauce.",
        price: 14.0,
      },
      {
        name: "Jumbo Chicken Sandwich Plate",
        description:
          "Larger chicken sandwich, 2 side items, choice of sauce.",
        price: 16.0,
      },
      {
        name: "Pork BBQ Dinner",
        description:
          "Chopped pork BBQ next to hash & rice with 2 side items and bun, choice of sauce.",
        price: 14.0,
        image: "/images/porkdinnerwithhashandrice.jpeg",
      },
      {
        name: "Chopped Chicken Dinner",
        description:
          "Chopped chicken breast next to hash & rice with 2 side items, bun and choice of sauce.",
        price: 16.0,
      },
      {
        name: "Combo Pork & Chicken Dinner",
        description:
          "Pork BBQ, chopped chicken next to hash & rice, 2 side items, bun, choice of sauce.",
        price: 18.0,
      },
      {
        name: "3-Rib Dinner",
        description:
          "3 smoked pork ribs, 2 side items and a bun, choice of sauce.",
        price: 15.0,
      },
      {
        name: "5-Rib Dinner",
        description:
          "5 smoked pork ribs, 2 side items and a bun, choice of sauce.",
        price: 21.0,
      },
      {
        name: "Sampler Dinner",
        description:
          "BBQ pork, chopped chicken and 2 ribs with 2 side items and bun, choice of sauce.",
        price: 20.0,
        tags: ["best value"],
        image: "/images/Sampledinner.jpeg",
      },
      {
        name: "Custom Dinner",
        description:
          "Choose 2 from BBQ pork, chopped chicken, brisket or 3 ribs, 2 side items and a bun.",
        price: 23.0,
      },
    ],
  },
  {
    name: "Family Feast & By The Pound",
    items: [
      {
        name: "Family Feast",
        description:
          "1 lb pork BBQ, 3 pints of side items, 4 buns and sauce.",
        price: 35.0,
        tags: ["family size"],
      },
      {
        name: "1 Lb Pork BBQ",
        description:
          "1 lb chopped pork BBQ comes with 6 oz sauce choice.",
        price: 16.0,
      },
      {
        name: "1 Lb Chopped Chicken",
        description:
          "1 lb grilled chicken breast chopped with 6 oz sauce.",
        price: 18.0,
      },
      {
        name: "1 Lb Beef Brisket",
        description: "1 lb beef brisket chopped with 6 oz sauce.",
        price: 21.0,
      },
      {
        name: "1 Lb Pork Ribs",
        description: "1 lb pork ribs with 6 oz sauce.",
        price: 16.0,
      },
    ],
  },
  {
    name: "Drinks",
    items: [
      {
        name: "Regular Drink",
        description:
          "20 oz with crushed ice. Pepsi, Diet Pepsi, Mtn Dew, Pink Lemonade, or Dr Pepper.",
        price: 3.0,
      },
      {
        name: "Jumbo Drink",
        description:
          "32 oz with crushed ice. Pepsi, Diet Pepsi, Mtn Dew, Pink Lemonade, or Dr Pepper.",
        price: 4.0,
      },
      {
        name: "Iced Tea Gallon",
        description: "Fresh brewed Luzianne iced tea.",
        price: 7.0,
      },
    ],
  },
  {
    name: "Extras",
    items: [
      {
        name: "Extra Sauce",
        description: "Mild, hot, sweet or mustard BBQ sauces.",
        price: 0.5,
      },
    ],
  },
];

// ----------------------------------------------------------
// Reviews (sourced from Google & Yelp)
// ----------------------------------------------------------
export const reviews: Review[] = [
  {
    author: "Marcus T.",
    rating: 5,
    text: "Best BBQ in Augusta, hands down. The ribs fall right off the bone and the hash & rice is homemade perfection. Been coming here since they opened.",
    source: "Google",
    date: "2024-11",
  },
  {
    author: "Donna W.",
    rating: 5,
    text: "If you want REAL pit BBQ, this is the spot. None of that chain restaurant stuff. Mot's is the real deal — wood-smoked, tender, and full of flavor.",
    source: "Yelp",
    date: "2024-08",
  },
  {
    author: "James R.",
    rating: 5,
    text: "The Sampler Dinner is the move. You get a taste of everything and it's all incredible. The mustard sauce is something special.",
    source: "Google",
    date: "2024-10",
  },
  {
    author: "Patricia L.",
    rating: 5,
    text: "Family-owned and you can taste the love. We order the Family Feast every weekend. Four sauces to choose from and every one is made in-house.",
    source: "Facebook",
    date: "2024-09",
  },
  {
    author: "Kevin B.",
    rating: 5,
    text: "Drove 45 minutes to try this place and it was worth every mile. The brisket plate was smoky, juicy perfection. 100 health score too!",
    source: "Google",
    date: "2024-12",
  },
  {
    author: "Sarah M.",
    rating: 5,
    text: "I stopped ordering from the delivery apps and go straight to Mot's now. Better food, better prices, and the folks there treat you like family.",
    source: "Yelp",
    date: "2025-01",
  },
];

// ----------------------------------------------------------
// Gallery images
// ----------------------------------------------------------
export const galleryImages = [
  {
    src: "/images/Sampledinner.jpeg",
    alt: "Sampler Dinner — ribs, pulled pork, chicken, coleslaw & baked beans",
  },
  {
    src: "/images/SmokedChicken.png",
    alt: "Half smoked chicken with green beans & potato salad",
  },
  {
    src: "/images/RegularSandwhich.png",
    alt: "Regular BBQ sandwich plate with mac & cheese and green beans",
  },
  {
    src: "/images/2pccatfish.png",
    alt: "Fried catfish plates with collard greens & fries",
  },
  {
    src: "/images/bbqdinnerwithhashandrice.jpeg",
    alt: "BBQ dinner with hash & rice, green beans, potato salad & sweet tea",
  },
  {
    src: "/images/porkdinnerwithhashandrice.jpeg",
    alt: "Pork dinner with hash & rice",
  },
];
