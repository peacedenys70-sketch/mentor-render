"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Composant pour la Carte de Service
const ServiceCard = ({ service, role }: { service: any, role: 'buyer' | 'seller' }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Demandé': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Accepté': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Livré': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Évalué': return 'bg-teal-100 text-teal-800 border-teal-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const renderActionButtons = (status: string) => {
    if (role === 'seller') {
      if (status === 'Demandé') return <button className="w-full mt-3 bg-blue-600 text-white font-medium py-1.5 rounded-lg hover:bg-blue-700 transition">Accepter le service</button>;
      if (status === 'Accepté') return <button className="w-full mt-3 bg-indigo-600 text-white font-medium py-1.5 rounded-lg hover:bg-indigo-700 transition">Marquer comme livré</button>;
    } else {
      if (status === 'Livré') return <button className="w-full mt-3 bg-teal-600 text-white font-medium py-1.5 rounded-lg hover:bg-teal-700 transition">Évaluer la prestation</button>;
    }
    return null;
  };

  return (
    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm w-72 max-w-full">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-bold text-gray-900 text-sm">{service.title}</h4>
        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${getStatusColor(service.status)}`}>
          {service.status}
        </span>
      </div>
      <p className="text-xs text-gray-500 mb-3 line-clamp-2">{service.description}</p>
      <div className="flex justify-between items-center border-t border-gray-100 pt-3">
        <span className="font-extrabold text-teal-600">{service.price} FCFA</span>
        <span className="text-xs text-gray-400">Délai : {service.deadline}</span>
      </div>
      {renderActionButtons(service.status)}
    </div>
  );
};

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(1);
  const [inputText, setInputText] = useState('');

  const conversations = [
    { id: 1, name: "Astride Dossou", avatar: "A", lastMessage: "Merci pour le document !", time: "10:42", unread: 0, online: true, typing: true },
    { id: 2, name: "Marc Orou", avatar: "M", lastMessage: "Tu peux m'aider en Algo ?", time: "Hier", unread: 2, online: false, typing: false },
    { id: 3, name: "Franck T.", avatar: "F", lastMessage: "Service livré.", time: "Lun", unread: 0, online: true, typing: false },
  ];

  const messages = [
    { id: 1, senderId: 1, text: "Salut, tu as pu finir le TP de Java ?", time: "10:30", type: "text", status: "read" },
    { id: 2, senderId: "me", text: "Oui, c'était un peu complexe sur la fin mais ça va.", time: "10:32", type: "text", status: "read" },
    { id: 3, senderId: 1, text: "", time: "10:35", type: "voice", duration: "0:45", status: "read" },
    { id: 4, senderId: 1, text: "Correction_TP.pdf", time: "10:38", type: "file", size: "2.4 MB", status: "read" },
    { id: 5, senderId: "me", text: "Je t'ai envoyé une demande de service pour la relecture de mon rapport.", time: "10:40", type: "text", status: "read" },
    { 
      id: 6, senderId: "me", text: "", time: "10:41", type: "service", status: "read",
      service: { title: "Relecture de Rapport de Stage", description: "Vérification orthographique et mise en forme selon les normes de l'UAC.", price: 2000, deadline: "2 jours", status: "Accepté" }
    },
    { id: 7, senderId: 1, text: "Merci pour le document !", time: "10:42", type: "text", status: "delivered" },
  ];

  return (
    <div className="h-screen bg-gray-50 flex flex-col font-sans overflow-hidden">
      {/* Header global */}
      <header className="bg-white border-b border-gray-200 h-16 flex-shrink-0 flex items-center px-4 sm:px-6">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent mr-8">
          MentorLink
        </Link>
        <span className="font-semibold text-gray-700">Messagerie</span>
      </header>

      {/* Interface de Chat */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar des conversations */}
        <div className="w-full md:w-80 lg:w-96 bg-white border-r border-gray-200 flex flex-col h-full">
          <div className="p-4 border-b border-gray-100">
            <input 
              type="text" 
              placeholder="Rechercher une discussion..." 
              className="w-full bg-gray-100 px-4 py-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          
          <div className="overflow-y-auto flex-1">
            {conversations.map(chat => (
              <div 
                key={chat.id} 
                onClick={() => setActiveChat(chat.id)}
                className={`flex items-center p-4 cursor-pointer border-b border-gray-50 hover:bg-gray-50 transition-colors ${activeChat === chat.id ? 'bg-teal-50/50' : ''}`}
              >
                <div className="relative flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    chat.id === 1 ? 'bg-teal-200 text-teal-800' : chat.id === 2 ? 'bg-amber-200 text-amber-800' : 'bg-indigo-200 text-indigo-800'
                  }`}>
                    {chat.avatar}
                  </div>
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                
                <div className="ml-4 flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-gray-900 truncate">{chat.name}</h3>
                    <span className={`text-xs ${chat.unread ? 'text-teal-600 font-bold' : 'text-gray-400'}`}>{chat.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className={`text-sm truncate ${chat.unread ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                      {chat.typing ? (
                        <span className="text-teal-600 italic text-sm">En train d'écrire...</span>
                      ) : chat.lastMessage}
                    </p>
                    {chat.unread > 0 && (
                      <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                        {chat.unread}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Zone de Chat principale */}
        <div className="hidden md:flex flex-1 flex-col bg-[#F8FAFC]">
          
          {/* Header de la discussion */}
          <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-10 h-10 bg-teal-200 text-teal-800 rounded-full flex items-center justify-center font-bold">A</div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h2 className="font-bold text-gray-900">Astride Dossou</h2>
                <p className="text-xs text-teal-600 font-medium">En ligne</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="text-gray-400 hover:text-teal-600 transition"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></button>
              <button className="text-gray-400 hover:text-teal-600 transition"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg></button>
              <button className="text-gray-400 hover:text-gray-600 transition"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg></button>
            </div>
          </div>

          {/* Liste des messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg) => {
              const isMe = msg.senderId === 'me';
              
              return (
                <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                  {!isMe && (
                    <div className="w-8 h-8 bg-teal-200 text-teal-800 rounded-full flex flex-shrink-0 items-center justify-center font-bold text-xs mr-3 mt-auto">A</div>
                  )}
                  
                  <div className={`max-w-[70%] flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                    
                    {msg.type === 'text' && (
                      <div className={`px-4 py-2.5 rounded-2xl text-[15px] ${isMe ? 'bg-teal-600 text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'}`}>
                        {msg.text}
                      </div>
                    )}

                    {msg.type === 'voice' && (
                      <div className={`px-4 py-3 rounded-2xl flex items-center gap-3 w-64 ${isMe ? 'bg-teal-600 text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'}`}>
                        <button className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isMe ? 'bg-teal-500 text-white hover:bg-teal-400' : 'bg-teal-100 text-teal-600 hover:bg-teal-200'}`}>
                          <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                        </button>
                        <div className="flex-1">
                          <div className={`h-1.5 rounded-full w-full opacity-50 ${isMe ? 'bg-teal-300' : 'bg-gray-200'}`}>
                            <div className={`h-full rounded-full w-1/3 ${isMe ? 'bg-white' : 'bg-teal-500'}`}></div>
                          </div>
                        </div>
                        <span className="text-xs font-medium opacity-80">{msg.duration}</span>
                      </div>
                    )}

                    {msg.type === 'file' && (
                      <div className={`px-4 py-3 rounded-2xl flex items-center gap-4 ${isMe ? 'bg-teal-600 text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'}`}>
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isMe ? 'bg-teal-500 text-white' : 'bg-red-50 text-red-500'}`}>
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                        </div>
                        <div>
                          <p className="font-bold text-sm truncate max-w-[150px]">{msg.text}</p>
                          <p className={`text-xs ${isMe ? 'text-teal-200' : 'text-gray-500'}`}>{msg.size} • PDF</p>
                        </div>
                        <button className={`ml-2 p-1.5 rounded-full ${isMe ? 'hover:bg-teal-500' : 'hover:bg-gray-100'}`}>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        </button>
                      </div>
                    )}

                    {msg.type === 'service' && msg.service && (
                      <div className="mt-1">
                        <ServiceCard service={msg.service} role={isMe ? 'seller' : 'buyer'} />
                      </div>
                    )}

                    {/* Metadata: Heure et Accusé de lecture */}
                    <div className="flex items-center gap-1 mt-1 text-[11px] text-gray-400">
                      <span>{msg.time}</span>
                      {isMe && (
                        <svg className={`w-3.5 h-3.5 ${msg.status === 'read' ? 'text-blue-500' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          {/* Second checkmark for 'read' status */}
                          {msg.status === 'read' && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 13l4 4L24 7" className="transform -translate-x-3.5" />
                          )}
                        </svg>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
            
            {/* Typing Indicator */}
            <div className="flex justify-start items-end">
              <div className="w-8 h-8 bg-teal-200 text-teal-800 rounded-full flex items-center justify-center font-bold text-xs mr-3">A</div>
              <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
              </div>
            </div>
            
          </div>

          {/* Input Area */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="max-w-4xl mx-auto flex items-end gap-2 bg-gray-50 border border-gray-200 rounded-3xl px-4 py-2 focus-within:bg-white focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-transparent transition-all">
              
              <button className="p-2 text-gray-400 hover:text-teal-600 transition rounded-full hover:bg-gray-100 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
              </button>
              <button className="p-2 text-gray-400 hover:text-teal-600 transition rounded-full hover:bg-gray-100 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </button>

              <textarea 
                placeholder="Écrivez un message..."
                className="w-full max-h-32 min-h-[40px] bg-transparent resize-none py-2 px-2 outline-none text-gray-700 text-[15px]"
                rows={1}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              ></textarea>

              {inputText.trim() === '' ? (
                <button className="p-2 text-gray-400 hover:text-teal-600 transition rounded-full hover:bg-gray-100 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                </button>
              ) : (
                <button className="p-2 bg-teal-600 text-white hover:bg-teal-700 transition rounded-full flex-shrink-0 mb-0.5">
                  <svg className="w-5 h-5 ml-1 transform rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
