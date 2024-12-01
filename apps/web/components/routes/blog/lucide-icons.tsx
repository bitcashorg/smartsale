import {
  AlertCircle,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  AtSign,
  Check,
  ChevronDown,
  ChevronRight,
  Cloud,
  CreditCard,
  Eye,
  FacebookIcon,
  Github,
  Globe,
  Keyboard,
  LifeBuoy,
  Linkedin,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  Moon,
  Plus,
  PlusCircle,
  Search,
  Send,
  Settings,
  SunMedium,
  Twitter,
  User,
  UserPlus,
  Users,
  X,
} from 'lucide-react'

const mediumIcon = () => (
  <svg
    width="21"
    height="17"
    viewBox="0 0 21 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.09368 3.51644C3.10593 3.39471 3.08952 3.27179 3.04576 3.15754C3.00201 3.04328 2.93211 2.94085 2.84168 2.85844L0.97368 0.591442V0.252441H6.77168L11.2537 10.1574L15.1937 0.252441H20.7217V0.591442L19.1247 2.13244C19.057 2.18469 19.0048 2.25434 18.9736 2.33394C18.9424 2.41355 18.9335 2.50013 18.9477 2.58444V13.9184C18.9335 14.0027 18.9424 14.0893 18.9736 14.1689C19.0048 14.2485 19.057 14.3182 19.1247 14.3704L20.6847 15.9124V16.2524H12.8407V15.9134L14.4567 14.3334C14.6157 14.1734 14.6157 14.1264 14.6157 13.8824V4.72044L10.1237 16.2144H9.51768L4.28768 4.72044V12.4244C4.24468 12.7474 4.35168 13.0744 4.57768 13.3084L6.67868 15.8764V16.2144H0.72168V15.8764L2.82168 13.3084C2.93279 13.1925 3.01526 13.0522 3.06248 12.8987C3.10971 12.7452 3.12039 12.5828 3.09368 12.4244V3.51644Z"
      fill="#040316"
    />
  </svg>
)

export const LucideIcons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  cloud: Cloud,
  creditCard: CreditCard,
  github: Github,
  keyboard: Keyboard,
  lifeBuoy: LifeBuoy,
  logOut: LogOut,
  mail: Mail,
  messageSquare: MessageSquare,
  plus: Plus,
  plusCircle: PlusCircle,
  settings: Settings,
  user: User,
  userPlus: UserPlus,
  users: Users,
  eye: Eye,
  close: X,
  check: Check,
  error: AlertCircle,
  warning: AlertTriangle,
  chevronDown: ChevronDown,
  menu: Menu,
  mediumIcon,
  sendIcon: Send,
  arrowLeft: ArrowLeft,
  search: Search,
  arrowRight: ArrowRight,
  chevronRight: ChevronRight,
  facebook: FacebookIcon,
  linkedin: Linkedin,
  threadIcon: AtSign,
  globe: Globe,
  x: X,
}
