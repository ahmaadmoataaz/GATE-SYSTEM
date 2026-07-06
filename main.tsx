/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Folder,
  FileText,
  Search,
  Ship,
  UserPlus,
  Lock,
  ChevronDown,
  ChevronRight,
  Anchor,
} from 'lucide-react';
import { ActiveTab } from '../types';
import { translations } from '../translations';

interface SidebarProps {
  lang: 'ar' | 'en';
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  permissions: {
    [key in ActiveTab]: {
      view: boolean;
      edit: boolean;
      approve: boolean;
    }
  };
}

export const Sidebar: React.FC<SidebarProps> = ({
  lang,
  activeTab,
  setActiveTab,
  permissions,
}) => {
  const handleSelect = (tab: ActiveTab) => {
    if (tab === ActiveTab.EXPORT_STATEMENT) {
      setActiveTab(tab);
    } else {
      alert(lang === 'ar' ? 'عفواً، لا توجد صلاحية للوصول لهذا البرنامج' : 'Sorry, you do not have permission to access this module.');
      setActiveTab(tab);
    }
  };

  return (
    <div className="w-60 bg-white border-r border-[#bebebe] flex flex-col justify-between h-full select-none font-sans" dir="ltr">
      {/* Scrollable Tree View list */}
      <div className="p-2 overflow-y-auto flex-1 text-[11px] text-black">
        
        {/* Tree Container with dotted guidelines */}
        <div className="relative pl-1">
          
          {/* Root node 1: General Inquiry Report */}
          <div className="relative pb-1">
            {/* Horizontal branch line from main vertical line */}
            <div className="flex items-center gap-1 py-0.5">
              {/* Expand/Collapse square box [-] */}
              <span className="w-3.5 h-3.5 border border-gray-400 bg-white flex items-center justify-center text-[10px] font-bold text-gray-600 mr-1 cursor-pointer select-none">
                -
              </span>
              {/* Folder Icon */}
              <span className="w-4 h-4 flex items-center justify-center text-amber-500 font-bold text-[14px]">
                📁
              </span>
              <span className="font-bold text-[#000000] cursor-pointer hover:underline">
                General Inquiry Report
              </span>
            </div>

            {/* Sub-tree under General Inquiry Report */}
            <div className="pl-6 relative border-l border-dotted border-gray-400 ml-2.5">
              {/* Cntr. Inq & Seal */}
              <div className="relative flex items-center py-0.5">
                {/* Horizontal dotted connecter */}
                <div className="absolute left-[-16px] w-[16px] border-t border-dotted border-gray-400 top-1/2"></div>
                <button
                  onClick={() => handleSelect(ActiveTab.CNTR_INQ)}
                  disabled={!permissions[ActiveTab.CNTR_INQ]?.view}
                  className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded-none text-left w-full cursor-pointer ${
                    activeTab === ActiveTab.CNTR_INQ
                      ? 'bg-[#000080] text-white border border-dotted border-white font-semibold'
                      : 'hover:bg-gray-200 text-black'
                  } ${!permissions[ActiveTab.CNTR_INQ]?.view ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  <span className="text-[12px]">📄</span>
                  <span>Cntr. Inq & Seal</span>
                </button>
              </div>

              {/* Load List */}
              <div className="relative flex items-center py-0.5">
                {/* Horizontal dotted connecter */}
                <div className="absolute left-[-16px] w-[16px] border-t border-dotted border-gray-400 top-1/2"></div>
                <button
                  onClick={() => handleSelect(ActiveTab.LOAD_LIST)}
                  disabled={!permissions[ActiveTab.LOAD_LIST]?.view}
                  className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded-none text-left w-full cursor-pointer ${
                    activeTab === ActiveTab.LOAD_LIST
                      ? 'bg-[#000080] text-white border border-dotted border-white font-semibold'
                      : 'hover:bg-gray-200 text-black'
                  } ${!permissions[ActiveTab.LOAD_LIST]?.view ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  <span className="text-[12px]">📄</span>
                  <span>Load List</span>
                </button>
              </div>
            </div>
          </div>

          {/* Root node 2: Export Statement */}
          <div className="relative pb-1">
            <div className="flex items-center gap-1 py-0.5">
              {/* Expand/Collapse square box [-] */}
              <span className="w-3.5 h-3.5 border border-gray-400 bg-white flex items-center justify-center text-[10px] font-bold text-gray-600 mr-1 cursor-pointer select-none">
                -
              </span>
              {/* Folder Icon */}
              <span className="w-4 h-4 flex items-center justify-center text-amber-500 font-bold text-[14px]">
                📁
              </span>
              <span className="font-bold text-[#000000] cursor-pointer hover:underline">
                Export Statement
              </span>
            </div>

            {/* Sub-tree under Export Statement */}
            <div className="pl-6 relative border-l border-dotted border-gray-400 ml-2.5">
              {/* LCL UNIT (Export Statement View) */}
              <div className="relative flex items-center py-0.5">
                <div className="absolute left-[-16px] w-[16px] border-t border-dotted border-gray-400 top-1/2"></div>
                <button
                  onClick={() => handleSelect(ActiveTab.EXPORT_STATEMENT)}
                  disabled={!permissions[ActiveTab.EXPORT_STATEMENT]?.view}
                  className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded-none text-left w-full cursor-pointer ${
                    activeTab === ActiveTab.EXPORT_STATEMENT
                      ? 'bg-[#000080] text-white border border-dotted border-white font-semibold'
                      : 'hover:bg-gray-200 text-black'
                  } ${!permissions[ActiveTab.EXPORT_STATEMENT]?.view ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  <span className="text-[12px]">📄</span>
                  <span>LCL UNIT</span>
                </button>
              </div>

              {/* Export statement (Restricted) */}
              <div className="relative flex items-center py-0.5">
                <div className="absolute left-[-16px] w-[16px] border-t border-dotted border-gray-400 top-1/2"></div>
                <button
                  onClick={() => handleSelect(ActiveTab.NEW_EXPORT_STATEMENT)}
                  disabled={!permissions[ActiveTab.NEW_EXPORT_STATEMENT]?.view}
                  className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded-none text-left w-full cursor-pointer ${
                    activeTab === ActiveTab.NEW_EXPORT_STATEMENT
                      ? 'bg-[#000080] text-white border border-dotted border-white font-semibold'
                      : 'hover:bg-gray-200 text-black'
                  } ${!permissions[ActiveTab.NEW_EXPORT_STATEMENT]?.view ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  <span className="text-[12px]">📄</span>
                  <span>Export statement</span>
                </button>
              </div>

              {/* Edit ECN / Stop Release */}
              <div className="relative flex items-center py-0.5">
                <div className="absolute left-[-16px] w-[16px] border-t border-dotted border-gray-400 top-1/2"></div>
                <button
                  onClick={() => handleSelect(ActiveTab.EDIT_ECN)}
                  disabled={!permissions[ActiveTab.EDIT_ECN]?.view}
                  className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded-none text-left w-full cursor-pointer ${
                    activeTab === ActiveTab.EDIT_ECN
                      ? 'bg-[#000080] text-white border border-dotted border-white font-semibold'
                      : 'hover:bg-gray-200 text-black'
                  } ${!permissions[ActiveTab.EDIT_ECN]?.view ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  <span className="text-[12px]">🔒</span>
                  <span>Edit ECN / Stop Release</span>
                </button>
              </div>

              {/* Add Consignee */}
              <div className="relative flex items-center py-0.5">
                <div className="absolute left-[-16px] w-[16px] border-t border-dotted border-gray-400 top-1/2"></div>
                <button
                  onClick={() => handleSelect(ActiveTab.ADD_CONSIGNEE)}
                  disabled={!permissions[ActiveTab.ADD_CONSIGNEE]?.view}
                  className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded-none text-left w-full cursor-pointer ${
                    activeTab === ActiveTab.ADD_CONSIGNEE
                      ? 'bg-[#000080] text-white border border-dotted border-white font-semibold'
                      : 'hover:bg-gray-200 text-black'
                  } ${!permissions[ActiveTab.ADD_CONSIGNEE]?.view ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  <span className="text-[12px]">📄</span>
                  <span>Add Consignee</span>
                </button>
              </div>
            </div>
          </div>

          {/* Root node 3: Access Level Matrix */}
          <div className="relative py-1">
            <div className="flex items-center gap-1">
              {/* No collapse box, just connector spacing */}
              <span className="w-3.5 h-3.5 mr-1" />
              {/* Key Icon */}
              <span className="w-4 h-4 flex items-center justify-center text-amber-600 font-bold text-[13px]">
                🔑
              </span>
              <button
                onClick={() => handleSelect(ActiveTab.ACCESS_MATRIX)}
                disabled={!permissions[ActiveTab.ACCESS_MATRIX]?.view}
                className={`flex-1 text-left px-1.5 py-0.5 font-bold cursor-pointer ${
                  activeTab === ActiveTab.ACCESS_MATRIX
                    ? 'bg-[#000080] text-white border border-dotted border-white'
                    : 'hover:bg-gray-200 text-black'
                } ${!permissions[ActiveTab.ACCESS_MATRIX]?.view ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                Access Level Matrix
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* SCCT Brand Logo Section exactly matching the bottom-left of the image */}
      <div className="p-3 border-t border-gray-200 bg-white flex flex-col items-center">
        <div className="relative w-28 h-12 flex items-center justify-center">
          {/* Logo outline: blue oval */}
          <div className="absolute inset-0 border-2 border-[#113a7a] rounded-full flex items-center justify-center bg-white shadow-sm overflow-hidden">
            {/* Red crescent line cutting through */}
            <div className="absolute w-[120%] h-1 bg-red-600 rotate-[12deg] translate-y-1" />
            
            {/* SCCT brand text */}
            <div className="z-10 font-sans font-extrabold text-[#113a7a] text-lg tracking-wider flex flex-col items-center justify-center leading-none">
              <span>SCCT</span>
              <span className="text-[7px] font-medium tracking-widest text-[#113a7a]">
                Suez Canal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
