"use client";

import { useState } from 'react';
import { useUser } from '@/contexts/UserContext';
import { updateProfile, updateAvatar, deleteAccount } from '@/lib/api';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Image from 'next/image';

export function UserProfile() {
  const { user, setUser, logout } = useUser();
  const [bio, setBio] = useState(user?.bio || '');
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleUpdateProfile = async () => {
    try {
      await updateProfile(bio);
      setUser({ ...user, bio });
      toast({
        title: "Success",
        description: "Profile updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      });
    }
  };

  const handleUpdateAvatar = async () => {
    if (!avatarFile) return;
    try {
      const data = await updateAvatar(avatarFile);
      setUser({ ...user, avatar_url: data.avatar_url });
      toast({
        title: "Success",
        description: "Avatar updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update avatar",
        variant: "destructive",
      });
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      try {
        await deleteAccount();
        logout();
        toast({
          title: "Success",
          description: "Account deleted successfully",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to delete account",
          variant: "destructive",
        });
      }
    }
  };

  if (!user) return null;

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
        User Profile
      </h1>
      <div className="mb-6">
        <Image
          src={user.avatar_url || '/default-avatar.png'}
          alt="User Avatar"
          width={100}
          height={100}
          className="rounded-full"
        />
        <Input
          type="file"
          onChange={(e) => setAvatarFile(e.target.files?.[0] || null)}
          className="mt-2"
        />
        <Button onClick={handleUpdateAvatar} className="mt-2">
          Update Avatar
        </Button>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Username</label>
        <Input value={user.username} disabled />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <Input value={user.email} disabled />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Bio</label>
        <Textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={4}
        />
      </div>
      <Button onClick={handleUpdateProfile} className="mb-4">
        Update Profile
      </Button>
      <Button onClick={handleDeleteAccount} variant="destructive">
        Delete Account
      </Button>
    </div>
  );
}