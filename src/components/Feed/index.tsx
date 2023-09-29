import { cn } from "@/utils/cn";
import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { LuCross, LuCrosshair, LuPackage, LuX } from "react-icons/lu";

const timeline = [
  {
    id: 1,
    content: "Order#123 placed by",
    target: "Ketan Saraf",
    href: "#",
    date: "Sep 20",
    datetime: "2020-09-20",
    icon: LuPackage,
    iconBackground: "bg-transparent",
  },
  {
    id: 2,
    content: "Order#123 delivered by",
    target: "Siddharth Agarwal",
    href: "#",
    date: "Sep 22",
    datetime: "2020-09-22",
    icon: CheckIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content: "Order#123 cancelled by",
    target: "Martha Gardner",
    href: "#",
    date: "Sep 28",
    datetime: "2020-09-28",
    icon: LuX,
    iconBackground: "bg-green-500",
  },
  {
    id: 4,
    content: "Order#123 delivered by",
    target: "Siddharth Agarwal",
    href: "#",
    date: "Sep 30",
    datetime: "2020-09-30",
    icon: CheckIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 5,
    content: "Order#123 cancelled by",
    target: "Martha Gardner",
    href: "#",
    date: "Oct 4",
    datetime: "2020-10-04",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 5,
    content: "Order#123 cancelled by",
    target: "Martha Gardner",
    href: "#",
    date: "Oct 4",
    datetime: "2020-10-04",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 5,
    content: "Order#123 cancelled by",
    target: "Martha Gardner",
    href: "#",
    date: "Oct 4",
    datetime: "2020-10-04",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 5,
    content: "Order#123 cancelled by",
    target: "Martha Gardner",
    href: "#",
    date: "Oct 4",
    datetime: "2020-10-04",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 5,
    content: "Order#123 cancelled by",
    target: "Martha Gardner",
    href: "#",
    date: "Oct 4",
    datetime: "2020-10-04",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 6,
    content: "Order#123 cancelled by",
    target: "Martha Gardner",
    href: "#",
    date: "Oct 4",
    datetime: "2020-10-04",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 7,
    content: "Order#123 cancelled by",
    target: "Martha Gardner",
    href: "#",
    date: "Oct 4",
    datetime: "2020-10-04",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 8,
    content: "Order#123 cancelled by",
    target: "Martha Gardner",
    href: "#",
    date: "Oct 4",
    datetime: "2020-10-04",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
];

export default function Feed() {
  return (
    <div className="flow-root h-96 overflow-y-scroll border-b-[1px] border-[#121212]">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8 px-3">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute left-7 top-4 -ml-px h-full w-0.5 bg-white/10"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={cn(
                      /* event.iconBackground */
                      "h-8 w-8 rounded-full flex items-center justify-center bg-[#121212]"
                    )}
                  >
                    <event.icon
                      className="h-4 w-4 text-blue-600"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-blue-300">
                      {event.content}{" "}
                      <a
                        href={event.href}
                        className="font-medium text-blue-50/70"
                      >
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-white/30">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
