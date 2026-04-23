import assets from "../assets/img/download (2).jfif";

export interface RummyApp {
 id: number;
  slug: string;
  name: string;
  image: string; // ✅ added
  tagline: string;
  rating: number;
  reviews: string;
  bonus: string;
  minWithdraw: string;
  category: string[];
  featured?: boolean;
  color: string;
  description: string;
  pros: string[];
  cons: string[];
  paymentMethods: string[];
  platforms: string[];
  gameTypes: string[];
  maxBonus: string;
  referralBonus: string;
  established: string;
}

export const rummyApps: RummyApp[] = [
  {
    id: 1,
    slug: "rummy-gold",
    name: "Rummy Gold",
    image: "https://source.unsplash.com/400x300/?rummy,card-game",
    tagline: "India's #1 Rummy App",
    rating: 4.8,
    reviews: "1.2M",
    bonus: "₹5,000",
    minWithdraw: "₹100",
    category: ["top", "cash"],
    featured: true,
    color: "from-amber-500 to-orange-500",
    description: "Popular rummy platform with fast withdrawals and smooth gameplay.",
    pros: ["Fastest withdrawal", "24/7 support", "Multiple variants"],
    cons: ["High competition"],
    paymentMethods: ["UPI", "Paytm", "Bank Transfer", "PhonePe"],
    platforms: ["Android", "iOS", "Web"],
    gameTypes: ["Points Rummy", "Pool Rummy", "Deals Rummy"],
    maxBonus: "₹5,000",
    referralBonus: "₹1,000",
    established: "2018",
  },
  {
    id: 2,
    slug: "teen-patti-star",
    name: "Teen Patti Star",
    image: "https://source.unsplash.com/400x300/?poker,casino",
    tagline: "Play & Win Real Cash",
    rating: 4.7,
    reviews: "980K",
    bonus: "₹3,500",
    minWithdraw: "₹50",
    category: ["top", "new"],
    featured: true,
    color: "from-rose-500 to-pink-500",
    description: "Teen Patti + Rummy in one platform.",
    pros: ["Low withdrawal ₹50", "Nice UI", "Daily chips"],
    cons: ["New platform"],
    paymentMethods: ["UPI", "Paytm", "Google Pay"],
    platforms: ["Android", "iOS"],
    gameTypes: ["Teen Patti", "Rummy", "Poker"],
    maxBonus: "₹3,500",
    referralBonus: "₹500",
    established: "2022",
  },
  {
    id: 3,
    slug: "rummycircle",
    name: "RummyCircle",
    image: "https://www.linkedin.com/posts/all-rummy-app-135627317_hello-friends-once-again-i-have-brought-activity-7214198651999465472-f9yc",
    tagline: "Trusted by 5Cr+ Players",
    rating: 4.6,
    reviews: "2.1M",
    bonus: "₹2,000",
    minWithdraw: "₹100",
    category: ["top", "cash"],
    color: "from-emerald-500 to-teal-500",
    description: "Trusted rummy platform with huge player base.",
    pros: ["Trusted brand", "Large community", "Secure gameplay"],
    cons: ["Lower bonus"],
    paymentMethods: ["UPI", "Paytm", "Net Banking"],
    platforms: ["Android", "iOS", "Web"],
    gameTypes: ["Points", "Pool", "Deals"],
    maxBonus: "₹2,000",
    referralBonus: "₹500",
    established: "2012",
  },
  {
    id: 4,
    slug: "junglee-rummy",
    name: "Junglee Rummy",
    image: "https://source.unsplash.com/400x300/?card-game,table",
    tagline: "Best Rummy Experience",
    rating: 4.5,
    reviews: "750K",
    bonus: "₹5,250",
    minWithdraw: "₹200",
    category: ["cash"],
    color: "from-violet-500 to-purple-500",
    description: "Premium rummy gameplay with high bonus.",
    pros: ["High bonus", "Fair play", "Quick support"],
    cons: ["High withdrawal limit"],
    paymentMethods: ["UPI", "Bank Transfer"],
    platforms: ["Android", "iOS", "Web"],
    gameTypes: ["Points", "Pool", "Deals"],
    maxBonus: "₹5,250",
    referralBonus: "₹1,500",
    established: "2015",
  },
  {
    id: 5,
    slug: "a23-rummy",
    name: "A23 Rummy",
    image: "RHO.V1/src/img/download (3).jfif",
    tagline: "Play Rummy Online",
    rating: 4.4,
    reviews: "1.5M",
    bonus: "₹10,000",
    minWithdraw: "₹100",
    category: ["top", "cash"],
    color: "from-blue-500 to-indigo-500",
    description: "High bonus + big tournaments.",
    pros: ["Huge bonus", "Big tournaments"],
    cons: ["Bonus conditions complex"],
    paymentMethods: ["UPI", "Cards"],
    platforms: ["Android", "iOS", "Web"],
    gameTypes: ["Points", "Pool", "Deals"],
    maxBonus: "₹10,000",
    referralBonus: "₹2,000",
    established: "2007",
  },
  {
    id: 6,
    slug: "mpl-rummy",
    name: "MPL Rummy",
    image: "https://source.unsplash.com/400x300/?gaming,smartphone",
    tagline: "Multi-Game Platform",
    rating: 4.6,
    reviews: "3.2M",
    bonus: "₹7,500",
    minWithdraw: "₹50",
    category: ["top", "new"],
    color: "from-sky-500 to-cyan-500",
    description: "Rummy + 60+ games in one app.",
    pros: ["Multi games", "Low withdrawal"],
    cons: ["Distracting"],
    paymentMethods: ["UPI", "Paytm"],
    platforms: ["Android", "iOS"],
    gameTypes: ["Rummy", "Fantasy"],
    maxBonus: "₹7,500",
    referralBonus: "₹750",
    established: "2018",
  },
];

export const categories = [
  { id: "all", label: "All Apps" },
  { id: "top", label: "🔥 Top Rated" },
  { id: "cash", label: "💰 Cash Games" },
  { id: "new", label: "✨ New Apps" },
];

export const getAppBySlug = (slug: string): RummyApp | undefined => {
  return rummyApps.find((app) => app.slug === slug);
};