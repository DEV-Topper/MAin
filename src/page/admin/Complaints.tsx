import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Complaints = () => {
  const complaints = [
    {
      id: 1,
      title: "Login Issue",
      description: "Unable to login with correct credentials.",
    },
    {
      id: 2,
      title: "Transaction Delay",
      description: "Transaction is taking too long to process.",
    },
  ];

  return (
    <Accordion type="single" collapsible>
      {complaints.map((complaint) => (
        <AccordionItem key={complaint.id} value={complaint.id.toString()}>
          <AccordionTrigger>{complaint.title}</AccordionTrigger>
          <AccordionContent>
            <p>{complaint.description}</p>
            <Button className="mt-4">Resolve</Button>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Complaints;
