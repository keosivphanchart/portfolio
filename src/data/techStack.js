/* Tech stack logos — shown on the draggable 3D icon globe.
   Icons come from the free Devicon / Simple Icons CDNs; to add one,
   find its slug at devicon.dev or simpleicons.org. */
const DEVICON = (slug, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

export const techStack = [
  { name: "Docker", img: DEVICON("docker") },
  { name: "Kubernetes", img: DEVICON("kubernetes", "plain") },
  { name: "Go", img: DEVICON("go") },
  { name: "Prometheus", img: DEVICON("prometheus") },
  { name: "Grafana", img: DEVICON("grafana") },
  { name: "Zabbix", img: "https://www.vectorlogo.zone/logos/zabbix/zabbix-icon.svg" },
  { name: "Elasticsearch", img: DEVICON("elasticsearch") },
  { name: "PostgreSQL", img: DEVICON("postgresql") },
  { name: "React", img: DEVICON("react") },
  { name: "Linux", img: DEVICON("linux") },
  { name: "Git", img: DEVICON("git") },
  { name: "Terraform", img: DEVICON("terraform") },
  { name: "Python", img: DEVICON("python") },
  // Kafka's brand logo is black, so it comes from Simple Icons tinted
  // gray to stay visible on both the dark and light themes.
  { name: "Kafka", img: "https://cdn.simpleicons.org/apachekafka/8b8d99" },
  { name: "Redis", img: DEVICON("redis") },
  { name: "Nexus", img: "https://cdn.simpleicons.org/sonatype" },
  { name: "RHEL", img: DEVICON("redhat") },
];
