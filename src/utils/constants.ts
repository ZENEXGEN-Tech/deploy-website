export const MetaData: Metadata = {
  URL: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  keywords: [
    "Zenexgen",
    "technology",
    "innovation",
    "services",
    "careers",
    "blog",
    "contact",
    "about us",
  ], // Relevant keywords based on project content
  title: {
    default: "Zenexgen - Innovating the Future", // Default title
    template: "%s | Zenexgen", // Title template
  },
  description:
    "Zenexgen is a leading technology company focused on innovation and providing top-notch services to our clients. Explore our offerings, read our blog, and learn more about us.", // Description
  opengraph: {
    title: "Zenexgen - Innovating the Future", // Open Graph title
    description:
      "Discover Zenexgen, where technology meets innovation. Learn about our services, read our insights, and join our team.", // Open Graph description
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`, // Open Graph URL
    siteName: "Zenexgen", // Site name
    locale: "en_US", // Locale
    type: "website", // Type of content
  },
  robots: {
    index: true, // Allow search engines to index the page
    follow: true, // Allow search engines to follow links
  },
};

export type Metadata = {
  URL: string;
  keywords: string[];
  title: {
    default: string;
    template: string;
  };
  description: string;
  opengraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    locale: string;
    type: string;
  };
  robots: {
    index: boolean;
    follow: boolean;
  };
};
