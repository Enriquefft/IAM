// Icon barrel — re-exports every Lucide icon referenced in the design bundle
// (primitives.jsx icons) plus icons used by shadcn primitives already shipped
// (accordion: ChevronDown/ChevronUp, dialog/sheet: X).
import {
  CalendarIcon,
  FileTextIcon,
  MessageSquareIcon,
  ClockIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowRightIcon,
  MenuIcon,
  XIcon,
  LockIcon,
  ShieldIcon,
  DownloadIcon,
  EyeIcon,
  SparklesIcon,
} from "lucide-react";

export {
  CalendarIcon,
  FileTextIcon,
  MessageSquareIcon,
  ClockIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowRightIcon,
  MenuIcon,
  XIcon,
  LockIcon,
  ShieldIcon,
  DownloadIcon,
  EyeIcon,
  SparklesIcon,
};

// iconMap — maps bundle's Icon `name` prop values to Lucide components.
// Used by Icon.astro for static SSR rendering with consistent strokeWidth.
export const iconMap = {
  calendar: CalendarIcon,
  fileText: FileTextIcon,
  message: MessageSquareIcon,
  clock: ClockIcon,
  check: CheckIcon,
  chevronDown: ChevronDownIcon,
  chevronUp: ChevronUpIcon,
  arrowRight: ArrowRightIcon,
  menu: MenuIcon,
  close: XIcon,
  lock: LockIcon,
  shield: ShieldIcon,
  download: DownloadIcon,
  eye: EyeIcon,
  sparkle: SparklesIcon,
} as const;

export type IconName = keyof typeof iconMap;
