import { cn } from "@/lib/utils";
import { MetadataLabel } from "./MetadataLabel";

interface VerticalLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  color?: "white" | "gray" | "red";
}

export function VerticalLabel({ label, color = "red", className, ...props }: VerticalLabelProps) {
  return (
    <div 
      className={cn("flex items-center justify-center opacity-80", className)} 
      style={{ writingMode: 'vertical-rl' }}
      {...props}
    >
      <MetadataLabel color={color}>{label}</MetadataLabel>
    </div>
  );
}
