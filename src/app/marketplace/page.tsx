"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Composant Modale de Paiement Mobile Money
const PaymentModal = ({ isOpen, onClose, amount, plan }: { isOpen: boolean, onClose: () => void, amount: number, plan: string }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-900">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Paiement Mobile</h3>
          <p className="text-gray-500 mt-2">Abonnement {plan}</p>
        </div>
        
        <div className="flex gap-4 mb-6 justify-center">
          <div className="border-2 border-yellow-400 bg-yellow-50 px-4 py-2 rounded-xl flex items-center justify-center cursor-pointer">
            <span className="font-bold text-yellow-600">MTN MoMo</span>
          </div>
          <div className="border border-gray-200 hover:border-blue-500 bg-white px-4 py-2 rounded-xl flex items-center justify-center cursor-pointer transition">
            <span className="font-bold text-blue-600">Moov Money</span>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Montant à payer</span>
            <span className="font-bold text-gray-900">{amount} FCFA</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Frais de transaction</span>
            <span className="text-gray-500">Inclus</span>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label>
            <input type="tel" placeholder="Ex: 97 XX XX XX" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" />
          </div>
        </div>

        <button className="w-full bg-teal-600 text-white font-bold py-3 rounded-xl hover:bg-teal-700 transition shadow-lg shadow-teal-600/30">
          Confirmer le paiement
        </button>
        <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          Sécurisé par FedaPay / Kkiapay
        </p>
      </div>
    </div>
  );
};

export default function MarketplacePage() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: '', price: 0 });

  const services = [
    { id: 1, title: "Correction intensive en Algorithmique", author: "Marc O.", rating: 4.8, reviews: 24, price: 2000, category: "Cours particuliers", color: "bg-blue-100 text-blue-800" },
    { id: 2, title: "Design de slides de soutenance", author: "Sarah K.", rating: 5.0, reviews: 12, price: 5000, category: "Design", color: "bg-pink-100 text-pink-800" },
    { id: 3, title: "Réinstallation système & Dépannage PC", author: "Luc D.", rating: 4.5, reviews: 8, price: 3000, category: "Dépannage", color: "bg-amber-100 text-amber-800" },
    { id: 4, title: "Relecture et correction de mémoire", author: "Astride D.", rating: 4.9, reviews: 45, price: 10000, category: "Rédaction", color: "bg-teal-100 text-teal-800" },
  ];

  const handleSubscribe = (planName: string, price: number) => {
    setSelectedPlan({ name: planName, price });
    setIsPaymentOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      <PaymentModal isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} amount={selectedPlan.price} plan={selectedPlan.name} />

      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">MentorLink</Link>
          <div className="hidden md:flex gap-4">
            <button onClick={() => handleSubscribe('Exposant', 500)} className="border border-teal-600 text-teal-600 font-medium px-4 py-1.5 rounded-lg hover:bg-teal-50 transition">Devenir Exposant (500F)</button>
            <button onClick={() => handleSubscribe('PREMIUM', 1000)} className="bg-gray-900 text-white font-medium px-4 py-1.5 rounded-lg hover:bg-gray-800 transition">Go PREMIUM</button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Marketplace des Étudiants</h1>
            <p className="text-gray-600 text-lg">Trouvez ou proposez des micro-services sur le campus.</p>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {["Tout", "Cours particuliers", "Dépannage", "Design", "Rédaction"].map(cat => (
              <button key={cat} className="whitespace-nowrap px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-teal-500 hover:text-teal-600 transition font-medium text-sm">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all group flex flex-col">
              <div className="h-40 bg-gray-100 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-100"></div>
                <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-md ${service.color}`}>
                  {service.category}
                </span>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <span className="font-bold text-sm">{service.rating}</span>
                  <span className="text-gray-400 text-xs">({service.reviews})</span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-teal-600 transition-colors">{service.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">{service.author.charAt(0)}</div>
                  <span className="text-sm text-gray-600">{service.author}</span>
                </div>
                <div className="mt-auto border-t border-gray-100 pt-4 flex justify-between items-center">
                  <span className="font-extrabold text-xl text-teal-600">{service.price} <span className="text-sm font-medium text-gray-500">FCFA</span></span>
                  <Link href={`/messages`} className="bg-gray-100 hover:bg-teal-50 text-gray-700 hover:text-teal-700 p-2 rounded-lg transition">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
