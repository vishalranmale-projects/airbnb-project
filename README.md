Wanderlust 

Wanderlust is a full-stack Airbnb-inspired accommodation listing web application built with Node.js, Express, MongoDB, Mongoose, and EJS.

The application allows users to explore property listings, view detailed listing information, create and manage listings, leave reviews, and authenticate using local user accounts. It also integrates cloud-based image storage and map/location services.

Note: This is an educational project inspired by the functionality of Airbnb. It is not affiliated with or endorsed by Airbnb.

✨ Features

🏠 Browse accommodation/property listings

🔎 View detailed information about individual listings

➕ Create new listings

✏️ Edit existing listings

🗑️ Delete listings

⭐ Add and delete reviews

👤 User registration and login

🔐 Session-based authentication

🔒 Protected routes for authenticated actions

📸 Image upload support

☁️ Cloudinary integration for image storage

🗺️ Mapbox integration for location/geocoding functionality

✅ Joi-based server-side validation

⚠️ Flash messages for success/error notifications

🎨 EJS templating with reusable layouts

📱 Responsive frontend using Bootstrap/custom CSS

🧭 Method override support for PUT/DELETE requests

💾 MongoDB-backed persistent data

🛠️ Tech Stack

Backend

Node.js

Express.js 5

MongoDB

Mongoose

EJS

EJS-Mate

Passport.js

Passport-Local

Passport-Local-Mongoose

Express Session

Connect-Mongo

Multer

Joi

Method-Override

Connect-Flash

Cookie Parser

dotenv

Cloud & APIs

Cloudinary — image upload and cloud storage

Mapbox SDK — location/geocoding functionality

Frontend

HTML5

CSS3

JavaScript

EJS templates

Bootstrap

Bootstrap Icons

The current repository's package.json includes Express, Mongoose, EJS/EJS-Mate, Passport, Connect-Mongo, Cloudinary, Mapbox SDK, Multer, Joi and other supporting packages. citeturn1view0

🏗️ Application Architecture

                         ┌─────────────────────┐
                         │       Browser       │
                         │   HTML / CSS / JS   │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   Express Server    │
                         │      app.js         │
                         └──────────┬──────────┘
                                    │
              ┌─────────────────────┼──────────────────────┐
              │                     │                      │
              ▼                     ▼                      ▼
       ┌─────────────┐       ┌─────────────┐       ┌──────────────┐
       │   Routes    │       │ Controllers │       │  Middleware  │
       │ Listings    │       │ Users       │       │ Auth / Valid │
       │ Reviews     │       │ Listings    │       │ Errors       │
       │ Users       │       │ Reviews     │       │ Sessions     │
       └──────┬──────┘       └──────┬──────┘       └──────────────┘
              │                     │
              └──────────┬──────────┘
                         ▼
                 ┌───────────────┐
                 │    Mongoose   │
                 │     Models    │
                 └───────┬───────┘
                         ▼
                 ┌───────────────┐
                 │    MongoDB    │
                 └───────────────┘

       External Services
       ├── Cloudinary → Image Storage
       └── Mapbox     → Location / Geocoding

The main Express application configures sessions, Passport authentication, flash messages, static assets, EJS/EJS-Mate rendering, and routes for listings, reviews, and users. citeturn1view1

📁 Project Structure

airbnb-project/
│
├── classrom/
│
├── controllers/
│   └── Application request/business logic
│
├── models/
│   └── Mongoose database models
│
├── public/
│   ├── css/
│   ├── js/
│   └── other static assets
│
├── routes/
│   ├── listingsRoutes.js
│   ├── reviewsRoutes.js
│   └── userRoutes.js
│
├── uploads/
│   └── Uploaded files / temporary assets
│
├── utils/
│   └── Utility classes and helpers
│
├── views/
│   ├── Listings/
│   ├── layouts/
│   ├── includes/
│   └── user-related views
│
├── Schema.js
├── app.js
├── cloudconfig.js
├── init.js
├── middleware.js
├── validateReviewSchema.js
├── package.json
├── package-lock.json
└── .gitignore

