import type { CSSProperties } from 'react';
import Image from 'next/image';
import Stream from '@/components/Stream';
import Work from '@/components/Work';
import { Reveal, Typer, Count, Fx, ThemeToggle } from '@/components/Fx';
const skills: [string, string[]][] = [
  ['Frontend Development', ['React.js', 'Angular', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']],
  ['Backend & API Development', ['Node.js', 'Express.js', 'RESTful APIs', 'Middleware', 'Server-Side Development']],
  ['Database Technologies', ['MongoDB', 'PostgreSQL', 'SQL', 'Database Design', 'Query Writing', 'Data Modeling']],
  ['Cloud & Deployment', ['AWS EC2', 'Amazon S3', 'Linux Server Configuration', 'Security Groups', 'Application Hosting', 'File Storage']],
  ['Full Stack Technologies', ['MERN Stack', 'MEAN Stack', 'Client-Server Architecture']],
  ['Development Practices', ['Agile Methodology', 'API Integration', 'Debugging', 'Code Review', 'Performance Optimization']],
  ['Tools & Platforms', ['Git', 'GitHub', 'Postman', 'Visual Studio Code', 'IntelliJ IDEA']],
  ['AI-Assisted Development Tools', ['ChatGPT', 'GitHub Copilot', 'Cursor AI', 'Claude AI', 'Gemini']],
];
const cycle = ['Requirement analysis', 'Implementation', 'Testing', 'Deployment', 'Production support'];
const roles = ['MERN Stack', 'MEAN Stack', 'Next.js', 'AWS', 'SQL'];
const chips: [string, string, string][] = [['React.js', '6%', '4%'], ['Next.js', '78%', '2%'], ['Angular', '-6%', '44%'], ['Node.js', '88%', '40%'], ['MongoDB', '2%', '84%'], ['AWS EC2', '80%', '80%']];
const all = skills.flatMap(([, i]) => i);
const rowA = all.filter((_, i) => i % 2 === 0), rowB = all.filter((_, i) => i % 2 === 1);
const Row = ({ items, rev }: { items: string[]; rev?: boolean }) => (
  <div className="mqw" aria-hidden="true"><div className={`mq${rev ? ' rev' : ''}`}>{[...items, ...items].map((t, i) => <span key={i}>{t}</span>)}</div></div>
);
export default function Page() {
  return (
    <>
      <Fx />
      <header className="bar">
        <a href="#top" className="logo">MG</a>
        <nav><a href="#shipped">Shipped</a><a href="#work">Projects</a><a href="#stack">Skills</a><a href="#about">About</a><a className="pill" href="#contact">Contact</a></nav>
        <ThemeToggle />
      </header>
      <main id="top">
        <section className="hero">
          <div className="hero-txt">
            <p className="hi">Software Developer in Chennai</p>
            <h1 aria-label="Manoj G">
              {'Manoj\u00A0G'.split('').map((c, i) => <span key={i} className="ch" aria-hidden="true" style={{ '--i': i } as CSSProperties}>{c}</span>)}
            </h1>
            <p className="role">Software Developer | <Typer words={roles} /></p>
            <p className="lede">4+ years of experience building and maintaining web applications using React.js, Angular, Next.js, Node.js, Express.js, and MongoDB.</p>
            <p className="cta"><a className="btn" href="#work">View projects</a><a className="btn ghost" href="/Manoj_G_Resume.pdf" download>Download résumé</a></p>
            <dl className="stats">
              <div><dt><Count n={4} suffix="+" /></dt><dd>years of experience</dd></div>
              <div><dt><Count n={3} /></dt><dd>platforms: Tradeseel, Moneyseel, ESMACS</dd></div>
              <div><dt><Count n={2} /></dt><dd>architectures: MERN and MEAN</dd></div>
            </dl>
          </div>
          <div className="photo">
            <div className="orbit o1" /><div className="orbit o2" />
            <div className="disc"><Image src="/profile-manoj.jpg" alt="Portrait of Manoj G" width={880} height={1135} priority /></div>
            {['React.js', 'Next.js', 'Angular', 'Node.js', 'MongoDB', 'AWS'].map((t, i) => (
              <div key={t} className="arm" style={{ animationDelay: `${-i * 5}s` }}><span className="chip" style={{ animationDelay: `${-i * 5}s` }}>{t}</span></div>
            ))}
          </div>
        </section>
        <Row items={rowA} /><Row items={rowB} rev />
        <section id="shipped" className="sec"><Reveal><h2>What I have shipped</h2><Stream /></Reveal></section>
        <section id="work" className="sec"><Reveal><h2>Projects handled</h2><Work /></Reveal></section>
        <section id="stack" className="sec"><Reveal><h2>Skills</h2>
          <dl className="stack">{skills.map(([g, items]) => <div key={g}><dt>{g}</dt><dd>{items.map((s) => <span key={s}>{s}</span>)}</dd></div>)}</dl></Reveal></section>
        <section id="about" className="sec"><Reveal><h2>About</h2>
          <p className="big">Software Developer with 4+ years of experience building and maintaining web applications using React.js, Angular, Next.js, Node.js, Express.js, and MongoDB. Experienced in developing user-friendly interfaces, designing RESTful services, implementing secure authentication, and managing application data. Skilled in JavaScript, TypeScript, PostgreSQL, and cloud deployment using AWS EC2 and Amazon S3. Contributed to enterprise platforms across trading, financial management, and employer compliance, with a focus on application reliability, maintainable code, and efficient business workflows.</p>
          <ol className="tl">
            <li><span className="when">08/2022 – Present | Chennai</span><strong>Software Developer, BritApp Systems Private Limited</strong><p>Contributed to the development and maintenance of Tradeseel, Moneyseel, and ESMACS, handling frontend interfaces, backend services, database operations, and cloud deployment across MERN, MEAN, and Next.js applications. Worked on business-specific features, secure user access, third-party integrations, API testing, and production issue resolution while collaborating with the development team to deliver reliable software solutions.</p></li>
            <li><span className="when">2018 – 2022 | Tamilnadu</span><strong>Bachelor of Science (Honours), Tamil Nadu Agricultural University</strong></li>
          </ol>
          <h3 className="sub">Across the development lifecycle</h3>
          <ol className="cycle">{cycle.map((c) => <li key={c}>{c}</li>)}</ol></Reveal></section>
        <section id="contact" className="sec contact"><Reveal>
          <h2>Let’s build something reliable</h2>
          <a className="mail" href="mailto:manojfullstackdev255@gmail.com">manojfullstackdev255@gmail.com</a>
          <p><a href="tel:+918248953442">+91 82489 53442</a> · Chennai, Tamil Nadu, India</p></Reveal></section>
      </main>
      <footer className="foot">© {new Date().getFullYear()} Manoj G</footer>
    </>
  );
}
