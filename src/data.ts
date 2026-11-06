export const projects = [
  { id: 'tradeseel', name: 'Tradeseel', title: 'Trading and Business Management Platform',
    stack: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'AWS EC2', 'Amazon S3'],
    overview: 'Tradeseel is a trading and business management platform designed to streamline product information, customer records, order processing, and transaction-related activities. The application provides a centralized workspace for managing business operations through interactive dashboards and structured workflows. Its architecture combines Next.js-based interfaces, backend services, and cloud infrastructure to support efficient data handling and application scalability.',
    did: ['Built interactive business dashboards and reusable UI components using Next.js and React.js, improving navigation and accessibility across application modules.',
      'Developed server-side functionalities for product management, customer records, order processing, and transaction-related workflows.',
      'Designed MongoDB collections and queries to support business data storage, retrieval, and updates.',
      'Implemented search, filtering, pagination, and form validation for data-intensive management screens.',
      'Integrated frontend pages with Express.js APIs, handling asynchronous requests, loading states, and error responses.',
      'Configured application hosting on AWS EC2 and managed business documents and uploaded files through Amazon S3.'] },
  { id: 'moneyseel', name: 'Moneyseel', title: 'Expense Tracking and Financial Management System',
    stack: ['JWT authentication', 'CRUD operations', 'Financial summaries'],
    overview: 'Moneyseel is a financial management application that helps users organize income, expenses, and transaction records in one place. The platform provides expense categorization, transaction history, and financial summaries to improve visibility into personal financial activities. It focuses on secure account access, accurate record management, and a simple user experience for tracking financial information.',
    did: ['Developed financial management screens for income entry, expense tracking, transaction history, and category-based expense organization.',
      'Implemented backend operations for creating, updating, retrieving, and deleting financial records.',
      'Built summary views to display transaction totals, spending categories, and financial activity.',
      'Implemented JWT-based authentication to protect user accounts and restrict access to financial information.'] },
  { id: 'esmacs', name: 'ESMACS', title: 'Employer Sponsor Management and Compliance System',
    stack: ['MEAN Stack', 'Angular', 'Reactive Forms', 'RxJS', 'Angular Services'],
    overview: 'ESMACS is an enterprise employer sponsorship and compliance management system developed to organize employer information, employee records, sponsorship activities, and administrative processes. The application supports multiple user roles and provides structured workflows for managing compliance-related information. It uses a MEAN Stack architecture to connect administrative interfaces with backend services and centralized data management.',
    did: ['Developed Angular-based interfaces for employer profiles, employee information, and administrative management modules.',
      'Created dynamic forms with Reactive Forms, including field validation and conditional input handling.',
      'Developed role-based permissions to control access to administrative and user-specific functionalities.',
      'Used Angular Services and RxJS to manage API communication and share data between components.'] },
];
export type Line = { p: string; t: string };
export const lines: Line[] = projects
  .flatMap((p, pi) => p.did.map((t, i) => ({ p: p.name, t, i, pi })))
  .sort((a, b) => a.i - b.i || a.pi - b.pi)
  .map(({ p, t }) => ({ p, t }));
