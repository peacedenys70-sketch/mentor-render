import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-teal-200 selection:text-teal-900">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
                MentorLink Bénin
              </span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="#features" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">Fonctionnalités</Link>
              <Link href="#pricing" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">Tarifs</Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">Témoignages</Link>
              <div className="flex space-x-4 ml-4">
                <button className="text-teal-600 font-medium px-4 py-2 hover:bg-teal-50 rounded-lg transition-colors">Connexion</button>
                <button className="bg-teal-600 text-white font-medium px-5 py-2 rounded-lg hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/30 transition-all duration-300">
                  S'inscrire
                </button>
              </div>
            </div>
            {/* Mobile menu button (Simplified) */}
            <div className="md:hidden flex items-center">
              <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 pointer-events-none">
          <div className="absolute top-20 -left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-20 -right-20 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold tracking-wider mb-6 border border-teal-200">
            LA PLATEFORME N°1 AU BÉNIN
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 text-gray-900 leading-tight">
            Boostez votre parcours <br className="hidden md:block"/>
            avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500">l'IA et le Mentorat</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Rejoignez MentorLink Bénin pour trouver votre mentor idéal, accéder à une banque d'épreuves exclusive, et propulser vos compétences vers de nouveaux sommets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-teal-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-600/30 transition-all duration-300 transform hover:-translate-y-1">
              Commencer gratuitement
            </button>
            <button className="bg-white text-gray-800 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Voir la démo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fonctionnalités Clés</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Tout ce dont vous avez besoin pour réussir, regroupé sur une seule plateforme intuitive.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Matching IA</h3>
              <p className="text-gray-600 leading-relaxed">Notre intelligence artificielle vous connecte instantanément avec le mentor idéal selon votre profil et vos objectifs.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Messagerie Intégrée</h3>
              <p className="text-gray-600 leading-relaxed">Échangez de manière fluide et sécurisée avec votre mentor via notre système de chat et d'appels vidéo intégrés.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Marketplace</h3>
              <p className="text-gray-600 leading-relaxed">Proposez ou achetez des micro-services (relecture de CV, conseils d'orientation) au sein de la communauté.</p>
            </div>
            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Banque d'Épreuves</h3>
              <p className="text-gray-600 leading-relaxed">Accédez à une vaste bibliothèque de ressources éducatives, anciens examens et corrigés exclusifs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Des tarifs adaptés à vos besoins</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choisissez le plan qui vous correspond le mieux. Paiement sécurisé via FedaPay ou Kkiapay.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan Gratuit */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Découverte</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-extrabold text-gray-900">0</span>
                <span className="text-gray-500 font-medium">FCFA</span>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">Parfait pour explorer la plateforme et découvrir nos mentors.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Accès limité aux mentors
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Messagerie basique
                </li>
              </ul>
              <button className="w-full bg-teal-50 text-teal-700 font-bold py-3 rounded-xl hover:bg-teal-100 transition-colors">
                Commencer
              </button>
            </div>
            
            {/* Plan Exposant */}
            <div className="bg-white rounded-3xl p-8 border-2 border-teal-500 shadow-xl shadow-teal-100 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                Le plus populaire
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Exposant</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-extrabold text-gray-900">500</span>
                <span className="text-gray-500 font-medium">FCFA / mois</span>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">Vendez vos services ou accédez à des ressources exclusives.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Tout de Découverte +
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Création de micro-services
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Banque d'épreuves basique
                </li>
              </ul>
              <button className="w-full bg-teal-600 text-white font-bold py-3 rounded-xl hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/30 transition-all">
                S'abonner (FedaPay)
              </button>
            </div>

            {/* Plan Premium */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">PREMIUM</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-extrabold text-gray-900">1000</span>
                <span className="text-gray-500 font-medium">FCFA / mois</span>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">L'expérience ultime avec accès illimité à toutes les fonctionnalités.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Tout de Exposant +
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Matching IA prioritaire
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Banque d'épreuves illimitée
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-colors">
                S'abonner (Kkiapay)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Ce que disent nos utilisateurs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="flex text-amber-400 mb-4">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"Grâce à MentorLink, j'ai pu trouver un mentor en développement web qui m'a aidé à décrocher mon premier stage à Cotonou."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center text-teal-800 font-bold">A</div>
                <div>
                  <h4 className="font-bold text-gray-900">Astride D.</h4>
                  <p className="text-sm text-gray-500">Étudiante en Informatique</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="flex text-amber-400 mb-4">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"La banque d'épreuves m'a sauvé lors de mes examens de fin d'année. Et j'ai pu proposer mes services de correction pour financer mon abonnement Premium !"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold">M</div>
                <div>
                  <h4 className="font-bold text-gray-900">Marc O.</h4>
                  <p className="text-sm text-gray-500">Abonné Premium</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl md:hidden lg:block">
              <div className="flex text-amber-400 mb-4">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"Partager mon expérience avec les plus jeunes est devenu très simple. L'intégration de FedaPay rend la monétisation transparente."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-800 font-bold">F</div>
                <div>
                  <h4 className="font-bold text-gray-900">Franck T.</h4>
                  <p className="text-sm text-gray-500">Mentor Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Questions Fréquentes</h2>
          <div className="space-y-4">
            {[
              { q: "Comment fonctionne le paiement via FedaPay/Kkiapay ?", a: "Nous utilisons ces passerelles locales pour vous permettre de payer via Mobile Money (MTN, Moov) de manière totalement sécurisée." },
              { q: "Puis-je changer de plan à tout moment ?", a: "Oui, vous pouvez passer du plan Gratuit à Exposant ou Premium à tout moment depuis votre tableau de bord." },
              { q: "Comment le matching IA choisit-il mon mentor ?", a: "Notre algorithme analyse vos compétences actuelles, vos objectifs, et votre domaine d'études pour vous proposer les profils les plus pertinents." }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm cursor-pointer hover:border-teal-200 transition-colors">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-gray-900">{faq.q}</h4>
                  <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
                <p className="text-gray-600 mt-4 hidden">{faq.a}</p>
                {/* Normally we'd use state to toggle the answer, but for a simple preview we can leave it static or visible */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <span className="text-2xl font-bold text-white tracking-tight mb-4 block">MentorLink Bénin</span>
              <p className="text-gray-400 max-w-sm">
                Connecter les talents d'aujourd'hui avec les leaders de demain au Bénin.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Plateforme</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-teal-400 transition-colors">Fonctionnalités</Link></li>
                <li><Link href="#" className="hover:text-teal-400 transition-colors">Tarifs</Link></li>
                <li><Link href="#" className="hover:text-teal-400 transition-colors">Devenir Mentor</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Légal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-teal-400 transition-colors">Conditions Générales</Link></li>
                <li><Link href="#" className="hover:text-teal-400 transition-colors">Confidentialité</Link></li>
                <li><Link href="#" className="hover:text-teal-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© 2026 MentorLink Bénin. Tous droits réservés.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {/* Social icons placeholders */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