The repository currently contains the major controllers, models, public, routes, uploads, utils, and views directories along with the application/configuration files. citeturn0view0

🚀 Getting Started

Prerequisites

Install the following before running the project:

Node.js

npm

MongoDB Atlas account or MongoDB server

Cloudinary account

Mapbox account/token

The repository currently specifies Node.js 24.14.0 in package.json. citeturn1view0

1. Clone the Repository

git clone https://github.com/vishalranmale-projects/airbnb-project.git
cd airbnb-project

2. Install Dependencies

npm install

3. Configure Environment Variables

Create a .env file in the project root.

Example:

ATLAS_DB_URL=your_mongodb_connection_string
SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_access_token

Use the exact variable names expected by the current configuration files in the repository. Never commit your .env file or API credentials to GitHub.

The application reads the MongoDB connection string from ATLAS_DB_URL and the session secret from SECRET. citeturn1view1

4. Start the Application

node app.js

The current Express application starts the server on:

http://localhost:3000

citeturn1view1

For development, you can use a process watcher such as Nodemon if you have it installed:

npx nodemon app.js

🗄️ Database

The application uses MongoDB with Mongoose for persistent storage.

The backend connects using the MongoDB connection string stored in:

ATLAS_DB_URL

The project also uses connect-mongo for MongoDB-backed session storage configuration. citeturn1view1turn1view0

Main Data Concepts

Listing

A listing represents an accommodation/property displayed on the platform.

Typical information includes:

Listing
├── Title
├── Description
├── Image
├── Price
├── Location
├── Country
├── Owner
└── Reviews

User

Users can create accounts and authenticate with Passport's local authentication strategy.

The application configures Passport serialization/deserialization and uses passport-local-mongoose for user authentication support. citeturn1view1turn1view0

Review

Users can submit reviews associated with listings. Review validation is handled using Joi-based validation middleware/schema.

🔐 Authentication & Authorization

Authentication is implemented using:

Passport.js

Passport-Local

Passport-Local-Mongoose

Express Session

Connect-Mongo

The application initializes Passport and Passport sessions and serializes/deserializes users for authenticated sessions. citeturn1view1

Protected operations can therefore require a logged-in user before allowing actions such as creating, editing, or deleting resources.

🖼️ Image Uploads

The project supports image uploads using:

Multer
    ↓
Cloudinary
    ↓
Cloud-based image storage

The repository includes Cloudinary, Multer, and multer-storage-cloudinary dependencies. citeturn1view0

This avoids relying exclusively on local storage for listing images.

☁️ Cloudinary Configuration

Cloudinary is used for managing uploaded listing images.

Typical environment variables are:

CLOUD_NAME=...
CLOUD_API_KEY=...
CLOUD_API_SECRET=...

Keep these values private.

🗺️ Mapbox Integration

The application includes the Mapbox SDK for location-related functionality.

Typical flow:

Listing Location
      ↓
Mapbox Geocoding
      ↓
Coordinates
      ↓
Map / Location Display

The repository includes @mapbox/mapbox-sdk as a dependency and a dedicated cloudconfig.js configuration file. citeturn1view0turn1view2

⭐ Reviews

Users can interact with listing reviews.

The review functionality includes:

Creating reviews

Validating review data

Displaying reviews

Deleting reviews where authorized

The project includes a dedicated reviewsRoutes.js route and validateReviewSchema.js validation file. citeturn0view0

🧩 Routing

The main application mounts routes for:

Listings

/ Listings

The current application mounts the listing routes under:

/Listings

Reviews

Review routes are mounted under:

/listings/:listing_id

Users

User authentication routes are mounted at:

/

These route registrations are visible in the current app.js. citeturn1view1

🛡️ Validation & Error Handling

The project uses Joi for validating request data.

It also contains custom error-handling utilities, including:

utils/ExpressError.js

