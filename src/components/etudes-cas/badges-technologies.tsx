interface PropsBadgesTechnologies {
  technologies: string[];
}

export function BadgesTechnologies({ technologies }: PropsBadgesTechnologies) {
  return (
    <div className="etude-cas-puce-tech">
      {technologies.map((tech) => (
        <span key={tech} className="tech-pill-spec">
          {tech}
        </span>
      ))}
    </div>
  );
}
