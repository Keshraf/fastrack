import { cn } from "@/utils/cn";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { PropsWithChildren } from "react";

const Tooltip = ({
  children,
  text,
  disabled,
  side,
}: PropsWithChildren<{
  text: string;
  disabled?: boolean;
  side?: "bottom" | "left" | "right" | "top";
}>) => {
  if (disabled) return <>{children}</>;

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

        <RadixTooltip.Content
          side={side ? side : "bottom"}
          className={cn(
            "side-top:animate-slide-down-fade",
            "side-right:animate-slide-left-fade",
            "side-bottom:animate-slide-up-fade",
            "side-left:animate-slide-right-fade",
            "relative left-[6px] inline-flex items-center rounded-md px-2 py-1",
            "z-50 bg-primary font-sans text-sm text-white shadow-glow",
            {
              "left-[22px]": side === "left",
            }
          )}
          sideOffset={5}
        >
          {text}
        </RadixTooltip.Content>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export { Tooltip };
