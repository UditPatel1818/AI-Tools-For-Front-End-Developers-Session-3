import { useState } from "react";
import {
  MapPin,
  ChevronDown,
  Search,
  Bell,
  Star,
  Clock,
  Bike,
  Home,
  UtensilsCrossed,
  ShoppingBag,
  User,
  Heart,
  Flame,
  ChevronRight,
  BadgePercent,
  Plus,
} from "lucide-react";

const categories = [
  { id: 1, label: "Pizza", emoji: "🍕", color: "#FF6B35" },
  { id: 2, label: "Burger", emoji: "🍔", color: "#FFB347" },
  { id: 3, label: "Sushi", emoji: "🍱", color: "#4ECDC4" },
  { id: 4, label: "Tacos", emoji: "🌮", color: "#FF6B9D" },
  { id: 5, label: "Ramen", emoji: "🍜", color: "#C77DFF" },
  { id: 6, label: "Salad", emoji: "🥗", color: "#7BC67E" },
  { id: 7, label: "Dessert", emoji: "🧁", color: "#F4A261" },
  { id: 8, label: "Coffee", emoji: "☕", color: "#A0522D" },
];

const restaurants = [
  {
    id: 1,
    name: "Ember & Crust",
    cuisine: "Wood-fired pizza · Italian",
    rating: 4.8,
    reviews: 2140,
    time: "22 min",
    delivery: "Free delivery",
    image: "photo-1513104890138-7c749659a591",
    tag: "Popular",
    tagColor: "#FF6B35",
  },
  {
    id: 2,
    name: "Sakura Bowl",
    cuisine: "Japanese · Sushi · Ramen",
    rating: 4.9,
    reviews: 3820,
    time: "30 min",
    delivery: "$1.49 delivery",
    image: "photo-1569050467447-ce54b3bbc37d",
    tag: "Top Rated",
    tagColor: "#4ECDC4",
  },
  {
    id: 3,
    name: "The Smash Lab",
    cuisine: "American · Burgers · Fries",
    rating: 4.7,
    reviews: 1590,
    time: "18 min",
    delivery: "Free delivery",
    image: "photo-1568901346375-23c9450c58cd",
    tag: "Fast",
    tagColor: "#FFB347",
  },
  {
    id: 4,
    name: "Verde Kitchen",
    cuisine: "Mexican · Tacos · Bowls",
    rating: 4.6,
    reviews: 980,
    time: "25 min",
    delivery: "Free delivery",
    image: "photo-1551504734-5da9e5a2b576",
    tag: "New",
    tagColor: "#7BC67E",
  },
];

const offers = [
  {
    id: 1,
    title: "First Order Free",
    subtitle: "No delivery fee on your first 3 orders",
    code: "WELCOME3",
    color: "#FF6B35",
    emoji: "🎁",
  },
  {
    id: 2,
    title: "Lunch Rush Deal",
    subtitle: "20% off orders between 11am – 2pm",
    code: "LUNCH20",
    color: "#FFB347",
    emoji: "⚡",
  },
  {
    id: 3,
    title: "Weekend Feast",
    subtitle: "Spend $40+ and save $10 this weekend",
    code: "FEAST10",
    color: "#4ECDC4",
    emoji: "🎉",
  },
];

const navItems = [
  { id: "home", label: "Home", Icon: Home },
  { id: "search", label: "Explore", Icon: Search },
  { id: "orders", label: "Orders", Icon: ShoppingBag },
  { id: "profile", label: "Profile", Icon: User },
];

const bannerSlides = [
  {
    id: 1,
    headline: "30% off your\nnext order",
    sub: "Valid on orders above $25 today only",
    cta: "Order Now",
    image: "photo-1565299624946-b28f40a0ae38",
    gradient: "from-[#FF6B35] to-[#FF9A3C]",
  },
  {
    id: 2,
    headline: "Free delivery\nall weekend",
    sub: "No minimum order required, anywhere in the city",
    cta: "Explore Deals",
    image: "photo-1504674900247-0877df9cc836",
    gradient: "from-[#4ECDC4] to-[#44B4AC]",
  },
];

