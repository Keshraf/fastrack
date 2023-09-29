import { Page } from "@/hooks/useBreadCrumbs";
import { cn } from "@/utils/cn";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function BreadCrumbs({ pages }: { pages: Page[] }) {
  return (
    <nav className="flex " aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-3">
        {pages.map((page, index) => (
          <li key={page.name}>
            <div className="flex items-center space-x-3">
              {index !== 0 && (
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 	 text-[#5C6570]"
                  aria-hidden="true"
                />
              )}
              <Link
                href={page.href}
                className={cn("text-sm text-[#FFFFFFBF]  ", {
                  "text-primary": page.current,
                })}
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
