
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { cn } from "@/lib/utils";

const Toolbar = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  const navItems = [
    { href: "/destinations", label: "Popular Destinations" },
    { href: "/experiences", label: "Cultural Experiences" },
    { href: "/guide", label: "Travel Guide" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm",
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-playfair text-accent hover:text-accent/80 transition-colors">
            Turkish Tourism
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-soft-black hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
