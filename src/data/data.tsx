import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  // FlagIcon,
  MapIcon,
  // OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Rostyslav Resume',
  description: "This is my Java Full Stack Resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm  Rostyslav.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Poland based <strong className="text-stone-100">Full Stack Software Engineer</strong> with 6+ years of experience leading both back-end & front-end development, and performing quality
        assurance.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Self-motivated</strong> and self-taught professional who likes to solve difficult problem, <strong className="text-stone-100">creative</strong> & <strong className="text-stone-100">open-mind</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Senior Java Full Stack Developer with over 6+ years of experience in software design, development, implementation and
  software engineering which also includes integration, maintenance and testing of various client/server, and web
  applications.`,
  description1: `Skilled and experienced in Core Java, Spring (and frameworks), Hibernate with JPA, Spring mvc, Spring Data, Rest
  services, JSON, Junit 4.0, mockito framework.In-depth knowledge of patterns and practices, including Object Oriented
  Programming, MVC, REST architecture, Agile, Test Driven Development (TDD) and Continuous integration. Strong working
  knowledge on modern build tools and continuous integration framework.`,
  aboutItems: [
    { label: 'Location', text: 'Warsaw, Poland', Icon: MapIcon },
    { label: 'Age', text: '28', Icon: CalendarIcon },
    { label: 'Interests', text: 'NFT, Game development', Icon: SparklesIcon },
    { label: 'Study', text: 'University of Warsaw', Icon: AcademicCapIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java/Spring Boot',
        level: 10,
      },
      {
        name: 'Node.js/Express.js',
        level: 10,
      },
      {
        name: 'Php/Laravel',
        level: 9,
      },
      {
        name: 'Python/Django/Flask',
        level: 9,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 10,
      },
      {
        name: 'Flutter',
        level: 9,
      },
      {
        name: 'Swift',
        level: 8,
      },
      {
        name: 'Java/Kotlin',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Vue',
        level: 9,
      },
      {
        name: 'Angular',
        level: 9,
      }
    ],
  },
  {
    name: 'Game Development',
    skills: [
      {
        name: 'Unity3D',
        level: 10,
      },
      {
        name: 'Unreal Engine',
        level: 8,
      },
      {
        name: 'three.js',
        level: 8,
      }
    ],
  },
 
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Callsign',
    description: 'Introducing a new era in passive authentication, fraud prevention and intelligence.',
    url: 'https://www.callsign.com/',
    image: porfolioImage1,
  },
  {
    title: 'Mettle Tech',
    description: 'We are Mettle tech - a one stop solution for Enterprise level software, applications and AI/ML solutions.',
    url: 'https://mettletech.co/',
    image: porfolioImage2,
  },
  {
    title: 'Kanon Exchange',
    description: 'Kanon Exchange is the native marketplace and NFT minting platform for the Synesis One ecosystem.',
    url: 'https://www.kanon.exchange',
    image: porfolioImage3,
  },
  {
    title: 'Synesis One',
    description: 'Synesis One is a data crowdsourcing platform where anyone can earn $SNS by completing micro-tasks that train AI.',
    url: 'https://www.synesis.one',
    image: porfolioImage4,
  },
  {
    title: 'Telmie',
    description: 'Telmie is an all-in-one platform and bespoke matching service that combines the best of online, video, and face-to-face learning.',
    url: 'https://www.telmie.com/',
    image: porfolioImage5,
  },
  {
    title: 'Calahex',
    description: 'Caribbean and Latin America Hybrid Exchange Platform using ERC20 tokens - Centralized part and Decentralized part.',
    url: 'https://www.calahex.com',
    image: porfolioImage6,
  },
  {
    title: 'LearnBot',
    description: 'Developing language learning products that are innovative, educational and entertaining.',
    url: 'https://www.iedutainments.com/',
    image: porfolioImage7,
  },
  {
    title: 'Nokri Job Portal',
    description: 'Over 1 million interactions, 50,000 success stories Make yours now. Search Jobs Apply Job Now.',
    url: 'https://jobs.nokriwp.com/',
    image: porfolioImage8,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'March 2017',
    location: 'University of Warsaw',
    title: 'Bachelor of Computer Science',
    content: <p>When I was a student, I tried to get skills such as computer science, math and statistics to become a good software engineer.</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2022 - December 2022',
    location: 'Mettle',
    title: 'Full Stack developer',
    content: (
      <ul className="list-disc">
        <li>
          Contributed to the development of Mettle, a standalone SME challenger bank launched by RBS that provides a current account, instant invoicing, and the ability to add receipts to transactions and track expenses from a mobile app.
        </li>
        <li>
          Extended and maintained existing and created new microservices which fit the event sourcing architecture of the Mettle platform.
        </li>
        <li>
          Added features to the React Native mobile banking application.
        </li>
        <li>
          Migrated the event stream to AVRO so we could implement continuous deployment.
        </li>
        <li>
          Extended the automated test suite by introducing consumer-driven contract tests (Pact).
        </li>
        <li>
          Created an interactive dashboard to track business and team OKRs.
        </li>
      </ul>
    ),
  },
  {
    date: 'October 2019 - December 2021',
    location: 'Callsign',
    title: 'Full Stack Java developer',
    content: (
      <ul className="list-disc">
        <li>
          Fully-involved in the architecture, design, and development of new products and features.
        </li>
        <li>
          Wrote a new, modern version of the Callsign dashboard from scratch in React. I managed to phase out the old version of the product iteratively by working closely with product designers to rethink and redesign features and move them to the modern view.
        </li>
        <li>
          Created an extended version of the Callsign Admin REST API which provides a standard interface for onboarding organizations and users into Callsign.
        </li>
        <li>
          Contributed to Callsign On Premise (OP). We were tasked to extract part of the platform to allow deploying it on clients’ premises so that enterprises are in control of their transactional data.
        </li>
      </ul>
    ),
  },
  {
    date: 'June 2017 - September 2019',
    location: 'Ministry of Justice, UK',
    title: 'Full Stack developer',
    content: (
      <ul className="list-disc">
        <li>
          Ensured the divorce microservices fit in the overall high-level design of the reform program. This involved regular meetings with the program architects and communicating design decisions with team members.
        </li>
        <li>
          Created low-level design documents, selecting the right tools and technologies, and made sure that the software released to the public was as robust and secure as it could be.
        </li>
        <li>
          Removed technical impediments and owned the overall sprint outcome.
        </li>
        <li>
          Created new and extended existing microservices to deliver features to citizens, government officials, and solicitors.
        </li>
        <li>
          Led the digital divorce team.
        </li>
      </ul>
    ),
  },
  {
    date: 'May 2016 - Apr 2017',
    location: 'Self-Employed & Remote, Freelance',
    title: 'Full Stack developer',
    content: (
      <ul className="list-disc">
        <li>
          Worked on 4+ projects using Spring frameworks, MERN & MEAN Stack, including the website development from the scratch.
        </li>
        <li>
          Developed the website, integrated with full-text search engines such as Solr
        </li>
        <li>
          Designed, architected, and implemented scalable cloud-based web applications using AWS, Microservices & GCP, etc.
        </li>
      </ul>
    ),
  }
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I \'m always ready for you. Thanks',
  items: [
    {
      type: ContactType.Email,
      text: 'superdevstar1218@gmail.com',
      href: 'mailto:superdevstar1218@gmail.com',
    },
    // {
    //   type: ContactType.Location,
    //   text: 'Victoria BC, Canada',
    //   href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    // },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'superdevstar1218',
      href: 'https://github.com/superdevstar1218',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx' },
  { label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx' },
];
