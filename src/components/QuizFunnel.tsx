"use client";

import { useState } from "react";

type ScreenId =
  | "screen_1_intro"
  | "screen_2_profile"
  | "P1_pro_problem"
  | "P2_A"
  | "P2_B"
  | "P2_C"
  | "P3_pro_data"
  | "D1_debutant_problem"
  | "D2_A"
  | "D2_B"
  | "D2_C"
  | "E1_experimente_problem"
  | "E2_A"
  | "E2_B"
  | "E2_C"
  | "Final_1_Value_Stack"
  | "Final_2_Checkout";

export default function QuizFunnel() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>("screen_1_intro");
  const [profile, setProfile] = useState<"debutant" | "experimente" | "pro" | null>(null);

  // Transition handler
  const goTo = (screen: ScreenId) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      // ----------------- STEP 1 & 2 -----------------
      case "screen_1_intro":
        return (
          <div className="animate-fade-in-up text-center max-w-2xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="text-red-500">🛑</span> Accès anticipé MyBase : L'écosystème ultime de l'investisseur.
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Nous ne lançons pas une simple application. MyBase, c'est la fusion entre un algorithme privé qui note chaque annonce sur 10, l'outil "BienVérif" pour sécuriser les achats, et une Marketplace secrète. Avant l'ouverture publique, nous sélectionnons nos 100 Membres Fondateurs.
            </p>
            <button
              onClick={() => goTo("screen_2_profile")}
              className="mt-8 bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105"
            >
              Démarrer l'expérience &rarr;
            </button>
          </div>
        );

      case "screen_2_profile":
        return (
          <div className="animate-fade-in-up max-w-2xl mx-auto space-y-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Avant de commencer, parlons de vous.</h2>
              <p className="text-gray-400">
                MyBase s'adapte à votre niveau et à vos objectifs. Pour personnaliser cette présentation, qui êtes-vous aujourd'hui ?
              </p>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => {
                  setProfile("debutant");
                  goTo("D1_debutant_problem");
                }}
                className="w-full text-left bg-gray-800 hover:bg-gray-700 border border-gray-700 p-6 rounded-2xl transition-all hover:border-emerald-500 hover:-translate-y-1"
              >
                <div className="text-xl mb-1">🐣 Je débute.</div>
                <div className="text-gray-400 text-sm">Je prépare mon premier (ou deuxième) investissement.</div>
              </button>
              <button
                onClick={() => {
                  setProfile("experimente");
                  goTo("E1_experimente_problem");
                }}
                className="w-full text-left bg-gray-800 hover:bg-gray-700 border border-gray-700 p-6 rounded-2xl transition-all hover:border-emerald-500 hover:-translate-y-1"
              >
                <div className="text-xl mb-1">🦅 Je suis expérimenté.</div>
                <div className="text-gray-400 text-sm">J'ai déjà plusieurs biens à mon actif et je veux accélérer mon patrimoine.</div>
              </button>
              <button
                onClick={() => {
                  setProfile("pro");
                  goTo("P1_pro_problem");
                }}
                className="w-full text-left bg-gray-800 hover:bg-gray-700 border border-gray-700 p-6 rounded-2xl transition-all hover:border-emerald-500 hover:-translate-y-1"
              >
                <div className="text-xl mb-1">💼 C'est mon métier.</div>
                <div className="text-gray-400 text-sm">Je suis un professionnel (Agent, Chasseur, CGP, Marchand)...</div>
              </button>
            </div>
          </div>
        );

      // ----------------- BRANCH PRO -----------------
      case "P1_pro_problem":
        return (
          <div className="animate-fade-in-up max-w-2xl mx-auto space-y-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">L'immobilier est votre métier. Qu'est-ce qui limite votre chiffre d'affaires aujourd'hui ?</h2>
              <p className="text-gray-400">
                En tant que professionnel, votre temps c'est littéralement de l'argent. Quel est votre plus grand goulot d'étranglement ?
              </p>
            </div>
            <div className="space-y-4">
              <button onClick={() => goTo("P2_A")} className="w-full text-left bg-gray-800 hover:bg-gray-700 border border-gray-700 p-6 rounded-2xl transition-all hover:border-emerald-500 hover:-translate-y-1">
                🅰️ Le Sourcing : Je perds un temps fou à trouver de vraies pépites...
              </button>
              <button onClick={() => goTo("P2_B")} className="w-full text-left bg-gray-800 hover:bg-gray-700 border border-gray-700 p-6 rounded-2xl transition-all hover:border-emerald-500 hover:-translate-y-1">
                🅱️ L'Analyse et la Réassurance : Je passe trop de temps à faire des calculs...
              </button>
              <button onClick={() => goTo("P2_C")} className="w-full text-left bg-gray-800 hover:bg-gray-700 border border-gray-700 p-6 rounded-2xl transition-all hover:border-emerald-500 hover:-translate-y-1">
                🅲 Le Filtre anti-déchet : Je perds un temps précieux à visiter des biens...
              </button>
            </div>
          </div>
        );

      case "P2_A":
        return (
          <div className="animate-fade-in-up text-center max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Offrez le Top 1% à vos clients.</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Imaginez avoir une équipe d'analystes qui travaille pour vous 24h/24. Notre Marketplace filtre le marché et vous livre les biens avec un Score BASE &gt; 8/10. Vous n'avez plus qu'à sélectionner les meilleures affaires.
            </p>
            <button onClick={() => goTo("P3_pro_data")} className="bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105">
              Découvrir la suite &rarr;
            </button>
          </div>
        );

      case "P2_B":
        return (
          <div className="animate-fade-in-up text-center max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Devenez l'expert incontestable (et divisez votre temps par 50).</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Fini les tableurs Excel illisibles. Rentrez l'adresse en direct : MyBase calcule la renta nette, la fiscalité, et affiche un Score BASE / 10 magnifique et rassurant. C'est l'argument d'autorité ultime pour déclencher une vente.
            </p>
            <button onClick={() => goTo("P3_pro_data")} className="bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105">
              Découvrir la suite &rarr;
            </button>
          </div>
        );

      case "P2_C":
        return (
          <div className="animate-fade-in-up text-center max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Éliminez les mauvais biens sans même vous déplacer.</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ne faites plus de visites inutiles. Avant d'appeler, passez l'annonce dans MyBase et BienVérif. L'algorithme vérifie les 15 points de contrôle fatals. En 3 secondes, vous savez si c'est une affaire en or.
            </p>
            <button onClick={() => goTo("P3_pro_data")} className="bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105">
              Découvrir la suite &rarr;
            </button>
          </div>
        );

      case "P3_pro_data":
        return (
          <div className="animate-fade-in-up max-w-2xl mx-auto space-y-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Quelle est votre force de frappe actuelle ?</h2>
              <p className="text-gray-400">Pour calibrer notre outil aux besoins des professionnels, quel est votre volume de transactions annuel moyen ?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['1-5 / an', '6-15 / an', 'Plus de 15 / an', 'Je débute'].map((vol) => (
                <button
                  key={vol}
                  onClick={() => goTo("Final_1_Value_Stack")}
                  className="bg-gray-800 hover:bg-gray-700 border border-gray-700 p-4 rounded-xl transition-all hover:border-emerald-500 font-semibold"
                >
                  {vol}
                </button>
              ))}
            </div>
          </div>
        );

      // ----------------- BRANCH DÉBUTANT -----------------
      case "D1_debutant_problem":
        return (
          <div className="animate-fade-in-up max-w-2xl mx-auto space-y-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Soyons honnêtes. Combien de billets de 10 000 € pouvez-vous vous permettre de perdre ?</h2>
              <p className="text-gray-400">Quel est votre plus grand frein aujourd'hui ?</p>
            </div>
            <div className="space-y-4">
              <button onClick={() => goTo("D2_A")} className="w-full text-left bg-gray-800 hover:bg-gray-700 border border-gray-700 p-6 rounded-2xl transition-all hover:border-emerald-500 hover:-translate-y-1">
                🅰️ Passer mes soirées sur Excel et me tromper sur la fiscalité.
              </button>
              <button onClick={() => goTo("D2_B")} className="w-full text-left bg-gray-800 hover:bg-gray-700 border border-gray-700 p-6 rounded-2xl transition-all hover:border-emerald-500 hover:-translate-y-1">
                🅱️ Trouver un bien rentable sur le papier, mais découvrir des vices cachés.
              </button>
              <button onClick={() => goTo("D2_C")} className="w-full text-left bg-gray-800 hover:bg-gray-700 border border-gray-700 p-6 rounded-2xl transition-all hover:border-emerald-500 hover:-translate-y-1">
                🅲 Arriver toujours trop tard sur les annonces car je travaille.
              </button>
            </div>
          </div>
        );

      case "D2_A":
        return (
          <div className="animate-fade-in-up text-center max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">C'est pour ça que nous avons tué le fichier Excel.</h2>
            <p className="text-gray-300 text-lg leading-relaxed">La complexité fiscale tue des milliers de projets. En 3 clics, l'algorithme calcule votre renta nette, simule vos impôts, votre cashflow et vous donne un Score BASE /10.</p>
            <button onClick={() => goTo("Final_1_Value_Stack")} className="bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105">
              Découvrir la suite &rarr;
            </button>
          </div>
        );

      case "D2_B":
        return (
          <div className="animate-fade-in-up text-center max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">C'est pour ça que nous avons créé le bouclier BienVérif.</h2>
            <p className="text-gray-300 text-lg leading-relaxed">Pour que vous n'achetiez plus jamais à l'aveugle, l'application intègre les 15 points de contrôle fatals à vérifier avant de faire une offre.</p>
            <button onClick={() => goTo("Final_1_Value_Stack")} className="bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105">
              Découvrir la suite &rarr;
            </button>
          </div>
        );

      case "D2_C":
        return (
          <div className="animate-fade-in-up text-center max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">C'est pour ça que nos robots sourcent pour vous.</h2>
            <p className="text-gray-300 text-lg leading-relaxed">Arrêtez de scroller. Notre Marketplace filtre les pépites avec un Score BASE &gt; 8/10 et vous les sert sur un plateau.</p>
            <button onClick={() => goTo("Final_1_Value_Stack")} className="bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105">
              Découvrir la suite &rarr;
            </button>
          </div>
        );

      // ----------------- BRANCH EXPÉRIMENTÉ -----------------
      case "E1_experimente_problem":
        return (
          <div className="animate-fade-in-up max-w-2xl mx-auto space-y-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Vous connaissez déjà les bases. Qu'est-ce qui bloque votre croissance ?</h2>
              <p className="text-gray-400">Quel est votre défi principal pour "scaler" votre parc immobilier cette année ?</p>
            </div>
            <div className="space-y-4">
              <button onClick={() => goTo("E2_A")} className="w-full text-left bg-gray-800 hover:bg-gray-700 border border-gray-700 p-6 rounded-2xl transition-all hover:border-emerald-500 hover:-translate-y-1">
                🅰️ Le Sourcing : Leboncoin est saturé, je n'arrive plus à trouver du &gt; 8% net.
              </button>
              <button onClick={() => goTo("E2_B")} className="w-full text-left bg-gray-800 hover:bg-gray-700 border border-gray-700 p-6 rounded-2xl transition-all hover:border-emerald-500 hover:-translate-y-1">
                🅱️ Le Temps d'analyse : Analyser 10 nouveaux biens par jour me prend un temps fou.
              </button>
              <button onClick={() => goTo("E2_C")} className="w-full text-left bg-gray-800 hover:bg-gray-700 border border-gray-700 p-6 rounded-2xl transition-all hover:border-emerald-500 hover:-translate-y-1">
                🅲 La Data Marché : Savoir instantanément si une ville est en tension locative.
              </button>
            </div>
          </div>
        );

      case "E2_A":
        return (
          <div className="animate-fade-in-up text-center max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Notre Marketplace privée a été créée pour vous.</h2>
            <p className="text-gray-300 text-lg leading-relaxed">Laissez nos algorithmes faire le sale boulot. Nos robots scannent le marché 24/7 et filtrent les passoires. Vous avez accès au top 1% des biens.</p>
            <button onClick={() => goTo("Final_1_Value_Stack")} className="bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105">
              Découvrir la suite &rarr;
            </button>
          </div>
        );

      case "E2_B":
        return (
          <div className="animate-fade-in-up text-center max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Divisez votre temps d'analyse par 50.</h2>
            <p className="text-gray-300 text-lg leading-relaxed">L'algorithme MyBase calcule la rentabilité nette d'impôts, la CFE, et le cashflow en 3 secondes. Vous pouvez analyser 20 biens pendant votre pause café.</p>
            <button onClick={() => goTo("Final_1_Value_Stack")} className="bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105">
              Découvrir la suite &rarr;
            </button>
          </div>
        );

      case "E2_C":
        return (
          <div className="animate-fade-in-up text-center max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">L'Indice BASE vous donne l'avantage injuste.</h2>
            <p className="text-gray-300 text-lg leading-relaxed">Notre algorithme intègre directement la tension locative et le risque fiscal de chaque secteur. Vous ne naviguez plus à l'aveugle.</p>
            <button onClick={() => goTo("Final_1_Value_Stack")} className="bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105">
              Découvrir la suite &rarr;
            </button>
          </div>
        );

      // ----------------- CONVERGENCE -----------------
      case "Final_1_Value_Stack":
        return (
          <div className="animate-fade-in-up max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight">⚡ Bienvenue chez les bâtisseurs. Rejoignez les 100 Membres Fondateurs.</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              À sa sortie officielle, l'abonnement MyBase PRO coûtera 50 €/mois (600 €/an). Aujourd'hui, nous ouvrons 100 Licences avec un accès <span className="text-white font-bold">PRO À VIE</span> gratuit.
            </p>
            
            <div className="bg-gray-800 border border-emerald-500/30 rounded-2xl p-6 md:p-8 text-left space-y-4 shadow-xl shadow-emerald-900/10">
              <ul className="space-y-4 text-gray-200">
                <li className="flex items-start"><span className="text-emerald-500 mr-3 text-xl">✅</span> <span>Accès à vie au Super-Calculateur & Score BASE en illimité.</span></li>
                <li className="flex items-start"><span className="text-emerald-500 mr-3 text-xl">✅</span> <span>Accès à BienVérif (sécuriser vos acquisitions).</span></li>
                <li className="flex items-start"><span className="text-emerald-500 mr-3 text-xl">✅</span> <span>Accès prioritaire à la Marketplace.</span></li>
                <li className="flex items-start"><span className="text-emerald-500 mr-3 text-xl">✅</span> <span>Accès à la Communauté Privée.</span></li>
                <li className="flex items-start"><span className="text-emerald-500 mr-3 text-xl">✅</span> <span>Toutes les futures mises à jour gratuites à vie.</span></li>
              </ul>
            </div>

            <button onClick={() => goTo("Final_2_Checkout")} className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold py-5 px-10 rounded-full text-xl transition-transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Sécuriser ma licence à vie &rarr;
            </button>
          </div>
        );

      case "Final_2_Checkout":
        return (
          <div className="animate-fade-in-up max-w-xl mx-auto space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Sécurisez votre licence à vie.</h2>
              <p className="text-emerald-500 font-medium">100 Licences Disponibles. Accès immédiat.</p>
            </div>
            
            <form className="bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-700 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Prénom</label>
                  <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Jean" required />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Nom</label>
                  <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Dupont" required />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Email</label>
                <input type="email" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="jean.dupont@email.com" required />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Profession (Optionnel)</label>
                <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="ex: Cadre, Agent, Marchand..." />
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold py-4 rounded-xl text-lg flex justify-center items-center transition-transform hover:scale-[1.02]">
                  🔒 Verrouiller ma place
                </button>
              </div>
            </form>
          </div>
        );

      default:
        return <div>Screen not found</div>;
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-8 flex items-center justify-center">
      {renderScreen()}
    </div>
  );
}
