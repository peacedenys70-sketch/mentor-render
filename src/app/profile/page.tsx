"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Modale Scanner QR
const QRScannerModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center p-4">
      <button onClick={onClose} className="absolute top-6 right-6 text-white bg-white/20 p-2 rounded-full hover:bg-white/40">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <div className="text-center text-white mb-8">
        <h3 className="text-2xl font-bold">Scanner un profil</h3>
        <p className="opacity-80 mt-2">Placez le QR Code de votre camarade dans le cadre</p>
      </div>
      <div className="w-72 h-72 border-2 border-dashed border-teal-400 rounded-3xl flex items-center justify-center relative overflow-hidden bg-black/50 backdrop-blur-sm">
        {/* Ligne de scan animée */}
        <div className="absolute w-full h-1 bg-teal-400 shadow-[0_0_10px_2px_rgba(45,212,191,0.8)] animate-[scan_2s_ease-in-out_infinite]"></div>
        <svg className="w-12 h-12 text-teal-400/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}} />
    </div>
  );
};

export default function ProfilePage() {
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      <QRScannerModal isOpen={isScannerOpen} onClose={() => setIsScannerOpen(false)} />
      
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">MentorLink</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Section QR Code */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="w-48 h-48 bg-white border-4 border-teal-50 rounded-2xl flex items-center justify-center p-4 flex-shrink-0 shadow-inner relative">
             {/* QR Code mock (just a pattern for demo) */}
             <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-1">
               {[...Array(16)].map((_, i) => (
                 <div key={i} className={`bg-gray-800 rounded-sm ${[0,3,12,15].includes(i) ? 'bg-teal-600 rounded-md scale-110' : Math.random() > 0.4 ? 'opacity-100' : 'opacity-0'}`}></div>
               ))}
             </div>
             {/* Logo in center */}
             <div className="absolute inset-0 m-auto w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-teal-600 text-xs shadow-md">ML</div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Votre Code Campus</h2>
            <p className="text-gray-600 mb-6">Faites scanner ce code par un camarade pour vous connecter instantanément, échanger des notes ou démarrer un mentorat.</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <button onClick={() => setIsScannerOpen(true)} className="bg-teal-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-teal-700 transition flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Scanner un ami
              </button>
              <button className="bg-gray-100 text-gray-700 font-bold px-6 py-3 rounded-xl hover:bg-gray-200 transition">
                Partager le lien
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
