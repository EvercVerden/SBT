"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignInDialog({ open, onOpenChange }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    const url = isSignIn ? '/users/login' : '/users/register';
    const body = isSignIn ? { email, password } : { username, email, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        if (isSignIn) {
          setMessage(`登录成功，用户ID: ${data.user_id}`);
          localStorage.setItem('token', data.token);
          localStorage.setItem('session_id', data.session_id);
          onOpenChange(false); // Close the dialog after successful login
        } else {
          setMessage(data.message);
        }
      } else {
        setError(data.error || '操作失败');
      }
    } catch (error) {
      setError('发生错误，请稍后重试。');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px] w-full bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 p-6 rounded-2xl">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text mb-2">
            {isSignIn ? "欢迎回来" : "加入 JTL Fund"}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            {isSignIn ? "输入您的凭据以访问您的帐户" : "创建新帐户以加入 JTL Fund"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {!isSignIn && (
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium text-gray-700">用户名</Label>
                <Input 
                  id="username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="输入您的用户名" 
                  className="w-full max-w-[350px] text-black"
                  required
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">电子邮件</Label>
              <Input 
                id="email" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="输入您的电子邮件" 
                className="w-full max-w-[350px] text-black"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">密码</Label>
              <Input 
                id="password" 
                type="text" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="输入您的密码" 
                className="w-full max-w-[350px] text-black"
                required
              />
            </div>
          </div>
          {error && (
            <div className="text-red-500 text-sm mt-2">
              {error}
            </div>
          )}
          {message && (
            <div className="text-green-500 text-sm mt-2">
              {message}
            </div>
          )}
          <DialogFooter className="flex flex-col items-center space-y-4 mt-6">
            <Button type="submit" className="w-full max-w-[350px] bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-indigo-600 transition-all py-2">
              {isSignIn ? "登录" : "注册"}
            </Button>
            {isSignIn && (
              <Button variant="link" className="text-sm text-indigo-600 hover:text-indigo-800">
                忘记密码？
              </Button>
            )}
            <Button 
              type="button"
              variant="link" 
              className="text-sm text-indigo-600 hover:text-indigo-800"
              onClick={() => {
                setIsSignIn(!isSignIn);
                setError('');
                setMessage('');
              }}
            >
              {isSignIn ? "没有帐户？注册" : "已有帐户？登录"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}