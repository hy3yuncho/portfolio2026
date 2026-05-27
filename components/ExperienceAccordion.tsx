'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import styles from './ExperienceAccordion.module.css';

export interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  expandedTitle: string;
  expandedBody: string;
}

interface Props {
  items: ExperienceItem[];
}

export default function ExperienceAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.entries}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={styles.item}>
            <button
              className={styles.row}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <ChevronRight
                size={14}
                className={`${styles.chevron}${isOpen ? ` ${styles.chevronOpen}` : ''}`}
              />
              <span className={styles.rowMain}>
                <span className={styles.company}>{item.company} /</span>
                <span className={styles.role}> {item.role}</span>
              </span>
              <span className={styles.date}>{item.date}</span>
            </button>
            <div className={`${styles.panel}${isOpen ? ` ${styles.panelOpen}` : ''}`}>
              <div className={styles.panelInner}>
                <div className={styles.panelContent}>
                  <p className={styles.panelTitle}>{item.expandedTitle}</p>
                  <p className={styles.panelBody}>{item.expandedBody}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
