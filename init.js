const mongoose = require("mongoose");
const listings = require("./models/Listing.js");
mongoose.connect("mongodb://127.0.0.1:27017/wonderlust");
let  initData = [
  {
    "title": "Boutique Hotel Room in Hanoi",
    "description": "A unique stay in Hanoi that offers privacy, comfort, and a strong connection to the local landscape.",
    "image": { "path": "https://picsum.photos/seed/listing1/800/500", "filename": "listingimage" },
    "price": 7500,
    "location": "Hanoi",
    "country": "Vietnam"
  },
  {
    "title": "Beachfront Villa in Bali",
    "description": "Wake up to the sound of waves in this stunning beachfront villa surrounded by lush tropical gardens.",
    "image": { "path": "https://picsum.photos/seed/listing2/800/500", "filename": "listingimage" },
    "price": 12000,
    "location": "Bali",
    "country": "Indonesia"
  },
  {
    "title": "Cozy Mountain Cabin in Shimla",
    "description": "A peaceful wooden cabin nestled in the pine forests of Shimla with breathtaking Himalayan views.",
    "image": { "path": "https://picsum.photos/seed/listing3/800/500", "filename": "listingimage" },
    "price": 5500,
    "location": "Shimla",
    "country": "India"
  },
  {
    "title": "Modern Apartment in Tokyo",
    "description": "A sleek, minimalist apartment in the heart of Tokyo, steps away from metro stations and local markets.",
    "image": { "path": "https://picsum.photos/seed/listing4/800/500", "filename": "listingimage" },
    "price": 9800,
    "location": "Tokyo",
    "country": "Japan"
  },
  {
    "title": "Lakeside Cottage in Interlaken",
    "description": "A charming Swiss cottage by the lake with stunning views of the Alps and access to hiking trails.",
    "image": { "path": "https://picsum.photos/seed/listing5/800/500", "filename": "listingimage" },
    "price": 15000,
    "location": "Interlaken",
    "country": "Switzerland"
  },
  {
    "title": "Historic Riad in Marrakech",
    "description": "An authentic Moroccan riad with a private courtyard, mosaic tiles, and traditional decor in the old medina.",
    "image": { "path": "https://picsum.photos/seed/listing6/800/500", "filename": "listingimage" },
    "price": 8200,
    "location": "Marrakech",
    "country": "Morocco"
  },
  {
    "title": "Cliffside Suite in Santorini",
    "description": "Perched on the cliffs of Santorini, this suite offers iconic caldera views and a private plunge pool.",
    "image": { "path": "https://picsum.photos/seed/listing7/800/500", "filename": "listingimage" },
    "price": 18500,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Jungle Treehouse in Costa Rica",
    "description": "An elevated treehouse experience surrounded by the sounds of the jungle with a view of the rainforest canopy.",
    "image": { "path": "https://picsum.photos/seed/listing8/800/500", "filename": "listingimage" },
    "price": 11000,
    "location": "Manuel Antonio",
    "country": "Costa Rica"
  },
  {
    "title": "Luxury Penthouse in Dubai",
    "description": "Experience the Dubai skyline from this ultra-luxury penthouse with a rooftop terrace and infinity pool access.",
    "image": { "path": "https://picsum.photos/seed/listing9/800/500", "filename": "listingimage" },
    "price": 35000,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "Rustic Farmhouse in Tuscany",
    "description": "A beautifully restored stone farmhouse in the rolling hills of Tuscany with a vineyard and olive grove.",
    "image": { "path": "https://picsum.photos/seed/listing10/800/500", "filename": "listingimage" },
    "price": 13500,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Surfer's Bungalow in Byron Bay",
    "description": "A laid-back bungalow just 200 metres from the beach, perfect for surfers and sun-seekers alike.",
    "image": { "path": "https://picsum.photos/seed/listing11/800/500", "filename": "listingimage" },
    "price": 7800,
    "location": "Byron Bay",
    "country": "Australia"
  },
  {
    "title": "Heritage Haveli in Jaipur",
    "description": "Stay in a centuries-old haveli with intricately carved architecture, royal decor, and rooftop dining.",
    "image": { "path": "https://picsum.photos/seed/listing12/800/500", "filename": "listingimage" },
    "price": 6500,
    "location": "Jaipur",
    "country": "India"
  },
  {
    "title": "Cosy Studio in Amsterdam",
    "description": "A charming canal-facing studio in the heart of Amsterdam, ideal for couples exploring the city.",
    "image": { "path": "https://picsum.photos/seed/listing13/800/500", "filename": "listingimage" },
    "price": 8900,
    "location": "Amsterdam",
    "country": "Netherlands"
  },
  {
    "title": "Safari Lodge in Serengeti",
    "description": "An exclusive lodge on the edge of the Serengeti offering guided game drives and stunning sunset views.",
    "image": { "path": "https://picsum.photos/seed/listing14/800/500", "filename": "listingimage" },
    "price": 28000,
    "location": "Serengeti",
    "country": "Tanzania"
  },
  {
    "title": "Glass Cabin in Lapland",
    "description": "Sleep under the northern lights in a glass-roofed cabin surrounded by snowy Finnish wilderness.",
    "image": { "path": "https://picsum.photos/seed/listing15/800/500", "filename": "listingimage" },
    "price": 22000,
    "location": "Rovaniemi",
    "country": "Finland"
  },
  {
    "title": "City Loft in New York",
    "description": "A trendy industrial loft in Manhattan with exposed brick, large windows, and rooftop access.",
    "image": { "path": "https://picsum.photos/seed/listing16/800/500", "filename": "listingimage" },
    "price": 16500,
    "location": "New York",
    "country": "USA"
  },
  {
    "title": "Desert Camp in Wadi Rum",
    "description": "Spend a night under the stars in a luxurious Bedouin tent in the red desert of Wadi Rum.",
    "image": { "path": "https://picsum.photos/seed/listing17/800/500", "filename": "listingimage" },
    "price": 9500,
    "location": "Wadi Rum",
    "country": "Jordan"
  },
  {
    "title": "Houseboat in Kerala",
    "description": "Drift along the tranquil backwaters of Kerala on a traditional wooden houseboat with a private chef.",
    "image": { "path": "https://picsum.photos/seed/listing18/800/500", "filename": "listingimage" },
    "price": 8000,
    "location": "Alleppey",
    "country": "India"
  },
  {
    "title": "Vineyard Cottage in Cape Town",
    "description": "A cozy cottage nestled in a working vineyard at the foot of Table Mountain with wine tasting included.",
    "image": { "path": "https://picsum.photos/seed/listing19/800/500", "filename": "listingimage" },
    "price": 9200,
    "location": "Cape Town",
    "country": "South Africa"
  },
  {
    "title": "Overwater Bungalow in Maldives",
    "description": "A dreamy overwater bungalow with a glass floor, direct ocean access, and crystal-clear lagoon views.",
    "image": { "path": "https://picsum.photos/seed/listing20/800/500", "filename": "listingimage" },
    "price": 42000,
    "location": "Malé Atoll",
    "country": "Maldives"
  },
  {
    "title": "Artist's Studio in Prague",
    "description": "A bohemian studio apartment in Prague's old town, decorated with local artwork and vintage furniture.",
    "image": { "path": "https://picsum.photos/seed/listing21/800/500", "filename": "listingimage" },
    "price": 6200,
    "location": "Prague",
    "country": "Czech Republic"
  },
  {
    "title": "Ski Chalet in Whistler",
    "description": "A luxurious ski-in ski-out chalet in Whistler with a hot tub, fireplace, and mountain views.",
    "image": { "path": "https://picsum.photos/seed/listing22/800/500", "filename": "listingimage" },
    "price": 25000,
    "location": "Whistler",
    "country": "Canada"
  },
  {
    "title": "Boutique Inn in Kyoto",
    "description": "A traditional Japanese inn (ryokan) in Kyoto with tatami rooms, yukata robes, and a zen garden.",
    "image": { "path": "https://picsum.photos/seed/listing23/800/500", "filename": "listingimage" },
    "price": 11500,
    "location": "Kyoto",
    "country": "Japan"
  },
  {
    "title": "Colonial Mansion in Cartagena",
    "description": "A magnificently restored colonial mansion in the walled city of Cartagena with a private pool.",
    "image": { "path": "https://picsum.photos/seed/listing24/800/500", "filename": "listingimage" },
    "price": 14500,
    "location": "Cartagena",
    "country": "Colombia"
  },
  {
    "title": "Riverside Tent in Rishikesh",
    "description": "A glamping tent set on the banks of the Ganges in Rishikesh — perfect for yoga retreats and rafting.",
    "image": { "path": "https://picsum.photos/seed/listing25/800/500", "filename": "listingimage" },
    "price": 4500,
    "location": "Rishikesh",
    "country": "India"
  },
  {
    "title": "Beachside Cabana in Phuket",
    "description": "A private cabana steps from the beach in Phuket with a hammock, outdoor shower, and sea breeze.",
    "image": { "path": "https://picsum.photos/seed/listing26/800/500", "filename": "listingimage" },
    "price": 8500,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Mountain Chalet in Innsbruck",
    "description": "A classic Alpine chalet in Innsbruck with wooden interiors, ski access, and panoramic mountain views.",
    "image": { "path": "https://picsum.photos/seed/listing27/800/500", "filename": "listingimage" },
    "price": 17000,
    "location": "Innsbruck",
    "country": "Austria"
  },
  {
    "title": "Eco Lodge in the Amazon",
    "description": "An off-grid eco lodge deep in the Amazon rainforest, accessible by canoe with guided jungle treks.",
    "image": { "path": "https://picsum.photos/seed/listing28/800/500", "filename": "listingimage" },
    "price": 13000,
    "location": "Manaus",
    "country": "Brazil"
  },
  {
    "title": "Penthouse in Barcelona",
    "description": "A stylish penthouse in Barcelona's Eixample district with a rooftop terrace and views of Sagrada Familia.",
    "image": { "path": "https://picsum.photos/seed/listing29/800/500", "filename": "listingimage" },
    "price": 19000,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Cliffside Cottage in Amalfi",
    "description": "A whitewashed cottage clinging to the cliffs of the Amalfi Coast with terraced lemon gardens below.",
    "image": { "path": "https://picsum.photos/seed/listing30/800/500", "filename": "listingimage" },
    "price": 16000,
    "location": "Amalfi",
    "country": "Italy"
  },
  {
    "title": "Heritage Bungalow in Galle",
    "description": "A beautifully preserved Dutch colonial bungalow inside the Galle Fort with antique furnishings.",
    "image": { "path": "https://picsum.photos/seed/listing31/800/500", "filename": "listingimage" },
    "price": 7200,
    "location": "Galle",
    "country": "Sri Lanka"
  },
  {
    "title": "Floating Cabin in Norway",
    "description": "A magical floating cabin on a fjord in Norway, surrounded by steep cliffs and glassy water.",
    "image": { "path": "https://picsum.photos/seed/listing32/800/500", "filename": "listingimage" },
    "price": 20000,
    "location": "Bergen",
    "country": "Norway"
  },
  {
    "title": "Desert Villa in Rajasthan",
    "description": "A private desert villa near the Thar Desert dunes with camel safaris and folk music evenings.",
    "image": { "path": "https://picsum.photos/seed/listing33/800/500", "filename": "listingimage" },
    "price": 7800,
    "location": "Jaisalmer",
    "country": "India"
  },
  {
    "title": "Converted Windmill in Mykonos",
    "description": "A one-of-a-kind stay inside a converted windmill in Mykonos with whitewashed walls and sea views.",
    "image": { "path": "https://picsum.photos/seed/listing34/800/500", "filename": "listingimage" },
    "price": 14000,
    "location": "Mykonos",
    "country": "Greece"
  },
  {
    "title": "Bamboo House in Ubud",
    "description": "An architecturally stunning bamboo house in Ubud's rice fields with open-air design and bird sounds.",
    "image": { "path": "https://picsum.photos/seed/listing35/800/500", "filename": "listingimage" },
    "price": 9000,
    "location": "Ubud",
    "country": "Indonesia"
  },
  {
    "title": "Lighthouse Retreat in Ireland",
    "description": "Stay inside a working lighthouse on Ireland's Wild Atlantic Way with dramatic cliff and ocean views.",
    "image": { "path": "https://picsum.photos/seed/listing36/800/500", "filename": "listingimage" },
    "price": 12500,
    "location": "Galway",
    "country": "Ireland"
  },
  {
    "title": "Luxury Tent in Maasai Mara",
    "description": "A tented camp in the heart of Maasai Mara where the Big Five roam freely beyond your canvas walls.",
    "image": { "path": "https://picsum.photos/seed/listing37/800/500", "filename": "listingimage" },
    "price": 24000,
    "location": "Maasai Mara",
    "country": "Kenya"
  },
  {
    "title": "Rooftop Apartment in Lisbon",
    "description": "A sunny apartment in Lisbon's Alfama district with a terrace, azulejo tiles, and fado music nearby.",
    "image": { "path": "https://picsum.photos/seed/listing38/800/500", "filename": "listingimage" },
    "price": 8400,
    "location": "Lisbon",
    "country": "Portugal"
  },
  {
    "title": "Cave Hotel in Cappadocia",
    "description": "Sleep inside a carved cave suite in Cappadocia, with hot air balloons floating past your window at dawn.",
    "image": { "path": "https://picsum.photos/seed/listing39/800/500", "filename": "listingimage" },
    "price": 11200,
    "location": "Göreme",
    "country": "Turkey"
  },
  {
    "title": "Boho Beach House in Tulum",
    "description": "A rustic bohemian beach house in Tulum with a hammock, cenote access, and candlelit jungle paths.",
    "image": { "path": "https://picsum.photos/seed/listing40/800/500", "filename": "listingimage" },
    "price": 13800,
    "location": "Tulum",
    "country": "Mexico"
  },
  {
    "title": "Island Cottage in Mull",
    "description": "A remote stone cottage on the Scottish island of Mull with wild coastline, deer, and no Wi-Fi.",
    "image": { "path": "https://picsum.photos/seed/listing41/800/500", "filename": "listingimage" },
    "price": 8000,
    "location": "Isle of Mull",
    "country": "Scotland"
  },
  {
    "title": "Colonial Guesthouse in Hoi An",
    "description": "A French colonial guesthouse in Hoi An's lantern-lit ancient town, steps from the Thu Bon River.",
    "image": { "path": "https://picsum.photos/seed/listing42/800/500", "filename": "listingimage" },
    "price": 5800,
    "location": "Hoi An",
    "country": "Vietnam"
  },
  {
    "title": "Forest Cabin in Banff",
    "description": "A secluded log cabin in Banff National Park surrounded by pine forests, elk, and mountain air.",
    "image": { "path": "https://picsum.photos/seed/listing43/800/500", "filename": "listingimage" },
    "price": 14200,
    "location": "Banff",
    "country": "Canada"
  },
  {
    "title": "Seaside Apartment in Dubrovnik",
    "description": "A sun-drenched apartment inside the old city walls of Dubrovnik with a balcony overlooking the Adriatic.",
    "image": { "path": "https://picsum.photos/seed/listing44/800/500", "filename": "listingimage" },
    "price": 12800,
    "location": "Dubrovnik",
    "country": "Croatia"
  },
  {
    "title": "Plantation House in Kerala",
    "description": "A colonial-era plantation bungalow amid spice and tea estates in the Munnar hills of Kerala.",
    "image": { "path": "https://picsum.photos/seed/listing45/800/500", "filename": "listingimage" },
    "price": 6000,
    "location": "Munnar",
    "country": "India"
  },
  {
    "title": "Nordic Cabin by the Lake",
    "description": "A minimalist Scandinavian cabin on a private lake in Sweden with a sauna and canoe included.",
    "image": { "path": "https://picsum.photos/seed/listing46/800/500", "filename": "listingimage" },
    "price": 10500,
    "location": "Dalarna",
    "country": "Sweden"
  },
  {
    "title": "Rooftop Suite in Istanbul",
    "description": "A stunning suite with a rooftop terrace in Istanbul's Sultanahmet, overlooking the Blue Mosque and Bosphorus.",
    "image": { "path": "https://picsum.photos/seed/listing47/800/500", "filename": "listingimage" },
    "price": 10200,
    "location": "Istanbul",
    "country": "Turkey"
  },
  {
    "title": "Glamping Pod in New Zealand",
    "description": "A futuristic glamping pod in the rolling hills of Wanaka with floor-to-ceiling windows and stargazing decks.",
    "image": { "path": "https://picsum.photos/seed/listing48/800/500", "filename": "listingimage" },
    "price": 11800,
    "location": "Wanaka",
    "country": "New Zealand"
  },
  {
    "title": "Treehouse Villa in Chiang Mai",
    "description": "An elevated treehouse villa in the foothills of Chiang Mai, surrounded by jungle and elephant sanctuaries.",
    "image": { "path": "https://picsum.photos/seed/listing49/800/500", "filename": "listingimage" },
    "price": 7600,
    "location": "Chiang Mai",
    "country": "Thailand"
  },
  {
    "title": "Converted Monastery in Bruges",
    "description": "A beautifully converted medieval monastery in Bruges with vaulted ceilings, a courtyard, and canal views.",
    "image": { "path": "https://picsum.photos/seed/listing50/800/500", "filename": "listingimage" },
    "price": 13200,
    "location": "Bruges",
    "country": "Belgium"
  },
  {
    "title": "Beachfront Shack in Goa",
    "description": "A laid-back beachfront shack in North Goa with hammocks, seafood shacks next door, and nightly bonfires.",
    "image": { "path": "https://picsum.photos/seed/listing51/800/500", "filename": "listingimage" },
    "price": 4800,
    "location": "Goa",
    "country": "India"
  },
  {
    "title": "Private Island Stay in Fiji",
    "description": "An entire private island for rent in Fiji with butler service, coral reef snorkeling, and sunset sailing.",
    "image": { "path": "https://picsum.photos/seed/listing52/800/500", "filename": "listingimage" },
    "price": 85000,
    "location": "Mamanuca Islands",
    "country": "Fiji"
  },
  {
    "title": "Boutique Hotel in Reykjavik",
    "description": "A design-forward boutique hotel in downtown Reykjavik, perfect for northern lights tours and geothermal baths.",
    "image": { "path": "https://picsum.photos/seed/listing53/800/500", "filename": "listingimage" },
    "price": 15500,
    "location": "Reykjavik",
    "country": "Iceland"
  },
  {
    "title": "Stilt House in Borneo",
    "description": "A traditional stilt house over a river in Borneo's rainforest, with orangutan trekking and river fishing.",
    "image": { "path": "https://picsum.photos/seed/listing54/800/500", "filename": "listingimage" },
    "price": 8800,
    "location": "Kota Kinabalu",
    "country": "Malaysia"
  },
  {
    "title": "Art Deco Apartment in Buenos Aires",
    "description": "A grand Art Deco apartment in Palermo, Buenos Aires with high ceilings, tango studio nearby, and a balcony.",
    "image": { "path": "https://picsum.photos/seed/listing55/800/500", "filename": "listingimage" },
    "price": 7400,
    "location": "Buenos Aires",
    "country": "Argentina"
  },
  {
    "title": "Hilltop Villa in Positano",
    "description": "A terraced hilltop villa in Positano draped in bougainvillea with a private pool and sea panorama.",
    "image": { "path": "https://picsum.photos/seed/listing56/800/500", "filename": "listingimage" },
    "price": 21000,
    "location": "Positano",
    "country": "Italy"
  },
  {
    "title": "Riverside Lodge in Manali",
    "description": "A wooden riverside lodge in Manali along the Beas River with apple orchards and snow-capped peaks nearby.",
    "image": { "path": "https://picsum.photos/seed/listing57/800/500", "filename": "listingimage" },
    "price": 5200,
    "location": "Manali",
    "country": "India"
  },
  {
    "title": "Tropical Bungalow in Krabi",
    "description": "A secluded tropical bungalow in Krabi surrounded by limestone cliffs, turquoise water, and jungle.",
    "image": { "path": "https://picsum.photos/seed/listing58/800/500", "filename": "listingimage" },
    "price": 7000,
    "location": "Krabi",
    "country": "Thailand"
  },
  {
    "title": "Minimalist Flat in Seoul",
    "description": "A sleek minimalist flat in Gangnam, Seoul with smart home tech, floor heating, and city skyline views.",
    "image": { "path": "https://picsum.photos/seed/listing59/800/500", "filename": "listingimage" },
    "price": 9600,
    "location": "Seoul",
    "country": "South Korea"
  },
  {
    "title": "Winery Estate in Bordeaux",
    "description": "A grand estate in the Bordeaux wine region with cellar tours, vineyard walks, and château-style rooms.",
    "image": { "path": "https://picsum.photos/seed/listing60/800/500", "filename": "listingimage" },
    "price": 18000,
    "location": "Bordeaux",
    "country": "France"
  },
  {
    "title": "Jungle Resort in Ella",
    "description": "A hillside jungle resort in Ella, Sri Lanka with cascading waterfalls, tea fields, and infinity pools.",
    "image": { "path": "https://picsum.photos/seed/listing61/800/500", "filename": "listingimage" },
    "price": 8600,
    "location": "Ella",
    "country": "Sri Lanka"
  },
  {
    "title": "Victorian Townhouse in London",
    "description": "A fully restored Victorian townhouse in Notting Hill with a private garden and classic English interiors.",
    "image": { "path": "https://picsum.photos/seed/listing62/800/500", "filename": "listingimage" },
    "price": 22000,
    "location": "London",
    "country": "United Kingdom"
  },
  {
    "title": "Mountaintop Cabin in Patagonia",
    "description": "An isolated cabin atop the Patagonian steppe with howling winds, epic treks, and untouched wilderness.",
    "image": { "path": "https://picsum.photos/seed/listing63/800/500", "filename": "listingimage" },
    "price": 16000,
    "location": "El Chaltén",
    "country": "Argentina"
  },
  {
    "title": "Garden Villa in Ubud",
    "description": "A serene garden villa in the spiritual heart of Ubud with daily yoga classes and traditional cooking sessions.",
    "image": { "path": "https://picsum.photos/seed/listing64/800/500", "filename": "listingimage" },
    "price": 10000,
    "location": "Ubud",
    "country": "Indonesia"
  },
  {
    "title": "Converted Warehouse in Melbourne",
    "description": "A trendy converted warehouse loft in Fitzroy, Melbourne with exposed beams, art walls, and a rooftop deck.",
    "image": { "path": "https://picsum.photos/seed/listing65/800/500", "filename": "listingimage" },
    "price": 11500,
    "location": "Melbourne",
    "country": "Australia"
  },
  {
    "title": "Hilltop House in Sintra",
    "description": "A fairytale hilltop house in Sintra surrounded by palaces, forested hills, and Atlantic Ocean breezes.",
    "image": { "path": "https://picsum.photos/seed/listing66/800/500", "filename": "listingimage" },
    "price": 9400,
    "location": "Sintra",
    "country": "Portugal"
  },
  {
    "title": "Tea Estate Bungalow in Darjeeling",
    "description": "A heritage bungalow on a working tea estate in Darjeeling with misty Himalayan mornings and guided tea walks.",
    "image": { "path": "https://picsum.photos/seed/listing67/800/500", "filename": "listingimage" },
    "price": 6800,
    "location": "Darjeeling",
    "country": "India"
  },
  {
    "title": "Wooden Cabin in Hokkaido",
    "description": "A cozy wooden cabin in Hokkaido's snow country with a private onsen bath and fresh powder skiing nearby.",
    "image": { "path": "https://picsum.photos/seed/listing68/800/500", "filename": "listingimage" },
    "price": 13000,
    "location": "Niseko",
    "country": "Japan"
  },
  {
    "title": "Castle Suite in Edinburgh",
    "description": "A regal suite in a converted Scottish castle near Edinburgh with stone walls, tartan rugs, and loch views.",
    "image": { "path": "https://picsum.photos/seed/listing69/800/500", "filename": "listingimage" },
    "price": 19500,
    "location": "Edinburgh",
    "country": "Scotland"
  },
  {
    "title": "Beachfront Cabana in Zanzibar",
    "description": "A palm-thatched cabana on Zanzibar's spice coast with white sand beaches and dhow sailing at sunset.",
    "image": { "path": "https://picsum.photos/seed/listing70/800/500", "filename": "listingimage" },
    "price": 10800,
    "location": "Zanzibar",
    "country": "Tanzania"
  },
  {
    "title": "Adobe House in Santa Fe",
    "description": "A traditional adobe-style home in Santa Fe with Southwestern art, a kiva fireplace, and desert garden.",
    "image": { "path": "https://picsum.photos/seed/listing71/800/500", "filename": "listingimage" },
    "price": 12000,
    "location": "Santa Fe",
    "country": "USA"
  },
  {
    "title": "Floating Hotel in Ha Long Bay",
    "description": "Spend the night on a luxury floating hotel anchored among the limestone karsts of Ha Long Bay.",
    "image": { "path": "https://picsum.photos/seed/listing72/800/500", "filename": "listingimage" },
    "price": 14000,
    "location": "Ha Long Bay",
    "country": "Vietnam"
  },
  {
    "title": "Mountainside Guesthouse in Nepal",
    "description": "A warm guesthouse on the Annapurna Circuit in Nepal with yak butter tea and Himalayan sunrise views.",
    "image": { "path": "https://picsum.photos/seed/listing73/800/500", "filename": "listingimage" },
    "price": 3500,
    "location": "Pokhara",
    "country": "Nepal"
  },
  {
    "title": "Luxury Farmhouse in Provence",
    "description": "A sun-soaked mas in Provence with lavender fields, a private pool, and local market mornings.",
    "image": { "path": "https://picsum.photos/seed/listing74/800/500", "filename": "listingimage" },
    "price": 17500,
    "location": "Provence",
    "country": "France"
  },
  {
    "title": "Glass House in the Dolomites",
    "description": "A stunning glass-walled mountain house in the Dolomites with 360-degree panoramic Alpine views.",
    "image": { "path": "https://picsum.photos/seed/listing75/800/500", "filename": "listingimage" },
    "price": 23000,
    "location": "Cortina d'Ampezzo",
    "country": "Italy"
  },
  {
    "title": "Colonial Hotel in Havana",
    "description": "A vibrant colonial hotel in Old Havana with salsa music echoing through the courtyards and vintage Cadillacs outside.",
    "image": { "path": "https://picsum.photos/seed/listing76/800/500", "filename": "listingimage" },
    "price": 7200,
    "location": "Havana",
    "country": "Cuba"
  },
  {
    "title": "Backpacker Cabin in Queenstown",
    "description": "A stylish cabin near Queenstown's adventure hub with bungee, skydive, and kayaking all within reach.",
    "image": { "path": "https://picsum.photos/seed/listing77/800/500", "filename": "listingimage" },
    "price": 6500,
    "location": "Queenstown",
    "country": "New Zealand"
  },
  {
    "title": "Palace Hotel in Udaipur",
    "description": "A lakeside palace hotel in Udaipur with hand-painted murals, boat rides, and Rajasthani cuisine.",
    "image": { "path": "https://picsum.photos/seed/listing78/800/500", "filename": "listingimage" },
    "price": 15000,
    "location": "Udaipur",
    "country": "India"
  },
  {
    "title": "Harbor Apartment in Sydney",
    "description": "A bright apartment overlooking Sydney Harbour with views of the Opera House and ferry rides at the door.",
    "image": { "path": "https://picsum.photos/seed/listing79/800/500", "filename": "listingimage" },
    "price": 18000,
    "location": "Sydney",
    "country": "Australia"
  },
  {
    "title": "Cosy Hostel Room in Berlin",
    "description": "A private room in a hip Berlin hostel in Kreuzberg, steps from street art, techno clubs, and food markets.",
    "image": { "path": "https://picsum.photos/seed/listing80/800/500", "filename": "listingimage" },
    "price": 4200,
    "location": "Berlin",
    "country": "Germany"
  },
  {
    "title": "Overwater Villa in Tahiti",
    "description": "A romantic overwater villa in Bora Bora's famous lagoon, with private deck, glass floor, and butler service.",
    "image": { "path": "https://picsum.photos/seed/listing81/800/500", "filename": "listingimage" },
    "price": 38000,
    "location": "Bora Bora",
    "country": "French Polynesia"
  },
  {
    "title": "Mud House in Hampi",
    "description": "An eco-friendly mud house among Hampi's ancient boulders and ruins, lit by lanterns with a rooftop terrace.",
    "image": { "path": "https://picsum.photos/seed/listing82/800/500", "filename": "listingimage" },
    "price": 3800,
    "location": "Hampi",
    "country": "India"
  },
  {
    "title": "Beachfront Hostel in Lisbon",
    "description": "A vibrant beach hostel near Cascais with surf lessons, beach volleyball, and fresh grilled sardines daily.",
    "image": { "path": "https://picsum.photos/seed/listing83/800/500", "filename": "listingimage" },
    "price": 3500,
    "location": "Cascais",
    "country": "Portugal"
  },
  {
    "title": "Alpine Refuge in Zermatt",
    "description": "A cozy alpine hut in Zermatt with the Matterhorn directly in view, ski slopes at the door, and fondue evenings.",
    "image": { "path": "https://picsum.photos/seed/listing84/800/500", "filename": "listingimage" },
    "price": 26000,
    "location": "Zermatt",
    "country": "Switzerland"
  },
  {
    "title": "Rice Terrace Cottage in Banaue",
    "description": "A remote mountain cottage overlooking the ancient Ifugao rice terraces of Banaue, a UNESCO World Heritage Site.",
    "image": { "path": "https://picsum.photos/seed/listing85/800/500", "filename": "listingimage" },
    "price": 4600,
    "location": "Banaue",
    "country": "Philippines"
  },
  {
    "title": "Urban Flat in Singapore",
    "description": "A modern flat in the heart of Singapore's Marina Bay area with skyline views and rooftop garden access.",
    "image": { "path": "https://picsum.photos/seed/listing86/800/500", "filename": "listingimage" },
    "price": 14500,
    "location": "Singapore",
    "country": "Singapore"
  },
  {
    "title": "Sea Cave Villa in Malta",
    "description": "A cliffside villa in Gozo, Malta built into ancient sea caves with private sea access and cobalt-blue waters.",
    "image": { "path": "https://picsum.photos/seed/listing87/800/500", "filename": "listingimage" },
    "price": 13500,
    "location": "Gozo",
    "country": "Malta"
  },
  {
    "title": "Traditional Yurt in Mongolia",
    "description": "Sleep in an authentic ger (yurt) on the Mongolian steppe with a local nomadic family and horse riding at dawn.",
    "image": { "path": "https://picsum.photos/seed/listing88/800/500", "filename": "listingimage" },
    "price": 4000,
    "location": "Ulaanbaatar",
    "country": "Mongolia"
  },
  {
    "title": "Luxury Yacht Stay in Dubrovnik",
    "description": "Charter a luxury yacht anchored in Dubrovnik's old port — your floating suite on the Adriatic coast.",
    "image": { "path": "https://picsum.photos/seed/listing89/800/500", "filename": "listingimage" },
    "price": 32000,
    "location": "Dubrovnik",
    "country": "Croatia"
  },
  {
    "title": "Hillside Guesthouse in Bhutan",
    "description": "A warm guesthouse in the Paro valley of Bhutan, near the Tiger's Nest monastery with organic farm meals.",
    "image": { "path": "https://picsum.photos/seed/listing90/800/500", "filename": "listingimage" },
    "price": 9000,
    "location": "Paro",
    "country": "Bhutan"
  },
  {
    "title": "Historic Inn in Bruges",
    "description": "A 16th-century inn overlooking a canal in Bruges with wooden beams, Belgian beers, and cobblestone streets.",
    "image": { "path": "https://picsum.photos/seed/listing91/800/500", "filename": "listingimage" },
    "price": 11000,
    "location": "Bruges",
    "country": "Belgium"
  },
  {
    "title": "Coastal Cabin in Big Sur",
    "description": "A rustic cabin on the dramatic Big Sur coastline of California, perched above crashing Pacific waves.",
    "image": { "path": "https://picsum.photos/seed/listing92/800/500", "filename": "listingimage" },
    "price": 17500,
    "location": "Big Sur",
    "country": "USA"
  },
  {
    "title": "Floating Village Stay in Cambodia",
    "description": "An authentic stay in a floating village on Tonle Sap Lake in Cambodia with local boat rides and fishing.",
    "image": { "path": "https://picsum.photos/seed/listing93/800/500", "filename": "listingimage" },
    "price": 3200,
    "location": "Siem Reap",
    "country": "Cambodia"
  },
  {
    "title": "Ice Hotel Suite in Jukkasjärvi",
    "description": "Sleep inside a hand-carved ice suite in Sweden's famous ICEHOTEL with reindeer skins and an aurora-lit sky.",
    "image": { "path": "https://picsum.photos/seed/listing94/800/500", "filename": "listingimage" },
    "price": 30000,
    "location": "Jukkasjärvi",
    "country": "Sweden"
  },
  {
    "title": "Clifftop Cabin in Meteora",
    "description": "A dramatic cabin near the rock monasteries of Meteora, Greece — sunrise here feels otherworldly.",
    "image": { "path": "https://picsum.photos/seed/listing95/800/500", "filename": "listingimage" },
    "price": 9800,
    "location": "Meteora",
    "country": "Greece"
  },
  {
    "title": "Canal Boat in Birmingham",
    "description": "A charming narrowboat moored on Birmingham's canal network with a wood-burning stove and ducks at the window.",
    "image": { "path": "https://picsum.photos/seed/listing96/800/500", "filename": "listingimage" },
    "price": 7000,
    "location": "Birmingham",
    "country": "United Kingdom"
  },
  {
    "title": "Tepee Glamping in Arizona",
    "description": "A luxury tepee under the Arizona stars with fire pits, Native American cultural experiences, and red rock sunsets.",
    "image": { "path": "https://picsum.photos/seed/listing97/800/500", "filename": "listingimage" },
    "price": 9500,
    "location": "Sedona",
    "country": "USA"
  },
  {
    "title": "Lakehouse in Coorg",
    "description": "A private lakehouse in the coffee hills of Coorg, Karnataka surrounded by cardamom, pepper vines and mist.",
    "image": { "path": "https://picsum.photos/seed/listing98/800/500", "filename": "listingimage" },
    "price": 7500,
    "location": "Coorg",
    "country": "India"
  },
  {
    "title": "Cliffside Retreat in Cinque Terre",
    "description": "A colourful cliffside retreat in the five villages of Cinque Terre with sea breezes, pesto, and hiking trails.",
    "image": { "path": "https://picsum.photos/seed/listing99/800/500", "filename": "listingimage" },
    "price": 14000,
    "location": "Cinque Terre",
    "country": "Italy"
  },
  {
    "title": "Boutique Hotel Room in Hanoi",
    "description": "A unique stay in Hanoi that offers privacy, comfort, and a strong connection to the local landscape.",
    "image": { "path": "https://picsum.photos/seed/listing100/800/500", "filename": "listingimage" },
    "price": 7500,
    "location": "Hanoi",
    "country": "Vietnam"
  }
];


 initData = initData.map((obj) => ({
    ...obj,
    owner: "6a3a41b2eb6a6ed887217dfb"
}));
listings.insertMany(initData
).then(()=>{
  console.log("Insertion Sucessful");
})

