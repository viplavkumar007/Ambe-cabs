// src/data/siteContent.js
// Single source of truth for all website content

import corporateTravelImage from '../assets/corporate-travel.jpeg'
import eklingjiTempleImage from '../assets/eklingji-temple.png'
import hawaMahalImage from '../assets/hawa-mahal.jpg'
import forceUrbaniaImage from '../assets/force-urbania.jpg'
import miniBusImage from '../assets/mini-bus.jpg'
import ranakpurTempleImage from '../assets/ranakpur-temple.jpg'

export const brand = {
  name: 'Ambe Cabs',
  tagline: 'Apki Manzil, Humara Saath',
  phone: '9001693314',
  phoneDisplay: '+91 90016 93314',
  whatsapp: '919001693314',
  email: 'ambecabsudaipur@gmail.com',
  city: 'Udaipur',
  state: 'Rajasthan',
  address: 'Udaipur, Rajasthan - 313001',
  logoText: 'AC',
}

export const hero = {
  headline: "Udaipur's Most Trusted Cab Service",
  subheadline: 'Experience the City of Lakes in comfort and style. Premium rides for every journey - from palace gates to airport terminals.',
  badge: "Rajasthan's #1 Rated Cab Partner",
  cta: {
    primary: 'Book via WhatsApp',
    secondary: 'Call Now',
  },
  stats: [
    { value: '5000+', label: 'Happy Passengers' },
    { value: '10+', label: 'Years Experience' },
    { value: '24/7', label: 'Available' },
    { value: '100%', label: 'Safe & Reliable' },
  ],
}

