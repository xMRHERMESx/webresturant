// Centralized site content — all copy and image URLs live here.

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

export const heroImage = img('1565299624946-b28f40a0ae38', 1920)
export const heroSecondary = img('1544025162-d8661872d0a4', 800)

export const philosophyImage = img('1414235077428-3389893321c8', 1000)

export const signatureImage = img('1546069901-ba9599a7e6c0', 1000)
export const signatureSecondary = img('1504674900247-08477e5fa3e0', 600)

export const dishes = [
  {
    name: 'Truffle Wagyu Burger',
    description: 'Black truffle, aged cheddar, caramelized onion',
    price: '$24',
    category: 'Signature',
    image: img('1568901346375-23c9b0a4b8b8', 800),
  },
  {
    name: 'Pan-Seared Salmon',
    description: 'Seasonal vegetables, lemon beurre blanc',
    price: '$29',
    category: 'Mains',
    image: img('1467002445817-b7b1cd0c0a8e', 800),
  },
  {
    name: 'Burrata Starter',
    description: 'Tomato confit, basil oil, toasted sourdough',
    price: '$14',
    category: 'Starters',
    image: img('1504069846617-1c2c39e9a3a8', 800),
  },
  {
    name: 'Dark Chocolate Délice',
    description: 'Sea salt caramel, cocoa nib crumble',
    price: '$12',
    category: 'Desserts',
    image: img('1551024506-0bccd828d30f', 800),
  },
]

export const menuCategories = {
  Starters: [
    { name: 'Burrata', description: 'Tomato confit, basil oil, toasted sourdough', price: '$14' },
    { name: 'Tuna Tartare', description: 'Avocado, yuzu, crispy wonton', price: '$18' },
    { name: 'Seared Scallops', description: 'Cauliflower purée, brown butter, capers', price: '$22' },
    { name: 'Foie Gras Torchon', description: 'Brioche, fig jam, microgreens', price: '$26' },
  ],
  Mains: [
    { name: 'Wagyu Burger', description: 'Aged cheddar, truffle aioli, caramelized onion', price: '$24' },
    { name: 'Pan-Seared Salmon', description: 'Seasonal vegetables, lemon beurre blanc', price: '$29' },
    { name: 'Dry-Aged Ribeye', description: 'Bone marrow butter, charred shallot', price: '$52' },
    { name: 'Hand-Cut Pappardelle', description: 'Wild mushroom, parmesan, truffle', price: '$28' },
  ],
  Signatures: [
    { name: 'Truffle Wagyu Burger', description: 'Black truffle, aged cheddar, caramelized onion', price: '$24' },
    { name: 'Chef\'s Tasting', description: 'Seven courses, seasonal progression', price: '$95' },
    { name: 'Smoked Lamb Rack', description: 'Harissa glaze, saffron couscous, mint', price: '$38' },
    { name: 'Sea Bass en Papillote', description: 'Fennel, citrus, white wine, herbs', price: '$34' },
  ],
  Desserts: [
    { name: 'Dark Chocolate Délice', description: 'Sea salt caramel, cocoa nib crumble', price: '$12' },
    { name: 'Vanilla Crème Brûlée', description: 'Madagascar vanilla, burnt sugar', price: '$10' },
    { name: 'Pistachio Soufflé', description: 'Crème anglaise, raspberry coulis', price: '$14' },
    { name: 'Affogato', description: 'Vanilla gelato, single-origin espresso', price: '$9' },
  ],
  Drinks: [
    { name: 'Old Fashioned', description: 'Bourbon, bitters, orange peel, smoked ice', price: '$16' },
    { name: 'Negroni', description: 'Gin, Campari, sweet vermouth', price: '$15' },
    { name: 'Sauvignon Blanc', description: 'Sancerre, France — by the glass', price: '$12' },
    { name: 'Pinot Noir', description: 'Burgundy, France — by the glass', price: '$14' },
  ],
} as const

export const galleryImages = [
  { url: img('1559339352-11d035aa65de', 800), alt: 'Restaurant interior with warm amber lighting', span: 'tall' },
  { url: img('1424847951676-b30fa6620bc4', 600), alt: 'Dessert plating close-up', span: 'normal' },
  { url: img('1517248135467-4c7edcad5c4c', 800), alt: 'Elegant table setting', span: 'wide' },
  { url: img('1551782450-a2132b4ba21d', 600), alt: 'Gourmet burger on dark plate', span: 'normal' },
  { url: img('1485921325833-c519f76b4925', 600), alt: 'Craft cocktail with garnish', span: 'tall' },
  { url: img('1600891964599-61d210c51ed3', 800), alt: 'Seared steak with herbs', span: 'wide' },
  { url: img('1565958011703-44f9829ba187', 600), alt: 'Chef plating a dish', span: 'normal' },
  { url: img('1559847844-5315695dadae', 600), alt: 'Fresh pasta dish', span: 'tall' },
]

export const chefImage = img('1577219491135-ce39b6c3d81b', 800)

export const experienceImages = [
  img('1559339352-11d035aa65de', 600),
  img('1517248135467-4c7edcad5c4c', 600),
  img('1531590010541-ce9c0820c8eb', 600),
]

export const reservationBg = img('1414235077428-3389893321c8', 1920)

export const testimonials = [
  {
    quote: 'One of the most memorable dining experiences we have ever had. Every plate arrived like a work of art.',
    name: 'Eleanor Voss',
    role: 'Food Critic, The Quarterly',
    rating: 5,
  },
  {
    quote: 'The atmosphere is intimate, the service impeccable, and the food — simply extraordinary. A hidden gem.',
    name: 'Marcus Aldridge',
    role: 'Regular Guest',
    rating: 5,
  },
  {
    quote: 'From the first bite to the last sip, Noir Epicurean delivers a masterclass in modern fine dining.',
    name: 'Sofia Marchetti',
    role: 'Lifestyle Editor',
    rating: 5,
  },
]

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#philosophy' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Journal', href: '#chef' },
]
