export interface NavLink {
  name: string;
  href: string;
  cta?: boolean;
}

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Training Programs", href: "/programs" },
  { name: "Nutrition Plans", href: "/nutrition" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Book", href: "/book", cta: true },
];

/** Footer quick links — excludes CTA items (e.g. Book). */
export const footerNavLinks = navLinks.filter((link) => !link.cta);
