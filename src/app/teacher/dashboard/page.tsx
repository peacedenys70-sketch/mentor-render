"use client";

import React from 'react';
import Link from 'next/link';

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      <header className="bg-gray-900 text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">MentorLink <span className="text-white font-normal text-sm ml-2">Portail Enseignant</span></Link>
          <div className="flex items-center gap-4">
            <span className="font-medium text-sm">Prof. Hountondji</span>
            <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center font-bold">H</div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Tableau de Bord</h1>
          <p className="text-gray-600">Gérez vos dépôts d'épreuves officielles et supervisez les offres de mentorat.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm border-l-4 border-l-teal-500">
            <h3 className="text-gray-500 font-medium mb-1">Épreuves Vérifiées</h3>
            <p className="text-3xl font-bold text-gray-900">12</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm border-l-4 border-l-blue-500">
            <h3 className="text-gray-500 font-medium mb-1">Téléchargements</h3>
            <p className="text-3xl font-bold text-gray-900">845</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm border-l-4 border-l-purple-500">
            <h3 className="text-gray-500 font-medium mb-1">Mentors Supervisés</h3>
            <p className="text-3xl font-bold text-gray-900">4</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Gestion des épreuves */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Vos Dépôts (Banque d'Épreuves)</h2>
              <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-teal-700 transition">
                + Nouveau Dépôt
              </button>
            </div>
            
            <div className="space-y-4">
              {[
                { title: "Examen Final - Algorithmique", date: "12 Mai 2024", status: "Publié" },
                { title: "Partiel - Architecture", date: "05 Mars 2024", status: "Publié" },
                { title: "Corrigé - TD Pointeurs C", date: "Aujourd'hui", status: "Brouillon" },
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${doc.status === 'Publié' ? 'bg-emerald-50 text-emerald-500' : 'bg-amber-50 text-amber-500'}`}>
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900">{doc.title}</h4>
                      <p className="text-xs text-gray-500">Dernière modif : {doc.date}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-md ${doc.status === 'Publié' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Offres étudiantes / Marketplace surveillance */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Offres de Mentorat (Supervision)</h2>
            <p className="text-sm text-gray-600 mb-4">Repérez les étudiants talentueux qui proposent des services de qualité pour les recommander ou les encadrer.</p>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-sm">Correction intensive en Algorithmique</h4>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-md font-bold">Top Noté</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">Proposé par : <span className="font-bold text-gray-700">Marc O.</span> (Master 1)</p>
                <button className="text-sm text-teal-600 font-bold hover:underline">Contacter l'étudiant</button>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-sm">Rédaction de Rapport</h4>
                  <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-md font-bold">Populaire</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">Proposé par : <span className="font-bold text-gray-700">Astride D.</span> (Licence 3)</p>
                <button className="text-sm text-teal-600 font-bold hover:underline">Contacter l'étudiant</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
