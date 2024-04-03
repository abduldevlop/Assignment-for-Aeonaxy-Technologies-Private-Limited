import { cardImg1 } from "../assets";
import { cardImg2 } from "../assets";
import { cardImg3 } from "../assets";
import { TbArrowsDownUp } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { MdOutlineSettingsSuggest } from "react-icons/md";

export const cards = [
  {
    id: 1,
    img: cardImg1,
    icon: <TbArrowsDownUp size={22} />,
    title: "Build Characters",
    desc: "Create custom Al-generated characters to use across multiple storyboard frames.",
  },
  {
    id: 2,
    img: cardImg2,
    icon: <BsStars size={22} />,
    title: "Plan Your Video",
    desc: "Describe storyboard scenes to quickly generate expressive, character-driven images.",
  },
  {
    id: 3,
    img: cardImg3,
    icon: <MdOutlineSettingsSuggest size={22} />,
    title: "Create Variations",
    desc: " Create subtle variations of existing images to build out storyboard sequences fast.",
  },
];

export const planse = [
  {
    id: 1,
    title: "Agency",
    plane: "99",
    type: "For Video Agencies ",
    features: [
      "10 Users",
      "500 Storyboards",
      "9,600 Al Image Credits",
      "Credits Project-based access",
      "invite link Team",
    ],
  },
  {
    id: 2,
    title: "Group",
    plane: "39",
    type: "For Small Teams ",
    features: [
      "5 Users",
      "200 Storyboards",
      "3,000 Al Image Credits",
      "Project-based access",
      "Team editing",
      "Team comments",
      "Real-time updates",
    ],
  },
  {
    id: 3,
    title: "Individual",
    plane: "25",
    type: "Best for Freelancers ",
    features: [
      "Single User ",
      "100 Storyboards ",
      "1,200 Al Image Credits",
      "Remove Boords branding",
      "Custom text fields",
      "Version management",
      "Multiple export formats",
      "Password protection",
      "Guest commenting",
    ],
  },
  {
    id: 4,
    title: "Free",
    plane: "0",
    type: "Essential Storyboarding",
    features: ["2 Storyboards", "10 frame limit", "Watermarked images "],
  },
];

export const footerLinks = [
  {
    id: 1,
    title: "Features",
    links: ["Create", "Collaborate", "Iterate", "Export"],
  },
  {
    id: 2,
    title: "AI Tools",
    links: [
      "Al Storyboard Generator",
      "Al Script Generator",
      "Al Character Creator",
      "Al Image Variations",
    ],
  },
  {
    id: 3,
    title: "Templates",
    links: ["Storyboards", "Shot Lists", "Call Sheets", "Filmmaking"],
  },
  {
    id: 4,
    title: "Company & leagal",
    links: [
      "Affilates",
      "Climate Contributions",
      "Help Center",
      "Privacy",
      "Terms of Use",
      "Security",
    ],
  },
];
