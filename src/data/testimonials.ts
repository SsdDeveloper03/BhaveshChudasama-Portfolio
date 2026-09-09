export type TeamTestimonial = {
  name: string;
  role: string;
  videoUrl: string;
  videoAvailable: boolean;
};

export type GoogleReview = {
  authorName: string;
  body: string;
};

export type ClientTestimonial = {
  authorName: string;
  role: string;
  body: string;
  category: string;
};

// Set videoAvailable to true only after the matching file has been added to public/videos/testimonials.
export const teamTestimonials: TeamTestimonial[] = [
  { name: "Smit Chavda", role: "Senior Developer", videoUrl: "/videos/testimonials/smit-chavda.mp4", videoAvailable: false },
  { name: "Sneha", role: "HR", videoUrl: "/videos/testimonials/sneha.mp4", videoAvailable: false },
  { name: "Vivek", role: "Developer", videoUrl: "/videos/testimonials/vivek.mp4", videoAvailable: false },
];

export const googleReviews: GoogleReview[] = [
  {
    authorName: "DCM Store Sonipat",
    body: "Very Nice Software developers... These type of Persons especially Bhavesh J Chudasama are really hard to find & I really appreciate to the services delivered by him can't be done by large GIANTS like Tally & all in the Market...",
  },
  {
    authorName: "Raaj Gala",
    body: "Me self Raaj Gala from Mumbai. Since long time we are using the software, it is very good & very easy to operate & Mr Bhavesh Chudasma is very cooperative wn ever needed.",
  },
  {
    authorName: "Pranay",
    body: "Great Software for Tailoring & Ready-made clothing business\n\nEase of Use & Customer Support by Bhavesh ji & his team. We got right solution...",
  },
  {
    authorName: "Afsar Khan",
    body: "Overall experience is very good. 100% recommend to try this software. They are having very good expertise and experience in tailoring business and software development. Best software in budget with timely and reliable service makes us happy. Really easy and helpful software for our business.",
  },
  {
    authorName: "National Tailors Baran",
    body: "Great experience, less time consumed & perfect software",
  },
];

export const clientTestimonials: ClientTestimonial[] = [
  {
    authorName: "Shahriar",
    role: "Owner",
    category: "Tailoring business",
    body: "It is the perfect software for our tailoring business. The software is very easy to use, and all features have good details so we can manage our business well. Moreover, we get support from the team properly, even if they are from another country.",
  },
  {
    authorName: "J K.",
    role: "Owner",
    category: "Tailoring shop management",
    body: "Very helpful in overall tailoring shop management. Every routine work is managed in a good way, and it is easy to manage customers, deliveries, measurements, accounting, and more.",
  },
  {
    authorName: "Expo",
    role: "Owner",
    category: "Order management",
    body: "Using tailoring software, we are making customer orders efficiently and storing measurement details accurately. It helps us a lot in the timely delivery of orders.",
  },
  {
    authorName: "Harnek G.",
    role: "Owner",
    category: "Business growth",
    body: "We are using this software since 1+ year and we are growing good with Team Sunrise. They are rendering good support and the software is also very useful. Overall satisfied.",
  },
  {
    authorName: "Vazid S.",
    role: "Owner",
    category: "Tailoring solutions",
    body: "Sunrise tailoring software is a great product for small and large tailoring business solutions. It gave us many features that we never had before. We are very much satisfied with the overall software implementation process.",
  },
  {
    authorName: "Afsar K.",
    role: "Owner",
    category: "Tailoring software",
    body: "Overall experience is very good. 100% recommend trying this software. They have very good expertise and experience in tailoring business and software development. Best software in budget with timely and reliable service.",
  },
  {
    authorName: "Umesh G.",
    role: "Owner",
    category: "Reports and billing",
    body: "Sunrise Tailoring Software is really helpful for tailoring business. We can print measurement and invoice copies in the required format. Very useful reports help us plan worker work, and we can easily see outstanding amounts and old order details.",
  },
  {
    authorName: "Rinal",
    role: "Owner",
    category: "Boutique operations",
    body: "It can be tailored to fit nearly any need. Sunrise makes the workday simpler and more efficient. Preparing a tailoring invoice for a customer and a measurement sheet for a worker was never this easy before.",
  },
  {
    authorName: "Jatin",
    role: "Owner",
    category: "Business management",
    body: "It is very useful software to upgrade my business and work style. I do every activity of my tailoring shop in this software. Sunrise made our work easy, and we get all details very fast.",
  },
  {
    authorName: "Yusuf",
    role: "Owner",
    category: "Tailoring software",
    body: "I found the best tailoring software and a reliable software developer. They are always happy to help, so we received timely support and guidance which helped us a lot to grow our business.",
  },
];
