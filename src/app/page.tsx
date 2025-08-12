"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function Home() {
const completedProjects = projects.filter(project => project.status === "completed");
const ongoingProjects = projects.filter(project => project.status === "ongoing");

return (
  <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <header className="mb-12 text-center">
      <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        A collection of projects I&#39;ve worked on as a developer
      </p>
    </header>

    <Tabs defaultValue="all" className="mb-12">
      <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
        <TabsTrigger value="all">All Projects</TabsTrigger>
        <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
      </TabsList>

      <TabsContent value="all">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="ongoing">
        <h2 className="text-2xl font-bold my-6">Ongoing Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ongoingProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="completed">
        <h2 className="text-2xl font-bold my-6">Completed Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </TabsContent>
    </Tabs>

    <footer className="text-center mt-16 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} - Portfolio by rstubryan</p>
    </footer>
  </div>
);
}