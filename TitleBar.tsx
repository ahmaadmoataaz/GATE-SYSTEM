/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum ActiveTab {
  CNTR_INQ = 'cntr_inq',
  LOAD_LIST = 'load_list',
  EXPORT_STATEMENT = 'export_statement',
  NEW_EXPORT_STATEMENT = 'new_export_statement',
  EDIT_ECN = 'edit_ecn',
  ADD_CONSIGNEE = 'add_consignee',
  ACCESS_MATRIX = 'access_matrix',
}

export interface Container {
  id: string; // Container Number (e.g., MSKU1234567)
  line: string; // Shipping Line (e.g., MSK, CMA, COSCO)
  size: '20' | '40' | '45';
  type: string; // GP, RF, OT, etc.
  sealNumber: string;
  weight: number; // in kg
  status: 'Ready' | 'HoldDocs' | 'HoldInspect' | 'Pending';
  gateInTime: string;
  yardPosition: string; // e.g., A-12-03-2
  vesselName: string;
  voyage: string;
  consignee: string;
  customsRoute?: string;
  customsRouteDesc?: string;
  caliber?: string;
}

export interface Certificate {
  localId?: string; // stable in-memory unique ID
  id: string; // Release permit number / إذن إفراج رقم
  year: string; // سنة
  type: string; // نوعها (e.g., تصدير, إعادة تصدير)
  customsOffice: string; // جمرك الإرسال
  isCircular26: boolean; // منشور 26
  isTemporary: boolean; // شهادة مؤقتة
  date: string; // التاريخ (e.g., 06-07-2026)
  
  // Vessel Info (بيانات الباخرة)
  vesselName: string; // على الباخرة
  shippingAgency: string; // التابعة لتوكيل
  finalDestination: string; // الوجهة النهائية
  
  // Scope (مشمول)
  cargoType: string; // نوع المشمول
  clientName: string; // اسم العميل
  cargoSubtype?: string; // النوع الآخر / الفرعي
  maeCode?: string; // MAE code input manually
  agencyText?: string; // التابعه لتوكيل input manually
  
  // Remarks & Weight
  remarks: string; // ملاحظات
  hasWeightCheck: boolean; // وزن
  hasXRayCheck: boolean; // X-RAY
  caliberStandard: string; // العيار
  
  totalQuantity: number; // الكمية الإجمالية
  grossWeight: number; // الوزن القائم
  
  // Linked containers
  containers: CertificateContainer[];
}

export interface CertificateContainer {
  containerId: string;
  isStopped: boolean; // وقف
  isApproved: boolean; // اعتماد
  isSaved: boolean; // حفظ
  caliber: string; // العيار
  size: string; // مقاس
  releaseRoute: string; // السبيل
  customsRoute: string; // السبيل الجمركي
  weight: number; // الوزن
}

export interface Consignee {
  id: string;
  nameAr: string;
  nameEn: string;
  taxId: string;
  address: string;
  contactNumber: string;
  email: string;
  status: 'Active' | 'Suspended';
}

export interface AccessRole {
  role: string;
  roleAr: string;
  screens: {
    [key in ActiveTab]: {
      view: boolean;
      edit: boolean;
      approve: boolean;
    }
  };
}
