import { useRouter } from "next/router";
import { useEffect, useMemo, useState, Dispatch, SetStateAction } from "react";
import { BsGear } from "react-icons/bs";
import AvatarIcon from "../Avatar";
import NavButton from "./components/Button";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  BellAlertIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  HeartIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { cn } from "@/utils/cn";

import {
  LuHome,
  LuNavigation,
  LuPackageCheck,
  LuMail,
  LuUsers2,
  LuBookOpen,
} from "react-icons/lu";

type NavItem = {
  name: string;
  icon: IconType;
  path: string;
};

interface Props {
  setCollapsed: Dispatch<SetStateAction<boolean>>;
  collapsed: boolean;
  isSmallScreen: boolean;
}

const Navigation = ({ setCollapsed, collapsed, isSmallScreen }: Props) => {
  const [filled, setFilled] = useState("intents");
  const [showPopup, setShowPopup] = useState(false);
  const [y, setY] = useState(10);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const path = router.pathname.split("/")[2];
    setFilled(path);
  }, [router.pathname]);

  const navs: NavItem[] = useMemo(
    () => [
      {
        name: "Home",
        icon: LuHome,
        path: "home",
      },
      {
        name: "Orders",
        icon: LuPackageCheck,
        path: "orders",
      },
      {
        name: "Carriers",
        icon: LuUsers2,
        path: "carriers",
      },
      {
        name: "Catalog",
        icon: LuBookOpen,
        path: "catalog",
      },
      /*       {
        name: "Messages",
        icon: LuMail,
        path: "messages",
      },
      {
        name: "Map",
        icon: LuNavigation,
        path: "map",
      }, */
    ],
    []
  );

  useEffect(() => {
    navs.forEach((nav, idx) => {
      if (nav.path === filled) {
        setY((idx + 1) * 48 + 5);
      }
    });
  }, [filled, navs]);

  return (
    <motion.aside
      className={`  flex h-full w-full flex-col justify-between gap-7 overflow-clip border-r-2  border-[#121212]   bg-[#0D0D0D] pt-8`}
    >
      <div className=" flex flex-col gap-6">
        {!isSmallScreen && (
          <div
            onClick={() => setCollapsed((prev) => !prev)}
            className="absolute  -right-3 top-[3.3rem]    cursor-pointer rounded-full border-2 border-[#121212] bg-[#0D0D0D]  p-1"
          >
            {collapsed ? (
              <ChevronRightIcon className="h-3 w-3 rounded-full stroke-[#5C6570] stroke-[4]" />
            ) : (
              <ChevronLeftIcon className="h-3 w-3 rounded-full stroke-[#5C6570] stroke-[4]" />
            )}
          </div>
        )}

        <div className="relative flex w-full flex-col items-center gap-6 px-6 mt-4">
          {navs.map((nav, idx) => {
            const Icon = nav.icon;
            let selected = false;
            if (nav.path === filled) selected = true;

            return (
              <NavButton
                key={idx}
                selected={selected}
                collapsed={collapsed}
                nav={nav.name}
                path={`dashboard/${nav.path}`}
              >
                {/* <svg fil */}
                <Icon className="w-5 " />
                {!collapsed && nav.name}
              </NavButton>
            );
          })}
          <motion.div
            animate={{ y }}
            className="absolute left-[-4px] flex h-[28px] w-2 flex-row items-center justify-center rounded-b-md rounded-r-md bg-primary "
          />
        </div>
      </div>
      <div className={cn(collapsed ? "w-[96px]" : "w-64", "space-y-2")}>
        <div
          className={`flex h-auto w-full flex-row items-center justify-between gap-3  border-t-2 border-[#121212] p-5  py-6
       `}
        >
          <div
            className={cn("flex h-auto w-full flex-row items-center gap-3", {
              "justify-center": collapsed,
            })}
          >
            <AvatarIcon />
            {!collapsed && (
              <div className="gap flex flex-col ">
                <div className="text-xs font-bold text">Ketan Saraf</div>
                <div className="text-xs font-light text-tertiary">Admin</div>
              </div>
            )}
          </div>
          {!collapsed && <BellAlertIcon className="h-6 w-6 text-[#5C6570]" />}
        </div>
      </div>
    </motion.aside>
  );
};

export default Navigation;
