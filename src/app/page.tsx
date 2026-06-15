import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GridContainer } from "@/components/ui/GridContainer";

export default function Home() {
  return (
    <main>
      <SectionWrapper variant="hero">
        <GridContainer>
          <div className="col-span-12">
            <DisplayHeading variant="hero">ANTARAGNI</DisplayHeading>
            <p className="text-muted mt-4 max-w-md uppercase tracking-wider text-sm">
              Project Scaffold Initialized. Architecture ready for section development.
            </p>
          </div>
        </GridContainer>
      </SectionWrapper>
    </main>
  );
}
