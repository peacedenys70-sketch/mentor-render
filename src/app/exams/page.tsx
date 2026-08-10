"use client";

import React from 'react';
import Link from 'next/link';

export default function ExamsBankPage() {
  const exams = [
    { id: 1, title: "Examen Final - Algorithmique et Structures de Données", university: "UAC", year: "2024", type: "Sujet + Corrigé", verified: true, downloads: 342 },
    { id: 2, title: "Contrôle Continu - Mathématiques Discrètes", university: "EPAC", year: "2023", type: "Sujet", verified: false, downloads: 89 },
    { id: 3, title: "Partiel - Architecture des Ordinateurs", university: "IFRI", year: "2024", type: "Corrigé Officiel", verified: true, downloads: 512 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">MentorLink</Link>
          <span className="font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-full text-sm">Banque d'Épreuves</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Banque d'Épreuves</h1>
            <p className="text-gray-600 text-lg">Préparez vos examens avec les annales des années précédentes.</p>
          </div>
          <div className="flex bg-white rounded-xl border border-gray-200 overflow-hidden">
            <input type="text" placeholder="Rechercher une matière..." className="px-4 py-2 w-64 outline-none" />
            <button className="bg-gray-50 px-4 border-l border-gray-200 hover:bg-gray-100 text-gray-600">Rechercher</button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-100">
                  <th className="p-4 font-semibold">Document</th>
                  <th className="p-4 font-semibold">Université / Année</th>
                  <th className="p-4 font-semibold">Statut</th>
                  <th className="p-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {exams.map(exam => (
                  <tr key={exam.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 line-clamp-1">{exam.title}</p>
                          <span className="text-xs text-gray-500">{exam.type}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-gray-700">{exam.university}</span>
                      <span className="text-gray-400 text-sm ml-2">{exam.year}</span>
                    </td>
                    <td className="p-4">
                      {exam.verified ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                          Épreuve Vérifiée
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold">
                          Soumis par la comm.
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-right">
                      <button className="bg-teal-50 text-teal-700 hover:bg-teal-100 px-4 py-2 rounded-lg font-bold text-sm transition">
                        Télécharger
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
