interface AboutSection {
  title: string;
  content: string[];
  type?: 'list' | 'text';
}

const aboutData: AboutSection[] = [
  {
    title: 'Intro',
    content: [
      'I am the co-founder and CTO of Promptfoo, where we\'re building open-source tools to evaluate, find, and fix vulnerabilities in LLMs. Before Promptfoo, I was the VP of Engineering at SmileID, where I led the development of tools that have helped over 170 million people in Africa gain access to financial services. I also co-founded Arthena and Matroid.',
      'In my spare time, I enjoy investing in people and ideas through a small venture fund, focusing on projects with high social impact. If you think I can be helpful to you or your cause, or if you\'re interested in collaborating, feel free to get in touch.',
    ],
    type: 'text',
  },
  {
    title: 'Some History',
    content: [
      'My parents put a computer in my bedroom in 1993 when I was 3. It was an old Tandy that ran MS-DOS. My favorite games were Street Rod 2, Wolfenstein 3D, and Tom and Jerry. It had a mechanical keyboard and a turbo button. To this day, I still don\'t know what pressing the turbo button really did.',
      'We subscribed to AOL in 1995. I still remember installing it from a floppy disk onto our brand-new Packard Bell. It took years for me to send my first email.',
      'In the summer of 1996, my uncle purchased MegaRace from Media Play and installed it on my mom\'s work computer. I might have endangered her business by using her computer too much.',
      'At 7, I discovered the mini-games hidden in Microsoft Office. I also beat Minesweeper on expert for the first time.',
      'At 8, my parents bought me a Sony Mavica MVC-FD71 digital camera after I stole their SLR one too many times. It could fit 10 images to a floppy disk at a 0.3MP resolution. I still have it, and it still works. I\'ve been taking photographs ever since, now with a Nikon D750, D800, and occasionally with a Mamiya 6II.',
    ],
    type: 'list',
  },
  {
    title: 'I Like',
    content: [
      'Running',
      'Skiing',
      'Sailing and the sea',
      'Space',
      'Summer',
      'Books',
      'Colored pencils (Faber-Castell Polychromos)',
      'Podcasts (The Daily, Planet Money, This American Life, etc.)',
      'Good design',
      'Photography',
    ],
    type: 'list',
  },
  {
    title: 'Travel / Geography',
    content: [
      'I am originally from Buffalo, New York. I have since lived in Palo Alto, Mountain View, San Francisco, Seattle, and New York City.',
      'I\'ve been to approximately 50 countries, some of which I have forgotten, many of which I would like to revisit.',
      'In 2023, I visited France, the UK, Ireland, and Rwanda.',
      'I am an Oregon Trail II enthusiast.',
    ],
    type: 'list',
  },
  {
    title: 'Fun Facts',
    content: [
      'I have a list of thousands of ideas, like creating matching bow ties for cats and humans.',
      'I almost always have a sketchbook with me and a 01 Sakura Pigma Micron Pen.',
      'I can\'t locate every country on a map.',
      'I operate a small angel fund with terrible returns.',
      'I break about 30 traffic laws on a skateboard or bicycle every single day.',
      'I added this page because many people complained that my site was just my resume.',
    ],
    type: 'list',
  },
  {
    title: 'I Dream Of',
    content: [
      'Inspiring and feeling inspired.',
      'Enabling a brighter future for everyone, regardless of political or socioeconomic status.',
      'Treating every individual with genuine kindness and respect.',
      'Staying curious.',
      'Continually improving.',
    ],
    type: 'list',
  },
];

export default aboutData;
