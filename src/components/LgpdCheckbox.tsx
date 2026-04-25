import React from 'react';

interface LgpdCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
  className?: string;
}

export const LgpdCheckbox: React.FC<LgpdCheckboxProps> = ({ checked, onChange, id = "lgpd-terms", className = "" }) => {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="flex items-center h-5 mt-0.5">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded focus:ring-indigo-500 focus:ring-2 cursor-pointer transition-colors"
          required
        />
      </div>
      <label htmlFor={id} className="text-sm text-gray-600 cursor-pointer select-none">
        Li e aceito os{' '}
        <a href="/termos-de-uso" target="_blank" className="text-indigo-600 hover:text-indigo-800 font-medium underline-offset-2 hover:underline">
          Termos de Uso
        </a>{' '}
        e a{' '}
        <a href="/politica-de-privacidade" target="_blank" className="text-indigo-600 hover:text-indigo-800 font-medium underline-offset-2 hover:underline">
          Política de Privacidade
        </a>
        .
      </label>
    </div>
  );
};

export default LgpdCheckbox;
