import { toTitleCase } from "@/utils/functions";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export type Page = {
  name: string;
  href: string;
  current: boolean;
};

function useBreadcrumbs(): Page[] {
  const [pages, setPages] = useState<Page[]>([]);
  const router = useRouter();

  useEffect(() => {
    let path = router.asPath.split("#")[0]; // split path at '#' and take the first part
    const pathnames = path.split("/").filter(Boolean);

    const pages: Page[] = pathnames.reduce((acc: Page[], pathname, index) => {
      const name = toTitleCase(pathname);

      if (name !== "App") {
        const href = "/" + pathnames.slice(0, index + 1).join("/");
        const current = index === pathnames.length - 1;

        acc.push({ name, href, current });
      }

      return acc;
    }, []);

    setPages(pages);
  }, [router.asPath]);

  return pages;
}

export default useBreadcrumbs;
