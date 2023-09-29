import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Tooltip } from "@/components/UI/Tooltip";
import { cn } from "@/utils/cn";

type Props = {
  children: ReactNode;
  selected?: boolean;
  collapsed?: boolean;
  path?: string;
  nav: string;
};

const NavButton = ({ children, selected, path, collapsed, nav }: Props) => {
  const router = useRouter();

  return (
    <Tooltip text={nav} disabled={!collapsed} side="left">
      <button
        onClick={() => router.push(`/${path}`)}
        className={cn(
          "flex h-9 w-full flex-row items-center justify-start gap-2 rounded-md px-2 text-base",
          selected
            ? "bg-red-500 transition delay-75 ease-in"
            : "text-[#C2C2C2] hover:bg-[#161616]",
          {
            "mx-auto w-min justify-between px-3": collapsed,
          }
        )}
      >
        {children}
      </button>
    </Tooltip>
  );
};

export default NavButton;
