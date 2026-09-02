"use client";

import React, { useState } from "react";
import { 
  CreditCard, 
  Smartphone, 
  Building2, 
  Receipt, 
  ShieldCheck, 
  CheckCircle2, 
  UserCheck, 
  AlertCircle,
  Coins,
  ChevronRight,
  Copy,
  Sparkles,
  ExternalLink
} from "lucide-react";

export default function CashChargePage() {
  const [mcId, setMcId] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);

  // 충전 유형 선택 옵션 state
  const [isProxyCharge, setIsProxyCharge] = useState(false);
  const [isBailCharge, setIsBailCharge] = useState(false);

  const amounts = [1000, 5000, 10000, 20000, 30000, 50000, 100000, 150000, 200000, 250000, 300000];

  const paymentMethods = [
    { id: "bank", name: "계좌이체", icon: Building2 },
    { id: "card", name: "신용/체크카드", icon: CreditCard },
    { id: "phone", name: "휴대폰 소액결제", icon: Smartphone },
    { id: "culture", name: "문화상품권", icon: Receipt },
  ];

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const finalAmount = selectedAmount !== null 
    ? selectedAmount 
    : customAmount ? parseInt(customAmount, 10) : 0;

  const handlePayment = () => {
    if (!mcId.trim()) {
      alert("마인크래프트 닉네임을 입력해 주세요.");
      return;
    }
    if (finalAmount <= 0) {
      alert("충전할 금액을 선택하거나 입력해 주세요.");
      return;
    }
    if (!selectedMethod) {
      alert("결제 수단을 선택해 주세요.");
      return;
    }
    if (!agreed) {
      alert("결제 유의사항 및 약관에 동의해 주세요.");
      return;
    }

    alert(`${mcId}님, ${finalAmount.toLocaleString()}원 결제 요청이 완료되었습니다.`);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-[#e2e8f0] flex flex-col justify-between font-sans selection:bg-sky-500/30 selection:text-sky-200">
      
      {/* 1. NEX SERVER 독자 브랜드 상단 헤더 */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/80 bg-[#07090e]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
                <Coins className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                NEX<span className="text-sky-400 font-light ml-1">NETWORKS</span>
              </span>
            </a>
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-400">
              <a href="#" className="hover:text-sky-400 transition-colors">게임 소식</a>
              <a href="#" className="hover:text-sky-400 transition-colors">콘텐츠 안내</a>
              <a href="#" className="hover:text-sky-400 transition-colors">커뮤니티</a>
              <a href="#" className="hover:text-sky-400 transition-colors">고객지원</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-1.5 rounded-xl border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-xs font-semibold text-sky-300 hover:bg-sky-500/20 transition-all shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              캐시 충전
            </a>
            <a href="#" className="inline-flex items-center rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-200 hover:bg-slate-800 transition-all">
              로그인
            </a>
          </div>
        </div>
      </header>

      {/* 메인 충전 영역 */}
      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* 타이틀 및 네비게이션 스텝 */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/60">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                NEX CASH SYSTEM
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">캐시 충전</h1>
              <p className="mt-2 text-slate-400 text-sm sm:text-base">
                안전하고 간편하게 서버 캐시를 충전하고 혜택을 이용해 보세요.
              </p>
            </div>

            {/* 깔끔한 프로세스 라인 스텝 */}
            <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 p-2 rounded-2xl shrink-0">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-bold">
                <span className="w-4 h-4 rounded-full bg-sky-400 text-slate-950 flex items-center justify-center text-[10px] font-black">1</span>
                금액
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-slate-500 text-xs font-medium">
                <span className="w-4 h-4 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-[10px]">2</span>
                혜택
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-slate-500 text-xs font-medium">
                <span className="w-4 h-4 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-[10px]">3</span>
                결제
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-8">

            {/* STEP 1: 플레이어 확인 카드 */}
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-md shadow-xl transition-all hover:border-slate-700/80">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-sky-400 shrink-0 shadow-inner">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">STEP 1</span>
                    <h3 className="text-lg font-bold text-white">
                      {mcId.trim() ? mcId : "충전 대상 플레이어"}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {mcId.trim() ? "확인된 계정으로 캐시가 즉시 지급됩니다." : "충전할 마인크래프트 닉네임을 정확히 입력해 주세요."}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="닉네임 입력"
                    value={mcId}
                    onChange={(e) => setMcId(e.target.value)}
                    className="h-11 px-4 rounded-xl border border-slate-700/80 bg-slate-950/80 text-sm text-white placeholder-slate-500 outline-none focus:border-sky-500 transition-colors w-full sm:w-48"
                  />
                  <button 
                    type="button"
                    className="h-11 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-all shrink-0 shadow-md shadow-sky-500/20 active:scale-95"
                  >
                    플레이어 확인
                  </button>
                </div>
              </div>
            </div>

            {/* STEP 2: 충전 유형 */}
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-md shadow-xl">
              <div className="pb-4 mb-5 border-b border-slate-800/80">
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">STEP 2</span>
                <h3 className="text-lg font-bold text-white">충전 유형 선택</h3>
                <p className="text-xs text-slate-400 mt-0.5">특수 충전 옵션이 필요한 경우 지정해 주세요.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                  isProxyCharge 
                    ? "border-sky-500/80 bg-sky-500/10 text-white shadow-lg shadow-sky-500/5" 
                    : "border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}>
                  <input 
                    type="checkbox" 
                    className="sr-only" 
                    checked={isProxyCharge}
                    onChange={(e) => setIsProxyCharge(e.target.checked)}
                  />
                  <div className="space-y-0.5">
                    <strong className="text-sm font-semibold block text-white">대리 충전</strong>
                    <span className="text-xs text-slate-400 block">다른 유저에게 선물을 진행합니다</span>
                  </div>
                  <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all ${
                    isProxyCharge ? "bg-sky-500 border-sky-400 text-slate-950" : "border-slate-700 bg-slate-900"
                  }`}>
                    {isProxyCharge && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </label>

                <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                  isBailCharge 
                    ? "border-sky-500/80 bg-sky-500/10 text-white shadow-lg shadow-sky-500/5" 
                    : "border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}>
                  <input 
                    type="checkbox" 
                    className="sr-only" 
                    checked={isBailCharge}
                    onChange={(e) => setIsBailCharge(e.target.checked)}
                  />
                  <div className="space-y-0.5">
                    <strong className="text-sm font-semibold block text-white">보석금 사면</strong>
                    <span className="text-xs text-slate-400 block">채팅 금지 및 감옥 해제 전용 충전</span>
                  </div>
                  <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all ${
                    isBailCharge ? "bg-sky-500 border-sky-400 text-slate-950" : "border-slate-700 bg-slate-900"
                  }`}>
                    {isBailCharge && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </label>
              </div>
            </div>

            {/* STEP 3: 충전 금액 */}
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-md shadow-xl">
              <div className="pb-4 mb-5 border-b border-slate-800/80 flex flex-wrap items-end justify-between gap-2">
                <div>
                  <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">STEP 3</span>
                  <h3 className="text-lg font-bold text-white">충전 금액 선택</h3>
                  <p className="text-xs text-slate-400 mt-0.5">1:1 비율로 캐시 및 마일리지가 자동 적립됩니다.</p>
                </div>
                <button type="button" className="text-sky-400 hover:text-sky-300 transition-colors text-xs flex items-center gap-1 font-medium">
                  환불 및 이용정책 <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
                      className={`h-12 rounded-xl border text-sm font-bold transition-all ${
                        selectedAmount === amount
                          ? "border-sky-500 bg-sky-500/15 text-sky-300 shadow-md shadow-sky-500/10 ring-1 ring-sky-500/50"
                          : "border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                      }`}
                    >
                      {amount.toLocaleString()}원
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <div className="relative">
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="직접 금액 입력 (최대 1,000,000원)"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="w-full h-12 pl-4 pr-10 rounded-xl border border-slate-800 bg-slate-950/80 text-sm text-white placeholder-slate-500 outline-none focus:border-sky-500 transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-500 font-medium">원</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 text-slate-500" />
                    직접 입력 금액은 계좌이체 방식으로만 결제가 가능합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 4: 결제 수단 */}
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-md shadow-xl">
              <div className="pb-4 mb-5 border-b border-slate-800/80">
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">STEP 4</span>
                <h3 className="text-lg font-bold text-white">결제 수단 선택</h3>
                <p className="text-xs text-slate-400 mt-0.5">편리한 수단을 선택하여 결제를 진행하세요.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  const isSelected = selectedMethod === method.id;
                  return (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setSelectedMethod(method.id)}
                      className={`flex flex-col items-center justify-center p-5 rounded-xl border transition-all ${
                        isSelected
                          ? "border-sky-500 bg-sky-500/15 text-sky-300 font-bold shadow-md shadow-sky-500/10 ring-1 ring-sky-500/50"
                          : "border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                      }`}
                    >
                      <Icon className="w-6 h-6 mb-2.5" />
                      <span className="text-xs font-semibold">{method.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 5: 약관 동의 */}
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-md shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-sky-400 font-semibold">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="text-base text-white font-bold">결제 유의사항 및 약관 동의</h3>
              </div>
              <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 text-xs text-slate-400 space-y-2 leading-relaxed">
                <p>• 결제 완료 후 캐시는 즉시 지급되며, 디지털 재화 특성상 사용 후 환불이 불가능합니다.</p>
                <p>• 타인의 명의를 도용하여 결제를 진행할 경우 법적 처벌을 받을 수 있습니다.</p>
                <p>• 점검 중에는 결제 반영이 지연될 수 있으니 공식 디스코드를 확인해 주세요.</p>
              </div>
              <label className="flex items-center gap-3 cursor-pointer pt-1 group">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-sky-500 focus:ring-sky-500"
                />
                <span className="text-xs sm:text-sm text-slate-300 group-hover:text-white transition-colors">
                  위 결제 유의사항을 모두 확인하였으며 이에 동의합니다.
                </span>
              </label>
            </div>

          </div>
        </div>
      </main>

      {/* 2. 모던한 하단 고정 결제 상태바 */}
      <div className="sticky bottom-0 z-40 border-t border-slate-800/80 bg-[#07090e]/90 backdrop-blur-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          {!mcId.trim() && (
            <p className="mb-2 text-xs font-medium text-amber-400 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              플레이어 닉네임을 먼저 입력하고 확인해 주세요.
            </p>
          )}
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 font-medium block">최종 결제 금액</span>
              <strong className="text-2xl sm:text-3xl text-sky-400 font-black tracking-tight tabular-nums">
                {finalAmount.toLocaleString()}<span className="text-sm font-normal text-slate-300 ml-1">원</span>
              </strong>
            </div>
            <button
              type="button"
              onClick={handlePayment}
              className="inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/20 h-12 px-8 text-sm active:scale-95"
            >
              충전 진행하기 <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. 독자적인 브랜드 푸터 */}
      <footer className="border-t border-slate-800/80 bg-[#05070a] text-slate-400 py-12 text-xs">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-3">
            <strong className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-sky-400">NEX</span> SERVER
            </strong>
            <p className="text-slate-500 leading-relaxed max-w-sm">
              차별화된 시스템과 안정적인 환경을 제공하는 프리미엄 마인크래프트 서버입니다.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs">nexsv.kr</span>
              <button type="button" className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors">
                <Copy className="w-3.5 h-3.5" />
              </button>
              <span className="px-2.5 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 font-semibold text-[10px]">JAVA 1.21.x</span>
            </div>
          </div>

          <div>
            <strong className="block text-white font-semibold mb-3">네비게이션</strong>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-sky-400 transition-colors">공지사항</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">캐시 충전</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">서버 랭킹</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">마이페이지</a></li>
            </ul>
          </div>

          <div>
            <strong className="block text-white font-semibold mb-3">콘텐츠</strong>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-sky-400 transition-colors">가이드북</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">도감 시스템</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">아이템 정보</a></li>
            </ul>
          </div>

          <div>
            <strong className="block text-white font-semibold mb-3">고객지원 & 정책</strong>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-sky-400 transition-colors">공식 디스코드</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">개인정보 처리방침</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">이용약관 및 환불정책</a></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}