import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/vanplaza-logo.jpg";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <nav className="flex items-center justify-between">
          <Link to="/sports/" className="flex items-center gap-1.5 sm:gap-2 group">
            <img 
              src={logo} 
              alt="VanPlaza Logo" 
              className="h-8 w-auto sm:h-12 rounded-lg transition-all group-hover:scale-105" 
            />
            <span className="text-lg sm:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              VanPlaza
            </span>
          </Link>
          
          <div className="flex items-center gap-3 sm:gap-8">
            <Link
              to="/sports/"
              className={`text-xs sm:text-sm font-medium transition-all hover:text-primary ${
                isActive("/sports/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/sports/shop"
              className={`text-xs sm:text-sm font-medium transition-all hover:text-primary ${
                isActive("/sports/shop") ? "text-primary" : "text-foreground"
              }`}
            >
              Shop
            </Link>
            <Link
              to="/sports/custom"
              className={`text-xs sm:text-sm font-medium transition-all hover:text-primary ${
                isActive("/sports/custom") ? "text-primary" : "text-foreground"
              }`}
            >
              Custom
            </Link>
            <Link
              to="/sports/about"
              className={`text-xs sm:text-sm font-medium transition-all hover:text-primary ${
                isActive("/sports/about") ? "text-primary" : "text-foreground"
              }`}
            >
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
