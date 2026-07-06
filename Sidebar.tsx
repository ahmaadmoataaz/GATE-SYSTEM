/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container, Certificate, Consignee, AccessRole, ActiveTab } from './types';

export const INITIAL_CONTAINERS: Container[] = [
  {
    id: 'MSKU8472910',
    line: 'MSK',
    size: '40',
    type: 'GP',
    sealNumber: 'MSK778392',
    weight: 24500,
    status: 'Pending',
    gateInTime: '2026-07-05 14:32',
    yardPosition: 'B-14-04-3',
    vesselName: 'MAERSK MC-KINNEY MOLLER',
    voyage: '2607E',
    consignee: 'El Sewedy Electric',
    customsRoute: 'Green Channel',
    caliber: 'Standard',
  },
  {
    id: 'MSKU4102948',
    line: 'MSK',
    size: '20',
    type: 'GP',
    sealNumber: 'MSK711822',
    weight: 18200,
    status: 'Ready',
    gateInTime: '2026-07-05 16:15',
    yardPosition: 'B-02-12-1',
    vesselName: 'MAERSK MC-KINNEY MOLLER',
    voyage: '2607E',
    consignee: 'El Sewedy Electric',
    customsRoute: 'Green Channel',
    caliber: 'Standard',
  },
  {
    id: 'CMAU9920184',
    line: 'CMA',
    size: '40',
    type: 'RF',
    sealNumber: 'CMA551920',
    weight: 28400,
    status: 'HoldDocs',
    gateInTime: '2026-07-04 09:12',
    yardPosition: 'R-05-02-4',
    vesselName: 'CMA CGM BENJAMIN FRANKLIN',
    voyage: 'CF302',
    consignee: 'Juhayna Food Industries',
    customsRoute: 'Yellow Channel',
    caliber: 'High',
  },
  {
    id: 'MEDU7382910',
    line: 'MSC',
    size: '45',
    type: 'HC',
    sealNumber: 'MSC839211',
    weight: 31200,
    status: 'Pending',
    gateInTime: '2026-07-05 20:45',
    yardPosition: 'C-08-01-2',
    vesselName: 'MSC OSCAR',
    voyage: 'OS612W',
    consignee: 'Ceramica Cleopatra',
    customsRoute: 'Red Channel',
    caliber: 'Special',
  },
  {
    id: 'COSV4820194',
    line: 'COS',
    size: '40',
    type: 'GP',
    sealNumber: 'COS992811',
    weight: 22100,
    status: 'Ready',
    gateInTime: '2026-07-06 01:20',
    yardPosition: 'A-12-03-2',
    vesselName: 'COSCO SHIPPING SCORPIO',
    voyage: 'CS004',
    consignee: 'Kandil Steel',
    customsRoute: 'Green Channel',
    caliber: 'Standard',
  },
  {
    id: 'HLCU9283104',
    line: 'HL',
    size: '20',
    type: 'OT',
    sealNumber: 'HLG339102',
    weight: 15400,
    status: 'HoldInspect',
    gateInTime: '2026-07-04 11:30',
    yardPosition: 'A-01-04-1',
    vesselName: 'AL DAHNA',
    voyage: 'AD992',
    consignee: 'Ezz Steel',
    customsRoute: 'Red Channel',
    caliber: 'Standard',
  },
  {
    id: 'ONEU3921840',
    line: 'ONE',
    size: '40',
    type: 'GP',
    sealNumber: 'ONE482911',
    weight: 23900,
    status: 'Pending',
    gateInTime: '2026-07-05 18:22',
    yardPosition: 'D-03-05-2',
    vesselName: 'ONE APUS',
    voyage: 'OA108',
    consignee: 'Oriental Weavers',
    customsRoute: 'Green Channel',
    caliber: 'Standard',
  },
  {
    id: 'NYKU1948204',
    line: 'NYK',
    size: '40',
    type: 'HC',
    sealNumber: 'NYK849201',
    weight: 25100,
    status: 'Ready',
    gateInTime: '2026-07-05 23:05',
    yardPosition: 'D-03-05-4',
    vesselName: 'ONE APUS',
    voyage: 'OA108',
    consignee: 'Oriental Weavers',
    customsRoute: 'Green Channel',
    caliber: 'Standard',
  }
];

