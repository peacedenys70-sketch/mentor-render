"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Mock data for the demonstration
const mockStudents = [
  {
    id: 1,
    name: "Astride Dossou",
    university: "UAC - Université d'Abomey-Calavi",
    major: "Génie Logiciel",
    year: "Licence 3",
    strengths: ["React", "UI/UX", "Algorithmique"],
    weaknesses: ["Base de données", "DevOps"],
    complementarityScore: 92,
    avatar: "A",
    color: "bg-teal-200 text-teal-800"
  },
  {
    id: 2,
    name: "Marc Orou",
    university: "EPAC",
    major: "Réseaux Informatiques",
    year: "Master 1",
    strengths: ["Systèmes", "Sécurité", "DevOps"],
    weaknesses: ["Programmation Web", "Design"],
    complementarityScore: 85,
    avatar: "M",
    color: "bg-amber-200 text-amber-800"
  },
  {
    id: 3,
    name: "Franck T.",
    university: "IFRI",
    major: "Intelligence Artificielle",
    year: "Licence 2",
    strengths: ["Python", "Machine Learning", "Maths"],
    weaknesses: ["Développement Mobile"],
    complementarityScore: 78,
    avatar: "F",
    color: "bg-indigo-200 text-indigo-800"
  },
  {
    id: 4,
    name: "Sarah K.",
    university: "ENEAM",
    major: "Gestion Financière",
    year: "Licence 3",
    strengths: ["Comptabilité", "Analyse Financière"],
    weaknesses: ["Statistiques", "Excel Avancé"],
    complementarityScore: 45,
    avatar: "S",
    color: "bg-rose-200 text-rose-800"
  }
];

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterUniversity, setFilterUniversity] = useState("Toutes");
  const [filterMajor, setFilterMajor] = useState("Toutes");
  
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      {/* Header simple */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
            MentorLink
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-500">Mode IA Activé ⚡</span>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Explorer & Matching IA</h1>
          <p className="text-gray-600 text-lg">Trouvez les meilleurs profils complémentaires pour vos révisions et projets.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Filters */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-24">
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filtres
              </h2>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Recherche par nom</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Marc..." 
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Université / École</label>
                  <select 
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
                    value={filterUniversity}
                    onChange={(e) => setFilterUniversity(e.target.value)}
                  >
                    <option>Toutes</option>
                    <option>UAC - Université d'Abomey-Calavi</option>
                    <option>EPAC</option>
                    <option>IFRI</option>
                    <option>ENEAM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Filière</label>
                  <select 
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
                    value={filterMajor}
                    onChange={(e) => setFilterMajor(e.target.value)}
                  >
                    <option>Toutes</option>
                    <option>Génie Logiciel</option>
                    <option>Réseaux Informatiques</option>
                    <option>Intelligence Artificielle</option>
                    <option>Gestion Financière</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Matière à renforcer</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Programmation Web" 
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
                  />
                </div>
              </div>
              
              <button className="w-full mt-6 bg-teal-50 text-teal-700 font-bold py-2 rounded-xl hover:bg-teal-100 transition-colors">
                Réinitialiser
              </button>
            </div>
          </div>

          {/* Results Grid */}
          <div className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-600 font-medium">Résultats suggérés pour vous</span>
              <select className="border-none bg-transparent text-gray-500 font-medium cursor-pointer outline-none">
                <option>Trier par Matching IA</option>
                <option>Plus récents</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {mockStudents.map((student) => (
                <div key={student.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  {/* Matching Score Badge */}
                  <div className="absolute top-4 right-4 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-4 border-teal-100 flex items-center justify-center relative">
                      <svg className="absolute w-full h-full text-teal-500 -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="stroke-current"
                          strokeDasharray={`${student.complementarityScore}, 100`}
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          strokeWidth="4"
                        />
                      </svg>
                      <span className="font-bold text-sm text-teal-700">{student.complementarityScore}%</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 mt-1">Match IA</span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl ${student.color}`}>
                      {student.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-teal-600 transition-colors">{student.name}</h3>
                      <p className="text-sm text-gray-500">{student.university}</p>
                      <p className="text-xs font-medium text-teal-600 bg-teal-50 inline-block px-2 py-1 rounded-md mt-1">{student.major} • {student.year}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mt-5 border-t border-gray-50 pt-4">
                    <div>
                      <span className="text-xs uppercase font-bold text-gray-400 block mb-1">Points Forts (Peut vous aider)</span>
                      <div className="flex flex-wrap gap-1">
                        {student.strengths.map((skill, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md">{skill}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-gray-400 block mb-1">À Renforcer (Vous pouvez l'aider)</span>
                      <div className="flex flex-wrap gap-1">
                        {student.weaknesses.map((skill, idx) => (
                          <span key={idx} className="bg-amber-50 text-amber-700 border border-amber-100 text-xs px-2 py-1 rounded-md">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-teal-600 text-white font-bold py-2 rounded-xl hover:bg-teal-700 transition-colors">
                    Envoyer une demande
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
