// =============================================
// SANDHU DHABHA - Main JavaScript
// Author: SANDHU DHABHA Team
// =============================================

// ---- Food Data (15 Indian Dishes) ----



const foodData = [


// NEW ITEMS ADDED .....


// SANDHU


// NEW ITEM
// STARTING / STREET FOOD MENU

{
  id: 147,
  name: "Aloo Tikki Chaat",
  desc: "Crispy potato tikki topped with tangy chutneys, curd and chaat masala.",
  price: 100,
  originalPrice: 130,
  rating: 4.8,
  category: "starter",
  type: "veg",
  emoji: "🥔",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/ALOO_TIKKI.JPG"
},

{
  id: 148,
  name: "Dahi Bade",
  desc: "Soft lentil dumplings soaked in creamy yogurt and topped with chutneys.",
  price: 110,
  originalPrice: 140,
  rating: 4.8,
  category: "starter",
  type: "veg",
  emoji: "🥣",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/DAHI_VADA.jpg"
},

{
  id: 149,
  name: "Pav Bhaji",
  desc: "Spiced vegetable bhaji served hot with buttery toasted pav.",
  price: 130,
  originalPrice: 160,
  rating: 4.9,
  category: "starter",
  type: "veg",
  emoji: "🍞",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pav_bhaji.jpg"
},


// SANDHU

{
  id: 150,
  name: "Chole Bhature",
  desc: "Spicy chickpea curry served with fluffy deep-fried bhature.",
  price: 160,
  originalPrice: 200,
  rating: 4.9,
  category: "starter",
  type: "veg",
  emoji: "🍛",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chole_Bhature.jpg"
},

{
  id: 151,
  name: "Pani Puri",
  desc: "Crispy puris filled with spicy tangy water, potato and chickpeas.",
  price: 80,
  originalPrice: 100,
  rating: 4.9,
  category: "starter",
  type: "veg",
  emoji: "🥙",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pani_Puri_-_Perfect_Street_food.JPG"
},

{
  id: 152,
  name: "Ghugni",
  desc: "Traditional spiced yellow peas cooked with onions, tomatoes and Indian spices.",
  price: 90,
  originalPrice: 120,
  rating: 4.7,
  category: "starter",
  type: "veg",
  emoji: "🥣",
  popular: false,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ghugni_image.jpg"
},

{
  id: 153,
  name: "Chowmein",
  desc: "Wok-tossed noodles cooked with fresh vegetables and flavorful sauces.",
  price: 150,
  // SANDHU
  originalPrice: 190,
  rating: 4.8,
  category: "starter",
  type: "veg",
  emoji: "🍜",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chow_mein.jpg"
},

{
  id: 154,
  name: "Paneer Chilli",
  desc: "Crispy paneer cubes tossed with capsicum, onions and spicy chilli sauce.",
  price: 190,
  originalPrice: 240,
  rating: 4.9,
  category: "starter",
  type: "veg",
  emoji: "🧀",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer_Chilli.jpg"
},

{
  id: 155,
  name: "Chole Kulche",
  desc: "Spicy chickpeas served with soft roasted kulche and fresh onions.",
  price: 130,
  originalPrice: 160,
  rating: 4.8,
  category: "starter",
  type: "veg",
  emoji: "🥙",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chole_Kulche.jpeg"
},

{
  // SANDHU
  id: 156,
  name: "Samosa",
  desc: "Crispy golden pastry filled with spiced potatoes and peas.",
  price: 60,
  originalPrice: 80,
  rating: 4.8,
  category: "starter",
  type: "veg",
  emoji: "🔺",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Samosa.JPG"
},

{
  id: 157,
  name: "Bhel Puri",
  desc: "Crispy puffed rice mixed with vegetables, chutneys and crunchy sev.",
  price: 90,
  originalPrice: 120,
  rating: 4.7,
  category: "starter",
  type: "veg",
  emoji: "🥗",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/BhelPuri.jpg"
},

{
  id: 158,
  name: "Sev Puri",
  desc: "Crispy puris topped with potato, chutneys, onions and generous sev.",
  price: 100,
  originalPrice: 130,
  rating: 4.8,
  category: "starter",
  type: "veg",
  emoji: "🥙",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sev_Puri.jpg"
},

{
  id: 159,
  name: "Kachori",
  desc: "Crispy stuffed pastry filled with spicy lentils and traditional Indian spices.",
  price: 70,
  originalPrice: 90,
  rating: 4.7,
  category: "starter",
  type: "veg",
  emoji: "🥟",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kachori-1.jpg"
},

{
  id: 160,
  name: "Pakora",
  desc: "Crispy Indian fritters made with vegetables coated in spiced gram flour.",
  price: 100,
  originalPrice: 130,
  rating: 4.7,
  category: "starter",
  type: "veg",
  emoji: "🥔",
  popular: false,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pakora.JPG"
},

{
  id: 161,
  name: "Bread Pakora",
  desc: "Bread stuffed with spiced potato filling, coated in gram flour and fried crispy.",
  price: 80,
  originalPrice: 100,
  rating: 4.7,
  category: "starter",
  type: "veg",
  emoji: "🍞",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bread_Pakoda.jpg"
},

{
  // SANDHU
  id: 162,
  name: "Veg Momos",
  desc: "Steamed dumplings filled with seasoned vegetables and served with spicy chutney.",
  price: 120,
  originalPrice: 150,
  rating: 4.8,
  category: "starter",
  type: "veg",
  emoji: "🥟",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Veg_momos_with_momos_chatni_-_Gujarat_-_SHAILI_004.jpg"
},

{
  id: 163,
  name: "Spring Roll",
  desc: "Crispy rolls stuffed with seasoned vegetables and served with chilli sauce.",
  price: 140,
  originalPrice: 180,
  rating: 4.8,
  category: "starter",
  type: "veg",
  emoji: "🥢",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Springroll.jpg"
},

{
  id: 164,
  name: "Crispy Corn",
  desc: "Golden fried sweet corn tossed with spices, onions and capsicum.",
  price: 180,
  originalPrice: 220,
  rating: 4.7,
  category: "starter",
  type: "veg",
  emoji: "🌽",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Crispy_corn_made_by_me.jpg"
},

{
  id: 165,
  name: "Dahi Puri",
  desc: "Crispy puris filled with potato, chickpeas, yogurt, chutneys and sev.",
  price: 110,
  originalPrice: 140,
  rating: 4.8,
  category: "starter",
  type: "veg",
  emoji: "🥣",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dahi_Puri_(Indian_snack).jpg"
},

{
  // SANDHU
  id: 166,
  name: "Dahi Gupchup",
  desc: "Crispy gupchup filled with spiced potato, creamy curd and tangy chutneys.",
  price: 110,
  originalPrice: 140,
  rating: 4.8,
  category: "starter",
  type: "veg",
  emoji: "🥙",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dahi_Puri_(dahi_gupchup).jpg"
},



// CHICKEN STARTER




// NON-VEG STARTERS

{
  id: 167,
  name: "Chicken Tikka",
  desc: "Juicy boneless chicken pieces marinated with yogurt and spices, grilled in a tandoor.",
  price: 260,
  originalPrice: 320,
  rating: 4.9,
  category: "starter",
  type: "nonveg",
  emoji: "🍗",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_Tikka_(1).jpg"
},

{
  id: 168,
  name: "Tandoori Chicken",
  desc: "Tender chicken marinated in aromatic spices and roasted traditionally in a tandoor.",
  price: 280,
  originalPrice: 340,
  rating: 4.9,
  category: "starter",
  type: "nonveg",
  emoji: "🍗",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tandoori_Chicken_Fry.jpg"
},

// SANDHU
{
  id: 169,
  name: "Chicken Seekh Kebab",
  desc: "Juicy minced chicken kebabs blended with herbs and spices and grilled to perfection.",
  price: 280,
  originalPrice: 340,
  rating: 4.9,
  category: "starter",
  type: "nonveg",
  emoji: "🍢",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_Seekh_Kabab.jpg"
},

{
  id: 170,
  name: "Chicken 65",
  desc: "Crispy spicy fried chicken tossed with aromatic Indian spices and curry leaves.",
  price: 250,
  originalPrice: 310,
  rating: 4.8,
  category: "starter",
  type: "nonveg",
  emoji: "🍗",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_65.jpg"
},

{
  id: 171,
  name: "Chicken Malai Tikka",
  desc: "Creamy and tender chicken tikka marinated with cheese, cream and mild spices.",
  price: 290,
  originalPrice: 350,
  rating: 4.9,
  category: "starter",
  type: "nonveg",
  emoji: "🍗",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_Malai_Tikka.jpg"
},

{
  id: 172,
  name: "Chicken Pakora",
  desc: "Crispy chicken pieces coated in seasoned gram flour batter and deep-fried.",
  price: 230,
  originalPrice: 280,
  rating: 4.8,
  category: "starter",
  type: "nonveg",
  emoji: "🍗",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_Pakora.jpg"
},

{
  id: 173,
  name: "Chicken Wings",
  desc: "Crispy juicy chicken wings marinated with flavorful spices and fried until golden.",
  price: 240,
  originalPrice: 300,
  rating: 4.8,
  category: "starter",
  type: "nonveg",
  emoji: "🍗",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_wings.jpg"
},

{
  id: 174,
  name: "Fish Fry",
  desc: "Crispy marinated fish fillets seasoned with Indian spices and grilled until golden.",
  price: 300,
  originalPrice: 360,
  rating: 4.8,
  category: "starter",
  type: "nonveg",
  emoji: "🐟",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fish_fry_recipe.jpg"
},

{
  id: 175,
  name: "Tandoori Fish",
  desc: "Fresh fish marinated with yogurt, lemon and aromatic spices and cooked tandoori style.",
  price: 320,
  originalPrice: 390,
  rating: 4.9,
  category: "starter",
  type: "nonveg",
  emoji: "🐟",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fish_fry_recipe.jpg"
},

{
  id: 176,
  name: "Chicken Manchurian",
  desc: "Crispy chicken pieces tossed in spicy Indo-Chinese Manchurian sauce.",
  price: 270,
  originalPrice: 330,
  rating: 4.8,
  category: "starter",
  type: "nonveg",
  emoji: "🍗",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_Manchurian.jpg"
},

// ==================== THALI MENU ====================

{
  id: 177,
  name: "Veg Thali",
  desc: "Complete vegetarian meal with dal, sabzi, roti, rice, salad and sweet.",
  price: 220,
  originalPrice: 270,
  rating: 4.8,
  category: "thali",
  type: "veg",
  emoji: "🍛",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Indian%20Veg%20Thali.JPG"
},

{
  id: 178,
  name: "Punjabi Thali",
  desc: "Traditional Punjabi meal with dal, sabzi, roti, rice, curd and salad.",
  price: 250,
  originalPrice: 300,
  rating: 4.9,
  category: "thali",
  type: "veg",
  emoji: "🥘",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Punjabi%20Thali.JPG"
},

{
  id: 179,
  name: "Special Thali",
  desc: "A delicious complete Indian meal with multiple curries, breads, rice and dessert.",
  price: 300,
  originalPrice: 360,
  rating: 4.9,
  category: "thali",
  type: "veg",
  emoji: "🍽️",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Complete%20full%20special%20indian%20food%20thali.jpg"
},

{
  id: 180,
  name: "Non-Veg Thali",
  desc: "Hearty Indian meal served with chicken curry, rice, roti, salad and sides.",
  price: 350,
  originalPrice: 420,
  rating: 4.9,
  category: "thali",
  type: "nonveg",
  emoji: "🍗",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/India%20non%20veg%20thali.jpg"
},

{
  id: 181,
  name: "North Indian Thali",
  desc: "Classic North Indian platter with dal, sabzi, roti, rice and traditional sides.",
  price: 240,
  originalPrice: 290,
  rating: 4.8,
  category: "thali",
  type: "veg",
  emoji: "🍛",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/North%20Indian%20veg%20thali.jpg"
},

{
  id: 182,
  name: "Rajasthani Thali",
  desc: "Traditional Rajasthani feast featuring dal, bati, churma, vegetables and more.",
  price: 280,
  originalPrice: 340,
  rating: 4.9,
  category: "thali",
  type: "veg",
  emoji: "🥘",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Rajasthani%20thali.jpg"
},

{
  id: 183,
  name: "Gujarati Thali",
  desc: "Authentic Gujarati platter with rotis, vegetables, dal, rice, sweets and sides.",
  price: 270,
  originalPrice: 330,
  rating: 4.8,
  category: "thali",
  type: "veg",
  emoji: "🍱",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Authentic%20gujarati%20thali.jpg"
},

{
  id: 184,
  name: "South Indian Thali",
  desc: "Traditional South Indian meal with rice, sambar, rasam, vegetables, curd and dessert.",
  price: 250,
  originalPrice: 300,
  rating: 4.8,
  category: "thali",
  type: "veg",
  emoji: "🍚",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/South%20indian%20thali.jpg"
},

{
  id: 185,
  name: "Deluxe Veg Thali",
  desc: "Premium vegetarian platter with assorted curries, breads, rice, salad and dessert.",
  price: 320,
  originalPrice: 390,
  rating: 4.9,
  category: "thali",
  type: "veg",
  emoji: "🍽️",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/INDIAN%20thali.jpg"
},

{
  id: 186,
  name: "Mini Thali",
  desc: "Simple and satisfying Indian meal with dal, sabzi, roti, rice and salad.",
  price: 180,
  originalPrice: 220,
  rating: 4.7,
  category: "thali",
  type: "veg",
  emoji: "🍛",
  popular: false,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/North%20Indian%20Lunch%20Thali.jpg"
},


// ==================== SPECIAL COMBOS ====================

{
  id: 187,
  name: "Chole Bhature Combo",
  desc: "Spicy chickpea curry served with fluffy bhature and fresh salad.",
  price: 170,
  originalPrice: 210,
  rating: 4.9,
  category: "combos",
  type: "veg",
  emoji: "🍛",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/CHOLE%20BHATURE.JPG"
},

{
  id: 188,
  name: "Dal Rice Combo",
  desc: "Comforting dal served with steamed rice, salad and pickle.",
  price: 160,
  originalPrice: 200,
  rating: 4.8,
  category: "combos",
  type: "veg",
  emoji: "🍚",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/DAL%20RICE.JPG"
},

{
  id: 189,
  name: "Paneer Naan Combo",
  desc: "Rich paneer curry served with soft naan, salad and chutney.",
  price: 220,
  originalPrice: 270,
  rating: 4.9,
  category: "combos",
  type: "veg",
  emoji: "🧀",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Punjabi%20Thali.JPG"
},

{
  id: 190,
  name: "Rajma Rice Combo",
  desc: "Homestyle rajma curry served with steamed basmati rice and salad.",
  price: 180,
  originalPrice: 220,
  rating: 4.8,
  category: "combos",
  type: "veg",
  emoji: "🍚",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Rajma%20Chawal.jpg"
},

{
  id: 191,
  name: "Chole Kulche Combo",
  desc: "Spicy chickpeas served with soft roasted kulche and fresh onions.",
  price: 160,
  originalPrice: 200,
  rating: 4.8,
  category: "combos",
  type: "veg",
  emoji: "🥙",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chole%20kulche.jpg"
},

{
  id: 192,
  name: "Butter Chicken Naan Combo",
  desc: "Creamy butter chicken served with soft naan and fresh salad.",
  price: 320,
  originalPrice: 390,
  rating: 4.9,
  category: "combos",
  type: "nonveg",
  emoji: "🍗",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Butter%20Chicken.jpg"
},

{
  id: 193,
  name: "Dal Makhani Naan Combo",
  desc: "Rich creamy dal makhani served with buttery naan and salad.",
  price: 220,
  originalPrice: 270,
  rating: 4.9,
  category: "combos",
  type: "veg",
  emoji: "🥣",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dal-makhani.jpg"
},

{
  id: 194,
  name: "Aloo Paratha Combo",
  desc: "Stuffed aloo parathas served with curd, pickle and fresh salad.",
  price: 150,
  originalPrice: 190,
  rating: 4.8,
  category: "combos",
  type: "veg",
  emoji: "🥔",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/ALOO%20PARATHA.jpg"
},

{
  id: 195,
  name: "Paneer Rice Combo",
  desc: "Flavorful paneer curry served with aromatic rice and fresh salad.",
  price: 230,
  originalPrice: 280,
  rating: 4.8,
  category: "combos",
  type: "veg",
  emoji: "🧀",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/North%20Indian%20veg%20thali.jpg"
},

{
  id: 196,
  name: "Chicken Rice Combo",
  desc: "Tender chicken curry served with fragrant rice and fresh salad.",
  price: 280,
  originalPrice: 340,
  rating: 4.9,
  category: "combos",
  type: "nonveg",
  emoji: "🍗",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken%20Rice.jpg"
},



// PANNER ITEMS 


{
    id: 1,
    name: "Paneer Butter Masala",
    desc: "Creamy tomato-based curry with soft paneer cubes, aromatic spices and fresh cream.",
    price: 220,
    originalPrice: 280,
    rating: 4.7,
    category: "curries",
    type: "veg",
    emoji: "🧆",
    popular: true,
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=250&fit=crop"
  },

{
  id: 2,
  name: "Kadai Paneer",
  desc: "Fresh paneer cubes cooked with capsicum, onions and rich tomato gravy, finished with aromatic Indian spices.",
  price: 240,
  originalPrice: 300,
  rating: 4.8,
  category: "curries",
  type: "veg",
  emoji: "🧀",
  popular: true,
  img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=250&fit=crop"
},

{
  id: 3,
  name: "Shahi Paneer",
  desc: "Soft paneer cooked in a luxurious creamy cashew and tomato gravy with mild spices.",
  price: 250,
  originalPrice: 320,
  rating: 4.9,
  category: "curries",
  type: "veg",
  emoji: "👑",
  popular: true,
  img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=250&fit=crop"
},

{
  id: 4,
  name: "Palak Paneer",
  desc: "Fresh cottage cheese cubes simmered in a smooth spinach gravy with traditional Indian spices.",
  price: 230,
  originalPrice: 290,
  rating: 4.7,
  category: "curries",
  type: "veg",
  emoji: "🥬",
  popular: true,
  img: "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=400&h=250&fit=crop"
},

{
  id: 5,
  name: "Paneer Lababdar",
  desc: "Rich and creamy paneer curry prepared with butter, tomatoes, cream and aromatic spices.",
  price: 260,
  originalPrice: 330,
  rating: 4.8,
  category: "curries",
  type: "veg",
  emoji: "🍛",
  popular: true,
  img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=250&fit=crop"
},

{
  id: 6,
  name: "Paneer Tikka Masala",
  desc: "Grilled paneer tikka pieces served in a smoky, spicy and creamy tomato-based gravy.",
  price: 270,
  originalPrice: 340,
  rating: 4.9,
  category: "curries",
  type: "veg",
  emoji: "🔥",
  popular: true,
  img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=250&fit=crop"
},

{
  id: 7,
  name: "Matar Paneer",
  desc: "Fresh paneer and green peas cooked in a flavorful tomato-onion gravy with Indian spices.",
  price: 210,
  originalPrice: 270,
  rating: 4.6,
  category: "curries",
  type: "veg",
  emoji: "🫛",
  popular: false,
  img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=250&fit=crop"
},


// CHICKEN ITEMS 


{
  id: 8,
  name: "Butter Chicken",
  desc: "Tender chicken cooked in a rich buttery tomato gravy with fresh cream and aromatic spices.",
  price: 320,
  originalPrice: 380,
  rating: 4.9,
  category: "curries",
  type: "nonveg",
  emoji: "🍗",
  popular: true,
  img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=250&fit=crop"
},

{
  id: 9,
  name: "Chicken Tikka Masala",
  desc: "Grilled chicken tikka cooked in a creamy tomato-based gravy with Indian spices.",
  price: 340,
  originalPrice: 400,
  rating: 4.8,
  category: "curries",
  type: "nonveg",
  emoji: "🔥",
  popular: true,
  img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=250&fit=crop"
},

{
  id: 10,
  name: "Chicken Curry",
  desc: "Juicy chicken pieces slow-cooked in a traditional onion and tomato curry with Indian spices.",
  price: 280,
  originalPrice: 340,
  rating: 4.7,
  category: "curries",
  type: "nonveg",
  emoji: "🍛",
  popular: true,
  img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=250&fit=crop"
},

{
  id: 11,
  name: "Chicken Korma",
  desc: "Succulent chicken cooked in a rich cashew and cream-based gravy with mild spices.",
  price: 350,
  originalPrice: 420,
  rating: 4.8,
  category: "curries",
  type: "nonveg",
  emoji: "🥘",
  popular: false,
  img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=250&fit=crop"
},
// SANDHU
{
  id: 12,
  name: "Chicken Handi",
  desc: "Traditional handi-style chicken cooked with tomatoes, onions and flavorful Indian spices.",
  price: 330,
  originalPrice: 390,
  rating: 4.8,
  category: "curries",
  type: "nonveg",
  emoji: "🍲",
  popular: true,
  img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=400&h=250&fit=crop"
},

{
  id: 13,
  name: "Chicken Tandoori",
  desc: "Chicken marinated in yogurt and spices, roasted in a traditional tandoor until smoky and juicy.",
  price: 360,
  originalPrice: 430,
  rating: 4.9,
  category: "curries",
  type: "nonveg",
  emoji: "🍗",
  popular: true,
  img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&h=250&fit=crop"
},

{
  id: 14,
  name: "Chicken Lollipop",
  desc: "Crispy fried chicken wings tossed with spicy seasoning and served with dipping sauce.",
  price: 260,
  originalPrice: 320,
  rating: 4.7,
  category: "curries",
  type: "nonveg",
  emoji: "🍖",
  popular: true,
  img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=250&fit=crop"
},

{
  id: 15,
  name: "Chicken 65",
  desc: "South Indian style spicy fried chicken bites tossed with curry leaves and green chilies.",
  price: 280,
  originalPrice: 340,
  rating: 4.8,
  category: "curries",
  type: "nonveg",
  emoji: "🌶️",
  popular: true,
  img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=250&fit=crop"
},

{
  id: 16,
  name: "Chicken Fried Rice",
  desc: "Wok-tossed fried rice with tender chicken, fresh vegetables and flavorful sauces.",
  price: 250,
  originalPrice: 310,
  rating: 4.6,
  category: "curries",
  type: "nonveg",
  emoji: "🍚",
  popular: false,
  img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=250&fit=crop"
},

{
  id: 17,
  name: "Chicken Hakka Noodles",
  desc: "Stir-fried noodles with chicken, crunchy vegetables and authentic Indo-Chinese flavors.",
  price: 240,
  originalPrice: 300,
  rating: 4.7,
  category: "curries",
  type: "nonveg",
  emoji: "🍜",
  popular: true,
  img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=250&fit=crop"
},

// SANDHU
// dal itemxs 

{
  id: 18,
  name: "Dal Tadka",
  desc: "Yellow lentils tempered with garlic, cumin, onions and aromatic Indian spices.",
  price: 170,
  originalPrice: 210,
  rating: 4.7,
  category: "curries",
  type: "veg",
  emoji: "🍲",
  popular: true,
  img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=250&fit=crop"
},

{
  id: 19,
  name: "Dal Fry",
  desc: "Classic Indian lentils cooked with onions, tomatoes, garlic and fresh coriander.",
  price: 160,
  originalPrice: 200,
  rating: 4.6,
  category: "curries",
  type: "veg",
  emoji: "🥣",
  popular: true,
  img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=250&fit=crop"
},

{
  id: 20,
  name: "Dal Makhani",
  desc: "Slow-cooked black lentils in butter and cream — a Punjabi classic.",
  price: 180,
  originalPrice: 220,
  rating: 4.8,
  category: "curries",
  type: "veg",
  emoji: "🍲",
  popular: true,
  img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=250&fit=crop"
},
{
  id: 21,
  name: "Dal Palak",
  desc: "Nutritious yellow lentils cooked with fresh spinach, garlic and mild Indian spices.",
  price: 190,
  originalPrice: 230,
  rating: 4.6,
  category: "curries",
  type: "veg",
  emoji: "🥬",
  popular: false,
  img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=250&fit=crop"
},

{
  id: 22,
  name: "Dal Panchmel",
  desc: "Traditional Rajasthani curry made with five varieties of lentils and aromatic spices.",
  price: 210,
  originalPrice: 250,
  rating: 4.7,
  category: "curries",
  type: "veg",
  emoji: "🌾",
  popular: false,
  img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=250&fit=crop"
},

{
  id: 23,
  name: "Dal Bukhara",
  desc: "Premium slow-cooked black lentils enriched with butter, cream and signature spices.",
  price: 240,
  originalPrice: 290,
  rating: 4.9,
  category: "curries",
  type: "veg",
  emoji: "🥘",
  popular: true,
  img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=250&fit=crop"
},

{
  id: 24,
  name: "Gujarati Dal",
  desc: "Sweet and tangy Gujarati-style lentil curry prepared with jaggery, tamarind and spices.",
  price: 180,
  originalPrice: 220,
  rating: 4.5,
  category: "curries",
  type: "veg",
  emoji: "🍛",
  popular: false,
  img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=250&fit=crop"
},
{
  id: 25,
  name: "Mixed Dal",
  desc: "A wholesome blend of assorted lentils cooked with butter and traditional Indian spices.",
  price: 190,
  originalPrice: 230,
  rating: 4.7,
  category: "curries",
  type: "veg",
  emoji: "🥣",
  popular: true,
  img: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400&h=250&fit=crop"
},

// mushroom items


{
  id: 26,
  name: "Mushroom Masala",
  desc: "Fresh mushrooms cooked in a rich onion-tomato gravy with aromatic Indian spices.",
  price: 220,
  originalPrice: 270,
  rating: 4.7,
  category: "curries",
  type: "veg",
  emoji: "🍄",
  popular: true,
  img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop"
},

{
  id: 27,
  name: "Kadai Mushroom",
  desc: "Mushrooms tossed with capsicum, onions and flavorful kadai spices in a thick gravy.",
  price: 230,
  originalPrice: 280,
  rating: 4.8,
  category: "curries",
  type: "veg",
  emoji: "🍄",
  popular: true,
  img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=250&fit=crop"
},

{
  id: 28,
  name: "Mushroom Do Pyaza",
  desc: "Tender mushrooms cooked with double onions, tomatoes and authentic Indian spices.",
  price: 240,
  originalPrice: 290,
  rating: 4.6,
  category: "curries",
  type: "veg",
  emoji: "🧅",
  popular: false,
  img: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400&h=250&fit=crop"
},

// SANDHU
{
  id: 29,
  name: "Mushroom Butter Masala",
  desc: "Juicy mushrooms simmered in a creamy buttery tomato gravy with rich Indian flavors.",
  price: 250,
  originalPrice: 310,
  rating: 4.9,
  category: "curries",
  type: "veg",
  emoji: "🧈",
  popular: true,
  img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop"
},

{
  id: 30,
  name: "Mushroom Matar",
  desc: "Fresh mushrooms and green peas cooked together in a delicious mildly spiced curry.",
  price: 230,
  originalPrice: 280,
  rating: 4.7,
  category: "curries",
  type: "veg",
  emoji: "🫛",
  popular: true,
  img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=250&fit=crop"
},
{
  id: 31,
  name: "Mushroom Handi",
  desc: "A rich handi-style mushroom curry cooked with cream, tomatoes and aromatic spices.",
  price: 260,
  originalPrice: 320,
  rating: 4.8,
  category: "curries",
  type: "veg",
  emoji: "🍲",
  popular: true,
  img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=250&fit=crop"
},


// mutton and fish items

{
  id: 32,
  name: "Mutton Rogan Josh",
  desc: "Tender mutton slow-cooked in a rich Kashmiri gravy with aromatic spices.",
  price: 420,
  originalPrice: 490,
  rating: 4.9,
  category: "curries",
  type: "nonveg",
  emoji: "🥩",
  popular: true,
  img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=250&fit=crop"
},

{
  id: 33,
  name: "Mutton Curry",
  desc: "Juicy mutton pieces cooked in a flavorful onion and tomato-based traditional curry.",
  price: 390,
  originalPrice: 460,
  rating: 4.8,
  category: "curries",
  type: "nonveg",
  emoji: "🍛",
  popular: true,
  img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=250&fit=crop"
},

{
  id: 34,
  name: "Mutton Korma",
  desc: "Succulent mutton cooked in a creamy cashew and yogurt-based gravy with mild spices.",
  price: 440,
  originalPrice: 510,
  rating: 4.8,
  category: "curries",
  type: "nonveg",
  emoji: "🥘",
  popular: true,
  img: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400&h=250&fit=crop"
},

{
  id: 35,
  name: "Mutton Handi",
  desc: "Traditional handi-style mutton cooked with tomatoes, onions and aromatic spices.",
  price: 450,
  originalPrice: 520,
  rating: 4.9,
  category: "curries",
  type: "nonveg",
  emoji: "🍲",
  popular: true,
  img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=250&fit=crop"
},

// SANDHU
{
  id: 36,
  name: "Keema Masala",
  desc: "Minced mutton cooked with onions, tomatoes and bold Indian spices.",
  price: 380,
  originalPrice: 450,
  rating: 4.7,
  category: "curries",
  type: "nonveg",
  emoji: "🥩",
  popular: false,
  img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=250&fit=crop"
},

{
  id: 37,
  name: "Fish Curry",
  desc: "Fresh fish simmered in a flavorful onion-tomato gravy with authentic Indian spices.",
  price: 340,
  originalPrice: 400,
  rating: 4.8,
  category: "curries",
  type: "nonveg",
  emoji: "🐟",
  popular: true,
  img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=250&fit=crop"
},

{
  id: 38,
  name: "Fish Masala",
  desc: "Soft fish pieces cooked in a spicy masala gravy with fresh herbs and Indian spices.",
  price: 360,
  originalPrice: 420,
  rating: 4.7,
  category: "curries",
  type: "nonveg",
  emoji: "🐠",
  popular: true,
  img: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=250&fit=crop"
},

{
  id: 39,
  name: "Fish Korma",
  desc: "Tender fish cooked in a rich creamy cashew gravy with mild aromatic spices.",
  price: 380,
  originalPrice: 450,
  rating: 4.8,
  category: "curries",
  type: "nonveg",
  emoji: "🍛",
  popular: false,
  img: "https://images.unsplash.com/photo-1606755456206-b25206cde27e?w=400&h=250&fit=crop"
},

{
  id: 40,
  name: "Fish Butter Masala",
  desc: "Fresh fish cooked in a buttery tomato gravy enriched with cream and spices.",
  price: 390,
  originalPrice: 460,
  rating: 4.9,
  category: "curries",
  type: "nonveg",
  emoji: "🧈",
  popular: true,
  img: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400&h=250&fit=crop"
},

{
  id: 41,
  name: "Goan Fish Curry",
  desc: "Authentic Goan-style fish curry prepared with coconut milk, tamarind and traditional spices.",
  price: 410,
  originalPrice: 480,
  rating: 4.9,
  category: "curries",
  type: "nonveg",
  emoji: "🥥",
  popular: true,
  img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=250&fit=crop"
},


// VEG STARTERS AND SNACKS

{
  id: 42,
  name: "Paneer Tikka",
  desc: "Marinated paneer cubes grilled to perfection with aromatic Indian spices.",
  price: 260,
  originalPrice: 320,
  rating: 4.9,
  category: "starter",
  type: "veg",
  emoji: "🧀",
  popular: true,
  img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=250&fit=crop"
},



// SANDHU
{
  id: 43,
  name: "Hara Bhara Kebab",
  desc: "Crispy spinach and green pea kebabs served with mint chutney.",
  price: 190,
  originalPrice: 240,
  rating: 4.7,
  category: "starter",
  type: "veg",
  emoji: "🥬",
  popular: true,
  img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop"
},

{
  id: 44,
  name: "Veg Spring Rolls",
  desc: "Golden crispy rolls stuffed with fresh vegetables and served with sweet chili sauce.",
  price: 180,
  originalPrice: 230,
  rating: 4.6,
  category: "starter",
  type: "veg",
  emoji: "🥢",
  popular: true,
  img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=250&fit=crop"
},
{
  id: 45,
  name: "Veg Manchurian",
  desc: "Crispy vegetable balls tossed in spicy Indo-Chinese sauce.",
  price: 210,
  originalPrice: 260,
  rating: 4.8,
  category: "starter",
  type: "veg",
  emoji: "🥟",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Manchurian.jpg"
},

{
  id: 46,
  name: "Paneer 65",
  desc: "Spicy South Indian style paneer tossed with curry leaves and green chilies.",
  price: 250,
  originalPrice: 300,
  rating: 4.8,
  category: "starter",
  type: "veg",
  emoji: "🌶️",
  popular: true,
  img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=250&fit=crop"
},

{
  id: 47,
  name: "Mushroom Tikka",
  desc: "Fresh mushrooms marinated with yogurt and spices, grilled until smoky.",
  price: 240,
  originalPrice: 290,
  rating: 4.7,
  category: "starter",
  type: "veg",
  emoji: "🍄",
  popular: true,
  img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=250&fit=crop"
},
{
  id: 48,
  name: "Crispy Corn",
  desc: "Golden fried sweet corn tossed with spices, onions and capsicum.",
  price: 180,
  originalPrice: 220,
  rating: 4.7,
  category: "starter",
  type: "veg",
  emoji: "🌽",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Crispy_corn_made_by_me.jpg"
},

{
  id: 49,
  name: "Veg Pakora",
  desc: "Mixed vegetable fritters deep-fried until crispy and served with chutney.",
  price: 160,
  originalPrice: 200,
  rating: 4.6,
  category: "starter",
  type: "veg",
  emoji: "🥕",
  popular: false,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Veg%20Mix%20Pakore.JPG"
},


// SANDHU
{
  id: 50,
  name: "Paneer Chilli",
  desc: "Paneer cubes tossed with onions, capsicum and spicy Indo-Chinese sauce.",
  price: 260,
  originalPrice: 320,
  rating: 4.9,
  category: "starter",
  type: "veg",
  emoji: "🌶️",
  popular: true,
  img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=250&fit=crop"
},
{
  id: 51,
  name: "Veg Momos",
  desc: "Steamed dumplings stuffed with fresh vegetables and served with spicy chutney.",
  price: 170,
  originalPrice: 220,
  rating: 4.8,
  category: "starter",
  type: "veg",
  emoji: "🥟",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Folk%20Cuisine%20of%20India%20-%20Steamed%20Momos.jpg"
},

{
  id: 52,
  name: "Cheese Balls",
  desc: "Crispy golden balls stuffed with gooey melted cheese.",
  price: 220,
  originalPrice: 270,
  rating: 4.8,
  category: "starter",
  type: "veg",
  emoji: "🧀",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cheese%20Balls%20-%201.jpg"
},

{
  id: 53,
  name: "French Fries",
  desc: "Classic crispy potato fries seasoned with herbs and peri-peri spices.",
  price: 140,
  originalPrice: 180,
  rating: 4.7,
  category: "starter",
  type: "veg",
  emoji: "🍟",
  popular: true,
  img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&h=250&fit=crop"
},
{
  id: 54,
  name: "Cheese Corn Balls",
  desc: "Crunchy cheese and sweet corn balls fried to golden perfection.",
  price: 210,
  originalPrice: 260,
  rating: 4.8,
  category: "starter",
  type: "veg",
  emoji: "🟡",
  popular: true,
  img: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=400&h=250&fit=crop"
},

{
  id: 55,
  name: "Aloo Tikki",
  desc: "Crispy potato patties seasoned with Indian spices and served with chutney.",
  price: 150,
  originalPrice: 190,
  rating: 4.6,
  category: "starter",
  type: "veg",
  emoji: "🥔",
  popular: true,
  img: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=400&h=250&fit=crop"
},


// SANDHU
{
  id: 56,
  name: "Veg Cutlet",
  desc: "Mixed vegetable patties coated with breadcrumbs and fried until crispy.",
  price: 170,
  originalPrice: 210,
  rating: 4.6,
  category: "starter",
  type: "veg",
  emoji: "🥙",
  popular: false,
  img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=250&fit=crop"
},

{
  id: 57,
  name: "Baby Corn Chilli",
  desc: "Crispy baby corn tossed with spicy Indo-Chinese sauce.",
  price: 220,
  originalPrice: 270,
  rating: 4.8,
  category: "starter",
  type: "veg",
  emoji: "🌽",
  popular: true,
  img: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400&h=250&fit=crop"
},

{
  id: 58,
  name: "Paneer Fingers",
  desc: "Crunchy breadcrumb-coated paneer fingers served with cheesy dip.",
  price: 240,
  originalPrice: 290,
  rating: 4.8,
  category: "starter",
  type: "veg",
  emoji: "🧀",
  popular: true,
  img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=250&fit=crop"
},

{
  id: 59,
  name: "Veg Nuggets",
  desc: "Golden crispy vegetable nuggets served with tomato ketchup.",
  price: 190,
  originalPrice: 240,
  rating: 4.6,
  category: "starter",
  type: "veg",
  emoji: "🥔",
  popular: false,
  img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&h=250&fit=crop"
},

{
  id: 60,
  name: "Stuffed Mushroom",
  desc: "Cheese-stuffed mushrooms baked and seasoned with herbs.",
  price: 260,
  originalPrice: 320,
  rating: 4.9,
  category: "starter",
  type: "veg",
  emoji: "🍄",
  popular: true,
  img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=250&fit=crop"
},

{
  id: 61,
  name: "Veg Seekh Kebab",
  desc: "Smoky grilled vegetable seekh kebabs served with mint chutney.",
  price: 230,
  originalPrice: 280,
  rating: 4.8,
  category: "starter",
  type: "veg",
  emoji: "🍢",
  popular: true,
  img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop"
},



// CHICKEN STARTERS AND SNACKS

// SANDHU
{
  id: 62,
  name: "Chicken Tikka",
  desc: "Juicy chicken marinated in yogurt and spices, grilled to smoky perfection.",
  price: 320,
  originalPrice: 380,
  rating: 4.9,
  category: "starter",
  type: "nonveg",
  emoji: "🍗",
  popular: true,
  img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&h=250&fit=crop"
},

{
  id: 63,
  name: "Chicken 65",
  desc: "Crispy South Indian style chicken tossed with curry leaves and spicy seasoning.",
  price: 290,
  originalPrice: 340,
  rating: 4.8,
  category: "starter",
  type: "nonveg",
  emoji: "🌶️",
  popular: true,
  img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=250&fit=crop"
},

{
  id: 64,
  name: "Chicken Lollipop",
  desc: "Crispy fried chicken wings served with spicy Schezwan dip.",
  price: 310,
  originalPrice: 360,
  rating: 4.9,
  category: "starter",
  type: "nonveg",
  emoji: "🍖",
  popular: true,
  img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=250&fit=crop"
},

{
  id: 65,
  name: "Tandoori Chicken",
  desc: "Classic tandoor-roasted chicken marinated in yogurt and aromatic Indian spices.",
  price: 360,
  originalPrice: 420,
  rating: 4.9,
  category: "starter",
  type: "nonveg",
  emoji: "🔥",
  popular: true,
  img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&h=250&fit=crop"
},

{
  id: 66,
  name: "Chicken Seekh Kebab",
  desc: "Minced chicken blended with spices and grilled on skewers until juicy.",
  price: 340,
  originalPrice: 390,
  rating: 4.8,
  category: "starter",
  type: "nonveg",
  emoji: "🍢",
  popular: true,
  img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=250&fit=crop"
},

{
  id: 67,
  name: "Chicken Wings",
  desc: "Crispy fried chicken wings coated in spicy barbecue seasoning.",
  price: 300,
  originalPrice: 350,
  rating: 4.7,
  category: "starter",
  type: "nonveg",
  emoji: "🍗",
  popular: true,
  img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=250&fit=crop"
},

{
  id: 68,
  name: "Fish Fingers",
  desc: "Golden crispy fish fillets coated in breadcrumbs and served with tartar sauce.",
  price: 340,
  originalPrice: 400,
  rating: 4.8,
  category: "starter",
  type: "nonveg",
  emoji: "🐟",
  popular: true,
  img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=250&fit=crop"
},

{
  id: 69,
  name: "Fish Tikka",
  desc: "Fresh fish cubes marinated with Indian spices and grilled in a tandoor.",
  price: 360,
  originalPrice: 420,
  rating: 4.8,
  category: "starter",
  type: "nonveg",
  emoji: "🐠",
  popular: true,
  img: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=250&fit=crop"
},

{
  id: 70,
  name: "Prawn Fry",
  desc: "Fresh prawns coated with spices and fried until perfectly crispy.",
  price: 390,
  originalPrice: 450,
  rating: 4.9,
  category: "starter",
  type: "nonveg",
  emoji: "🦐",
  popular: true,
  img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=250&fit=crop"
},

{
  id: 71,
  name: "Chicken Popcorn",
  desc: "Bite-sized crispy chicken pieces served with creamy garlic mayo dip.",
  price: 270,
  originalPrice: 320,
  rating: 4.7,
  category: "starter",
  type: "nonveg",
  emoji: "🍿",
  popular: true,
  img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=250&fit=crop"
},

// SANDHU
// RICE

{
  id: 72,
  name: "Veg Biryani",
  desc: "Fragrant basmati rice cooked with fresh vegetables, herbs and aromatic Indian spices.",
  price: 220,
  originalPrice: 270,
  rating: 4.7,
  category: "rice",
  type: "veg",
  emoji: "🍚",
  popular: true,
  img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=250&fit=crop"
},

{
  id: 73,
  name: "Chicken Biryani",
  desc: "Classic basmati rice layered with tender chicken, saffron and flavorful spices.",
  price: 299,
  originalPrice: 350,
  rating: 4.9,
  category: "rice",
  type: "nonveg",
  emoji: "🍗",
  popular: true,
  img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=250&fit=crop"
},

{
  id: 74,
  name: "Mutton Biryani",
  desc: "Premium basmati rice cooked with juicy mutton and authentic Hyderabadi spices.",
  price: 380,
  originalPrice: 450,
  rating: 4.9,
  category: "rice",
  type: "nonveg",
  emoji: "🥩",
  popular: true,
  img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=250&fit=crop"
},

{
  id: 75,
  name: "Fish Biryani",
  desc: "Aromatic basmati rice layered with marinated fish and flavorful Indian spices.",
  price: 340,
  originalPrice: 400,
  rating: 4.8,
  category: "rice",
  type: "nonveg",
  emoji: "🐟",
  popular: true,
  img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=250&fit=crop"
},
{
  id: 76,
  name: "Jeera Rice",
  desc: "Steamed basmati rice tempered with cumin seeds and fresh coriander.",
  price: 140,
  originalPrice: 180,
  rating: 4.6,
  category: "rice",
  type: "veg",
  emoji: "🌾",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Jeera_Rice.jpg"
},

{
  id: 77,
  name: "Steamed Rice",
  desc: "Perfectly steamed premium basmati rice served fresh and fluffy.",
  price: 120,
  originalPrice: 150,
  rating: 4.5,
  category: "rice",
  type: "veg",
  emoji: "🍚",
  popular: false,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Steamed_Basmati_Rice.jpg"
},

{
  id: 78,
  name: "Veg Fried Rice",
  desc: "Wok-tossed rice with fresh vegetables, soy sauce and oriental seasonings.",
  price: 210,
  originalPrice: 260,
  rating: 4.7,
  category: "rice",
  type: "veg",
  emoji: "🥕",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vegetable_fried_rice.jpg"
},



// SANDHU
{
  id: 79,
  name: "Chicken Fried Rice",
  desc: "Stir-fried rice with tender chicken, vegetables and flavorful sauces.",
  price: 250,
  originalPrice: 300,
  rating: 4.8,
  category: "rice",
  type: "nonveg",
  emoji: "🍗",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_fried_rice.jpg"
},

{
  id: 80,
  name: "Paneer Fried Rice",
  desc: "Delicious fried rice tossed with soft paneer cubes, vegetables and sauces.",
  price: 230,
  originalPrice: 280,
  rating: 4.7,
  category: "rice",
  type: "veg",
  emoji: "🧀",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer_fried_rice...jpg"
},
{
  id: 81,
  name: "Prawn Fried Rice",
  desc: "Flavorful wok-fried rice with juicy prawns, vegetables and oriental spices.",
  price: 330,
  originalPrice: 390,
  rating: 4.8,
  category: "rice",
  type: "nonveg",
  emoji: "🦐",
  popular: true,
  img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=250&fit=crop"
},

// BREADS AND ROTIS

{
  id: 82,
  name: "Tandoori Roti",
  desc: "Traditional whole wheat roti baked in a clay tandoor until soft and smoky.",
  price: 20,
  originalPrice: 25,
  rating: 4.7,
  category: "bread",
  type: "veg",
  emoji: "🫓",
  popular: true,
  img: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=400&h=250&fit=crop"
},
{
  id: 83,
  name: "Butter Tandoori Roti",
  desc: "Fresh tandoori roti topped with rich melted butter for extra flavor.",
  price: 30,
  originalPrice: 35,
  rating: 4.8,
  category: "bread",
  type: "veg",
  emoji: "🧈",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Butter%20coated%20naan.jpg"
},

{
  id: 84,
  name: "Plain Naan",
  desc: "Soft and fluffy naan baked in a traditional tandoor.",
  price: 40,
  originalPrice: 50,
  rating: 4.8,
  category: "bread",
  type: "veg",
  emoji: "🫓",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Naan.JPG"
},
{
  id: 85,
  name: "Butter Naan",
  desc: "Classic naan brushed generously with fresh butter.",
  price: 50,
  originalPrice: 60,
  rating: 4.9,
  category: "bread",
  type: "veg",
  emoji: "🧈",
  popular: true,
  img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=250&fit=crop"
},

{
  id: 86,
  name: "Garlic Naan",
  desc: "Soft naan topped with fresh garlic, coriander and butter.",
  price: 70,
  originalPrice: 80,
  rating: 4.9,
  category: "bread",
  type: "veg",
  emoji: "🧄",
  popular: true,
  img: "https://images.unsplash.com/photo-1617692855027-33b14f061079?w=400&h=250&fit=crop"
},
{
  id: 87,
  name: "Cheese Naan",
  desc: "Fluffy naan stuffed with melted cheese and baked until golden.",
  price: 110,
  originalPrice: 130,
  rating: 4.9,
  category: "bread",
  type: "veg",
  emoji: "🧀",
  popular: true,
  img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&h=250&fit=crop"
},
{
  id: 88,
  name: "Stuffed Kulcha",
  desc: "Soft kulcha stuffed with spiced potato filling and baked in a tandoor.",
  price: 80,
  originalPrice: 95,
  rating: 4.8,
  category: "bread",
  type: "veg",
  emoji: "🥔",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kulcha%2C_Indian_stuffed_bread.jpg"
},

{
  id: 89,
  name: "Paneer Kulcha",
  desc: "Kulcha stuffed with flavorful paneer filling and cooked in a tandoor.",
  price: 110,
  originalPrice: 130,
  rating: 4.9,
  category: "bread",
  type: "veg",
  emoji: "🧀",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer_Kulcha.jpg"
},

{
  // SANHDU
  id: 90,
  name: "Lachha Paratha",
  desc: "Layered whole wheat paratha cooked until crispy and flaky.",
  price: 70,
  originalPrice: 85,
  rating: 4.8,
  category: "bread",
  type: "veg",
  emoji: "🥞",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lachha-paratha.jpg"
},

{
  id: 91,
  name: "Butter Lachha Paratha",
  desc: "Flaky lachha paratha topped with rich butter for extra taste.",
  price: 85,
  originalPrice: 100,
  rating: 4.9,
  category: "bread",
  type: "veg",
  emoji: "🧈",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lachha_Paratha_with_Daal_Tadka_and_Kadhai_Paneer.jpg"
},

{
  id: 92,
  name: "Missi Roti",
  desc: "Traditional Punjabi roti made with gram flour, wheat flour and spices.",
  price: 40,
  originalPrice: 50,
  rating: 4.7,
  category: "bread",
  type: "veg",
  emoji: "🌾",
  popular: false,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Punjabi_Missi_Roti.JPG"
},
{
  id: 93,
  name: "Roomali Roti",
  desc: "Thin, soft and hand-tossed Indian bread served fresh from the tawa.",
  price: 35,
  originalPrice: 45,
  rating: 4.7,
  category: "bread",
  type: "veg",
  emoji: "🥙",
  popular: false,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Roomali_Roti.JPG"
},
{
  id: 94,
  name: "Plain Paratha",
  desc: "Golden crispy layered paratha cooked with light butter.",
  price: 50,
  originalPrice: 60,
  rating: 4.7,
  category: "bread",
  type: "veg",
  emoji: "🥞",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paratha_is_a_dough_fried_flatbread_native_to_India_and_Pakistan.jpg"
},

{
  id: 95,
  name: "Butter Paratha",
  desc: "Freshly prepared paratha topped generously with creamy butter.",
  price: 60,
  originalPrice: 75,
  rating: 4.8,
  category: "bread",
  type: "veg",
  emoji: "🧈",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paratha_is_a_dough_fried_flatbread_of_India_and_Pakistan.jpg"
},

{
  id: 96,
  name: "Aloo Paratha",
  desc: "Soft whole wheat paratha stuffed with spicy mashed potato filling.",
  price: 90,
  originalPrice: 110,
  rating: 4.9,
  category: "bread",
  type: "veg",
  emoji: "🥔",
  popular: true,
  img: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400&h=250&fit=crop"
},


// DRINKS 

{
  id: 97,
  name: "Masala Chai",
  desc: "Freshly brewed Indian tea infused with aromatic spices and milk.",
  price: 40,
  originalPrice: 50,
  rating: 4.8,
  category: "drinks",
  type: "veg",
  emoji: "☕",
  popular: true,
  img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=250&fit=crop"
},

{
  id: 98,
  name: "Cold Coffee",
  desc: "Creamy chilled coffee blended with milk, ice cream and chocolate syrup.",
  price: 140,
  originalPrice: 170,
  rating: 4.9,
  category: "drinks",
  type: "veg",
  emoji: "🥤",
  popular: true,
  img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=250&fit=crop"
},

{
  id: 99,
  name: "Mango Shake",
  desc: "Refreshing mango milkshake prepared with fresh mangoes and chilled milk.",
  price: 120,
  originalPrice: 150,
  rating: 4.8,
  category: "drinks",
  type: "veg",
  emoji: "🥭",
  popular: true,
  img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=250&fit=crop"
},

{
  id: 100,
  name: "Chocolate Shake",
  desc: "Rich chocolate milkshake blended with premium cocoa and ice cream.",
  price: 150,
  originalPrice: 180,
  rating: 4.9,
  category: "drinks",
  type: "veg",
  emoji: "🍫",
  popular: true,
  img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=250&fit=crop"
},
{
  id: 101,
  name: "Oreo Shake",
  desc: "Creamy Oreo cookie shake topped with whipped cream and chocolate drizzle.",
  price: 170,
  originalPrice: 200,
  rating: 4.9,
  category: "drinks",
  type: "veg",
  emoji: "🍪",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Oreo_Milkshake.JPG"
},

{
  id: 102,
  name: "Vanilla Shake",
  desc: "Smooth vanilla milkshake made with premium vanilla ice cream.",
  price: 140,
  originalPrice: 170,
  rating: 4.7,
  category: "drinks",
  type: "veg",
  emoji: "🥛",
  popular: false,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vanilla_milkshake.jpg"
},

{
  id: 103,
  name: "Strawberry Shake",
  desc: "Refreshing strawberry milkshake blended with fresh strawberries and milk.",
  price: 150,
  originalPrice: 180,
  rating: 4.8,
  category: "drinks",
  type: "veg",
  emoji: "🍓",
  popular: true,
  img: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=250&fit=crop"
},

{
  id: 104,
  name: "Fresh Lime Soda",
  desc: "Chilled lemon soda with a refreshing blend of sweet and salty flavors.",
  price: 80,
  originalPrice: 100,
  rating: 4.6,
  category: "drinks",
  type: "veg",
  emoji: "🍋",
  popular: true,
  img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=250&fit=crop"
},
{
  id: 105,
  name: "Sweet Lassi",
  desc: "Traditional Punjabi lassi prepared with thick curd and sugar.",
  price: 90,
  originalPrice: 110,
  rating: 4.8,
  category: "drinks",
  type: "veg",
  emoji: "🥛",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sweet_Lassi.JPG"
},

{
  id: 106,
  name: "Salted Lassi",
  desc: "Refreshing salted yogurt drink flavored with roasted cumin and mint.",
  price: 90,
  originalPrice: 110,
  rating: 4.7,
  category: "drinks",
  type: "veg",
  emoji: "🥛",
  popular: false,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Salt_lassi.jpg"
},
{
  id: 107,
  name: "Virgin Mojito",
  desc: "Refreshing mint cooler made with lemon, soda and crushed ice.",
  price: 130,
  originalPrice: 160,
  rating: 4.8,
  category: "drinks",
  type: "veg",
  emoji: "🍹",
  popular: true,
  img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=250&fit=crop"
},

{
  id: 108,
  name: "Watermelon Juice",
  desc: "Fresh watermelon juice served chilled for a refreshing experience.",
  price: 110,
  originalPrice: 140,
  rating: 4.7,
  category: "drinks",
  type: "veg",
  emoji: "🍉",
  popular: true,
  img: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=250&fit=crop"
},
{
  id: 109,
  name: "Orange Juice",
  desc: "Freshly squeezed orange juice packed with natural citrus flavor.",
  price: 120,
  originalPrice: 150,
  rating: 4.7,
  category: "drinks",
  type: "veg",
  emoji: "🍊",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Orange_juice_1.jpg"
},
{
  id: 110,
  name: "Mineral Water",
  desc: "Premium packaged drinking water served chilled.",
  price: 20,
  originalPrice: 25,
  rating: 4.9,
  category: "drinks",
  type: "veg",
  emoji: "💧",
  popular: true,
  img: "https://images.unsplash.com/photo-1564419320408-38e24e038739?w=400&h=250&fit=crop"
},

{
  id: 111,
  name: "Soft Drink",
  desc: "Choice of Coca-Cola, Pepsi, Sprite, Fanta or Thums Up served chilled.",
  price: 60,
  originalPrice: 70,
  rating: 4.6,
  category: "drinks",
  type: "veg",
  emoji: "🥤",
  popular: true,
  img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=250&fit=crop"
},


// SWEETS AND DESSERTS
{
  id: 112,
  name: "Gulab Jamun",
  desc: "Soft milk dumplings soaked in warm sugar syrup with a hint of cardamom.",
  price: 90,
  originalPrice: 120,
  rating: 4.9,
  category: "sweets",
  type: "veg",
  emoji: "🍮",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Gulab_Jamun.jpg"
},

{
  id: 113,
  name: "Rasmalai",
  desc: "Soft cottage cheese patties soaked in chilled saffron-flavored sweet milk.",
  price: 120,
  originalPrice: 150,
  rating: 4.9,
  category: "sweets",
  type: "veg",
  emoji: "🥛",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Rasmalai.jpg"
},

{
  id: 114,
  name: "Rasgulla",
  desc: "Soft and spongy cottage cheese balls dipped in light sugar syrup.",
  price: 100,
  originalPrice: 130,
  rating: 4.8,
  category: "sweets",
  type: "veg",
  emoji: "🤍",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Rasgulla.png"
},

{
  id: 115,
  name: "Jalebi",
  desc: "Freshly fried crispy jalebis soaked in fragrant sugar syrup.",
  price: 80,
  originalPrice: 100,
  rating: 4.8,
  category: "sweets",
  type: "veg",
  emoji: "🧡",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Jalebi.jpg"
},
{
  id: 116,
  name: "Kaju Katli",
  desc: "Premium cashew fudge with a rich, smooth texture and silver leaf garnish.",
  price: 180,
  originalPrice: 220,
  rating: 4.9,
  category: "sweets",
  type: "veg",
  emoji: "💎",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kaju_katli.JPG"
},

{
  id: 117,
  name: "Gajar Ka Halwa",
  desc: "Traditional carrot halwa slow-cooked with milk, ghee and dry fruits.",
  price: 130,
  originalPrice: 160,
  rating: 4.8,
  category: "sweets",
  type: "veg",
  emoji: "🥕",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Gajarhalwa.jpg"
},

{
  id: 118,
  name: "Moong Dal Halwa",
  desc: "Rich and aromatic moong dal halwa prepared with pure ghee.",
  price: 150,
  originalPrice: 180,
  rating: 4.9,
  category: "sweets",
  type: "veg",
  emoji: "🥣",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Moong_Dal_Halwa.JPG"
},

{
  id: 119,
  name: "Kheer",
  desc: "Creamy rice pudding flavored with cardamom, saffron and dry fruits.",
  price: 100,
  originalPrice: 130,
  rating: 4.7,
  category: "sweets",
  type: "veg",
  emoji: "🍚",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kheer.jpg"
},
{
  id: 120,
  name: "Rabri",
  desc: "Thick sweetened milk dessert topped with pistachios and almonds.",
  price: 140,
  originalPrice: 170,
  rating: 4.8,
  category: "sweets",
  type: "veg",
  emoji: "🥛",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Homemade_Rabri.jpg"
},

{
  id: 121,
  name: "Kulfi",
  desc: "Traditional Indian frozen dessert flavored with cardamom and nuts.",
  price: 80,
  originalPrice: 100,
  rating: 4.8,
  category: "sweets",
  type: "veg",
  emoji: "🍦",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Frozen_dairy_dessert_of_India_-_Kulfi.jpg"
},

{
  id: 122,
  name: "Malpua",
  desc: "Soft Indian pancakes dipped in saffron sugar syrup.",
  price: 120,
  originalPrice: 150,
  rating: 4.7,
  category: "sweets",
  type: "veg",
  emoji: "🥞",
  popular: false,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Malpua.jpg"
},

{
  id: 123,
  name: "Besan Ladoo",
  desc: "Traditional gram flour ladoos prepared with pure ghee and dry fruits.",
  price: 90,
  originalPrice: 120,
  rating: 4.7,
  category: "sweets",
  type: "veg",
  emoji: "🟡",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Besan_ladoo.jpg"
},

{
  id: 124,
  name: "Motichoor Ladoo",
  desc: "Soft and delicious motichoor ladoos made with fine boondi pearls.",
  price: 100,
  originalPrice: 130,
  rating: 4.8,
  category: "sweets",
  type: "veg",
  emoji: "🟠",
  popular: true,
  img: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Motichoor_ladoo.JPG"
},



{
  id: 125,
  name: "Chocolate Brownie",
  desc: "Warm chocolate brownie served with rich cocoa flavor.",
  price: 160,
  originalPrice: 190,
  rating: 4.9,
  category: "sweets",
  type: "veg",
  emoji: "🍫",
  popular: true,
  img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=250&fit=crop"
},

{
  id: 126,
  name: "Ice Cream Sundae",
  desc: "Vanilla ice cream topped with chocolate syrup, nuts and cherries.",
  price: 170,
  originalPrice: 210,
  rating: 4.8,
  category: "sweets",
  type: "veg",
  emoji: "🍨",
  popular: true,
  img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=250&fit=crop"
},

// SANDHU

{
  id: 127,
  name: "Falooda",
  desc: "Refreshing dessert made with rose syrup, vermicelli, basil seeds and ice cream.",
  price: 180,
  originalPrice: 220,
  rating: 4.9,
  category: "sweets",
  type: "veg",
  emoji: "🥤",
  popular: true,
  img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=250&fit=crop"
},

{
  id: 128,
  name: "Fruit Custard",
  desc: "Creamy vanilla custard mixed with seasonal fresh fruits.",
  price: 120,
  originalPrice: 150,
  rating: 4.7,
  category: "sweets",
  type: "veg",
  emoji: "🍓",
  popular: true,
  img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=250&fit=crop"
},

{
  id: 129,
  name: "Shahi Tukda",
  desc: "Royal Mughlai dessert made with fried bread, rabri and dry fruits.",
  price: 170,
  originalPrice: 210,
  rating: 4.8,
  category: "sweets",
  type: "veg",
  emoji: "🍞",
  popular: true,
  img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=250&fit=crop"
},

{
  id: 130,
  name: "Milk Cake",
  desc: "Traditional Indian milk fudge with a rich caramelized flavor.",
  price: 130,
  originalPrice: 160,
  rating: 4.7,
  category: "sweets",
  type: "veg",
  emoji: "🍰",
  popular: false,
  img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=250&fit=crop"
},

{
  id: 131,
  name: "Hot Gulab Jamun with Ice Cream",
  desc: "Warm gulab jamun served with creamy vanilla ice cream.",
  price: 180,
  originalPrice: 220,
  rating: 5.0,
  category: "sweets",
  type: "veg",
  emoji: "🍨",
  popular: true,
  img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=250&fit=crop"
},



// snacks
// SANDHU

{
  id: 132,
  name: "Samosa",
  desc: "Golden crispy pastry stuffed with spicy potato filling and served with chutneys.",
  price: 30,
  originalPrice: 40,
  rating: 4.8,
  category: "snacks",
  type: "veg",
  emoji: "🥟",
  popular: true,
  img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=250&fit=crop"
},

{
  id: 133,
  name: "Veg Puff",
  desc: "Flaky puff pastry filled with spicy mixed vegetables and baked until golden.",
  price: 45,
  originalPrice: 55,
  rating: 4.7,
  category: "snacks",
  type: "veg",
  emoji: "🥐",
  popular: true,
  img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=250&fit=crop"
},

{
  id: 134,
  name: "Bread Pakora",
  desc: "Bread slices stuffed with spiced potato, coated in gram flour and deep-fried.",
  price: 50,
  originalPrice: 60,
  rating: 4.7,
  category: "snacks",
  type: "veg",
  emoji: "🍞",
  popular: true,
  img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop"
},

{
  id: 135,
  name: "Kachori",
  desc: "Crispy deep-fried kachori stuffed with flavorful lentil and spice filling.",
  price: 35,
  originalPrice: 45,
  rating: 4.8,
  category: "snacks",
  type: "veg",
  emoji: "🥮",
  popular: true,
  img: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400&h=250&fit=crop"
},

{
  id: 136,
  name: "Aloo Samosa Chaat",
  desc: "Crispy samosa topped with yogurt, chutneys, onions and fresh coriander.",
  price: 90,
  originalPrice: 110,
  rating: 4.9,
  category: "snacks",
  type: "veg",
  emoji: "🥗",
  popular: true,
  img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop"
},

{
  id: 137,
  name: "Veg Sandwich",
  desc: "Fresh vegetable sandwich layered with butter, cheese and mint chutney.",
  price: 120,
  originalPrice: 150,
  rating: 4.7,
  category: "snacks",
  type: "veg",
  emoji: "🥪",
  popular: true,
  img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=250&fit=crop"
},



// SANDHU
{
  id: 138,
  name: "Cheese Sandwich",
  desc: "Grilled sandwich loaded with melted cheese and fresh vegetables.",
  price: 140,
  originalPrice: 170,
  rating: 4.8,
  category: "snacks",
  type: "veg",
  emoji: "🧀",
  popular: true,
  img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=250&fit=crop"
},

{
  id: 139,
  name: "Pav Bhaji",
  desc: "Mumbai-style spicy vegetable mash served with buttery toasted pav.",
  price: 180,
  originalPrice: 220,
  rating: 4.9,
  category: "snacks",
  type: "veg",
  emoji: "🥖",
  popular: true,
  img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=250&fit=crop"
},

{
  id: 140,
  name: "Vada Pav",
  desc: "Spicy potato fritter served inside a soft bun with garlic chutney.",
  price: 60,
  originalPrice: 75,
  rating: 4.8,
  category: "snacks",
  type: "veg",
  emoji: "🍔",
  popular: true,
  img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=250&fit=crop"
},

{
  id: 141,
  name: "Dabeli",
  desc: "Gujarati-style bun stuffed with spicy potato filling, peanuts and pomegranate.",
  price: 70,
  originalPrice: 85,
  rating: 4.7,
  category: "snacks",
  type: "veg",
  emoji: "🌮",
  popular: true,
  img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=250&fit=crop"
},

{
  id: 142,
  name: "Bhel Puri",
  desc: "Crunchy puffed rice mixed with chutneys, vegetables and fresh herbs.",
  price: 80,
  originalPrice: 100,
  rating: 4.7,
  category: "snacks",
  type: "veg",
  emoji: "🥣",
  popular: true,
  img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop"
},

{
  id: 143,
  name: "Sev Puri",
  desc: "Crispy puris topped with potatoes, chutneys, sev and onions.",
  price: 90,
  originalPrice: 110,
  rating: 4.8,
  category: "snacks",
  type: "veg",
  emoji: "🥙",
  popular: true,
  img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop"
},

{
  id: 144,
  name: "French Fries",
  desc: "Golden crispy potato fries seasoned with herbs and peri-peri spices.",
  price: 120,
  originalPrice: 150,
  rating: 4.8,
  category: "snacks",
  type: "veg",
  emoji: "🍟",
  popular: true,
  img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&h=250&fit=crop"
},
// SANDHU
{
  id: 145,
  name: "Cheese Garlic Bread",
  desc: "Freshly baked garlic bread topped with melted mozzarella cheese.",
  price: 160,
  originalPrice: 190,
  rating: 4.9,
  category: "snacks",
  type: "veg",
  emoji: "🧄",
  popular: true,
  img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=250&fit=crop"
},

{
  id: 146,
  name: "Nachos with Cheese Dip",
  desc: "Crunchy tortilla chips served with creamy cheese dip and salsa.",
  price: 190,
  originalPrice: 230,
  rating: 4.8,
  category: "snacks",
  type: "veg",
  emoji: "🧀",
  popular: true,
  img: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&h=250&fit=crop"
}



// ALL ITEMS ARE 146 IN MY MENU ALRIGHTTT SANDHU JIII

];





