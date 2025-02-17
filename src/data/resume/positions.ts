interface Position {
  company: string;
  position: string;
  link: string;
  daterange: string;
  points: string[];
}

const positions: Position[] = [
  {
    company: 'Company A',
    position: 'Senior Software Engineer',
    link: 'https://company-a.com',
    daterange: 'January 2020 - Present',
    points: [
      'Led development of cloud-native applications using React Native and TypeScript',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    company: 'Company B',
    position: 'Full Stack Developer',
    link: 'https://company-b.com',
    daterange: 'June 2018 - December 2019',
    points: [
      'Developed and maintained multiple web applications using React and Node.js',
      'Optimized database queries improving application performance by 40%',
      'Collaborated with UX team to implement responsive designs',
    ],
  },
];

export default positions;
