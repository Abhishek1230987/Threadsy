// Import images
import img1 from './img1.png';
import img2 from './img2.webp';
import img3 from './img3.webp';
import img4 from './img4.webp';       
import img5 from './img5.webp';
import img6 from './img6.webp';
import img7 from './img7.webp';
import img8 from './img8.webp';
import img9 from './img9.webp';
import img10 from './img10.webp';

// Make sure these variables are imported/defined if you use them in assets
import logo from './logo.jpg';
import menu from './menu.jpg';
import search from './search.png';
import profile from './profile.png';
import cart from './cart.jpg';
import star from './star.jpg';
import star_dull from './star_dull.jpg';
import bin_icon from './bin_icon.png';
import stripe_logo from './stripe_logo.png';

export const assets = {
    logo,
    menu,
    search,
    profile,
    cart,
    star,
    star_dull,
    bin_icon,
    stripe_logo

};

export const products = [
  {
    _id: "A1",
    name: "Women's Red Kurti",
    description: "Red in color, comfortable cotton fabric and hand washable.",
    price: 500,
    image: [img1],
    category: "Women",
    subCategory: "Topwear",
    size: ["S", "M", "L"],
    date: "2023-10-01T00:00:00.000Z",
    bestSeller: true
  },
  {
    _id: "B1",
    name: "Men's Coat",
    description: "Black in color, comfortable premium quality fabric.",
    price: 5000,
    image: [img2],
    category: "Men",
    subCategory: "Topwear",
    size: ["S", "M", "L", "XL"],
    date: "2023-10-02T00:00:00.000Z",
    bestSeller: false
  },
  {
    _id: "B2",
    name: "Boy's Coat",
    description: "Black in color, comfortable premium quality fabric.",
    price: 3000,
    image: [img3],
    category: "Boys",
    subCategory: "Topwear",
    size: ["S", "M", "L", "XL"],
    date: "2023-10-02T00:00:00.000Z",
    bestSeller: true
  },
  {
    _id: "A2",
    name: "Women's Coat",
    description: "Black in color, comfortable premium quality fabric.",
    price: 5000,
    image: [img4],
    category: "Women",
    subCategory: "Topwear",
    size: ["S", "M", "L", "XL"],
    date: "2023-10-02T00:00:00.000Z",
    bestSeller: false
  },
  {
    _id: "A3",
    name: "Women's Checked Shirt",
    description: "Blue in color, comfortable premium quality fabric.",
    price: 1000,
    image: [img5],
    category: "Women",
    subCategory: "Topwear",
    size: ["S", "M", "L", "XL"],
    date: "2023-10-02T00:00:00.000Z",
    bestSeller: true
  },
  {
    _id: "A4",
    name: "Women's Top",
    description: "Black in color, comfortable premium quality fabric.",
    price: 800,
    image: [img6],
    category: "Women",
    subCategory: "Topwear",
    size: ["S", "M", "L", "XL"],
    date: "2023-10-02T00:00:00.000Z",
    bestSeller: true
  },
  {
    _id: "B3",
    name: "Men's Coat",
    description: "Black in color, comfortable premium quality fabric.",
    price: 4000,
    image: [img7],
    category: "Men",
    subCategory: "Topwear",
    size: ["S", "M", "L", "XL"],
    date: "2023-10-02T00:00:00.000Z",
    bestSeller: true
  },
  {
    _id: "B4",
    name: "Men's T-Shirt",
    description: "Light Blue in color, comfortable premium quality fabric.",
    price: 500,
    image: [img8],
    category: "Men",
    subCategory: "Topwear",
    size: ["S", "M", "L", "XL"],
    date: "2023-10-02T00:00:00.000Z",
    bestSeller: true
  },
  {
    _id: "B5",
    name: "Men's Winter Coat",
    description: "Black in color, warm and premium quality fabric.",
    price: 7000,
    image: [img9],
    category: "Men",
    subCategory: "Winterwear",
    size: ["S", "M", "L", "XL"],
    date: "2023-10-02T00:00:00.000Z",
    bestSeller: false
  },
  {
    _id: "B6",
    name: "Men's Gym T-Shirt",
    description: "Gray in color, stretchable and breathable fabric.",
    price: 500,
    image: [img10],
    category: "Men",
    subCategory: "Topwear",
    size: ["S", "M", "L", "XL"],
    date: "2023-10-02T00:00:00.000Z",
    bestSeller: false
  }
];
