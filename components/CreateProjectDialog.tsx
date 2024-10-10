"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function CreateProjectDialog({ open, onOpenChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project creation form submitted");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px] bg-white rounded-2xl shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
            Create a New Project
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Fill in the details to start your crowdfunding journey
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                Project Name
              </Label>
              <Input id="project-name" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50" required />
            </div>
            <div>
              <Label htmlFor="project-category" className="block text-sm font-medium text-gray-700">
                Category
              </Label>
              <Input id="project-category" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50" required />
            </div>
            <div>
              <Label htmlFor="project-description" className="block text-sm font-medium text-gray-700">
                Description
              </Label>
              <Textarea id="project-description" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50" required />
            </div>
            <div>
              <Label htmlFor="funding-goal" className="block text-sm font-medium text-gray-700">
                Funding Goal
              </Label>
              <Input id="funding-goal" type="number" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50" required />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-indigo-600 transition-all py-2">
              Create Project
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}