export const INITIAL_CERTIFICATES: Certificate[] = [
  {
    id: 'CERT-2026-1048',
    year: '2026',
    type: 'صادر نهائي (Final Export)',
    customsOffice: 'بورسعيد الصادر (Port Said Export)',
    isCircular26: true,
    isTemporary: false,
    date: '2026-07-06',
    vesselName: 'COSCO SHIPPING SCORPIO',
    shippingAgency: 'Kadmar Shipping',
    finalDestination: 'Rotterdam, Netherlands',
    cargoType: 'حديد تسليح ولفائف صلب (Steel bars and wire rods)',
    clientName: 'Kandil Steel',
    remarks: 'محضر إثبات حالة معتمد من مصلحة الجمارك - شحنة مستعجلة',
    hasWeightCheck: true,
    hasXRayCheck: true,
    caliberStandard: 'مستوفي العيار',
    totalQuantity: 2,
    grossWeight: 45200,
    containers: [
      {
        containerId: 'COSV4820194',
        isStopped: false,
        isApproved: true,
        isSaved: true,
        caliber: 'Standard',
        size: '40',
        releaseRoute: 'مفرج',
        customsRoute: 'المسار الأخضر',
        weight: 22100,
      }
    ]
  },
  {
    id: 'CERT-2026-0982',
    year: '2026',
    type: 'إعادة تصدير (Re-export)',
    customsOffice: 'شرق بورسعيد (East Port Said)',
    isCircular26: false,
    isTemporary: true,
    date: '2026-07-05',
    vesselName: 'MAERSK MC-KINNEY MOLLER',
    shippingAgency: 'Maersk Egypt',
    finalDestination: 'Genoa, Italy',
    cargoType: 'منتجات كابلات كهربائية (Electric cable products)',
    clientName: 'El Sewedy Electric',
    remarks: 'شهادة مؤقتة لحين مراجعة الفواتير الخارجية ومطابقة الأختام',
    hasWeightCheck: true,
    hasXRayCheck: false,
    caliberStandard: 'تحت الفحص',
    totalQuantity: 2,
    grossWeight: 42700,
    containers: [
      {
        containerId: 'MSKU4102948',
        isStopped: false,
        isApproved: false,
        isSaved: true,
        caliber: 'Standard',
        size: '20',
        releaseRoute: 'مؤقت',
        customsRoute: 'المسار الأصفر',
        weight: 18200,
      }
    ]
  }
];

export const INITIAL_CONSIGNEES: Consignee[] = [
  {
    id: 'CONS-001',
    nameAr: 'السويدي للكابلات',
    nameEn: 'El Sewedy Electric',
    taxId: '100-248-912',
    address: 'المنطقة الصناعية الثالثة، العاشر من رمضان، مصر',
    contactNumber: '+20 15 369 448',
    email: 'customs@elsewedy.com',
    status: 'Active',
  },
  {
    id: 'CONS-002',
    nameAr: 'جهينة للصناعات الغذائية',
    nameEn: 'Juhayna Food Industries',
    taxId: '200-115-384',
    address: 'مدينة السادس من أكتوبر، المنطقة الصناعية، مصر',
    contactNumber: '+20 2 3827 1000',
    email: 'export@juhayna.com',
    status: 'Active',
  },
  {
    id: 'CONS-003',
    nameAr: 'حديد عز',
    nameEn: 'Ezz Steel',
    taxId: '102-480-112',
    address: 'برج النيل، الجيزة، مصر',
    contactNumber: '+20 2 3336 2000',
    email: 'ezz-export@ezzsteel.com',
    status: 'Active',
  },
  {
    id: 'CONS-004',
    nameAr: 'النساجون الشرقيون',
    nameEn: 'Oriental Weavers',
    taxId: '110-394-118',
    address: 'مصر الجديدة، القاهرة، مصر',
    contactNumber: '+20 2 2268 5000',
    email: 'customs-clearance@orientalweavers.com',
    status: 'Active',
  }
];