export const services = [
  {
    id: 1,
    icon: 'Plane',
    title: 'Airport Transfers',
    description: 'Punctual, comfortable pickups and drops to Maharana Pratap Airport. Flight tracking included - we wait if your flight is delayed.',
    features: ['Flight Tracking', 'Meet & Greet', 'Luggage Assistance', 'AC Vehicles'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
  },
  {
    id: 2,
    icon: 'Camera',
    title: 'Udaipur Sightseeing',
    description: 'Explore the City of Lakes with our expert local drivers. From Lake Pichola to Sajjangarh - discover every jewel of Udaipur.',
    features: ['City Palace', 'Lake Pichola', 'Jagdish Temple', 'Saheliyon ki Bari'],
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80',
  },
  {
    id: 3,
    icon: 'MapPin',
    title: 'Local City Transfers',
    description: "Quick, reliable rides within Udaipur. Whether it's shopping at Hathi Pol Bazar or dinner at a rooftop restaurant - we're always ready.",
    features: ['On-Demand Booking', 'Hourly Packages', 'Multiple Stops', 'Clean Cabs'],
    image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=600&q=80',
  },
  {
    id: 4,
    icon: 'Route',
    title: 'Outstation Trips',
    description: 'Travel beyond Udaipur with ease. Chittorgarh, Mount Abu, Jodhpur, Jaipur - we cover all major Rajasthan destinations.',
    features: ['AC/Non-AC Options', 'Experienced Drivers', 'Flexible Schedule', 'Transparent Fares'],
    image: hawaMahalImage,
  },
  {
    id: 5,
    icon: 'Users',
    title: 'Corporate Travel',
    description: 'Reliable transport solutions for businesses. Employee shuttles, client pickups, conference transfers - handled professionally.',
    features: ['Monthly Contracts', 'GST Billing', 'Priority Booking', 'Dedicated Fleet'],
    image: corporateTravelImage,
  },
  {
    id: 6,
    icon: 'Heart',
    title: 'Wedding & Events',
    description: 'Make your special moments unforgettable. Decorated vehicles, convoy arrangements, and guest transfers for weddings and events.',
    features: ['Decorated Vehicles', 'Convoy Service', 'Guest Management', 'On-Time Guarantee'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  },
]

export const cabFleet = [
  {
    id: 1,
    name: 'Sedan Dzire',
    type: 'Sedan',
    seats: '4 passengers',
    luggage: '2 cabin bags + 2 suitcases',
    useCase: 'Airport drops, station pickups, local city travel',
    note: 'A dependable sedan option for local Udaipur rides, station pickups, and airport transfers.',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Maruti%20Suzuki%20Dzire%20VXi%20VVT%20%28front%29.JPG',
    ctaMessage: "Hello! I'd like to enquire about a Sedan Dzire cab in Udaipur.",
  },
  {
    id: 2,
    name: 'Toyota Etios',
    type: 'Sedan',
    seats: '4 passengers',
    luggage: '2 medium suitcases + cabin bags',
    useCase: 'City rides, railway transfers, economical outstation sedan bookings',
    note: 'A commonly used fleet sedan suited for practical travel and smooth intercity cab trips.',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Toyota%20Etios%2C%20by%20UNICAB.jpg',
    ctaMessage: "Hello! I'd like to enquire about a Toyota Etios cab in Udaipur.",
  },
  {
    id: 3,
    name: 'Innova Crysta',
    type: 'MPV',
    seats: '6-7 passengers',
    luggage: '4 large bags',
    useCase: 'Family sightseeing, outstation travel, premium pickup and drop',
    note: 'A trusted premium MPV for family groups, comfortable highway runs, and Rajasthan tours.',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Toyota%20Innova%20Crysta%202.4%20Z%20front%20right.jpg',
    ctaMessage: "Hello! I'd like to enquire about an Innova Crysta in Udaipur.",
  },
  {
    id: 4,
    name: 'Innova Hycross',
    type: 'Premium MPV',
    seats: '6-7 passengers',
    luggage: '4 large bags',
    useCase: 'Premium family travel, executive transfers, luxury outstation rides',
    note: 'A newer premium Innova option for guests who want extra comfort and an upscale travel feel.',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Toyota%20Zenix%202.0%20V%202023%20%282%29.jpg',
    ctaMessage: "Hello! I'd like to enquire about an Innova Hycross in Udaipur.",
  },
  {
    id: 5,
    name: 'Force Urbania',
    type: 'Premium Van',
    seats: '10-17 passengers',
    luggage: 'Group luggage space',
    useCase: 'Tour groups, wedding guests, corporate team movement',
    note: 'A premium shared-mobility van best suited for larger groups that want more comfort than a regular traveller.',
    image: forceUrbaniaImage,
    ctaMessage: "Hello! I'd like to enquire about a Force Urbania in Udaipur.",
  },
  {
    id: 6,
    name: 'Mini Buses',
    type: 'Group Shuttle',
    seats: '18-27 passengers',
    luggage: 'Depends on seating layout',
    useCase: 'School trips, group tours, event transfers, staff movement',
    note: 'Suitable for medium-sized groups travelling together within Udaipur or on nearby routes.',
    image: miniBusImage,
    ctaMessage: "Hello! I'd like to enquire about mini buses in Udaipur.",
  },
  {
    id: 7,
    name: 'Volvo 9600',
    type: 'Luxury Coach',
    seats: '35+ passengers',
    luggage: 'Large coach luggage capacity',
    useCase: 'Luxury group tours, destination weddings, premium long-distance travel',
    note: 'A high-end luxury coach option for large groups that want a more premium bus experience.',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Airavat%20Club%20class%202.0.png',
    ctaMessage: "Hello! I'd like to enquire about a Volvo 9600 coach in Udaipur.",
  },
  {
    id: 8,
    name: 'AC Buses',
    type: 'Air-Conditioned Bus',
    seats: '30+ passengers',
    luggage: 'Varies by bus type',
    useCase: 'Corporate events, pilgrim groups, weddings, large sightseeing groups',
    note: 'Best for comfortable large-group movement when air-conditioned travel is required throughout the journey.',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/DTC%20AC%20Bus.jpg',
    ctaMessage: "Hello! I'd like to enquire about AC buses in Udaipur.",
  },
]

export const tourPackages = [
  {
    id: 1,
    title: 'Udaipur Local Sightseeing',
    duration: 'Full Day',
    route: 'City Palace, Lake Pichola, Fateh Sagar, Sajjangarh, Saheliyon Ki Bari',
    description: 'A classic City of Lakes tour for families, couples, and first-time visitors who want Udaipur highlights in one comfortable day.',
    highlights: ['Hotel pickup and drop', 'Flexible stop timing', 'Perfect for same-day sightseeing'],
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80',
    ctaMessage: "Hello! I'd like details for the Udaipur local sightseeing tour package.",
  },
  {
    id: 2,
    title: 'Udaipur + Nathdwara + Eklingji',
    duration: '1 Day',
    route: 'Udaipur, Eklingji Temple, Nathdwara, Shrinathji Darshan',
    description: 'A spiritual and heritage circuit covering two of the most popular temple destinations near Udaipur with a relaxed private cab experience.',
    highlights: ['Ideal for family pilgrims', 'Comfortable darshan travel', 'Easy same-day return'],
    image: eklingjiTempleImage,
    ctaMessage: "Hello! I'd like details for the Udaipur, Nathdwara, and Eklingji tour package.",
  },
  {
    id: 3,
    title: 'Kumbhalgarh + Ranakpur Tour',
    duration: '1 Day',
    route: 'Udaipur, Ranakpur Jain Temple, Kumbhalgarh Fort',
    description: 'Explore Rajasthan’s grand marble architecture and hill fort landscapes on one of the most popular nearby day trips from Udaipur.',
    highlights: ['Best for history lovers', 'Scenic Aravalli drive', 'Private cab for couples and groups'],
    image: ranakpurTempleImage,
    ctaMessage: "Hello! I'd like details for the Kumbhalgarh and Ranakpur tour package from Udaipur.",
  },
  {
    id: 4,
    title: 'Mount Abu Getaway',
    duration: '2 Days / 1 Night',
    route: 'Udaipur, Mount Abu, Nakki Lake, Dilwara Temple, Sunset Point',
    description: 'A refreshing hill-station package for guests looking to combine cool weather, scenic viewpoints, and a relaxed overnight escape.',
    highlights: ['Great weekend trip', 'Comfortable outstation ride', 'Custom pickup and return timing'],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
    ctaMessage: "Hello! I'd like details for the Mount Abu getaway tour package from Udaipur.",
  },
]

export const about = {
  headline: 'Born in Udaipur. Driven by Trust.',
  body: "Ambe Cabs was founded with a simple promise - to give every passenger the safety, comfort, and reliability they deserve. Over a decade of serving locals, tourists, and corporate clients across Udaipur and Rajasthan has made us the city's most recommended cab service.",
  points: [
    'Verified & licensed drivers with 5+ years experience',
    'GPS-tracked fleet for your complete safety',
    'Zero-surge pricing - what you see is what you pay',
    'Serving 5000+ passengers with a 4.9-star average rating',
  ],
  image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80',
}

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Booked Ambe Cabs for our Udaipur honeymoon sightseeing - the driver was incredibly knowledgeable about the city. Punctual, polite, and the car was spotless. Highly recommend!',
    avatar: 'PS',
  },
  {
    id: 2,
    name: 'Rajesh Gupta',
    location: 'Delhi',
    rating: 5,
    text: 'Needed an early morning airport drop at 4 AM. They were 10 minutes early! No hassle, no surge pricing. Will always use Ambe Cabs when in Udaipur.',
    avatar: 'RG',
  },
  {
    id: 3,
    name: 'Ananya Patel',
    location: 'Ahmedabad',
    rating: 5,
    text: 'Corporate account with Ambe Cabs for our Udaipur office. GST billing, professional drivers, and their monthly package pricing is unbeatable. Reliable partners.',
    avatar: 'AP',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Jaipur',
    rating: 5,
    text: 'Took their outstation package to Mount Abu - smooth ride, driver had great knowledge of the route, and arrived exactly on time. Will book again.',
    avatar: 'VS',
  },
]

