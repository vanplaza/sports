import { Mail } from "lucide-react";
import { Link } from "react-router-dom"; // 👈 added
import logo from "@/assets/vanplaza-logo.jpg";

const Footer = () => {
  const whatsappLink = "https://wa.me/8801320716041?text=Hello%20VanPlaza!";
  const emailLink = "mailto:vanplaza11@gmail.com";

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* --- Top Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* --- Logo + Description --- */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="VanPlaza Logo"
                className="h-10 w-auto rounded-lg"
              />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                VanPlaza
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Premium football jerseys for passionate players and fans.
            </p>
          </div>

          {/* --- Quick Links --- */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/sports" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sports/shop" className="hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/sports/custom" className="hover:text-primary transition-colors">
                  Custom Jersey
                </Link>
              </li>
              <li>
                <Link to="/sports/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* --- Contact --- */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={emailLink}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* --- Bottom Line --- */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} VanPlaza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