export const INITIAL_ROLES: AccessRole[] = [
  {
    role: 'Terminal Administrator',
    roleAr: 'مدير المحطة',
    screens: {
      [ActiveTab.CNTR_INQ]: { view: true, edit: true, approve: true },
      [ActiveTab.LOAD_LIST]: { view: true, edit: true, approve: true },
      [ActiveTab.EXPORT_STATEMENT]: { view: true, edit: true, approve: true },
      [ActiveTab.NEW_EXPORT_STATEMENT]: { view: true, edit: true, approve: true },
      [ActiveTab.EDIT_ECN]: { view: true, edit: true, approve: true },
      [ActiveTab.ADD_CONSIGNEE]: { view: true, edit: true, approve: true },
      [ActiveTab.ACCESS_MATRIX]: { view: true, edit: true, approve: true },
    }
  },
  {
    role: 'Customs Officer',
    roleAr: 'مأمور الجمرك',
    screens: {
      [ActiveTab.CNTR_INQ]: { view: true, edit: false, approve: true },
      [ActiveTab.LOAD_LIST]: { view: true, edit: false, approve: false },
      [ActiveTab.EXPORT_STATEMENT]: { view: true, edit: true, approve: true },
      [ActiveTab.NEW_EXPORT_STATEMENT]: { view: true, edit: true, approve: true },
      [ActiveTab.EDIT_ECN]: { view: true, edit: true, approve: false },
      [ActiveTab.ADD_CONSIGNEE]: { view: true, edit: false, approve: false },
      [ActiveTab.ACCESS_MATRIX]: { view: true, edit: false, approve: false },
    }
  },
  {
    role: 'Gate Operator',
    roleAr: 'مشغل البوابة',
    screens: {
      [ActiveTab.CNTR_INQ]: { view: true, edit: true, approve: false },
      [ActiveTab.LOAD_LIST]: { view: true, edit: false, approve: false },
      [ActiveTab.EXPORT_STATEMENT]: { view: true, edit: true, approve: false },
      [ActiveTab.NEW_EXPORT_STATEMENT]: { view: true, edit: true, approve: false },
      [ActiveTab.EDIT_ECN]: { view: false, edit: false, approve: false },
      [ActiveTab.ADD_CONSIGNEE]: { view: true, edit: true, approve: false },
      [ActiveTab.ACCESS_MATRIX]: { view: false, edit: false, approve: false },
    }
  }
];

export const SHIPPING_AGENCIES = [
  'Maersk Egypt',
  'Kadmar Shipping',
  'CMA CGM Egypt',
  'MSC Mediterranean Shipping',
  'Hapag-Lloyd Egypt',
  'Suez Canal Shipping Agency'
];

export const VESSELS = [
  'MAERSK MC-KINNEY MOLLER',
  'CMA CGM BENJAMIN FRANKLIN',
  'MSC OSCAR',
  'COSCO SHIPPING SCORPIO',
  'AL DAHNA',
  'ONE APUS',
  'EVER GIVEN',
  'MSC GULSUN'
];

export const DESTINATIONS = [
  'Rotterdam, Netherlands',
  'Genoa, Italy',
  'Hamburg, Germany',
  'Valencia, Spain',
  'Jeddah, Saudi Arabia',
  'Singapore, Singapore',
  'Shanghai, China',
  'New York, USA'
];

export const CUSTOMS_OFFICES = [
  'بورسعيد الصادر (Port Said Export)',
  'شرق بورسعيد (East Port Said)',
  'الإسكندرية الصادر (Alexandria Export)',
  'دمياط الصادر (Damietta Export)',
  'السويس الصادر (Suez Export)',
  'الدخيلة الصادر (Dekheila Export)'
];

export const CARGO_TYPES = [
  'حديد تسليح ولفائف صلب (Steel bars and wire rods)',
  'منتجات كابلات كهربائية (Electric cable products)',
  'سيراميك وبورسلين (Ceramics and Porcelain)',
  'مواد غذائية معبأة (Packaged foodstuffs)',
  'سجاد وموكيت منسوج (Carpets and woven rugs)',
  'ورق مقوى وكرتون (Cardboard and paper rolls)',
  'بتروكيماويات وبلاستيك (Petrochemicals and plastics)'
];
