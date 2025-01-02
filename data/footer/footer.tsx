export const NavItem = [
  {
    id: 1,
    navHeading: "About",
    menuOptions: [
      { value: "About us", url: "/about" },
      {
        value: "Safety Center",
        id: "our-trust-and-safety-principles",
        url: "/about",
      },
      { value: "Community Guidelines" },
      { value: "Online Dispute Resolution" },
      { value: "Become a Top User" },
      { value: "Become a Partner" },
    ],
  },
  {
    id: 2,
    navHeading: "Legal terms",
    menuOptions: [
      { value: "Terms of use",url: "/about" },
      { value: "Payment, Auto top-up and Refund Policy" },
      { value: "Misconduct Prevention Policy" },
    ],
  },
  {
    id: 3,
    navHeading: "Privacy info",
    menuOptions: [{ value: "Privacy policy",url: "/about" }, { value: "Cookie policy" }],
  },
  {
    id: 4,
    navHeading: "Support",
    menuOptions: [{ value: "support@bestdates.com" }, { value: "FAQ" }],
  },
];

export const NavImages = [
  { id: 1, image: "/assets/images/footer/visa.png" },
  { id: 2, image: "/assets/images/footer/mastercard.png" },
  { id: 3, image: "/assets/images/footer/americanExpress.png" },
  { id: 4, image: "/assets/images/footer/discover.png" },
];