// ---- Cart State ----
let cart = JSON.parse(localStorage.getItem('apna_dhabha_cart')) || [];

// ---- Save Cart ----
function saveCart() {
  localStorage.setItem('apna_dhabha_cart', JSON.stringify(cart));
  updateCartBadge();
}

// ---- Update Cart Badge ----
function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (!badge) return;
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = total;
  badge.style.display = total > 0 ? 'flex' : 'none';
}
// SANDHU
// ---- Toast Notification ----
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success' ? '✅' : '❌';
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

// ---- Get Cart Item ----
function getCartItem(id) {
  return cart.find(i => i.id === id);
}

// ---- Add / Update Cart ----
function addToCart(id) {
  const food = foodData.find(f => f.id === id);
  if (!food) return;
  const existing = getCartItem(id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...food, qty: 1 });
    showToast(`${food.name} added to cart! 🛒`);
  }
  saveCart();
  refreshCardControls(id);
}
// SANDHU
function removeFromCartOne(id) {
  const existing = getCartItem(id);
  if (!existing) return;
  if (existing.qty > 1) {
    existing.qty--;
  } else {
    cart = cart.filter(i => i.id !== id);
  }
  saveCart();
  refreshCardControls(id);
}

// ---- Refresh card button state ----
function refreshCardControls(id) {
  const card = document.querySelector(`.food-card[data-id="${id}"]`);
  if (!card) return;
  const cartItem = getCartItem(id);
  const actionArea = card.querySelector('.card-action');
  if (!actionArea) return;

  if (cartItem) {
    actionArea.innerHTML = `
      <div class="qty-control">
        <button class="qty-btn" onclick="removeFromCartOne(${id})">−</button>
        <span class="qty-num">${cartItem.qty}</span>
        <button class="qty-btn" onclick="addToCart(${id})">+</button>
      </div>`;
  } else {
    actionArea.innerHTML = `
      <button class="add-to-cart-btn" onclick="addToCart(${id})">
        <span>🛒</span> Add to Cart
      </button>`;
  }
}
// SANDHU

