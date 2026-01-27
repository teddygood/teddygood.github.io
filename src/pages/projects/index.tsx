import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';

interface Project {
  title: string;
  description: string;
  imageUrl?: string; // Optional image URL
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'Personal Blog',
    description: 'A personal website and blog built with Docusaurus, React, and TypeScript. Features a wiki, blog, and portfolio section.',
    imageUrl: '/img/logo.jpg',
    link: 'https://github.com/teddygood/teddygood.github.io',
    tags: ['Docusaurus', 'React', 'TypeScript'],
  },
  {
    title: 'Example Project',
    description: 'This is a placeholder for your future project. Describe what it does, the technologies used, and why it is cool.',
    imageUrl: '/img/docusaurus.png',
    link: '#',
    tags: ['Tech 1', 'Tech 2'],
  },
   {
    title: 'Another Awesome Tool',
    description: 'An awesome tool that helps developers do things faster and better.',
    imageUrl: '/img/bear.png',
    link: '#',
    tags: ['Rust', 'CLI'],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className={styles.card}>
      {project.imageUrl && (
        <img src={project.imageUrl} alt={project.title} className={styles.cardImage} />
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cardFooter}>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Projects(): JSX.Element {
  return (
    <Layout
      title="Projects"
      description="A showcase of Chanho Lee's projects">
      <main className={styles.projectsContainer}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
