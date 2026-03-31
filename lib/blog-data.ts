export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string; // YYYY-MM-DD
  summary: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "honda-beat-daily-commuter-review",
    title: "Honda Beat: The Cebu Daily Commuter",
    category: "Honda Beat",
    date: "2025-01-12",
    summary:
      "How a fuel-efficient Honda Beat handles everyday rides through Cebu traffic.",
    content:
      "The Honda Beat has become a familiar sight along the streets of Cebu. Its light frame, responsive throttle, and efficient 110cc engine make it ideal for weaving through jeepneys and tricycles.\n\nFor students and working professionals, the low seat height and nimble handling inspire confidence even in tight barangay roads like those in Buagsong, Cordova. Maintenance is straightforward, parts are widely available, and the fuel economy helps stretch a limited allowance without sacrificing reliability.",
  },
  {
    slug: "customizing-your-honda-beat-on-a-budget",
    title: "Customizing Your Honda Beat on a Student Budget",
    category: "Honda Beat",
    date: "2025-02-05",
    summary:
      "Simple upgrades that make your Honda Beat feel personal without breaking the bank.",
    content:
      "You don't need a full show-bike budget to make your Honda Beat stand out. Start with essentials: brighter LED bulbs for safer night rides, grippier tires for Cebu's unpredictable roads, and a comfortable seat foam upgrade for longer trips.\n\nSmall visual touches like clean decals, bar-end mirrors, and a subtle underglow can add personality while staying tasteful. The key is to prioritize safety and reliability first—form should support function, not fight it.",
  },
  {
    slug: "honda-beat-vs-yamaha-mio-beginner-scooter",
    title: "Honda Beat vs Yamaha Mio: Choosing Your First Scooter",
    category: "Comparisons",
    date: "2025-03-10",
    summary:
      "A side-by-side look at two of the most popular entry-level scooters in the Philippines.",
    content:
      "Both the Honda Beat and Yamaha Mio are popular choices for first-time riders. The Beat leans toward fuel efficiency and a slimmer profile, making it easier to park and maneuver in crowded areas. The Mio, on the other hand, often feels a bit roomier with a slightly stronger presence on the road.\n\nIf your priority is saving on fuel and squeezing into tight spaces, the Beat is hard to beat. If you value a more planted feel with a bit more visual flair, the Mio becomes a strong alternative. In both cases, proper riding gear and regular maintenance matter more than the logo on the fairing.",
  },
  {
    slug: "weekend-ride-routes-around-cebu-on-a-scooter",
    title: "Weekend Ride Routes Around Cebu on a Scooter",
    category: "Ride Routes",
    date: "2025-04-03",
    summary:
      "Beginner-friendly routes you can explore on a Honda Beat or similar scooter.",
    content:
      "Cebu offers plenty of beginner-friendly ride routes that work well with a Honda Beat or any small-displacement scooter. Early morning rides from Cordova to SRP, sunset loops along the coastal roads, or calm detours to local food spots can turn a normal weekend into a mini-adventure.\n\nAlways check your tire pressure, brakes, and fuel before leaving. Bring water, basic tools, and ride with at least one buddy whenever possible. The goal is not speed but steady, safe exploration.",
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string) {
  return blogPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

export function filterPostsByDateSegments(segments: string[] | undefined) {
  if (!segments || segments.length === 0) {
    return blogPosts;
  }

  const [year, month, day] = segments;

  return blogPosts.filter((post) => {
    const [postYear, postMonth, postDay] = post.date.split("-");
    if (year && postYear !== year) return false;
    if (month && postMonth !== month) return false;
    if (day && postDay !== day) return false;
    return true;
  });
}

