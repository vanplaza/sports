import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ContactModal from "./ContactModal";

interface Jersey {
  id: number;
  name: string;
  team: string;
  color: string;
  sizes: string[];
  price: string;
  image: string;
}

interface JerseyModalProps {
  jersey: Jersey;
  isOpen: boolean;
  onClose: () => void;
}

const JerseyModal = ({ jersey, isOpen, onClose }: JerseyModalProps) => {
  const [showContactModal, setShowContactModal] = useState(false);

  const handleBuyNow = () => {
    setShowContactModal(true);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl w-[calc(100%-2rem)] bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold">{jersey.name}</DialogTitle>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={jersey.image}
                alt={jersey.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Team</h3>
                <p className="text-lg font-semibold">{jersey.team}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Color</h3>
                <p className="text-lg font-semibold">{jersey.color}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Available Sizes</h3>
                <div className="flex gap-2 mt-2">
                  {jersey.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-3 py-1 bg-secondary rounded-md text-sm font-medium"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Price</h3>
                <p className="text-3xl font-bold text-primary">{jersey.price}</p>
              </div>
              <Button
                onClick={handleBuyNow}
                variant="hero"
                size="lg"
                className="w-full"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        jerseyName={jersey.name}
      />
    </>
  );
};

export default JerseyModal;
