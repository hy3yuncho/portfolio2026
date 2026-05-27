import Image from "next/image";
import styles from "./about.module.css";
import FadeIn from "@/components/FadeIn";
import ExperienceAccordion, { type ExperienceItem } from "@/components/ExperienceAccordion";

const experiences: ExperienceItem[] = [
  {
    company: 'Appstract',
    role: 'Product Designer',
    date: 'Spring 2026',
    expandedTitle: 'Sole designer. Full lifecycle.',
    expandedBody: 'I came in to solve what looked like an engagement problem. Research said otherwise. The real constraint was structural friction upstream, not the feature the team had been focused on, and that finding reframed the whole project. I rebuilt the interaction model and onboarding flow from scratch around it, and designed an ambient social signal system that surfaces social proof without interrupting the core flow. No design team to hand off to. Discovery through delivery.',
  },
  {
    company: 'Detectify',
    role: 'Product Design Intern',
    date: 'Spring 2026',
    expandedTitle: 'From inconsistency to system.',
    expandedBody: 'I joined mid-sprint and stayed in sprint. My focus was building out the core design system to WCAG AA compliance, which meant going deep on interaction patterns that had accumulated inconsistencies over time. Alongside that, I restructured the main navigation, remapping it from a feature-release logic to how security professionals actually move through their work. Shipped in weekly cycles, directly with PM and engineering. I also prototyped interaction concepts in working HTML/CSS using Claude Code and Cursor, so ideas could be validated at design speed without pulling engineering in early.',
  },
  {
    company: 'Amiqa',
    role: 'Product Design Intern',
    date: 'Summer 2025',
    expandedTitle: 'Designing for people who never think about design.',
    expandedBody: 'Amiqa was building a calendar-based availability tool for small hotel owners, people running a property on their own without a tech team behind them. The challenge wasn\'t what to build, it was how much to strip back without losing utility. I started with user research, built out personas and journey maps, and used those to draw the line between helpful simplicity and patronising oversimplification. The output was a responsive MVP that had to work for someone who\'d never thought about UX in their life.',
  },
  {
    company: 'Valtech Radon',
    role: 'Creative Strategy Intern',
    date: 'Spring 2025',
    expandedTitle: 'Strategy work, global clients, a lot of post-its.',
    expandedBody: 'Valtech Radon sits at the intersection of creative and consulting, which suited me well. I worked across user and market research for campaigns spanning 5+ regions, the kind of research that ends up shaping media strategy and content frameworks, not just design. Clients included Husqvarna and Ericsson. The work was fast, cross-functional, and taught me how to translate behavioural findings into briefs that creative teams can actually use.',
  },
  {
    company: 'Deloitte Consulting',
    role: 'Strategy Associate',
    date: 'June 2023–Mar 2024',
    expandedTitle: 'Where I learned to read a product like a system.',
    expandedBody: 'I came into Deloitte from a psychology and finance degree, and it showed in the work. I mapped 30+ digital finance and insurance products to surface UX friction, translating regulatory complexity and B2B product logic into something a human could actually navigate. That included defining interaction flows for a mobile app built for financial consultants. Every design decision had to hold up under compliance constraints and professional user scrutiny. It was a good place to learn precision.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Intro: bio left, CV right */}
      <FadeIn>
      <div className={styles["about-top"]}>

        <div>
          <p className={styles["bio-heading"]}>Hej, I&apos;m Hailey!</p>
          <div className={styles["bio-body"]}>
            <p>I&apos;m a product designer working at the intersection of business logic and human behaviour.</p>
            <p>In Korean, there&apos;s a concept called &ldquo;연 (yeon 緣)&rdquo;: the invisible connections that shape meaning between people and contexts.</p>
            <p>That idea guides my work. I design by identifying the underlying threads that connect user decisions, business goals, and brand clarity.</p>
            <p>Born in South Korea, shaped in Australia, and now based in Sweden, I bring a cross-cultural perspective grounded in psychology to build products that feel coherent, intentional, and trustworthy.</p>
            <p>Outside of design, I&apos;m:</p>
            <ul>
              <li>hunting down the best pour-over in every city I visit (there is a mental ranking)</li>
              <li>somewhere between planning the next trip and still processing the last one</li>
              <li>treating every sunny day in Stockholm like a genuine emergency</li>
              <li>photographing whatever catches my eye and never look back</li>
            </ul>
          </div>
        </div>

        <div className={styles["cv-section"]}>

          <div className={styles["cv-block"]}>
            <p className={styles["cv-heading"]}>Experience</p>
            <ExperienceAccordion items={experiences} />
          </div>

          <div className={styles["cv-block"]}>
            <p className={styles["cv-heading"]}>Education</p>
            <div className={styles["cv-entries"]}>
              <div className={styles["cv-entry"]}>
                <p><span className={styles["cv-company"]}>Hyper Island /</span><span className={styles["cv-role"]}> Digital Creative</span></p>
                <span className={styles["cv-date"]}>2024-2026</span>
              </div>
              <div className={styles["cv-entry"]}>
                <p><span className={styles["cv-company"]}>Australian National University /</span><span className={styles["cv-role"]}> B.S Psychology, B.C Finance</span></p>
                <span className={styles["cv-date"]}>2019-2023</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      </FadeIn>

      {/* 4-photo grid */}
      <FadeIn delay={100}>
      <div className={styles["photo-grid"]}>
        <div className={styles["photo-placeholder"]}>
          <Image src="/about/about1.jpg" alt="Hailey — photo 1" fill style={{ objectFit: "cover" }} sizes="25vw" quality={100} />
        </div>
        <div className={styles["photo-placeholder"]}>
          <Image src="/about/about2.JPG" alt="Hailey — photo 2" fill style={{ objectFit: "cover" }} sizes="25vw" quality={100} />
        </div>
        <div className={styles["photo-placeholder"]}>
          <Image src="/about/about3.JPG" alt="Hailey — photo 3" fill style={{ objectFit: "cover" }} sizes="25vw" quality={100} />
        </div>
        <div className={styles["photo-placeholder"]}>
          <Image src="/about/about4.jpg" alt="Hailey — photo 4" fill style={{ objectFit: "cover" }} sizes="25vw" quality={100} />
        </div>
      </div>
      </FadeIn>

    </>
  );
}
