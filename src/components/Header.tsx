'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext';
import styles from '@/styles/Header.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/publications', label: 'Publications' },
//   { href: '/group', label: 'Group' }, // Commenting out for now as per resume
  { href: '/teaching', label: 'Teaching' },
//   { href: '/resources', label: 'Resources' }, // Commenting out for now as per resume
  { href: '/cv', label: 'CV' },
];

export const Header = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.personalInfo}>
        <h1>魏士雄 (Shi-Xiong Wei)</h1>
        <p>PhD, Internal Medicine, Union Hospital, Tongji Medical College, Huazhong University of Science and Technology</p>
      </div>
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? styles.active : ''}
          >
            {link.label}
          </Link>
        ))}
        <button onClick={toggleTheme} className={styles.themeSwitcher}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  );
};