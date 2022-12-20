export interface NavItem {
  label: string;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href:'#/'
  },
  {
    label: 'About',
    href: '#section_about',
  },
  {
    label: 'Skill',
    href: '#section_skill',
  },
  {
    label: 'Portfolio',
    href: '#section_portfolio',
  },
  {
    label: 'Contact',
    href: '#section_contact',
  },
];
