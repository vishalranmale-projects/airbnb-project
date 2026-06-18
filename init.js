const mongoose = require("mongoose");
const listings = require("./models/Listing.js");
mongoose.connect("mongodb://127.0.0.1:27017/wonderlust");
listings.insertMany([
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Luxury Beach Villa",
    description: "Beautiful villa with ocean views and private beach access.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    price: 12000,
    location: "Goa",
    country: "India"
},
{
    title: "Mountain Cabin Retreat",
    description: "Cozy cabin surrounded by mountains and forests.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    price: 7000,
    location: "Manali",
    country: "India"
},
{
    title: "Modern City Apartment",
    description: "Stylish apartment in the heart of the city.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    price: 5500,
    location: "Mumbai",
    country: "India"
},
{
    title: "Desert Camp Experience",
    description: "Experience luxury camping under the stars.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    price: 4500,
    location: "Jaisalmer",
    country: "India"
},
{
    title: "Lake View Cottage",
    description: "Relax by the lake in this charming cottage.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    price: 8000,
    location: "Nainital",
    country: "India"
},
{
    title: "Heritage Palace Stay",
    description: "Stay in a historic palace with royal interiors.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 15000,
    location: "Udaipur",
    country: "India"
},
{
    title: "Jungle Tree House",
    description: "Unique tree house surrounded by wildlife.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    price: 6500,
    location: "Wayanad",
    country: "India"
},
{
    title: "Snow View Chalet",
    description: "Enjoy breathtaking snow-covered mountain views.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 9000,
    location: "Shimla",
    country: "India"
},
{
    title: "Island Resort Cottage",
    description: "Private cottage with access to crystal-clear waters.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    price: 14000,
    location: "Andaman",
    country: "India"
},
{
    title: "Tea Garden Bungalow",
    description: "Peaceful bungalow overlooking tea plantations.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    price: 6000,
    location: "Munnar",
    country: "India"
},
 {
    "title": "Cozy Cottage in Hawaii",
    "description": "Experience the local culture of Hawaii while staying in this thoughtfully decorated property.",
    "image": "https://picsum.photos/seed/listing1/800/500",
    "price": 8000,
    "location": "Hawaii",
    "country": "United States"
  },
  {
    "title": "Beachfront Villa in Manali",
    "description": "Soak in the serenity of Manali while enjoying thoughtful touches throughout the property.",
    "image": "https://picsum.photos/seed/listing2/800/500",
    "price": 2500,
    "location": "Manali",
    "country": "India"
  },
  {
    "title": "Modern Loft in Male",
    "description": "Tastefully furnished and centrally located in Male, this stay is great for leisure or work trips.",
    "image": "https://picsum.photos/seed/listing3/800/500",
    "price": 2200,
    "location": "Male",
    "country": "Maldives"
  },
  {
    "title": "Rustic Cabin in Santorini",
    "description": "Nestled in the heart of Santorini, this stay combines comfort, style, and an unforgettable view.",
    "image": "https://picsum.photos/seed/listing4/800/500",
    "price": 6000,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Luxury Penthouse in Tuscany",
    "description": "Wake up to breathtaking views of Tuscany and enjoy modern comforts in this beautifully designed space.",
    "image": "https://picsum.photos/seed/listing5/800/500",
    "price": 13500,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Charming Bungalow in Munnar",
    "description": "Ideal for families and friends, this Munnar stay offers spacious rooms and a warm, welcoming atmosphere.",
    "image": "https://picsum.photos/seed/listing6/800/500",
    "price": 18000,
    "location": "Munnar",
    "country": "India"
  },
  {
    "title": "Lakeside Retreat in Paris",
    "description": "Discover the beauty of Paris from this well-located property with all essential amenities.",
    "image": "https://picsum.photos/seed/listing7/800/500",
    "price": 9500,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Mountain Chalet in Bangkok",
    "description": "Tastefully furnished and centrally located in Bangkok, this stay is great for leisure or work trips.",
    "image": "https://picsum.photos/seed/listing8/800/500",
    "price": 4500,
    "location": "Bangkok",
    "country": "Thailand"
  },
  {
    "title": "Urban Studio Apartment in Dubrovnik",
    "description": "Surrounded by greenery in Dubrovnik, this is the perfect spot for a digital detox weekend.",
    "image": "https://picsum.photos/seed/listing9/800/500",
    "price": 11000,
    "location": "Dubrovnik",
    "country": "Croatia"
  },
  {
    "title": "Traditional Farmhouse in Sydney",
    "description": "Nestled in the heart of Sydney, this stay combines comfort, style, and an unforgettable view.",
    "image": "https://picsum.photos/seed/listing10/800/500",
    "price": 9500,
    "location": "Sydney",
    "country": "Australia"
  },
  {
    "title": "Treehouse Getaway in New York",
    "description": "Great for groups visiting New York, this spacious property offers plenty of room to relax and reconnect.",
    "image": "https://picsum.photos/seed/listing11/800/500",
    "price": 1800,
    "location": "New York",
    "country": "United States"
  },
  {
    "title": "Houseboat Stay in Nainital",
    "description": "Ideal for families and friends, this Nainital stay offers spacious rooms and a warm, welcoming atmosphere.",
    "image": "https://picsum.photos/seed/listing12/800/500",
    "price": 3500,
    "location": "Nainital",
    "country": "India"
  },
  {
    "title": "Desert Camp Tent in Tokyo",
    "description": "Nestled in the heart of Tokyo, this stay combines comfort, style, and an unforgettable view.",
    "image": "https://picsum.photos/seed/listing13/800/500",
    "price": 15000,
    "location": "Tokyo",
    "country": "Japan"
  },
  {
    "title": "Heritage Haveli in Lake Tahoe",
    "description": "Ideal for families and friends, this Lake Tahoe stay offers spacious rooms and a warm, welcoming atmosphere.",
    "image": "https://picsum.photos/seed/listing14/800/500",
    "price": 1500,
    "location": "Lake Tahoe",
    "country": "United States"
  },
  {
    "title": "Private Villa in Venice",
    "description": "Enjoy panoramic views around Venice, fresh air, and a calm environment ideal for rest and recharge.",
    "image": "https://picsum.photos/seed/listing15/800/500",
    "price": 12500,
    "location": "Venice",
    "country": "Italy"
  },
  {
    "title": "Skyline Apartment in Havana",
    "description": "This Havana getaway is perfect for couples and solo travelers seeking calm and comfort.",
    "image": "https://picsum.photos/seed/listing16/800/500",
    "price": 13500,
    "location": "Havana",
    "country": "Cuba"
  },
  {
    "title": "Forest Cabin in Dubai",
    "description": "Great for groups visiting Dubai, this spacious property offers plenty of room to relax and reconnect.",
    "image": "https://picsum.photos/seed/listing17/800/500",
    "price": 4000,
    "location": "Dubai",
    "country": "United Arab Emirates"
  },
  {
    "title": "Riverside Cottage in Hanoi",
    "description": "A homely space with modern conveniences, just minutes away from the best of Hanoi.",
    "image": "https://picsum.photos/seed/listing18/800/500",
    "price": 28000,
    "location": "Hanoi",
    "country": "Vietnam"
  },
  {
    "title": "Boutique Hotel Room in Amalfi Coast",
    "description": "Surrounded by greenery in Amalfi Coast, this is the perfect spot for a digital detox weekend.",
    "image": "https://picsum.photos/seed/listing19/800/500",
    "price": 1200,
    "location": "Amalfi Coast",
    "country": "Italy"
  },
  {
    "title": "Eco-Friendly Bamboo House in Pondicherry",
    "description": "Great for groups visiting Pondicherry, this spacious property offers plenty of room to relax and reconnect.",
    "image": "https://picsum.photos/seed/listing20/800/500",
    "price": 5000,
    "location": "Pondicherry",
    "country": "India"
  },
  {
    "title": "Hillside Villa in Ooty",
    "description": "This Ooty property blends rustic charm with modern amenities for a truly relaxing stay.",
    "image": "https://picsum.photos/seed/listing21/800/500",
    "price": 11000,
    "location": "Ooty",
    "country": "India"
  },
  {
    "title": "Vineyard Estate in Seville",
    "description": "Experience the local culture of Seville while staying in this thoughtfully decorated property.",
    "image": "https://picsum.photos/seed/listing22/800/500",
    "price": 7500,
    "location": "Seville",
    "country": "Spain"
  },
  {
    "title": "Seaside Bungalow in Nice",
    "description": "Wake up to breathtaking views of Nice and enjoy modern comforts in this beautifully designed space.",
    "image": "https://picsum.photos/seed/listing23/800/500",
    "price": 2800,
    "location": "Nice",
    "country": "France"
  },
  {
    "title": "Snow Chalet in Mysore",
    "description": "Enjoy panoramic views around Mysore, fresh air, and a calm environment ideal for rest and recharge.",
    "image": "https://picsum.photos/seed/listing24/800/500",
    "price": 2200,
    "location": "Mysore",
    "country": "India"
  },
  {
    "title": "Historic Manor House in Aspen",
    "description": "Spend your days exploring Aspen and your nights relaxing in this comfortable, well-equipped stay.",
    "image": "https://picsum.photos/seed/listing25/800/500",
    "price": 5500,
    "location": "Aspen",
    "country": "United States"
  },
  {
    "title": "Countryside Farmstay in Patagonia",
    "description": "A homely space with modern conveniences, just minutes away from the best of Patagonia.",
    "image": "https://picsum.photos/seed/listing26/800/500",
    "price": 32000,
    "location": "Patagonia",
    "country": "Argentina"
  },
  {
    "title": "Glass Igloo in Goa",
    "description": "Nestled in the heart of Goa, this stay combines comfort, style, and an unforgettable view.",
    "image": "https://picsum.photos/seed/listing27/800/500",
    "price": 1800,
    "location": "Goa",
    "country": "India"
  },
  {
    "title": "Floating Cabin in Bora Bora",
    "description": "This Bora Bora property blends rustic charm with modern amenities for a truly relaxing stay.",
    "image": "https://picsum.photos/seed/listing28/800/500",
    "price": 7000,
    "location": "Bora Bora",
    "country": "French Polynesia"
  },
  {
    "title": "Garden Cottage in Brussels",
    "description": "A homely space with modern conveniences, just minutes away from the best of Brussels.",
    "image": "https://picsum.photos/seed/listing29/800/500",
    "price": 9000,
    "location": "Brussels",
    "country": "Belgium"
  },
  {
    "title": "Penthouse Suite in Bali",
    "description": "A unique stay in Bali that offers privacy, comfort, and a strong connection to the local landscape.",
    "image": "https://picsum.photos/seed/listing30/800/500",
    "price": 28000,
    "location": "Bali",
    "country": "Indonesia"
  },
  {
    "title": "Tropical Bungalow in Mount Abu",
    "description": "A quiet escape from the hustle and bustle of Mount Abu, with easy access to nearby attractions and trails.",
    "image": "https://picsum.photos/seed/listing31/800/500",
    "price": 22000,
    "location": "Mount Abu",
    "country": "India"
  },
  {
    "title": "Stone Cottage in Copenhagen",
    "description": "Soak in the serenity of Copenhagen while enjoying thoughtful touches throughout the property.",
    "image": "https://picsum.photos/seed/listing32/800/500",
    "price": 25000,
    "location": "Copenhagen",
    "country": "Denmark"
  },
  {
    "title": "Wooden Cabin in Ubud",
    "description": "Discover the beauty of Ubud from this well-located property with all essential amenities.",
    "image": "https://picsum.photos/seed/listing33/800/500",
    "price": 3500,
    "location": "Ubud",
    "country": "Indonesia"
  },
  {
    "title": "Rooftop Apartment in Nairobi",
    "description": "Soak in the serenity of Nairobi while enjoying thoughtful touches throughout the property.",
    "image": "https://picsum.photos/seed/listing34/800/500",
    "price": 5000,
    "location": "Nairobi",
    "country": "Kenya"
  },
  {
    "title": "Colonial Mansion in Cusco",
    "description": "A homely space with modern conveniences, just minutes away from the best of Cusco.",
    "image": "https://picsum.photos/seed/listing35/800/500",
    "price": 3000,
    "location": "Cusco",
    "country": "Peru"
  },
  {
    "title": "Tiny House in Kathmandu",
    "description": "A quiet escape from the hustle and bustle of Kathmandu, with easy access to nearby attractions and trails.",
    "image": "https://picsum.photos/seed/listing36/800/500",
    "price": 1800,
    "location": "Kathmandu",
    "country": "Nepal"
  },
  {
    "title": "Yurt Camp in Zermatt",
    "description": "This Zermatt property blends rustic charm with modern amenities for a truly relaxing stay.",
    "image": "https://picsum.photos/seed/listing37/800/500",
    "price": 2200,
    "location": "Zermatt",
    "country": "Switzerland"
  },
  {
    "title": "Cliffside Villa in Buenos Aires",
    "description": "Spend your days exploring Buenos Aires and your nights relaxing in this comfortable, well-equipped stay.",
    "image": "https://picsum.photos/seed/listing38/800/500",
    "price": 13500,
    "location": "Buenos Aires",
    "country": "Argentina"
  },
  {
    "title": "Lakefront Cabin in Porto",
    "description": "Spend your days exploring Porto and your nights relaxing in this comfortable, well-equipped stay.",
    "image": "https://picsum.photos/seed/listing39/800/500",
    "price": 1200,
    "location": "Porto",
    "country": "Portugal"
  },
  {
    "title": "Palm Grove Villa in Cairo",
    "description": "Nestled in the heart of Cairo, this stay combines comfort, style, and an unforgettable view.",
    "image": "https://picsum.photos/seed/listing40/800/500",
    "price": 22000,
    "location": "Cairo",
    "country": "Egypt"
  },
  {
    "title": "Cozy Cottage in Banff",
    "description": "This Banff getaway is perfect for couples and solo travelers seeking calm and comfort.",
    "image": "https://picsum.photos/seed/listing41/800/500",
    "price": 2500,
    "location": "Banff",
    "country": "Canada"
  },
  {
    "title": "Beachfront Villa in Rio de Janeiro",
    "description": "A unique stay in Rio de Janeiro that offers privacy, comfort, and a strong connection to the local landscape.",
    "image": "https://picsum.photos/seed/listing42/800/500",
    "price": 4000,
    "location": "Rio de Janeiro",
    "country": "Brazil"
  },
  {
    "title": "Modern Loft in Reykjavik",
    "description": "A peaceful retreat in Reykjavik, surrounded by nature and perfect for unwinding after a day of exploring.",
    "image": "https://picsum.photos/seed/listing43/800/500",
    "price": 2200,
    "location": "Reykjavik",
    "country": "Iceland"
  },
  {
    "title": "Rustic Cabin in Gangtok",
    "description": "Soak in the serenity of Gangtok while enjoying thoughtful touches throughout the property.",
    "image": "https://picsum.photos/seed/listing44/800/500",
    "price": 9000,
    "location": "Gangtok",
    "country": "India"
  },
  {
    "title": "Luxury Penthouse in Salzburg",
    "description": "Surrounded by greenery in Salzburg, this is the perfect spot for a digital detox weekend.",
    "image": "https://picsum.photos/seed/listing45/800/500",
    "price": 11000,
    "location": "Salzburg",
    "country": "Austria"
  },
  {
    "title": "Charming Bungalow in Hoi An",
    "description": "This Hoi An getaway is perfect for couples and solo travelers seeking calm and comfort.",
    "image": "https://picsum.photos/seed/listing46/800/500",
    "price": 4500,
    "location": "Hoi An",
    "country": "Vietnam"
  },
  {
    "title": "Lakeside Retreat in Jaipur",
    "description": "A quiet escape from the hustle and bustle of Jaipur, with easy access to nearby attractions and trails.",
    "image": "https://picsum.photos/seed/listing47/800/500",
    "price": 15000,
    "location": "Jaipur",
    "country": "India"
  },
  {
    "title": "Mountain Chalet in Stockholm",
    "description": "A charming hideaway in Stockholm, designed for travelers who appreciate comfort and quiet.",
    "image": "https://picsum.photos/seed/listing48/800/500",
    "price": 11000,
    "location": "Stockholm",
    "country": "Sweden"
  },
  {
    "title": "Urban Studio Apartment in Cappadocia",
    "description": "Wake up to breathtaking views of Cappadocia and enjoy modern comforts in this beautifully designed space.",
    "image": "https://picsum.photos/seed/listing49/800/500",
    "price": 7000,
    "location": "Cappadocia",
    "country": "Turkey"
  },
  {
    "title": "Traditional Farmhouse in Athens",
    "description": "Discover the beauty of Athens from this well-located property with all essential amenities.",
    "image": "https://picsum.photos/seed/listing50/800/500",
    "price": 5500,
    "location": "Athens",
    "country": "Greece"
  },
  {
    "title": "Treehouse Getaway in Vienna",
    "description": "A homely space with modern conveniences, just minutes away from the best of Vienna.",
    "image": "https://picsum.photos/seed/listing51/800/500",
    "price": 5500,
    "location": "Vienna",
    "country": "Austria"
  },
  {
    "title": "Houseboat Stay in Istanbul",
    "description": "A homely space with modern conveniences, just minutes away from the best of Istanbul.",
    "image": "https://picsum.photos/seed/listing52/800/500",
    "price": 2000,
    "location": "Istanbul",
    "country": "Turkey"
  },
  {
    "title": "Desert Camp Tent in Seoul",
    "description": "Nestled in the heart of Seoul, this stay combines comfort, style, and an unforgettable view.",
    "image": "https://picsum.photos/seed/listing53/800/500",
    "price": 12500,
    "location": "Seoul",
    "country": "South Korea"
  },
  {
    "title": "Heritage Haveli in Marrakech",
    "description": "A homely space with modern conveniences, just minutes away from the best of Marrakech.",
    "image": "https://picsum.photos/seed/listing54/800/500",
    "price": 1500,
    "location": "Marrakech",
    "country": "Morocco"
  },
  {
    "title": "Private Villa in Prague",
    "description": "Perfect for a romantic getaway in Prague, featuring cozy interiors and stunning natural surroundings.",
    "image": "https://picsum.photos/seed/listing55/800/500",
    "price": 1800,
    "location": "Prague",
    "country": "Czech Republic"
  },
  {
    "title": "Skyline Apartment in Phuket",
    "description": "Perfect for a romantic getaway in Phuket, featuring cozy interiors and stunning natural surroundings.",
    "image": "https://picsum.photos/seed/listing56/800/500",
    "price": 7000,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Forest Cabin in Varanasi",
    "description": "This Varanasi property blends rustic charm with modern amenities for a truly relaxing stay.",
    "image": "https://picsum.photos/seed/listing57/800/500",
    "price": 2000,
    "location": "Varanasi",
    "country": "India"
  },
  {
    "title": "Riverside Cottage in Amsterdam",
    "description": "Tastefully furnished and centrally located in Amsterdam, this stay is great for leisure or work trips.",
    "image": "https://picsum.photos/seed/listing58/800/500",
    "price": 11000,
    "location": "Amsterdam",
    "country": "Netherlands"
  },
  {
    "title": "Boutique Hotel Room in Cape Town",
    "description": "Wake up to breathtaking views of Cape Town and enjoy modern comforts in this beautifully designed space.",
    "image": "https://picsum.photos/seed/listing59/800/500",
    "price": 2000,
    "location": "Cape Town",
    "country": "South Africa"
  },
  {
    "title": "Eco-Friendly Bamboo House in Edinburgh",
    "description": "A peaceful retreat in Edinburgh, surrounded by nature and perfect for unwinding after a day of exploring.",
    "image": "https://picsum.photos/seed/listing60/800/500",
    "price": 9500,
    "location": "Edinburgh",
    "country": "United Kingdom"
  },
  {
    "title": "Hillside Villa in Udaipur",
    "description": "A quiet escape from the hustle and bustle of Udaipur, with easy access to nearby attractions and trails.",
    "image": "https://picsum.photos/seed/listing61/800/500",
    "price": 9000,
    "location": "Udaipur",
    "country": "India"
  },
  {
    "title": "Vineyard Estate in Barcelona",
    "description": "Experience the local culture of Barcelona while staying in this thoughtfully decorated property.",
    "image": "https://picsum.photos/seed/listing62/800/500",
    "price": 5000,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Seaside Bungalow in Vancouver",
    "description": "Unwind in style at this property near Vancouver, complete with cozy interiors and a relaxing ambience.",
    "image": "https://picsum.photos/seed/listing63/800/500",
    "price": 1200,
    "location": "Vancouver",
    "country": "Canada"
  },
  {
    "title": "Snow Chalet in Serengeti",
    "description": "Ideal for families and friends, this Serengeti stay offers spacious rooms and a warm, welcoming atmosphere.",
    "image": "https://picsum.photos/seed/listing64/800/500",
    "price": 25000,
    "location": "Serengeti",
    "country": "Tanzania"
  },
  {
    "title": "Historic Manor House in San Francisco",
    "description": "Perfect for a romantic getaway in San Francisco, featuring cozy interiors and stunning natural surroundings.",
    "image": "https://picsum.photos/seed/listing65/800/500",
    "price": 11000,
    "location": "San Francisco",
    "country": "United States"
  },
  {
    "title": "Countryside Farmstay in Darjeeling",
    "description": "A homely space with modern conveniences, just minutes away from the best of Darjeeling.",
    "image": "https://picsum.photos/seed/listing66/800/500",
    "price": 2200,
    "location": "Darjeeling",
    "country": "India"
  },
  {
    "title": "Glass Igloo in Cotswolds",
    "description": "A unique stay in Cotswolds that offers privacy, comfort, and a strong connection to the local landscape.",
    "image": "https://picsum.photos/seed/listing67/800/500",
    "price": 5000,
    "location": "Cotswolds",
    "country": "United Kingdom"
  },
  {
    "title": "Floating Cabin in Oslo",
    "description": "Unwind in style at this property near Oslo, complete with cozy interiors and a relaxing ambience.",
    "image": "https://picsum.photos/seed/listing68/800/500",
    "price": 5000,
    "location": "Oslo",
    "country": "Norway"
  },
  {
    "title": "Garden Cottage in Leh",
    "description": "Nestled in the heart of Leh, this stay combines comfort, style, and an unforgettable view.",
    "image": "https://picsum.photos/seed/listing69/800/500",
    "price": 2000,
    "location": "Leh",
    "country": "India"
  },
  {
    "title": "Penthouse Suite in Shimla",
    "description": "Experience the local culture of Shimla while staying in this thoughtfully decorated property.",
    "image": "https://picsum.photos/seed/listing70/800/500",
    "price": 25000,
    "location": "Shimla",
    "country": "India"
  },
  {
    "title": "Tropical Bungalow in Kyoto",
    "description": "Nestled in the heart of Kyoto, this stay combines comfort, style, and an unforgettable view.",
    "image": "https://picsum.photos/seed/listing71/800/500",
    "price": 7000,
    "location": "Kyoto",
    "country": "Japan"
  },
  {
    "title": "Stone Cottage in Pokhara",
    "description": "Nestled in the heart of Pokhara, this stay combines comfort, style, and an unforgettable view.",
    "image": "https://picsum.photos/seed/listing72/800/500",
    "price": 7500,
    "location": "Pokhara",
    "country": "Nepal"
  },
  {
    "title": "Wooden Cabin in Alleppey",
    "description": "Enjoy panoramic views around Alleppey, fresh air, and a calm environment ideal for rest and recharge.",
    "image": "https://picsum.photos/seed/listing73/800/500",
    "price": 1800,
    "location": "Alleppey",
    "country": "India"
  },
  {
    "title": "Rooftop Apartment in Interlaken",
    "description": "A quiet escape from the hustle and bustle of Interlaken, with easy access to nearby attractions and trails.",
    "image": "https://picsum.photos/seed/listing74/800/500",
    "price": 2000,
    "location": "Interlaken",
    "country": "Switzerland"
  },
  {
    "title": "Colonial Mansion in Jodhpur",
    "description": "Tastefully furnished and centrally located in Jodhpur, this stay is great for leisure or work trips.",
    "image": "https://picsum.photos/seed/listing75/800/500",
    "price": 16500,
    "location": "Jodhpur",
    "country": "India"
  },
  {
    "title": "Tiny House in Budapest",
    "description": "A unique stay in Budapest that offers privacy, comfort, and a strong connection to the local landscape.",
    "image": "https://picsum.photos/seed/listing76/800/500",
    "price": 7500,
    "location": "Budapest",
    "country": "Hungary"
  },
  {
    "title": "Yurt Camp in Coorg",
    "description": "This Coorg property blends rustic charm with modern amenities for a truly relaxing stay.",
    "image": "https://picsum.photos/seed/listing77/800/500",
    "price": 8000,
    "location": "Coorg",
    "country": "India"
  },
  {
    "title": "Cliffside Villa in Rishikesh",
    "description": "A peaceful retreat in Rishikesh, surrounded by nature and perfect for unwinding after a day of exploring.",
    "image": "https://picsum.photos/seed/listing78/800/500",
    "price": 2800,
    "location": "Rishikesh",
    "country": "India"
  },
  {
    "title": "Lakefront Cabin in Lisbon",
    "description": "A charming hideaway in Lisbon, designed for travelers who appreciate comfort and quiet.",
    "image": "https://picsum.photos/seed/listing79/800/500",
    "price": 5000,
    "location": "Lisbon",
    "country": "Portugal"
  },
  {
    "title": "Palm Grove Villa in Kasol",
    "description": "A quiet escape from the hustle and bustle of Kasol, with easy access to nearby attractions and trails.",
    "image": "https://picsum.photos/seed/listing80/800/500",
    "price": 15000,
    "location": "Kasol",
    "country": "India"
  },
  {
    "title": "Cozy Cottage in Queenstown",
    "description": "Discover the beauty of Queenstown from this well-located property with all essential amenities.",
    "image": "https://picsum.photos/seed/listing81/800/500",
    "price": 32000,
    "location": "Queenstown",
    "country": "New Zealand"
  },
  {
    "title": "Beachfront Villa in Hawaii",
    "description": "A peaceful retreat in Hawaii, surrounded by nature and perfect for unwinding after a day of exploring.",
    "image": "https://picsum.photos/seed/listing82/800/500",
    "price": 18000,
    "location": "Hawaii",
    "country": "United States"
  },
  {
    "title": "Modern Loft in Manali",
    "description": "A charming hideaway in Manali, designed for travelers who appreciate comfort and quiet.",
    "image": "https://picsum.photos/seed/listing83/800/500",
    "price": 4000,
    "location": "Manali",
    "country": "India"
  },
  {
    "title": "Rustic Cabin in Male",
    "description": "Ideal for families and friends, this Male stay offers spacious rooms and a warm, welcoming atmosphere.",
    "image": "https://picsum.photos/seed/listing84/800/500",
    "price": 15000,
    "location": "Male",
    "country": "Maldives"
  },
  {
    "title": "Luxury Penthouse in Santorini",
    "description": "A unique stay in Santorini that offers privacy, comfort, and a strong connection to the local landscape.",
    "image": "https://picsum.photos/seed/listing85/800/500",
    "price": 8000,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Charming Bungalow in Tuscany",
    "description": "Surrounded by greenery in Tuscany, this is the perfect spot for a digital detox weekend.",
    "image": "https://picsum.photos/seed/listing86/800/500",
    "price": 32000,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Lakeside Retreat in Munnar",
    "description": "This Munnar property blends rustic charm with modern amenities for a truly relaxing stay.",
    "image": "https://picsum.photos/seed/listing87/800/500",
    "price": 5000,
    "location": "Munnar",
    "country": "India"
  },
  {
    "title": "Mountain Chalet in Paris",
    "description": "Spend your days exploring Paris and your nights relaxing in this comfortable, well-equipped stay.",
    "image": "https://picsum.photos/seed/listing88/800/500",
    "price": 9000,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Urban Studio Apartment in Bangkok",
    "description": "Discover the beauty of Bangkok from this well-located property with all essential amenities.",
    "image": "https://picsum.photos/seed/listing89/800/500",
    "price": 18000,
    "location": "Bangkok",
    "country": "Thailand"
  },
  {
    "title": "Traditional Farmhouse in Dubrovnik",
    "description": "A charming hideaway in Dubrovnik, designed for travelers who appreciate comfort and quiet.",
    "image": "https://picsum.photos/seed/listing90/800/500",
    "price": 4500,
    "location": "Dubrovnik",
    "country": "Croatia"
  },
  {
    "title": "Treehouse Getaway in Sydney",
    "description": "Spend your days exploring Sydney and your nights relaxing in this comfortable, well-equipped stay.",
    "image": "https://picsum.photos/seed/listing91/800/500",
    "price": 11000,
    "location": "Sydney",
    "country": "Australia"
  },
  {
    "title": "Houseboat Stay in New York",
    "description": "Perfect for a romantic getaway in New York, featuring cozy interiors and stunning natural surroundings.",
    "image": "https://picsum.photos/seed/listing92/800/500",
    "price": 20000,
    "location": "New York",
    "country": "United States"
  },
  {
    "title": "Desert Camp Tent in Nainital",
    "description": "Spend your days exploring Nainital and your nights relaxing in this comfortable, well-equipped stay.",
    "image": "https://picsum.photos/seed/listing93/800/500",
    "price": 22000,
    "location": "Nainital",
    "country": "India"
  },
  {
    "title": "Heritage Haveli in Tokyo",
    "description": "A homely space with modern conveniences, just minutes away from the best of Tokyo.",
    "image": "https://picsum.photos/seed/listing94/800/500",
    "price": 16500,
    "location": "Tokyo",
    "country": "Japan"
  },
  {
    "title": "Private Villa in Lake Tahoe",
    "description": "Spend your days exploring Lake Tahoe and your nights relaxing in this comfortable, well-equipped stay.",
    "image": "https://picsum.photos/seed/listing95/800/500",
    "price": 2800,
    "location": "Lake Tahoe",
    "country": "United States"
  },
  {
    "title": "Skyline Apartment in Venice",
    "description": "A charming hideaway in Venice, designed for travelers who appreciate comfort and quiet.",
    "image": "https://picsum.photos/seed/listing96/800/500",
    "price": 7500,
    "location": "Venice",
    "country": "Italy"
  },
  {
    "title": "Forest Cabin in Havana",
    "description": "Surrounded by greenery in Havana, this is the perfect spot for a digital detox weekend.",
    "image": "https://picsum.photos/seed/listing97/800/500",
    "price": 16500,
    "location": "Havana",
    "country": "Cuba"
  },
  {
    "title": "Riverside Cottage in Dubai",
    "description": "A peaceful retreat in Dubai, surrounded by nature and perfect for unwinding after a day of exploring.",
    "image": "https://picsum.photos/seed/listing98/800/500",
    "price": 1200,
    "location": "Dubai",
    "country": "United Arab Emirates"
  },
  {
    "title": "Boutique Hotel Room in Hanoi",
    "description": "A unique stay in Hanoi that offers privacy, comfort, and a strong connection to the local landscape.",
    "image": "https://picsum.photos/seed/listing99/800/500",
    "price": 7500,
    "location": "Hanoi",
    "country": "Vietnam"
  },
  {
    "title": "Eco-Friendly Bamboo House in Amalfi Coast",
    "description": "A unique stay in Amalfi Coast that offers privacy, comfort, and a strong connection to the local landscape.",
    "image": "https://picsum.photos/seed/listing100/800/500",
    "price": 2800,
    "location": "Amalfi Coast",
    "country": "Italy"
  }
]

).then(()=>{
  console.log("Insertion Sucessful");
})

