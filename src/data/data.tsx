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
import heroImage from '../images/header.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.png';
import porfolioImage8 from '../images/portfolio/portfolio-8.png';

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
  title: 'Andrii Znaidiuk',
  description: "This is my .Net Full Stack Resume",
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
  name: `I'm  Andrii Znaidiuk.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Poland based <strong className="text-stone-100">Full Stack .NET Engineer</strong> with 6+ years of experience leading both Microsoft Technology and performing quality
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
  description: `8+ years of experience in Software Application Development.
  Application development using with C#, WCF, WPF and Winforms.
  Expert at Frontend frameworks such as React, Angular and Vue.JS.
  Good Knowledge to web Technologies: ASP.NET, Node.JS, ASP.NET core.
  Experience with Trello, Github/GitLab, Azure DevOps, Agile and CI/CD.`,
  description1: ` Ability to learn & develop using new technologies quickly.
  Highly motivated, quick learning team player with good technical skills.
  Working individually and contributing with in team.
  Coordinating with the team and with client.`,
  aboutItems: [
    {label: 'Location', text: 'Warsaw, Poland', Icon: MapIcon },
    {label: 'Age', text: '29', Icon: CalendarIcon },
    {label: 'Interests', text: 'Soccer, Gamer', Icon: SparklesIcon },
    {label: 'Study', text: 'Kyiv National University of Culture and Arts', Icon: AcademicCapIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React/Next',
        level: 10,
      },
      {
        name: 'Razor/Blazor',
        level: 10,
      },
      {
        name: 'Vue/Nuxt',
        level: 9,
      },
      {
        name: 'Angular/Angular.JS',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Asp.Net Core/Asp.Net MVC/Asp.Net Core Web API',
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
    name: 'Desktop Applications',
    skills: [
      {
        name: 'Windows Forms',
        level: 9,
      },
      {
        name: 'WPF',
        level: 8,
      },
      {
        name: 'MAUI',
        level: 8,
      },
      {
        name: 'UWP',
        level: 8,
      }
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
    name: 'Blockchain',
    skills: [
      {
        name: 'Smart Contracts',
        level: 8,
      },
      {
        name: 'Ethereum',
        level: 8,
      },
      {
        name: 'CryptoCurrency',
        level: 8,
      },
      {
        name: 'NFTs',
        level: 8,
      }
    ],
  },
  {
    name: 'GameFi development',
    skills: [
      {
        name: 'Unity',
        level: 9,
      },
      {
        name: 'Cocos',
        level: 8,
      },
      {
        name: 'Play2Earn',
        level: 7,
      },
      {
        name: 'Multiplayer',
        level: 6,
      }
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Lets Use Data',
    description: 'Lets Use Data to Improve your Learning Experience.',
    url: 'https://letsusedata.com/',
    image: porfolioImage1,
  },
  {
    title: 'Dorm Mom',
    description: 'Provides Laundry Services, Grocery Delivery, Apartment and Dorm Room Cleaning to College Students across the United States at very reasonable rates.',
    url: 'https://dormmom.com/',
    image: porfolioImage3,
  },
  {
    title: 'Tesora Financial',
    description: 'Tesora International. Financial Services. Financial and technological platform ready to offer the best tools and assessments for businesses and entrepreneurs.',
    url: 'https://tesorafinancial.com/',
    image: porfolioImage5,
  },
  {
    title: 'TePe USA',
    description: 'On the TePe corporate website you can find information about odontology, research and our management team.',
    url: 'https://www.tepeusa.com/',
    image: porfolioImage4,
  },
  {
    title: 'Bell Boy System',
    description: 'Bell Boy beta system is free to use single platform smart room services system that offers high-end 5-star luxury hotel services for both renters and hosts.',
    url: 'https://app.bell-boy.com/',
    image: porfolioImage2,
  },
  {
    title: 'Best Fiends',
    description: 'Best Fiends is a popular mobile game and media franchise centered around tile-matching gameplay. Since its launch in 2014, the original Best Fiends game has been downloaded almost 100 million times, as of August 2019.',
    url: 'https://apps.apple.com/us/app/best-fiends-match-3-puzzles/id868013618',
    image: porfolioImage6,
  },
  {
    title: 'Learnbots App',
    description: 'This is Learning app about 101 verbs of 22 countries.',
    url: 'https://play.google.com/store/apps/details?id=com.education.leanrbot',
    image: porfolioImage8,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2014',
    location: 'Kyiv National University of Culture and Arts',
    title: 'Bachelor of Computer Science',
    content: <p>When I was a student, I tried to get skills such as computer science, math and statistics to become a good software engineer.</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2020 - December 2022',
    location: 'Tesora Financial, Spain, Remote',
    title: 'Lead .Net Developer',
    content: (
      <ul className="list-disc">
        <li>
          Developed frontend using Angular and admin-panel using React.
        </li>
        <li>
          Used Redux(Thunk) and Ngrx for the flex pattern and selected styled components and Material UI for styling.
        </li>
        <li>
          Added mint, transfer logic with Smart contract base on ERC721 with Solidity using Truffle.
        </li>
        <li>
          Created RESTful endpoints using Asp.net Core Web API and PostgreSQL hosted on the AWS.
        </li>
        <li>
          Used FluentValidation, Cronos, Nethereum and Swashbuckle packages for backend development.
        </li>
        <li>
          Hosted backend using AWS Elastic Beanstalk and set CI/CD on the Azure DevOps.
        </li>
        <li>
          Implemented SSO using own company's third party API and used OpenId nuget package for authication.
        </li>
        <li>
          Using IPFS and infra for NFT minting and implemented auction, bid, create and offer login in backend.
        </li>
      </ul>
    ),
  },
  {
    date: 'November 2018 - June 2020',
    location: 'TePe, Sweden, Remote',
    title: 'Full Stack .Net Developer',
    content: (
      <ul className="list-disc">
        <li>
          Used React JS for creating reusable UI components and have chosen Material UI for CSS styling.
        </li>
        <li>
          Implemented Auth0 and html2canvas package for the frontend.
        </li>
        <li>
          Created Menus and Drawer component by using Typescript.
        </li>
        <li>
          Analyzed code quality and performance with jsHint and YSlow.
        </li>
        <li>
          Frontend project hosting using DigitalOcean and set CI/CD on the Azure DevOps.
        </li>
        <li>
          Used MS SQL Server and EF 3.1.5 for database management.
        </li>
        <li>
          Choosed Repository pattern for development and follow SDLC pattern.
        </li>
        <li>
          Implemented Swashbuckle nuget package for SwaggerUI for API endpoints using Asp.Net Core Web API.
        </li>
        <li>
          Used AutoMapper Nuget packaget to match Model and ViewModel.
        </li>
        <li>
          Integrated backend testcases with xUnit and nUnit using Mocking Nuget Packages.
        </li>
      </ul>
    ),
  },
  {
    date: 'April 2017 - September 2018',
    location: 'Bell Boy System, US, Remote',
    title: 'ASP.NET Core Developer',
    content: (
      <ul className="list-disc">
        <li>
        Developed frontend using HTML/CSS/JavaScript and processed request and response with using Ajax.
        </li>
        <li>
        Used code-first design pattern and EF6.0, Firebase, MS SQL Server for database management.
        </li>
        <li>
        Implemented real time chat server for chat and used MVVM pattern for backend development.
        </li>
        <li>
        Followed SDLC for development and xUnit, nUnit for test cases.
        </li>
        <li>
        Divided backend into 3 logic layers so users can use backend easily.
        </li>
        <li>
        Used Twilio package for sending SMS and LinqToExcel, Syncfusion UI for the document printing.
        </li>
        <li>
        Used CQRS, MediatR and Domain Driven Design pattern for the backend development to optimize the speed of the project.
        </li>
      </ul>
    ),
  },
  {
    date: 'June 2015 - March 2017',
    location: 'Dorm Mom, US, Remote',
    title: 'ASP.NET Core Developer',
    content: (
      <ul className="list-disc">
        <li>
        Developed frontend using HTML/CSS/JavaScript and processed request and response with using Ajax.
        </li>
        <li>
        Choosed MS SQL server and Entity framework core for database control.
        </li>
        <li>
        Developed backend using Asp.Net core with .Net version 5.1.
        </li>
        <li>
        Integrated payment processing such as Paypal, Stripe.
        </li>
        <li>
        Use Azure DevOps for development and use github for source control.
        </li>
        <li>
        Implemented SSO such as google auth, facebook oauth, apple auth and twitter auth.
        </li>
        <li>
        Testing the system features and functionalities using unit testing, integration testing, and acceptance testing.
        </li>
        <li>
        Deploying the system to the production environment using Azure DevOps and Azure App Service.
        </li>
        <li>
        Providing technical support and maintenance to the system users, troubleshooting issues, and fixing bugs.
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
      type: ContactType.Phone,
      text: '+48 881 155 881',
      href: '',
    },
    {
      type: ContactType.Email,
      text: 'Znaidiukandrii28@gmail.com',
      href: 'mailto:Znaidiukandrii28@gmail.com',
    },
    {
       type: ContactType.Location,
       text: 'Warsaw , Poland',
       href: 'https://www.google.com/maps/place/Warsaw,+Poland',
    },
    {
       type: ContactType.LinkedIn,
       text: 'Andrii Znaidiuk',
       href: 'https://www.linkedin.com/in/andrii-znaidiuk-706800276/',
    },
    {
      type: ContactType.Github,
      text: 'topten1004',
      href: 'https://github.com/topten1004',
    }
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/topten10014' },
  { label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx' },
];
