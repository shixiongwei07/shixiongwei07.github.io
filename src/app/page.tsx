'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/Home.module.css';

const researchHighlights = [
    { id: 1, text: 'Published over 20 papers, including 8 SCI articles.' },
    { id: 2, text: 'First author paper with a high impact factor of 12.6 in the Journal of Nanobiotechnology.' },
    { id: 3, text: 'Currently has 3 SCI papers under review, with the highest impact factor being 20.6 (ARD).' },
    { id: 4, text: 'Leads 2 projects for the National Clinical Research Center for Dermatologic and Immunologic Diseases.' },
];

const Page = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section id="about">
                <h2>About Me</h2>
                <div className={styles.profileContainer}>
                    <Image
                        src="/profile.png"
                        alt="Shi-Xiong Wei"
                        width={150}
                        height={150}
                        className={styles.profilePic}
                        priority
                    />
                    <div className={styles.profileTextContainer}>
                        <p>
                            My name is Shi-Xiong Wei. I have been engaged in basic research for 7 years, focusing on the fields of internal medicine and rheumatology. I received my PhD from Peking Union Medical College and am currently affiliated with Tongji Medical College, Huazhong University of Science and Technology, Union Hospital.
                        </p>
                        <p>
                            My work involves developing novel therapeutic strategies for rheumatoid arthritis (RA) and its complications, such as interstitial lung disease (RA-ILD). I have extensive experience in animal model development, cell culture (especially with urine-derived stem cells), and multi-omics data analysis. My goal is to translate basic research findings into clinical applications to improve patient outcomes.
                        </p>
                    </div>
                </div>
            </section>

            <section id="highlights">
                <h2>Research Highlights</h2>
                <ul className={styles.newsList}>
                    {researchHighlights.map((item, index) => (
                        <motion.li
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            {item.text}
                        </motion.li>
                    ))}
                </ul>
            </section>
        </motion.div>
    );
};

export default Page;
