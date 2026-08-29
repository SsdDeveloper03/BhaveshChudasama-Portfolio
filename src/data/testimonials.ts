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
