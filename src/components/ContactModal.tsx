import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  jerseyName?: string;
}

const ContactModal = ({ isOpen, onClose, jerseyName }: ContactModalProps) => {
  const whatsappMessage = jerseyName
    ? `Hello VanPlaza! I'm interested in buying ${jerseyName}.`
    : "Hello VanPlaza! I'm interested in buying a jersey.";
  
  const emailSubject = jerseyName
    ? `Jersey Order Inquiry - ${jerseyName}`
    : "Jersey Order Inquiry";
  
  const emailBody = jerseyName
    ? `Hello VanPlaza,\n\nI'd like to order ${jerseyName}.\n\nPlease provide more details.`
    : "Hello VanPlaza,\n\nI'd like to order a jersey.\n\nPlease provide more details.";

  const whatsappLink = `https://wa.me/8801320716041?text=${encodeURIComponent(whatsappMessage)}`;
  const emailLink = `mailto:vanplaza11@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Contact VanPlaza</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Choose your preferred method to contact us
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <Button
            onClick={() => window.open(whatsappLink, "_blank")}
            variant="hero"
            size="lg"
            className="w-full"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Contact via WhatsApp
          </Button>
          <Button
            onClick={() => window.location.href = emailLink}
            variant="glass"
            size="lg"
            className="w-full"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact via Email
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