Unmatched requests are passed to the application's error middleware, which renders an error page. citeturn1view1

🎨 Views

The application uses:

EJS

EJS-Mate

HTML

CSS

JavaScript

Bootstrap

EJS-Mate is configured as the application's EJS engine, allowing reusable layouts and partial templates. citeturn1view1

🔄 Request Flow

A typical listing request follows this flow:

User
 ↓
Browser
 ↓
Express Route
 ↓
Middleware
 ↓
Controller
 ↓
Mongoose Model
 ↓
MongoDB
 ↓
Controller
 ↓
EJS View
 ↓
Browser

For image uploads:

User
 ↓
Multer
 ↓
Cloudinary
 ↓
Image URL
 ↓
MongoDB Listing

For authentication:

Login Form
 ↓
Passport Local
 ↓
User Verification
 ↓
Express Session
 ↓
Authenticated User

📦 Important Dependencies

Package

Purpose

express

Web server and routing

mongoose

MongoDB object modeling

ejs

Server-side HTML templating

ejs-mate

EJS layouts/partials

passport

Authentication

passport-local

Local authentication strategy

passport-local-mongoose

Mongoose authentication helper

express-session

Session management

connect-mongo

MongoDB session store

cloudinary

Cloud image storage

multer

File uploads

multer-storage-cloudinary

Multer + Cloudinary integration

@mapbox/mapbox-sdk

Map/location services

joi

Data validation

connect-flash

Flash messages

method-override

PUT/DELETE form support

dotenv

Environment configuration

These packages are taken from the repository's current package.json. citeturn1view0

🔒 Security Notes

Never commit the following to GitHub:

.env
MongoDB credentials
Cloudinary API secrets
Mapbox private tokens
Session secrets

Recommended .gitignore entries:

node_modules/
.env
.DS_Store
uploads/*

If a secret has already been pushed to GitHub, revoke/rotate it immediately.

🐛 Troubleshooting

MongoDB Connection Error

Check:

ATLAS_DB_URL

MongoDB username/password

MongoDB Atlas network access

Database user permissions

Internet connection

Cloudinary Upload Error

Check:

Cloudinary cloud name

API key

API secret

Upload configuration

Environment variable names

Mapbox Error

Check:

Mapbox token

Token permissions

Geocoding configuration

Environment variable configuration

Session/Login Problems

Check:

SECRET

MongoDB connection

Passport configuration

Browser cookies

Session configuration

🚧 Future Improvements

Potential improvements for the project:

🔍 Advanced listing search

🎯 Search by location

💰 Price-range filtering

🏷️ Category-based filtering

📅 Booking/reservation system

❤️ Wishlist/favorites

💳 Online payment integration

📧 Booking confirmation emails

⭐ Rating system improvements

🧑‍💼 Host dashboard

👤 User profile pages

📱 Better mobile-first UI

🖼️ Image gallery/lightbox

🔔 Notifications

☁️ Production deployment

🧪 Automated testing

🔒 Improved security headers and rate limiting

📚 Learning Outcomes

This project demonstrates practical experience with:

RESTful routing

MVC architecture

Express.js

MongoDB

Mongoose

Authentication and authorization

Sessions and cookies

Middleware

Server-side validation

File uploads

Cloudinary

Mapbox/geocoding

EJS templating

Error handling

CRUD operations

Git/GitHub workflow

🤝 Contributing

If you want to improve this project:

Fork the repository.

Create a feature branch.

git checkout -b feature/your-feature

Make your changes.

Test the application.

Commit your changes.

git commit -m "Add your feature"

Push your branch.

git push origin feature/your-feature

Open a Pull Request.

👨‍💻 Author

Vishal Ranmale

GitHub:
https://github.com/vishalranmale-projects

Project Repository:
https://github.com/vishalranmale-projects/airbnb-project

📄 License

The repository currently specifies the ISC License in its package.json. citeturn1view0

⭐ If you found this project useful, consider giving the repository a star!
