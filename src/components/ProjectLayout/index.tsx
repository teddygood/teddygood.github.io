import React, {ReactNode} from 'react';

interface ProjectLayoutProps {
  title: string;
  role: string;
  timeline: string;
  stack: string[];
  children: ReactNode;
}

export default function ProjectLayout({
  title,
  role,
  timeline,
  stack,
  children,
}: ProjectLayoutProps): JSX.Element {
  return (
    <div className="container margin-vert--lg">
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        <h1 style={{fontSize: '3rem', marginBottom: '2rem'}}>{title}</h1>

        <div className="row margin-bottom--lg">
          <div className="col col--4">
            <h4 className="text--uppercase" style={{marginBottom: '0.25rem', color: 'var(--ifm-color-emphasis-600)', fontSize: '0.8rem'}}>Role</h4>
            <p style={{fontWeight: 'bold', fontSize: '1.1rem'}}>{role}</p>
          </div>
          <div className="col col--4">
            <h4 className="text--uppercase" style={{marginBottom: '0.25rem', color: 'var(--ifm-color-emphasis-600)', fontSize: '0.8rem'}}>Timeline</h4>
            <p style={{fontWeight: 'bold', fontSize: '1.1rem'}}>{timeline}</p>
          </div>
           <div className="col col--4">
            <h4 className="text--uppercase" style={{marginBottom: '0.25rem', color: 'var(--ifm-color-emphasis-600)', fontSize: '0.8rem'}}>Skill</h4>
            <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
              {stack.map((tech, idx) => (
                <span key={idx} className="badge badge--secondary">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <hr style={{marginBottom: '2rem'}} />

        {/* Content below is left-aligned */}
        {children}
      </div>
    </div>
  );
}
