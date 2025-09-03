'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '@/styles/Publications.module.css';

const papers = [
    {
        title: 'MSC–microvesicles protect cartilage from degradation in early rheumatoid arthritis via immunoregulation',
        authors: 'Wei, S., Cheng, RJ., Li, S. et al.',
        journal: 'J Nanobiotechnol 22, 673 (2024)',
        links: { doi: 'https://doi.org/10.1186/s12951-024-02922-6' },
        details: 'IF=12.6, Q1'
    },
    {
        title: 'Efficacy and safety of mesenchymal stem cell-derived microvesicles in mouse inflammatory arthritis',
        authors: 'Wei S, Lu C, Li S, Zhang Q, Cheng R, Pan S, Wu Q, Zhao X, Tian X, Zeng X, Liu Y.',
        journal: 'Int Immunopharmacol. 2024 Apr 20;131:111845',
        links: { doi: '10.1016/j.intimp.2024.111845' },
        details: 'IF=5.6, Q1'
    },
    {
        title: 'Advances in mesenchymal stem cell-derived extracellular vesicles therapy for Sjogren\'s syndrome-related dry eye disease',
        authors: 'Li SJ, Cheng RJ, Wei SX, Xia ZJ, Pu YY, Liu Y.',
        journal: 'Exp Eye Res. 2023 Dec;237:109716',
        links: { doi: '10.1016/j.exer.2023.109716' },
        details: 'IF=3.0, 中科院2区'
    },
    {
        title: 'Clinical characteristics and biological treatment of adult patient with juvenile idiopathic arthritis',
        authors: 'Wei SX, Li SJ, Liu Y.',
        journal: 'Beijing Da Xue Xue Bao Yi Xue Ban. 2020 Dec 18;52(6):1014-1022',
        links: { doi: '10.19723/j.issn.1671-167X.2020.06.005' },
        details: 'Chinese'
    },
];

const patents = [
    { title: '一种用于大鼠气道雾化实验的给药装置', year: 2024, id: 'CN202323191617.X' },
    { title: '干细胞微粒在制备预防和/或治疗干眼症的药物中的应用', year: 2023, id: 'CN202211138380.6' },
    { title: '一种临床前类风湿关节炎(Pre-RA)小鼠模型', year: 2022, id: 'CN202110517283.7' },
    { title: '一种新冠肺炎康复护理装置', year: 2021, id: 'CN202022878327.2' },
    { title: '一种用于MSC-MVs治疗肺部疾病的雾化机', year: 2021, id: 'CN202011330649.1' },
    { title: '一种医用hUC-MSCs-MVs批量制备流程及质控', year: 2021, id: 'CN202010997119.6' },
    { title: '一种可以用于hMSC、hUSC、hDPSC、hADSC的廉价高效培养基', year: 2020, id: 'CN202010735896.3' },
];


const PublicationsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section id="publications">
                <h2>Selected Publications</h2>
                <ul className={styles.publicationList}>
                    {papers.map((item, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <strong>{item.title}</strong>
                            <p>{item.authors}</p>
                            <p><em>{item.journal}</em></p>
                            <div className={styles.links}>
                                {item.links.doi && <Link href={item.links.doi} target="_blank">[DOI]</Link>}
                                <span className={styles.details}>{item.details}</span>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </section>

            <section id="patents">
                <h2>Patents</h2>
                <ul className={styles.publicationList}>
                    {patents.map((item, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <strong>{item.title}</strong>
                            <p>Year: {item.year} | ID: {item.id}</p>
                        </motion.li>
                    ))}
                </ul>
            </section>
        </motion.div>
    );
};

export default PublicationsPage;