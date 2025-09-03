'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/CV.module.css';

const CVPage = () => {
    const education = [
        {
            degree: 'Ph.D. in Clinical Medicine',
            university: 'Peking Union Medical College',
            years: '2018 - 2021',
        },
        {
            degree: 'Master of Internal Medicine',
            university: 'University of South China',
            years: '2015 - 2018',
        },
        {
            degree: 'Bachelor of Clinical Medicine',
            university: 'University of South China',
            years: '2010 - 2015',
        },
    ];

    const awards = [
        { year: 2023, title: 'Excellent Poster, Chinese Rheumatology Association' },
        { year: 2021, title: 'Outstanding Graduate, Peking Union Medical College' },
        { year: 2020, title: 'National Scholarship for Doctoral Candidates' },
        { year: 2019, title: 'Academic Scholarship, Peking Union Medical College' },
        { year: 2018, title: 'Outstanding Graduate Student, University of South China' },
    ];

    const skills = [
        'Diagnosis and treatment of rheumatic and immune diseases',
        'Clinical research methodologies',
        'English academic literature reading and writing',
        'Animal Model Development (RA, RA-ILD)',
        'Cell Culture (Mesenchymal Stem Cells, Urine-derived Stem Cells)',
        'Multi-omics Data Analysis (Single-cell Transcriptomics)',
        'Flow Cytometry',
        'Western Blot, qPCR, ELISA',
        'Histology and Immunofluorescence',
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.cvContainer}
        >
            <section id="cv-header">
                <h2>Curriculum Vitae</h2>
            </section>

            <section id="education">
                <h3>Education</h3>
                <ul className={styles.cvList}>
                    {education.map((item, index) => (
                        <li key={index}>
                            <strong>{item.degree}</strong> ({item.years})
                            <p>{item.university}</p>
                        </li>
                    ))}
                </ul>
            </section>

            <section id="skills">
                <h3>Skills</h3>
                <ul className={styles.skillsList}>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>

            <section id="awards">
                <h3>Awards and Honors</h3>
                <ul className={styles.cvList}>
                    {awards.map((award, index) => (
                        <li key={index}>
                            <strong>{award.year}:</strong> {award.title}
                        </li>
                    ))}
                </ul>
            </section>
        </motion.div>
    );
};

export default CVPage;
