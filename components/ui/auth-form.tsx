"use client"

import * as React from "react"
import { ChevronLeft, Github, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Hexagon, ChevronDown, X, Menu, ArrowRight, ChevronRight } from 'lucide-react';

const AuthForm: React.FC = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center py-12 text-zinc-800 dark:text-zinc-200 selection:bg-zinc-300 dark:selection:bg-zinc-600 bg-[linear-gradient(135deg,#fcfbf2_0%,#fffdf5_40%,#f0e1d0_100%)] overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000f_1px,transparent_1px),linear-gradient(to_bottom,#0000000f_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,transparent_40%,black_100%)] pointer-events-none z-0" />
      
      <div className="absolute left-4 top-4 z-10">
        {/* <BackButton /> */}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
        className="relative z-10 mx-auto w-full max-w-sm rounded-2xl border border-white/20 bg-white/50 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-xl"
      >
        <Logo />
        <Header />
        <SocialButtons />
        <TermsAndConditions />
      </motion.div>
    </div>
  )
}

const BackButton: React.FC = () => (
  <SocialButton icon={<ChevronLeft size={16} />}>Go back</SocialButton>
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <button
    className={`rounded-md bg-gradient-to-br from-blue-400 to-blue-700 px-4 py-2 text-lg text-zinc-50 
    ring-2 ring-blue-500/50 ring-offset-2 ring-offset-white dark:ring-offset-zinc-950 
    transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70 ${className}`}
    {...props}
  >
    {children}
  </button>
)

const Logo: React.FC = () => (
  <div className="mb-4 flex justify-center">
    <Hexagon className="h-8 w-8 text-slate-900" />
    <span className="ml-2 text-xl font-bold">Jobify-ai</span>
  </div>
)

const Header: React.FC = () => (
  <div className="mb-5 text-center">
    <h1 className="text-xl font-semibold">Sign in to your account</h1>
    {/* <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">
      Don't have an account?{" "}
      <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
        Create one.
      </a>
    </p> */}
  </div>
)

const SocialButtons: React.FC = () => (
  <div className="mb-5 space-y-2.5">
    <div className="flex flex-col gap-3">
      <SocialButton icon={<Twitter size={18} />}>Sign in with Twitter</SocialButton>
      <SocialButton icon={<Github size={18} />}>Sign in with GitHub</SocialButton>
      <SocialButton fullWidth>Sign in with SSO</SocialButton>
    </div>
  </div>
)

const SocialButton: React.FC<{
  icon?: React.ReactNode
  fullWidth?: boolean
  children?: React.ReactNode
}> = ({ icon, fullWidth, children }) => (
  <button
    className={`relative z-0 flex items-center justify-center gap-2 overflow-hidden rounded-md 
    border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 
    px-4 py-2.5 text-sm font-medium text-zinc-800 dark:text-zinc-200 transition-all duration-500
    before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]
    before:rounded-[100%] before:bg-zinc-800 dark:before:bg-zinc-200 before:transition-transform before:duration-1000 before:content-[""]
    hover:scale-[1.02] hover:text-zinc-100 dark:hover:text-zinc-900 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95
    ${fullWidth ? "w-full" : "w-full"}`}
  >
    {icon}
    <span>{children}</span>
  </button>
)

const TermsAndConditions: React.FC = () => (
  <p className="mt-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
    By signing in, you agree to our{" "}
    <a href="#" className="text-blue-600 dark:text-blue-400">
      Terms & Conditions
    </a>{" "}
    and{" "}
    <a href="#" className="text-blue-600 dark:text-blue-400">
      Privacy Policy.
    </a>
  </p>
)

const BackgroundDecoration: React.FC = () => {
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"

  return (
    <div
      className="absolute right-0 top-0 z-0 size-[50vw]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(30 58 138 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: isDarkTheme
            ? "radial-gradient(100% 100% at 100% 0%, rgba(9,9,11,0), rgba(9,9,11,1))"
            : "radial-gradient(100% 100% at 100% 0%, rgba(255,255,255,0), rgba(255,255,255,1))",
        }}
      />
    </div>
  )
}

export default AuthForm
