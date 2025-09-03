'use client';

import { motion } from 'framer-motion';

const researchProjects = [
    {
        id: 'usc_culture',
        title: 'Urine-derived Stem Cell (USC) Culture Improvement',
        description: 'Faced with challenges from import restrictions on key culture media ingredients, I dedicated 9 months to developing and successfully improving the USC culture medium formulation. This new formulation ensures stable cell proliferation and has been adopted by the West China Hospital laboratory, providing a stable cell source for subsequent stem cell therapy research.',
    },
    {
        id: 'ra_ild_mechanisms',
        title: 'Mechanism of RA-associated Interstitial Lung Disease (RA-ILD)',
        description: 'My doctoral research focuses on the mechanisms of RA-ILD. By analyzing clinical data from 120,000 RA patients, I have identified several potential risk factors for mortality in RA-ILD. I have also developed a "two-hit" inflammatory animal model for RA-ILD, which is currently under review for publication (ARD).',
    },
    {
        id: 'siglec_5_fibrosis',
        title: 'Siglec-5 and Pulmonary Fibrosis in RA',
        description: 'Based on the animal model, I am investigating the pathogenesis of RA-ILD. My findings suggest that citrullination interferes with Siglec-5\'s recognition of sialic acid, promoting macrophage-to-myofibroblast transition (MMT) and exacerbating RA-ILD lung fibrosis. This research is supported by hospital and university grants.',
    },
    {
        id: 'tls_formation',
        title: 'Tertiary Lymphoid Structure (TLS) Formation in RA-ILD',
        description: 'Using single-cell transcriptomics, I discovered that B-cell and T-cell precursors in RA-ILD lung tissue, through secretion of chemokines and IL-6, induce the formation of tertiary lymphoid structures (TLS), leading to lung tissue damage. This work is also supported by a hospital grant and is being prepared for publication in collaboration with Peking University.',
    },
];

const ResearchPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section id="research-interests">
                <h2>Research Interests</h2>
                <p>
                    My research focuses on the intersection of basic and clinical science in rheumatology, particularly in rheumatoid arthritis (RA) and its associated complications. I am passionate about understanding disease mechanisms at a molecular level and developing novel therapeutic strategies.
                </p>

                {researchProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </motion.div>
                ))}
            </section>
        </motion.div>
    );
};

export default ResearchPage;