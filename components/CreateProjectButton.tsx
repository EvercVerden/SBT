"use client";

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { CreateProjectDialog } from "@/components/CreateProjectDialog";

export function CreateProjectButton() {
  const [showCreateProject, setShowCreateProject] = useState(false);

  return (
    <>
      <Button
        className="fixed bottom-8 right-8 rounded-full w-16 h-16 bg-gradient-to-r from-pink-500 to-indigo-500 text-white shadow-lg hover:from-pink-600 hover:to-indigo-600 transition-all"
        onClick={() => setShowCreateProject(true)}
      >
        <Plus className="h-8 w-8" />
      </Button>
      <CreateProjectDialog open={showCreateProject} onOpenChange={setShowCreateProject} />
    </>
  );
}