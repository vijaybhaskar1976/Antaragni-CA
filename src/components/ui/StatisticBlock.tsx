import { EditorialHeading } from "./EditorialHeading";
import { MetadataLabel } from "./MetadataLabel";
import { cn } from "@/lib/utils";

interface StatisticBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  suffix?: string;
}

export function StatisticBlock({ value, label, suffix = "", className, ...props }: StatisticBlockProps) {
  return (
    <div className={cn("flex flex-col items-start gap-2", className)} {...props}>
      <EditorialHeading variant="number" as="span" className="text-foreground">
        {value}{suffix && <span className="text-foreground text-[0.8em]">{suffix}</span>}
      </EditorialHeading>
      <MetadataLabel color="red" className="whitespace-pre-line">{label}</MetadataLabel>
    </div>
  );
}
