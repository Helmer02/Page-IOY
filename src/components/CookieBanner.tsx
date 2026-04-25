import React, { useState, useEffect } from 'react';
import { X, Settings, Check } from 'lucide-react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('ioy-cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      setPreferences(JSON.parse(consent));
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent = { essential: true, analytics: true, marketing: true };
    localStorage.setItem('ioy-cookie-consent', JSON.stringify(allConsent));
    setPreferences(allConsent);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const rejectConsent = { essential: true, analytics: false, marketing: false };
    localStorage.setItem('ioy-cookie-consent', JSON.stringify(rejectConsent));
    setPreferences(rejectConsent);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('ioy-cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] animate-fade-in p-4 sm:p-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        
        {!showPreferences ? (
          <>
            <div className="flex-1 max-w-4xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Nós respeitamos a sua privacidade</h3>
              <p className="text-gray-600 text-sm">
                Utilizamos cookies para oferecer melhor experiência, melhorar o desempenho, analisar como você interage em nosso site e personalizar conteúdo. Ao clicar em "Aceitar", você concorda com o uso de cookies. Leia nossa{' '}
                <a href="/politica-de-cookies" className="text-indigo-600 hover:underline font-medium">Política de Cookies</a> para saber mais.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => setShowPreferences(true)}
                className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Preferências
              </button>
              <button
                onClick={handleRejectAll}
                className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
              >
                Recusar Não Essenciais
              </button>
              <button
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-6 py-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors"
              >
                Aceitar
              </button>
            </div>
          </>
        ) : (
          <div className="w-full animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Settings className="w-5 h-5 text-indigo-600" />
                Gerenciar Preferências de Cookies
              </h3>
              <button onClick={() => setShowPreferences(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Essential */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-900 text-sm">Essenciais</span>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md flex items-center gap-1">
                    <Check className="w-3 h-3" /> Sempre Ativos
                  </span>
                </div>
                <p className="text-xs text-gray-500">Necessários para o funcionamento básico do site e não podem ser desativados.</p>
              </div>
              
              {/* Analytics */}
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-900 text-sm">Desempenho e Analytics</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                    />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
                <p className="text-xs text-gray-500">Ajudam a entender como os visitantes interagem com o site, fornecendo métricas de acesso.</p>
              </div>
              
              {/* Marketing */}
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-900 text-sm">Marketing</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                    />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
                <p className="text-xs text-gray-500">Usados para rastrear visitantes em sites. A intenção é exibir anúncios relevantes e envolventes.</p>
              </div>
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2 text-sm font-bold text-white bg-gray-900 hover:bg-gray-800 rounded-lg shadow-sm transition-colors"
              >
                Salvar minhas preferências
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