// ---- Render Food Cards ----
function renderFoodCards(data) {
  const grid = document.getElementById('food-grid');
  if (!grid) return;

  if (data.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <span class="emoji">🔍</span>
        <h3>No items found</h3>
        <p>Try adjusting your filters or search query</p>
      </div>`;
    return;
  }

  grid.innerHTML = data.map(food => {
    const cartItem = getCartItem(food.id);
    const actionHTML = cartItem
      ? `<div class="qty-control">
           <button class="qty-btn" onclick="removeFromCartOne(${food.id})">−</button>
           <span class="qty-num">${cartItem.qty}</span>
           <button class="qty-btn" onclick="addToCart(${food.id})">+</button>
         </div>`
      : `<button class="add-to-cart-btn" onclick="addToCart(${food.id})">
           <span>🛒</span> Add to Cart
         </button>`;

    return `
    <div class="food-card" data-id="${food.id}" data-type="${food.type}" data-category="${food.category}" data-price="${food.price}">
      <div class="food-card-img-wrap">
        <img class="food-card-img" src="${food.img}" alt="${food.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x200/f4a261/ffffff?text=${encodeURIComponent(food.emoji)}'">
        <span class="food-tag ${food.type === 'veg' ? 'tag-veg' : 'tag-nonveg'}">
          ${food.type === 'veg' ? '🟢 Veg' : '🔴 Non-Veg'}
        </span>
        ${food.popular ? '<span class="food-badge-popular">⭐ Popular</span>' : ''}
      </div>
      <div class="food-card-body">
        <div class="food-card-name">${food.name}</div>
        <div class="food-card-desc">${food.desc}</div>
        <div class="food-card-footer">
          <div class="food-card-price">
            ₹${food.price}
            ${food.originalPrice ? `<span>₹${food.originalPrice}</span>` : ''}
          </div>
          <div class="food-card-rating">⭐ ${food.rating}</div>
        </div>
        <div class="card-action">${actionHTML}</div>
      </div>
    </div>`;
  }).join('');
}
// SANDHU

// ---- Filter & Search Logic ----
let activeFilter = 'all';
let activeCategory = 'all';
let searchQuery = '';
let sortOrder = 'default';

function applyFilters() {
  let filtered = [...foodData];

  // Search
  if (searchQuery) {
    filtered = filtered.filter(f =>
      f.name.toLowerCase().includes(searchQuery) ||
      f.desc.toLowerCase().includes(searchQuery) ||
      f.category.toLowerCase().includes(searchQuery)
    );
  }
  // Type filter
  if (activeFilter === 'veg') filtered = filtered.filter(f => f.type === 'veg');
  if (activeFilter === 'nonveg') filtered = filtered.filter(f => f.type === 'nonveg');

  // Category filter
  if (activeCategory !== 'all') filtered = filtered.filter(f => f.category === activeCategory);

  // Sort
  if (sortOrder === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sortOrder === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sortOrder === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  renderFoodCards(filtered);
}

// ---- Init Home Page ----
function initHomePage() {
  renderFoodCards(foodData);
// SANDHU
  // Search
  const searchInput = document.getElementById('search-input');
  const searchBtn   = document.getElementById('search-btn');
  const heroSearch  = document.getElementById('hero-search');

  function doSearch(val) {
    searchQuery = val.toLowerCase().trim();
    // Scroll to menu section
    document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
    applyFilters();
    // update hero search box too
    if (heroSearch) heroSearch.value = val;
    if (searchInput) searchInput.value = val;
  }
// SANDHU
  if (searchInput) {
    searchInput.addEventListener('input', e => { searchQuery = e.target.value.toLowerCase(); applyFilters(); });
  }
  if (searchBtn) {
    searchBtn.addEventListener('click', () => doSearch(heroSearch?.value || ''));
  }
  if (heroSearch) {
    heroSearch.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(heroSearch.value); });
  }

  // Filter buttons
  document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  // Category pills
  document.querySelectorAll('.category-pill[data-cat]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.category-pill[data-cat]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.dataset.cat;
      applyFilters();
    });
  });


  // SANDHU

  // Sort select
  const sortSel = document.getElementById('sort-select');
  if (sortSel) {
    sortSel.addEventListener('change', e => { sortOrder = e.target.value; applyFilters(); });
  }
}

// ---- CART PAGE ----
function renderCartPage() {
  const container = document.getElementById('cart-items-container');
  const emptyCart = document.getElementById('empty-cart');
  const cartLayout = document.getElementById('cart-layout');
  if (!container) return;

  if (cart.length === 0) {
    if (emptyCart) emptyCart.classList.remove('hidden');
    if (cartLayout) cartLayout.classList.add('hidden');
    return;
  }

  if (emptyCart) emptyCart.classList.add('hidden');
  if (cartLayout) cartLayout.classList.remove('hidden');

  container.innerHTML = cart.map(item => `
    <div class="cart-item" id="cart-item-${item.id}">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80/f4a261/ffffff?text=${encodeURIComponent(item.emoji)}'">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-tag">${item.type === 'veg' ? '🟢 Veg' : '🔴 Non-Veg'}</div>
        <div class="cart-item-price">₹${item.price} each</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="cartQtyChange(${item.id}, -1)">−</button>
          <span class="qty-num" id="qty-${item.id}">${item.qty}</span>
          <button class="qty-btn" onclick="cartQtyChange(${item.id}, 1)">+</button>
        </div>
      </div>
      <div class="cart-item-total" id="total-${item.id}">₹${item.price * item.qty}</div>
      <button class="remove-btn" onclick="removeCartItem(${item.id})" title="Remove">🗑️</button>
    </div>`).join('');

  updateSummary();
}


// SANDHU
function cartQtyChange(id, delta) {
  const item = getCartItem(id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCartPage();
    showToast('Item removed from cart', 'error');
    return;
  }




  saveCart();
  const qtyEl    = document.getElementById(`qty-${id}`);
  const totalEl  = document.getElementById(`total-${id}`);
  if (qtyEl)   qtyEl.textContent   = item.qty;
  if (totalEl) totalEl.textContent = `₹${item.price * item.qty}`;
  updateSummary();
}

function removeCartItem(id) {
  const item = getCartItem(id);
  const name = item?.name || 'Item';
  cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCartPage();
  showToast(`${name} removed from cart`, 'error');
}
// SANDHU
function updateSummary() {
  const subtotal  = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery  = subtotal > 0 ? (subtotal >= 300 ? 0 : 40) : 0;
  const tax       = Math.round(subtotal * 0.05);
  const total     = subtotal + delivery + tax;

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('summary-subtotal', `₹${subtotal}`);
  set('summary-delivery', delivery === 0 ? 'FREE' : `₹${delivery}`);
  set('summary-tax', `₹${tax}`);
  set('summary-total', `₹${total}`);

  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;

  // Save totals for checkout page
  localStorage.setItem('apna_dhabha_order_total', JSON.stringify({ subtotal, delivery, tax, total }));
}

// ---- CHECKOUT PAGE ----
function initCheckoutPage() {
  const totals = JSON.parse(localStorage.getItem('apna_dhabha_order_total')) || {};
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val || '—'; };
  set('chk-subtotal', totals.subtotal ? `₹${totals.subtotal}` : '');
  set('chk-delivery', totals.delivery === 0 ? 'FREE' : `₹${totals.delivery || 40}`);
  set('chk-tax', totals.tax ? `₹${totals.tax}` : '');
  set('chk-total', totals.total ? `₹${totals.total}` : '');

  // Render mini cart summary
  const miniCart = document.getElementById('checkout-items-list');
  if (miniCart) {
    miniCart.innerHTML = cart.map(item => `
      <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px dashed var(--border)">
        <span style="font-size:1.4rem">${item.emoji}</span>
        <span style="flex:1;font-size:0.9rem;font-weight:500">${item.name} x${item.qty}</span>
        <span style="font-weight:700;color:var(--primary)">₹${item.price * item.qty}</span>
      </div>`).join('');
  }

  // Payment option selection
  document.querySelectorAll('.payment-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      opt.querySelector('input[type="radio"]').checked = true;
    });
  });

  // Place order form
  const form = document.getElementById('checkout-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      placeOrder();
    });
  }
  // SANDHU
}

function placeOrder() {
  const orderId = 'AD' + Date.now().toString().slice(-8).toUpperCase();
  document.getElementById('order-id-display').textContent = `Order ID: ${orderId}`;
  document.getElementById('success-modal').classList.remove('hidden');
  // Clear cart
  cart = [];
  saveCart();
}

// ---- Dark Mode ----
function initDarkMode() {
  const toggle = document.getElementById('dark-toggle');
  const isDark = localStorage.getItem('apna_dhabha_dark') === 'true';
  if (isDark) document.body.classList.add('dark-mode');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('apna_dhabha_dark', document.body.classList.contains('dark-mode'));
    });
  }
}

// ---- Hamburger Menu ----
function initHamburger() {
  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('navbar-links');
  if (!ham || !nav) return;
  ham.addEventListener('click', () => {
    nav.classList.toggle('open');
    ham.classList.toggle('open');
  });
  // Close on outside click
  document.addEventListener('click', e => {
    if (!ham.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      ham.classList.remove('open');
    }
  });
}
// SANDHU
// ---- Loading Screen ----
function initLoader() {
  const loader = document.getElementById('loading-screen');
  if (!loader) return;
  setTimeout(() => loader.classList.add('hidden'), 1400);
}

// ---- Active Nav Link ----
function initActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ---- Page Initialization ----
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initDarkMode();
  initHamburger();
  initActiveNav();
  updateCartBadge();

  const page = window.location.pathname.split('/').pop() || 'index.html';

  if (page === 'index.html' || page === '' || page === 'menu.html') {
    initHomePage();
  }
  if (page === 'cart.html') {
    renderCartPage();
  }
  if (page === 'checkout.html') {
    initCheckoutPage();
  }
});



// SANDHU
// ALL LOVE WITH ANMOL SANDHU