export const faqs = [
  {
    q: 'How do I book a cab with Ambe Cabs?',
    a: 'You can book instantly via WhatsApp at +91 90016 93314, call us directly, or fill out the enquiry form on this page. We respond within minutes, 24/7.',
  },
  {
    q: 'Do you offer fixed-price outstation packages?',
    a: 'Yes! We have transparent, fixed-price packages for Chittorgarh, Mount Abu, Jodhpur, Jaipur, and other major Rajasthan destinations. No hidden charges, ever.',
  },
  {
    q: 'Are your drivers verified and licensed?',
    a: 'All Ambe Cabs drivers are police-verified, hold valid commercial licenses, and have a minimum of 5 years of professional driving experience.',
  },
  {
    q: 'Can I book for early morning or late-night airport transfers?',
    a: 'Absolutely. We operate 24 hours a day, 7 days a week including all holidays. Early morning and late-night transfers are our specialty.',
  },
  {
    q: 'Do you provide AC vehicles?',
    a: 'Yes, our entire fleet consists of well-maintained, air-conditioned vehicles ranging from sedans to SUVs depending on your group size and preferences.',
  },
  {
    q: 'Can you arrange decorated vehicles for weddings?',
    a: 'Yes! We offer beautifully decorated vehicles, convoy arrangements, and complete guest transportation management for weddings and special events in and around Udaipur.',
  },
  {
    q: 'Is GST billing available for corporate clients?',
    a: 'Yes, we provide proper GST-compliant invoices for all corporate accounts. We also offer monthly contract packages for businesses with regular travel needs.',
  },
]

export const contactInfo = {
  phone: '9001693314',
  phoneDisplay: '+91 90016 93314',
  whatsapp: '919001693314',
  email: 'ambecabsudaipur@gmail.com',
  address: 'Udaipur, Rajasthan - 313001',
  mapUrl: 'https://maps.google.com/?q=Udaipur,Rajasthan',
  whatsappMessage: "Hello! I'd like to book a cab with Ambe Cabs. Please provide availability and pricing.",
}

export const ctaStrip = {
  headline: 'Ready to Explore Udaipur?',
  subtext: 'Book your ride in under 60 seconds. Available 24/7.',
  cta: 'Book on WhatsApp Now',
}

export const footer = {
  tagline: 'Apki Manzil, Humara Saath',
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Tour Packages', href: '#tour-packages' },
    { label: 'Our Fleet', href: '#cars' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  copyright: `Copyright ${new Date().getFullYear()} Ambe Cabs. All rights reserved. Udaipur, Rajasthan.`,
}
