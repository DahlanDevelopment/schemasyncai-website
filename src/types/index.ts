export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface PricingTier {
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SolutionSegment {
  title: string;
  audience: string;
  description: string;
  painPoints: string[];
  outcomes: string[];
}
