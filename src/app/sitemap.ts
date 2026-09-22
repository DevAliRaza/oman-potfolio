import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";

export default function sitemap() {
  const base = "https://omankhalid.me";

  const projectUrls = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  const experienceUrls = experiences.map((e) => ({
    url: `${base}/experience/${e.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/skills`, lastModified: new Date() },
    { url: `${base}/achievements`, lastModified: new Date() },
    ...projectUrls,
    ...experienceUrls,
  ];
}
