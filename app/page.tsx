"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CreditCard,
  BookOpen,
  Vote,
  Users,
  Copy,
  Check,
  ExternalLink,
  ShieldAlert,
  Sparkles,
  ChevronRight,
  Server,
  Gamepad2,
} from "lucide-react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const SERVER_IP = "nex24.kr";

  const handleCopyIp = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Background Glow Overlay */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-cyan-600/15 via-indigo-600/10 to-transparent blur-3xl opacity-70" />
      </div>

      {/* Header / Navigation */}
      <header className="relative z-10 border-b border-slate-800/80 bg-[#0c0e17]/80 backdrop-blur-md sticky top-0">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 p-[1px] transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#0d101d] rounded-[11px] flex items-center justify-center">
                <Server className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wider bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                NEX SERVER
              </span>
              <span className="block text-[10px] text-cyan-400 font-mono tracking-widest uppercase">
                Official Network
              </span>
            </div>
          </Link>

          {/* Quick Connect Button */}
          <button
            onClick={handleCopyIp}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 text-xs font-mono transition-all hover:border-cyan-500/50"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">{SERVER_IP}</span>
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-slate-400" />
            )}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 max-w-6xl mx-auto px-4 py-12 flex flex-col justify-center">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>최상의 게임 환경과 차별화된 시스템</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            NEX SERVER에 오신 것을 <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              환영합니다!
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            원하시는 메뉴를 선택해 주세요. 후원, 서버 규칙 확인, 마인리스트 추천 등
            모든 공식 서비스를 한곳에서 이용하실 수 있습니다.
          </p>

          {/* Server IP Copy Box */}
          <div className="pt-2 flex justify-center">
            <div
              onClick={handleCopyIp}
              className="cursor-pointer group flex items-center justify-between gap-4 px-5 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-cyan-500/5 max-w-md w-full"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Gamepad2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] text-slate-400 font-medium">서버 주소 (클릭하여 복사)</p>
                  <p className="text-sm font-bold font-mono text-white group-hover:text-cyan-400 transition-colors">
                    {SERVER_IP}
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-md bg-slate-800 group-hover:bg-cyan-500 group-hover:text-black text-slate-300 transition-all flex items-center gap-1">
                {copied ? "복사완료!" : "복사하기"}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Grid (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: 후원 / 캐시충전 */}
          <Link href="/donate" className="group">
            <div className="h-full p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
                  <span>후원 / 캐시 충전</span>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </h2>
                <p className="text-slate-400 text-xs leading-relaxed">
                  서버 운영을 후원하고 캐시를 충전하여 다양한 인게임 혜택과 아이템을 받아보세요.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-cyan-400">
                <span>충전소 이동하기</span>
              </div>
            </div>
          </Link>

          {/* Card 2: 서버 법전 / 규칙 */}
          <Link href="/rules" className="group">
            <div className="h-full p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
                  <span>서버 법전 & 규칙</span>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                </h2>
                <p className="text-slate-400 text-xs leading-relaxed">
                  즐거운 플레이 환경을 위해 꼭 지켜야 할 플레이 규칙과 처벌 규정을 확인하세요.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-indigo-400">
                <span>법전 확인하기</span>
              </div>
            </div>
          </Link>

          {/* Card 3: 마인리스트 바로가기 */}
          <a
            href="https://minelist.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="h-full p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 hover:border-emerald-500/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                  <Vote className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    마인리스트 추천
                    <ExternalLink className="w-4 h-4 text-slate-500" />
                  </span>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </h2>
                <p className="text-slate-400 text-xs leading-relaxed">
                  매일 마인리스트에서 NEX SERVER를 추천하고 인게임 보상을 받아가세요!
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-emerald-400">
                <span>추천하러 가기</span>
              </div>
            </div>
          </a>
        </div>

        {/* Notice / Community Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">디스코드 커뮤니티 참여</h3>
              <p className="text-xs text-slate-400">
                서버 이벤트, 공지사항 및 유저 간 소통은 공식 디스코드에서 확인할 수 있습니다.
              </p>
            </div>
          </div>
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            <span>디스코드 입장</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 py-8 bg-[#07080c]/80 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 space-y-2">
          <p>© 2026 NEX SERVER. All rights reserved.</p>
          <p className="text-[11px] text-slate-600">
            NEX SERVER는 Mojang AB 또는 Microsoft와 관련이 없는 독립된 마인크래프트 서버입니다.
          </p>
        </div>
      </footer>
    </div>
  );
}