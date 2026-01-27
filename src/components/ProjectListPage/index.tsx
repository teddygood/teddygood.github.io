import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/BlogListPage';

// Duplicate ProjectCard style from original index.tsx but adapted for Plugin data
// We can define this inline or separate. For simplicity, inline here or reusing css.
// We'll reuse the existing css modules if possible, or simple inline styles/global css.
// Since we used 'src/pages/projects/styles.module.css' before, we should move that css or copy it.
// Let's assume we can import the CSS, but 'src/pages' might be deleted. 
// Safer to create a new css file for projects or use standard classes.
// I'll use standard infima classes and inline styles to be robust.

interface ProjectFrontMatter {
  title: string;
  description: string;
  image?: string;
  imageUrl?: string; // Support both
  tags?: string[];
  role?: string;
  timeline?: string;
  stack?: string[];
  category?: string;
}

function ProjectCard({item}: {item: any}) {
  const {permalink, frontMatter} = item;
  const fm = frontMatter as ProjectFrontMatter;
  
  // Support both image keys for flexibility
  const image = fm.image || fm.imageUrl;

  return (
    <div className="margin-bottom--lg">
      {image && (
        <Link to={permalink} style={{display: 'block', marginBottom: '1rem'}}>
          <img 
            src={image} 
            alt={fm.title} 
            style={{
              objectFit: 'cover', 
              width: '100%', 
              height: '220px', 
              borderRadius: '8px',
              border: '1px solid var(--ifm-color-emphasis-200)'
            }} 
          />
        </Link>
      )}
      
      <Link to={permalink} style={{textDecoration: 'none', color: 'inherit'}}>
        <h3 style={{marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold'}}>{fm.title}</h3>
      </Link>
      
      <p style={{marginBottom: '0.75rem', color: 'var(--ifm-color-emphasis-700)', fontSize: '0.95rem'}}>
        {fm.description}
      </p>

      <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
        {fm.stack?.map((tech, idx) => (
           <span key={idx} style={{
             backgroundColor: 'var(--ifm-color-emphasis-200)', 
             color: 'var(--ifm-color-emphasis-800)',
             borderRadius: '4px',
             padding: '0.2rem 0.5rem',
             fontSize: '0.8rem'
           }}>
             {tech}
           </span>
        )) || fm.tags?.map((tag, idx) => (
           <span key={idx} style={{
             backgroundColor: 'var(--ifm-color-emphasis-200)', 
             color: 'var(--ifm-color-emphasis-800)',
             borderRadius: '4px',
             padding: '0.2rem 0.5rem',
             fontSize: '0.8rem'
           }}>
             {tag}
           </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectListPage(props: Props): JSX.Element {
  const {items} = props;

  // Extract specific frontmatter properties for filtering
  const allItems = items.map(item => {
    const fm = item.content.metadata.frontMatter as ProjectFrontMatter;
    return { ...item, category: fm.category || 'Other' };
  });

  const [activeCategory, setActiveCategory] = React.useState('All');

  // Get unique categories order: All, then others sorted, or specific order if preferred
  // We can just dynamically collect them.
  const categories = ['All', ...Array.from(new Set(allItems.map(i => i.category))).filter(c => c !== 'Other')];
  // If we want specific order: 'Internship', 'Personal Project', etc. we could hardcode or sort.
  // For now dynamic is best for automation.

  const filteredItems = activeCategory === 'All' 
    ? allItems 
    : allItems.filter(item => item.category === activeCategory);

  return (
    <Layout
      title="Projects"
      description="A showcase of Chanho Lee's projects">
      <main className="container margin-vert--lg">
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          
          {/* Category Tabs */}
          <div className="margin-bottom--lg" style={{display: 'flex', gap: '1.5rem', borderBottom: '1px solid var(--ifm-color-emphasis-200)', paddingBottom: '0.5rem'}}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: activeCategory === category ? '2px solid var(--ifm-color-primary)' : '2px solid transparent',
                  padding: '0.5rem 0',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: activeCategory === category ? 'bold' : 'normal',
                  color: activeCategory === category ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-700)',
                  transition: 'all 0.2s'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="row">
            {filteredItems.map(({content: BlogPostContent}) => (
              <div key={BlogPostContent.metadata.permalink} className="col col--6 margin-bottom--xl">
                <ProjectCard item={BlogPostContent.metadata} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
