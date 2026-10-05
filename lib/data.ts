const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format&fit=crop`

export const img = {
  heroPizza: u('photo-1606787366850-de6330128bfc', 1400),
  margherita: u('photo-1565299624946-b28f40a0ae38', 800),
  pizzaCloseup: u('photo-1565299624946-b28f40a0ae38', 800),
  chef: u('photo-1559329007-40df8a9345d8', 1200),
  oven: u('photo-1571091718767-18b5b1457add', 1400),
  dough: u('photo-1509440159596-0249088772ff', 1200),
  dining: u('photo-1555396273-367ea4eb4db5', 1400),
  interior: u('photo-1604908176997-125f25cc6f3d', 1200),
  wine: u('photo-1571997478779-2adcbbe9ab2f', 800),
  privateDining: u('photo-1551782450-a2132b4ba21d', 1200),
  pizza1: u('photo-1606787366850-de6330128bfc', 600),
  pizza2: u('photo-1565299624946-b28f40a0ae38', 600),
  pizza3: u('photo-1600891964599-f61ba0e24092', 600),
  antipasti: u('photo-1544025162-d76694265947', 600),
  pasta: u('photo-1599487488170-d11ec9c172f0', 600),
  salad: u('photo-1540420773420-3366772f4999', 600),
  dessert: u('photo-1551024506-0bccd828d307', 600),
  drink: u('photo-1567620905732-2d1ec7ab7445', 600),
}

export const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Locations', href: '#locations' },
  { label: 'Private Dining', href: '#private-dining' },
  { label: 'Contact', href: '#contact' },
]

export const ingredients = [
  { name: 'Basil', description: 'Fresh from the garden', angle: 0 },
  { name: 'Mozzarella', description: 'Fior di latte', angle: 60 },
  { name: 'Tomato', description: 'San Marzano DOP', angle: 120 },
  { name: 'Prosciutto', description: 'Cured 18 months', angle: 180 },
  { name: 'Mushroom', description: 'Wild porcini', angle: 240 },
  { name: 'Calabrian Chili', description: 'Spicy & sweet', angle: 300 },
]

export const processSteps = [
  { label: 'Flour', description: 'Stone-ground', detail: 'Type 00 flour, stone-ground for the finest texture' },
  { label: 'Water', description: 'Pure & Simple', detail: 'Filtered and naturally balanced' },
  { label: 'Time', description: 'Natural Fermentation', detail: '72 hours of slow fermentation' },
  { label: 'Passion', description: 'In Every Detail', detail: 'Hand-crafted by our pizzaioli' },
]

export const menuCategories = [
  {
    name: 'Pizza',
    items: [
      { name: 'Margherita', description: 'San Marzano tomato, fior di latte, fresh basil', price: '€14', image: img.pizza1 },
      { name: 'Diavola', description: 'Spicy salami, calabrian chili, mozzarella', price: '€16', image: img.pizza2 },
      { name: 'Prosciutto', description: 'Tomato, mozzarella, prosciutto, arugula', price: '€18', image: img.pizza3 },
      { name: 'Quattro Formaggi', description: 'Mozzarella, gorgonzola, fontina, parmesan', price: '€17', image: img.pizza2 },
    ],
  },
  {
    name: 'Antipasti',
    items: [
      { name: 'Burrata', description: 'Creamy burrata, heirloom tomato, basil oil', price: '€12', image: img.antipasti },
      { name: 'Tagliere', description: 'Selection of cured meats and aged cheeses', price: '€22', image: img.interior },
      { name: 'Arancini', description: 'Saffron risotto, mozzarella, pea purée', price: '€10', image: img.antipasti },
      { name: 'Polpette', description: 'Beef meatballs, San Marzano sauce', price: '€11', image: img.antipasti },
    ],
  },
  {
    name: 'Pasta',
    items: [
      { name: 'Cacio e Pepe', description: 'Tonnarelli, pecorino romano, black pepper', price: '€15', image: img.pasta },
      { name: 'Carbonara', description: 'Guanciale, egg yolk, pecorino, black pepper', price: '€16', image: img.pasta },
      { name: 'Tagliatelle al Ragù', description: 'Slow-cooked beef ragù, fresh tagliatelle', price: '€17', image: img.pasta },
      { name: 'Gnocchi al Pomodoro', description: 'Potato gnocchi, San Marzano, basil', price: '€14', image: img.pasta },
    ],
  },
  {
    name: 'Salads',
    items: [
      { name: 'Caprese', description: 'Heirloom tomato, mozzarella, basil, olive oil', price: '€11', image: img.salad },
      { name: 'Rucola', description: 'Arugula, cherry tomato, parmesan, lemon', price: '€9', image: img.salad },
      { name: 'Cesare', description: 'Romaine, anchovy, crouton, parmesan', price: '€10', image: img.salad },
      { name: 'Barbabietole', description: 'Roasted beet, goat cheese, walnut', price: '€12', image: img.salad },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Tiramisu', description: 'Espresso, mascarpone, cocoa, ladyfinger', price: '€8', image: img.dessert },
      { name: 'Panna Cotta', description: 'Vanilla bean, berry compote', price: '€7', image: img.dessert },
      { name: 'Cannoli', description: 'Crispy shell, ricotta, pistachio, chocolate', price: '€7', image: img.dessert },
      { name: 'Gelato', description: 'Selection of house-made gelato', price: '€6', image: img.dessert },
    ],
  },
  {
    name: 'Drinks',
    items: [
      { name: 'Negroni', description: 'Gin, campari, sweet vermouth, orange', price: '€9', image: img.drink },
      { name: 'Aperol Spritz', description: 'Aperol, prosecco, soda, orange', price: '€8', image: img.drink },
      { name: 'Chianti Classico', description: 'Tuscany, 2020 — glass / bottle', price: '€7/28', image: img.drink },
      { name: 'Espresso', description: 'Single origin, house blend', price: '€3', image: img.drink },
    ],
  },
]

export const locations = [
  {
    city: 'Warsaw',
    address: 'ul. Mokotowska 12, Warsaw',
    hours: 'Mon–Sun: 12:00–23:00',
    image: img.interior,
    rooms: [
      { name: 'Main Venue', description: 'Our flagship dining room', image: img.interior },
      { name: 'Garden Room', description: 'Al fresco dining experience', image: img.dining },
      { name: 'Private Dining', description: 'Intimate celebrations', image: img.privateDining },
    ],
  },
  {
    city: 'Krakow',
    address: 'ul. Florianska 14, Krakow',
    hours: 'Mon–Sun: 12:00–23:00',
    image: img.privateDining,
    rooms: [
      { name: 'Main Venue', description: 'Historic dining room', image: img.privateDining },
      { name: 'Cellar Room', description: 'Underground wine cellar', image: img.interior },
      { name: 'Private Dining', description: 'Renaissance atmosphere', image: img.privateDining },
    ],
  },
  {
    city: 'Gdansk',
    address: 'ul. Dluga 28, Gdansk',
    hours: 'Mon–Sun: 12:00–23:00',
    image: img.dining,
    rooms: [
      { name: 'Main Venue', description: 'Canalside dining room', image: img.dining },
      { name: 'Terrace Room', description: 'Open-air dining', image: img.dining },
      { name: 'Private Dining', description: 'Baltic celebrations', image: img.privateDining },
    ],
  },
]
