import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import JerseyModal from "./JerseyModal";

interface Jersey {
  id: number;
  name: string;
  team: string;
  color: string;
  sizes: string[];
  price: string;
  image: string;
}

interface JerseyCardProps {
  jersey: Jersey;
}

const JerseyCard = ({ jersey }: JerseyCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card className="group overflow-hidden bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(210_100%_56%/0.2)]">
        <div className="aspect-square overflow-hidden">
          <img
            src={jersey.image}
            alt={jersey.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-2 sm:p-3 md:p-4 space-y-2 sm:space-y-3">
          <div>
            <h3 className="font-semibold text-xs sm:text-sm md:text-base text-foreground truncate">
              {jersey.name}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground truncate">{jersey.team}</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm text-muted-foreground truncate">{jersey.color}</span>
            <span className="text-sm sm:text-base md:text-lg font-bold text-primary">{jersey.price}</span>
          </div>
          <Button
            onClick={() => setIsOpen(true)}
            variant="hero"
            className="w-full text-xs sm:text-sm h-8 sm:h-9 md:h-10"
          >
            View Details
          </Button>
        </div>
      </Card>

      <JerseyModal
        jersey={jersey}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default JerseyCard;
