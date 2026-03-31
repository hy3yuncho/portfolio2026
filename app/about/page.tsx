import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <>
      {/* Intro: bio left, CV right */}
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
            <div className={styles["cv-entries"]}>
              <div className={styles["cv-entry"]}>
                <p><span className={styles["cv-company"]}>Detectify /</span><span className={styles["cv-role"]}> Product Design Intern</span></p>
                <span className={styles["cv-date"]}>SPRING 2026</span>
              </div>
              <div className={styles["cv-entry"]}>
                <p><span className={styles["cv-company"]}>Appstract /</span><span className={styles["cv-role"]}> Product Designer</span></p>
                <span className={styles["cv-date"]}>SPRING 2026</span>
              </div>
              <div className={styles["cv-entry"]}>
                <p><span className={styles["cv-company"]}>Amiqa /</span><span className={styles["cv-role"]}> Product Design Intern</span></p>
                <span className={styles["cv-date"]}>SUMMER 2025</span>
              </div>
              <div className={styles["cv-entry"]}>
                <p><span className={styles["cv-company"]}>Valtech Radon /</span><span className={styles["cv-role"]}> Creative Strategy Intern</span></p>
                <span className={styles["cv-date"]}>SPRING 2025</span>
              </div>
              <div className={styles["cv-entry"]}>
                <p><span className={styles["cv-company"]}>Deloitte Consulting /</span><span className={styles["cv-role"]}> FS strategy associate</span></p>
                <span className={styles["cv-date"]}>June 2023 - Mar 2024</span>
              </div>
            </div>
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

      {/* 4-photo grid */}
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

    </>
  );
}
