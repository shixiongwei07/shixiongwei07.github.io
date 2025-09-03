'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/Teaching.module.css';

const teachingCourses = [
    {
        id: 'pathology_fall_2025',
        title: 'Pathology',
        semester: 'Fall 2025',
        description: 'An introductory course covering the fundamental principles of pathology, including general pathology and systemic pathology. Focuses on the causes, mechanisms, and morphological changes of diseases.',
    },
    {
        id: 'internal_medicine_fall_2025',
        title: 'Internal Medicine',
        semester: 'Fall 2025',
        description: 'A comprehensive course on the diagnosis and treatment of common internal medicine diseases. Covers various systems including cardiovascular, respiratory, digestive, urinary, and endocrine systems.',
    },
];

const TeachingPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section id="teaching">
                <h2>Teaching</h2>
                <ul className={styles.courseList}>
                    {teachingCourses.map((course, index) => (
                        <motion.li
                            key={course.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <h3>{course.title}</h3>
                            <p><strong>Semester:</strong> {course.semester}</p>
                            <p>{course.description}</p>
                        </motion.li>
                    ))}
                </ul>
            </section>
        </motion.div>
    );
};

export default TeachingPage;
