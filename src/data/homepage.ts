interface NavigationItem {
  label: string;
  path: string;
}

interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

interface Link {
  label: string;
  description: string;
}

interface HomepageData {
  name: string;
  title: string;
  description: string;
  intro: string[];
  links: Link[];
  socialLinks: SocialLink[];
  navigation: NavigationItem[];
}

const data: HomepageData = {
  name: 'Michael D\'Angelo',
  title: 'VP of Engineering at Smile Identity',
  description: 'Co-founder and CTO of Promptfoo',
  intro: [
    'I am the co-founder and CTO of Promptfoo, where we\'re building open-source tools to evaluate, find, and fix vulnerabilities in LLMs. Before Promptfoo, I was the VP of Engineering at SmileID, where I led the development of tools that have helped over 170 million people in Africa gain access to financial services. I also co-founded Arthena and Matroid.',
    'In my spare time, I enjoy investing in people and ideas through a small venture fund, focusing on projects with high social impact. If you think I can be helpful to you or your cause, or if you\'re interested in collaborating, feel free to get in touch.',
  ],
  links: [
    {
      label: 'About this site',
      description: 'A beautiful, responsive, statically-generated, react application written with modern Javascript.',
    },
  ],
  socialLinks: [
    {
      label: 'Github',
      url: 'https://github.com/mldangelo',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mldangelo',
      icon: 'linkedin',
    },
    {
      label: 'Email',
      url: 'mailto:michael.l.dangelo@gmail.com',
      icon: 'envelope',
    },
    {
      label: 'Source',
      url: 'https://github.com/mldangelo/personal-site',
      icon: 'code',
    },
  ],
  navigation: [
    { label: 'About', path: '/about' },
    { label: 'Resume', path: '/resume' },
    { label: 'Projects', path: '/projects' },
    { label: 'Stats', path: '/stats' },
    { label: 'Contact', path: '/contact' },
  ],
};

export type { NavigationItem, SocialLink, Link, HomepageData };
export default data;
