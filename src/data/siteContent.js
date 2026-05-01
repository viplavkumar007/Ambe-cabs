// src/data/siteContent.js
// Single source of truth for all website content

export const brand = {
  name: "Ambe Cabs",
  tagline: "Apki Manzil, Humara Saath",
  phone: "9001693314",
  phoneDisplay: "+91 90016 93314",
  whatsapp: "919001693314",
  email: "ambecabsudaipur@gmail.com",
  city: "Udaipur",
  state: "Rajasthan",
  address: "Udaipur, Rajasthan — 313001",
  logoText: "AC",
};

export const hero = {
  headline: "Udaipur's Most Trusted Cab Service",
  subheadline: "Experience the City of Lakes in comfort and style. Premium rides for every journey — from palace gates to airport terminals.",
  badge: "Rajasthan's #1 Rated Cab Partner",
  cta: {
    primary: "Book via WhatsApp",
    secondary: "Call Now",
  },
  stats: [
    { value: "5000+", label: "Happy Passengers" },
    { value: "10+", label: "Years Experience" },
    { value: "24/7", label: "Available" },
    { value: "100%", label: "Safe & Reliable" },
  ],
};

export const services = [
  {
    id: 1,
    icon: "Plane",
    title: "Airport Transfers",
    description: "Punctual, comfortable pickups and drops to Maharana Pratap Airport. Flight tracking included — we wait if your flight is delayed.",
    features: ["Flight Tracking", "Meet & Greet", "Luggage Assistance", "AC Vehicles"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
  },
  {
    id: 2,
    icon: "Camera",
    title: "Udaipur Sightseeing",
    description: "Explore the City of Lakes with our expert local drivers. From Lake Pichola to Sajjangarh — discover every jewel of Udaipur.",
    features: ["City Palace", "Lake Pichola", "Jagdish Temple", "Saheliyon ki Bari"],
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80",
  },
  {
    id: 3,
    icon: "MapPin",
    title: "Local City Transfers",
    description: "Quick, reliable rides within Udaipur. Whether it's shopping at Hathi Pol Bazar or dinner at a rooftop restaurant — we're always ready.",
    features: ["On-Demand Booking", "Hourly Packages", "Multiple Stops", "Clean Cabs"],
    image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=600&q=80",
  },
  {
    id: 4,
    icon: "Route",
    title: "Outstation Trips",
    description: "Travel beyond Udaipur with ease. Chittorgarh, Mount Abu, Jodhpur, Jaipur — we cover all major Rajasthan destinations.",
    features: ["AC/Non-AC Options", "Experienced Drivers", "Flexible Schedule", "Transparent Fares"],
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
  },
  {
    id: 5,
    icon: "Users",
    title: "Corporate Travel",
    description: "Reliable transport solutions for businesses. Employee shuttles, client pickups, conference transfers — handled professionally.",
    features: ["Monthly Contracts", "GST Billing", "Priority Booking", "Dedicated Fleet"],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
  },
  {
    id: 6,
    icon: "Heart",
    title: "Wedding & Events",
    description: "Make your special moments unforgettable. Decorated vehicles, convoy arrangements, and guest transfers for weddings and events.",
    features: ["Decorated Vehicles", "Convoy Service", "Guest Management", "On-Time Guarantee"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
  },
];

export const about = {
  headline: "Born in Udaipur. Driven by Trust.",
  body: "Ambe Cabs was founded with a simple promise — to give every passenger the safety, comfort, and reliability they deserve. Over a decade of serving locals, tourists, and corporate clients across Udaipur and Rajasthan has made us the city's most recommended cab service.",
  points: [
    "Verified & licensed drivers with 5+ years experience",
    "GPS-tracked fleet for your complete safety",
    "Zero-surge pricing — what you see is what you pay",
    "Serving 5000+ passengers with a 4.9★ average rating",
  ],
  image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
};

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Booked Ambe Cabs for our Udaipur honeymoon sightseeing — the driver was incredibly knowledgeable about the city. Punctual, polite, and the car was spotless. Highly recommend!",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rajesh Gupta",
    location: "Delhi",
    rating: 5,
    text: "Needed an early morning airport drop at 4 AM. They were 10 minutes early! No hassle, no surge pricing. Will always use Ambe Cabs when in Udaipur.",
    avatar: "RG",
  },
  {
    id: 3,
    name: "Ananya Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "Corporate account with Ambe Cabs for our Udaipur office. GST billing, professional drivers, and their monthly package pricing is unbeatable. Reliable partners.",
    avatar: "AP",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Jaipur",
    rating: 5,
    text: "Took their outstation package to Mount Abu — smooth ride, driver had great knowledge of the route, and arrived exactly on time. Will book again.",
    avatar: "VS",
  },
];

export const faqs = [
  {
    q: "How do I book a cab with Ambe Cabs?",
    a: "You can book instantly via WhatsApp at +91 90016 93314, call us directly, or fill out the enquiry form on this page. We respond within minutes, 24/7.",
  },
  {
    q: "Do you offer fixed-price outstation packages?",
    a: "Yes! We have transparent, fixed-price packages for Chittorgarh, Mount Abu, Jodhpur, Jaipur, and other major Rajasthan destinations. No hidden charges, ever.",
  },
  {
    q: "Are your drivers verified and licensed?",
    a: "All Ambe Cabs drivers are police-verified, hold valid commercial licenses, and have a minimum of 5 years of professional driving experience.",
  },
  {
    q: "Can I book for early morning or late-night airport transfers?",
    a: "Absolutely. We operate 24 hours a day, 7 days a week including all holidays. Early morning and late-night transfers are our specialty.",
  },
  {
    q: "Do you provide AC vehicles?",
    a: "Yes, our entire fleet consists of well-maintained, air-conditioned vehicles ranging from sedans to SUVs depending on your group size and preferences.",
  },
  {
    q: "Can you arrange decorated vehicles for weddings?",
    a: "Yes! We offer beautifully decorated vehicles, convoy arrangements, and complete guest transportation management for weddings and special events in and around Udaipur.",
  },
  {
    q: "Is GST billing available for corporate clients?",
    a: "Yes, we provide proper GST-compliant invoices for all corporate accounts. We also offer monthly contract packages for businesses with regular travel needs.",
  },
];

export const contactInfo = {
  phone: "9001693314",
  phoneDisplay: "+91 90016 93314",
  whatsapp: "919001693314",
  email: "ambecabsudaipur@gmail.com",
  address: "Udaipur, Rajasthan — 313001",
  mapUrl: "https://maps.google.com/?q=Udaipur,Rajasthan",
  whatsappMessage: "Hello! I'd like to book a cab with Ambe Cabs. Please provide availability and pricing.",
};

export const ctaStrip = {
  headline: "Ready to Explore Udaipur?",
  subtext: "Book your ride in under 60 seconds. Available 24/7.",
  cta: "Book on WhatsApp Now",
};

export const footer = {
  tagline: "Apki Manzil, Humara Saath",
  links: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  copyright: `© ${new Date().getFullYear()} Ambe Cabs. All rights reserved. Udaipur, Rajasthan.`,
};
