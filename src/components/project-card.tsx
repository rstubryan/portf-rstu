import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Projects } from "@/data/projects";

interface ProjectCardProps {
  project: Projects;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link href={project.link} target="_blank" rel="noopener noreferrer">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.image || "https://placehold.co/600x400?text=" + encodeURIComponent(project.title)}
            alt={project.title}
            fill
            className="object-cover transition-transform hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://placehold.co/600x400?text=" + encodeURIComponent(project.title);
            }}
          />
        </div>
        <CardHeader>
          <div className="flex justify-between items-start mt-5">
            <div>
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.year}</p>
            </div>
            <Badge variant={project.status === "ongoing" ? "default" : "secondary"}>
              {project.status === "ongoing" ? "Active" : "Completed"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
          <p className="text-sm font-medium mb-3">{project.role}</p>
          <div className="flex flex-wrap gap-1">
            {project.techStack.map((tech: string) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}