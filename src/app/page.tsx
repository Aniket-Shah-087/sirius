"use client"

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api"; 

import { Button } from "@/components/ui/button";

const x = () =>{
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create) 
  {/*const deleteProject = useMutation(api.projects.deleteProject);*/}


  return(
    <div className="flex flex-col gap-2 m-2">
      <Button onClick={() => createProject({
        name: "New Project"
      })}>
        Add New
      </Button>
      {projects?.map((project) => (
        <div className="flex flex-col p-2 border rounded" key={project._id}>
          <p>{project.name}</p>
          <p>IS Completed: {project.ownerId}</p>
        </div>
      ))}

      
    { /* {projects?.map((project) => (
        <div
    className="flex items-center justify-between p-2 border rounded"
    key={project._id}
  >
    <div>
      <p>{project.name}</p>
      <p>Owner ID: {project.ownerId}</p>
    </div>

    <Button
      variant="destructive"
      onClick={() => deleteProject({ id: project._id })}
    >
      Delete
    </Button>
  </div>
      ))}*/}
    </div>
  );
};

export default x;