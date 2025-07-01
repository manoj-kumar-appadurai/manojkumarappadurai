const projects = [
  {
    id: 1,
    url: 'sidbi',
    banner: '/projects/Sidbi/banner.png',
    img: '/projects/Sidbi/banner.png',
    title: 'SIDBI',
    type: 'Banking Platform',
    icon: '/projects/Sidbi/icon.png',
    web: 'https://www.sidbi.in/en/',
    github: '',
    blog: '',
    description: `SIDBI (Small Industries Development Bank of India) is a government-backed financial institution that supports micro, small, and medium enterprises across India. The platform aims to offer funding and development support to industries while promoting financial inclusion.

I was actively involved in enhancing the UI of SIDBI’s internal banking modules, contributing to the optimization of form flows, component alignment, and overall layout consistency. The system handled complex banking operations and required pixel-perfect UI execution.

In collaboration with QA and the backend teams, I also responded to client-side observations, updated UIs dynamically, and ensured all improvements were production-ready. All updates were deployed live using FileZilla over secured FTP protocols.`,
    tags: [{ name: 'Client Projects' }],
    tech: [
      { name: 'HTML', icon: '/icons/HTML.png', color: '#38BDF8', rgb: '56, 189, 248' },
      { name: 'CSS', icon: '/icons/CSS.png', color: '#38BDF8', rgb: '56, 189, 248' },
      { name: 'Bootstrap', icon: '/icons/bootstrap.png', color: '#7952B3', rgb: '121, 82, 179' },
      { name: 'JavaScript', icon: '/icons/JS.png', color: '#38BDF8', rgb: '56, 189, 248' },
      { name: 'jQuery', icon: '/icons/jquery.png', color: '#0769AD', rgb: '7, 105, 173' },
      { name: 'Figma', icon: '/icons/figma.png', color: '#F24E1E', rgb: '242, 78, 30' },
    ],
    roles: [
      'Developed UI for more than 100+ internal pages using HTML, CSS, JS, and jQuery.',
      'Resolved client observations and implemented visual consistency across modules.',
      'Collaborated with testers to validate edge cases and client feedback flows.',
      'Maintained live deployment workflow using FileZilla for FTP-based server updates.',
      'Created documentation for each screen including update history and revisions.',
      'Supported backend team with HTML/CSS integration and minor logic debugging.'
    ],
    status: 'Completed',
    year: '2024',
    backgroundImage: '/projects/Background.png'
  },
  {
    id: 2,
    url: 'zenro',
    banner: '/projects/Zenro/banner.png',
    img: '/projects/Zenro/banner.png',
    title: 'Zenro Payroll',
    type: 'Payroll Web App',
    icon: '/projects/Zenro/icon.png',
    web: 'https://zenropayroll.com/',
    github: '',
    blog: '',
    description: `Zenro is a cloud-based payroll management platform built to streamline HR processes like salary computation, compliance, and payslip generation. It is designed to serve businesses of all scales, from startups to enterprise clients.

As the sole UI/UX contributor, I took ownership of wireframing, prototyping, and implementing the entire front-end design using Figma, HTML, CSS, and jQuery. This ensured the product's interface was responsive, clear, and intuitive across devices.

Zenro also demanded a pixel-perfect user experience, and I handled the visual delivery including graphic design using Photoshop and PowerPoint. Final production deployment was done manually using FileZilla.`,
    tags: [{ name: 'Client Projects' }],
    tech: [
      { name: 'HTML', icon: '/icons/HTML.png', color: '#38BDF8', rgb: '56, 189, 248' },
      { name: 'CSS', icon: '/icons/CSS.png', color: '#38BDF8', rgb: '56, 189, 248' },
      { name: 'Bootstrap', icon: '/icons/bootstrap.png', color: '#7952B3', rgb: '121, 82, 179' },
      { name: 'JavaScript', icon: '/icons/JS.png', color: '#38BDF8', rgb: '56, 189, 248' },
      { name: 'jQuery', icon: '/icons/jquery.png', color: '#0769AD', rgb: '7, 105, 173' },
      { name: 'Figma', icon: '/icons/figma.png', color: '#F24E1E', rgb: '242, 78, 30' },
      { name: 'Photoshop', icon: '/icons/photoshop.png', color: '#31A8FF', rgb: '49, 168, 255' },
      { name: 'PowerPoint', icon: '/icons/powerpoint.png', color: '#D24726', rgb: '210, 71, 38' },
    ],
    roles: [
      'Independently researched and designed the UI in Figma.',
      'Developed responsive layouts across desktop, tablet, and mobile.',
      'Handled pixel-perfect conversion of mockups to code using Bootstrap and jQuery.',
      'Implemented all visual assets and iconography using Photoshop and PowerPoint.',
      'Managed server deployment via FileZilla ensuring bug-free transitions.',
      'Collaborated closely with founders to iterate on design and layout feedback.'
    ],
    status: 'Completed',
    year: '2025',
    backgroundImage: '/projects/Background.png'
  },
  {
    id: 3,
    url: 'farmaze',
    banner: '/projects/Farmaze/banner.png',
    img: '/projects/Farmaze/banner.png',
    title: 'Farmaze',
    type: 'Retail POS Platform',
    icon: '/projects/Farmaze/icon.png',
    web: 'https://www.farmaze.com/',
    github: '',
    blog: '',
    description: `Farmaze is a point-of-sale system tailored for pharmacies, restaurants, and supermarkets. It streamlines billing, inventory, reporting, and customer data management through a centralized platform.

The platform includes multiple dashboards and control panels for billing, discounts, offers, and reports. I worked on UI support using React.js and Material UI, helping restructure core pages for usability and responsiveness.

The redesign project aimed to boost clarity, reduce friction during product selection and checkout, and enhance the overall modern feel using Figma-driven visual updates.`,
    tags: [{ name: 'Client Projects' }],
    tech: [
      { name: 'React.js', icon: '/icons/react.png', color: '#38BDF8', rgb: '56, 189, 248' },
      { name: 'Figma', icon: '/icons/figma.png', color: '#F24E1E', rgb: '242, 78, 30' },
      { name: 'OpenAI', icon: '/icons/openai.png', color: '#10A37F', rgb: '16, 163, 127' }
    ],
    roles: [
      'Contributed to UI development with React and Material UI.',
      'Refactored existing components for scalability and maintainability.',
      'Assisted in designing and implementing admin dashboard pages.',
      'Improved layout consistency and performance on mobile devices.',
      'Coordinated with product team on feedback loops using Figma.'
    ],
    status: 'Completed',
    year: '2024',
    backgroundImage: '/projects/Background.png'
  },
  {
    id: 4,
    url: 'zaviyo',
    banner: '/projects/Zaviyo/banner.png',
    img: '/projects/Zaviyo/banner.png',
    title: 'Zaviyo',
    type: 'Ecommerce Website',
    icon: '/projects/Zaviyo/icon.png',
    web: 'https://zaviyo.netlify.app/',
    github: '',
    blog: '',
    description: `Zaviyo is a modern ecommerce frontend project built from scratch. It showcases categories, product listings, filtering, cart features, and smooth transitions. The layout is simple, clean, and optimized for conversions.

Created in under three days as part of an assessment, I used only HTML, CSS, Bootstrap, and JavaScript. The focus was on responsiveness, mobile-first design, and animated user interactions using jQuery.

This project demonstrates my ability to take a static idea and convert it into a working, fully navigable ecommerce UI with all essential features.`,
    tags: [{ name: 'Personal Projects' }],
    tech: [
      { name: 'HTML', icon: '/icons/HTML.png', color: '#38BDF8', rgb: '56, 189, 248' },
      { name: 'CSS', icon: '/icons/CSS.png', color: '#38BDF8', rgb: '56, 189, 248' },
      { name: 'JavaScript', icon: '/icons/JS.png', color: '#38BDF8', rgb: '56, 189, 248' },
      { name: 'jQuery', icon: '/icons/jquery.png', color: '#0769AD', rgb: '7, 105, 173' },
      { name: 'Bootstrap', icon: '/icons/bootstrap.png', color: '#7952B3', rgb: '121, 82, 179' }
    ],
    roles: [
      'Developed full ecommerce UI in less than 3 days as part of an assessment.',
      'Implemented shopping cart, product filters, and navigation structure.',
      'Ensured full responsiveness across mobile, tablet, and desktop.',
      'Handled all design, layout, and interactions without external libraries.',
      'Used jQuery for simple animations and transitions.'
    ],
    status: 'Completed',
    year: '2024',
    backgroundImage: '/projects/Background.png'
  }
];

export default projects;