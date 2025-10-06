import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Shield, Zap, Trophy, Crown, Users, Code } from "lucide-react";
const About = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-28 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">VanPlaza</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              More than just jerseys. We're a community of football lovers dedicated to quality and passion.
            </p>
          </div>

          <div className="bg-gradient-card backdrop-blur-sm rounded-2xl border border-border/50 p-8 md:p-12 mb-12 animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                VanPlaza was born from a simple passion: the love of football. We understand that a jersey 
                is more than just fabric—it's a symbol of loyalty, pride, and the beautiful game itself.
              </p>
              <p>
                Every jersey we offer is carefully selected to meet the highest standards of quality and 
                authenticity. We work tirelessly to bring you the latest designs from top clubs around the 
                world, ensuring that you can wear your passion with pride.
              </p>
              <p>
                Whether you're stepping onto the pitch or cheering from the stands, VanPlaza ensures you 
                do it in style. Our mission is simple: provide passionate players and fans with premium 
                football jerseys that match their dedication to the sport.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-border/30 space-y-4 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Passion First</h3>
              <p className="text-muted-foreground">
                We're football fans serving football fans. Your passion drives everything we do.
              </p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-border/30 space-y-4 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                Premium materials and authentic designs. We never compromise on quality.
              </p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-border/30 space-y-4 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Fast Service</h3>
              <p className="text-muted-foreground">
                Quick responses, fast production, and reliable delivery every time.
              </p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-border/30 space-y-4 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Global Selection</h3>
              <p className="text-muted-foreground">
                Jerseys from top clubs worldwide. Your favorite team is here.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-8 border border-border/30 space-y-4 hover:border-primary/50 transition-all group">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto">
                  <Crown className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">Md. Mufakkirul Islam Mahin</h3>
                  <p className="text-sm font-semibold text-primary">Founder</p>
                  <a href="https://wa.me/8801320716041" target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-muted-foreground hover:text-primary transition-colors">
                    +880 1320-716041
                  </a>
                </div>
              </div>

              <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-8 border border-border/30 space-y-4 hover:border-primary/50 transition-all group">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Anan Ahmed
                  </h3>
                  <p className="text-sm font-semibold text-primary">Co-Founder</p>
                  <a href="https://wa.me/8801841079187" target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-muted-foreground hover:text-primary transition-colors">
                    +880 1841-079187
                  </a>
                </div>
              </div>

              <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-8 border-2 border-yellow-500/50 space-y-4 hover:border-yellow-400 transition-all group shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mx-auto shadow-lg">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Muhammad Arabii Mustafiz
                  </h3>
                  <p className="text-sm font-semibold text-yellow-500">Developer</p>
                  <p className="text-xs italic text-yellow-400/80">Special Thanks</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-card backdrop-blur-sm rounded-2xl border border-border/50 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Join the VanPlaza Family
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Experience the difference of premium quality and passionate service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/8801320716041?text=Hello%20VanPlaza!" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-12 rounded-lg px-8 text-base bg-gradient-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(210_100%_56%/0.5)] hover:scale-105 font-semibold transition-all duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default About;