import { CtaCard } from "@/components/ui/cta-card"; // Adjust the import path

export default function CtaCardDemo() {
  return (
    <div className="h-full w-full">
      <CtaCard
        title="Join Us"
        subtitle="Ocean Consulting"
        description="Enrich your expertise and grow your career. The development of both technical and human skills is at the heart of our Group's success."
        buttonText="View Job Openings"
        imageSrc="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="A young professional woman in a yellow shirt, holding books and smiling."
        onButtonClick={() => console.log("Navigating to job openings...")}
      />
    </div>
  );
}