export default function App() {
  const [activeNav, setActiveNav] = useState("home");
  const [activeBanner, setActiveBanner] = useState(0);
  const [activeCategory, setActiveCategory] = useState(1);
  const [savedRestaurants, setSavedRestaurants] = useState<number[]>([2]);

  const toggleSave = (id: number) => {
    setSavedRestaurants((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  return (
    <div
      className="min-h-screen bg-background flex items-start justify-center"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="w-full max-w-sm mx-auto relative pb-24 overflow-hidden">
        {/* ── Header ── */}
        <div className="px-5 pt-10 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-muted-foreground tracking-widest uppercase font-medium">
                Delivering to
              </span>
              <button className="flex items-center gap-1 group">
                <MapPin size={15} className="text-primary" strokeWidth={2.5} />
                <span
                  className="text-foreground font-semibold text-base"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Midtown, Manhattan
                </span>
                <ChevronDown
                  size={16}
                  className="text-muted-foreground group-hover:text-foreground transition-colors"
                />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button className="relative w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
                <Bell size={18} className="text-foreground" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary"></span>
              </button>
              <button className="w-10 h-10 rounded-2xl overflow-hidden ring-2 ring-primary/40">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&auto=format"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* ── Search ── */}
          <div className="mt-5 relative">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search restaurants, cuisine…"
              className="w-full bg-secondary rounded-2xl pl-11 pr-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
          </div>
        </div>

        {/* ── Promotional Banner ── */}
        <div className="px-5">
          <div className="relative rounded-3xl overflow-hidden h-44">
            {bannerSlides.map((slide, i) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  i === activeBanner ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
                <img
                  src={`https://images.unsplash.com/${slide.image}?w=400&h=200&fit=crop&auto=format`}
                  alt={slide.headline}
                  className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-30"
                />
                <div className="relative z-10 h-full flex flex-col justify-between p-5">
                  <div>
                    <h2
                      className="text-white font-bold text-xl leading-tight whitespace-pre-line"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {slide.headline}
                    </h2>
                    <p className="text-white/80 text-xs mt-1 leading-snug">{slide.sub}</p>
                  </div>
                  <button className="self-start bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-xl border border-white/30 hover:bg-white/30 transition-colors">
                    {slide.cta}
                  </button>
                </div>
              </div>
            ))}

            {/* dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {bannerSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveBanner(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeBanner ? "w-5 bg-white" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Categories ── */}
        <div className="mt-7 px-5">
          <div className="flex items-center justify-between mb-4">
            <h3
              className="text-foreground font-bold text-lg"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Categories
            </h3>
            <button className="flex items-center gap-0.5 text-primary text-sm font-medium">
              All <ChevronRight size={15} />
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex flex-col items-center gap-2 flex-shrink-0 transition-all ${
                  activeCategory === cat.id ? "scale-105" : ""
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all ${
                    activeCategory === cat.id
                      ? "ring-2 ring-offset-2 ring-offset-background shadow-lg"
                      : "bg-secondary"
                  }`}
                  style={
                    activeCategory === cat.id
                      ? { backgroundColor: cat.color + "22", ringColor: cat.color }
                      : {}
                  }
                >
                  {cat.emoji}
                </div>
                <span
                  className={`text-xs font-medium ${
                    activeCategory === cat.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Trending Now ── */}
        <div className="mt-7 px-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Flame size={18} className="text-primary" />
              <h3
                className="text-foreground font-bold text-lg"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Trending Now
              </h3>
            </div>
            <button className="flex items-center gap-0.5 text-primary text-sm font-medium">
              See all <ChevronRight size={15} />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {restaurants.map((r) => (
              <div
                key={r.id}
                className="bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all group"
              >
                <div className="relative h-40">
                  <img
                    src={`https://images.unsplash.com/${r.image}?w=400&h=200&fit=crop&auto=format`}
                    alt={r.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* tag */}
                  <span
                    className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-lg text-white"
                    style={{ backgroundColor: r.tagColor }}
                  >
                    {r.tag}
                  </span>

                  {/* save */}
                  <button
                    onClick={() => toggleSave(r.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-xl bg-black/30 backdrop-blur-sm flex items-center justify-center transition-transform hover:scale-110"
                  >
                    <Heart
                      size={15}
                      className={
                        savedRestaurants.includes(r.id)
                          ? "fill-primary text-primary"
                          : "text-white"
                      }
                    />
                  </button>

                  {/* delivery badge */}
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-lg">
                    {r.delivery}
                  </span>
                </div>

                <div className="px-4 py-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4
                        className="text-foreground font-bold text-base"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {r.name}
                      </h4>
                      <p className="text-muted-foreground text-xs mt-0.5">{r.cuisine}</p>
                    </div>
                    <button className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center hover:bg-primary/90 transition-colors flex-shrink-0">
                      <Plus size={16} className="text-white" />
                    </button>
                  </div>

                  <div className="flex items-center gap-4 mt-2.5">
                    <div className="flex items-center gap-1">
                      <Star size={12} className="fill-accent text-accent" />
                      <span className="text-xs font-semibold text-foreground">{r.rating}</span>
                      <span className="text-xs text-muted-foreground">({r.reviews.toLocaleString()})</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock size={12} />
                      <span className="text-xs">{r.time}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Bike size={12} />
                      <span className="text-xs">{r.delivery === "Free delivery" ? "Free" : r.delivery.split(" ")[0]}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Special Offers ── */}
        <div className="mt-8 px-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <BadgePercent size={18} className="text-accent" />
              <h3
                className="text-foreground font-bold text-lg"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Special Offers
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="rounded-2xl border border-border p-4 flex items-center gap-4 hover:border-primary/30 transition-all cursor-pointer"
                style={{ backgroundColor: offer.color + "11" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: offer.color + "22" }}
                >
                  {offer.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-foreground font-bold text-sm"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {offer.title}
                  </p>
                  <p className="text-muted-foreground text-xs mt-0.5 leading-snug">{offer.sub}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-lg"
                      style={{ color: offer.color, backgroundColor: offer.color + "22" }}
                    >
                      {offer.code}
                    </span>
                    <span className="text-xs text-muted-foreground">Tap to copy</span>
                  </div>
                </div>
                <ChevronRight size={16} className="text-muted-foreground flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom padding spacer ── */}
        <div className="h-4" />

        {/* ── Bottom Navigation ── */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm px-4 pb-6 z-50">
          <div className="bg-card/90 backdrop-blur-xl border border-border rounded-3xl px-2 py-2 flex items-center justify-around shadow-2xl shadow-black/50">
            {navItems.map(({ id, label, Icon }) => {
              const active = activeNav === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveNav(id)}
                  className="flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all"
                  style={active ? { backgroundColor: "#FF6B3522" } : {}}
                >
                  <Icon
                    size={20}
                    className={active ? "text-primary" : "text-muted-foreground"}
                    strokeWidth={active ? 2.5 : 1.8}
                  />
                  <span
                    className={`text-[10px] font-semibold tracking-wide ${
                      active ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              );
            })}

            {/* Cart bubble */}
            <button
              onClick={() => setActiveNav("orders")}
              className="relative -mt-6 w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/40 hover:bg-primary/90 transition-colors"
            >
              <ShoppingBag size={22} className="text-white" />
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-[10px] font-bold text-background flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
