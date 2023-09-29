import { useRouter } from "next/router";
import { ReactNode, useState, useEffect } from "react";
import Navigation from "../Navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useWindowWidth } from "@/hooks/useWindowWidth";

import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/utils/cn";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const [showNavigation, setShowNavigation] = useState(false);
  const windowWidth = useWindowWidth();
  const isSmallScreen = windowWidth < 640;
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (!isSmallScreen) {
      setShowNavigation(true);
    } else {
      setCollapsed(false);
      setShowNavigation(false);
    }
  }, [isSmallScreen]);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-row overflow-y-auto">
      <div
        onClick={() => setShowNavigation((prev) => !prev)}
        className="absolute right-7 top-[45px] z-[60]  flex cursor-pointer flex-col items-center justify-center rounded-lg border-[0.5px] border-[#2a2a2a] bg-[#161616] p-2 drop-shadow-[0_32px_50px_rgba(0,0,0,0.4)] sm:hidden"
      >
        {!showNavigation ? (
          <Bars3Icon className="h-6 w-6" />
        ) : (
          <XMarkIcon className="h-6 w-6" />
        )}
      </div>

      <AnimatePresence>
        {showNavigation && (
          <motion.div
            className={`fixed  z-50 h-screen flex-none sm:relative`}
            initial={!isSmallScreen ? {} : { width: 0 }}
            animate={{
              width: collapsed ? "96px" : "256px",
              transition: {
                ease: "circOut",
              },
            }}
            exit={{
              width: 0,
            }}
          >
            <Dialog.Root
              modal={false}
              open={showNavigation}
              onOpenChange={(value) => {
                if (windowWidth < 640) setShowNavigation(value);
              }}
            >
              <Dialog.Content className="h-full">
                <Navigation
                  collapsed={collapsed}
                  setCollapsed={setCollapsed}
                  isSmallScreen={isSmallScreen}
                />
              </Dialog.Content>
            </Dialog.Root>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={cn("w-4/5 flex-1")}>
        <div
          className={cn("hidden", {
            "absolute right-0 top-0 block h-screen w-96 overflow-hidden bg-[#161616]/10 backdrop-blur-sm":
              showNavigation && isSmallScreen,
          })}
          onClick={() => setShowNavigation(false)}
        ></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
