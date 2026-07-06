/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const translations = {
  ar: {
    // Menu
    file: 'ملف',
    setting: 'إعدادات',
    windows: 'نوافذ',
    about: 'حول',
    
    // Sidebar
    title: 'نظام البوابة - SCCT',
    generalInquiry: 'تقرير استعلام عام',
    cntrInq: 'استعلام الحاوية والختم',
    loadList: 'قائمة الشحن',
    exportStatementGroup: 'بيان الصادر',
    exportStatement: 'بيان الصادر (الشهادات الجمركية)',
    editEcn: 'تعديل الـ ECN / وقف الإفراج',
    addConsignee: 'إضافة عميل / مستلم',
    accessMatrix: 'مصفوفة الصلاحيات',
    developmentTeam: 'فريق التطوير',
    
    // Common buttons
    save: 'حفظ',
    approve: 'إعتماد',
    cancel: 'إلغاء',
    delete: 'حذف',
    refresh: 'تحديث',
    retrieve: 'إسترجاع',
    newFile: 'ملف جديد',
    clearWeight: 'مسح الوزن',
    add: 'إضافة',
    printReport: 'طباعة المحضر',
    addContainer: 'إضافة الحاوية >',
    
    // Export Statement View
    viewTitle: 'إنشاء و إعتماد شهادات الصادر الجمركية',
    subSectionTitle: 'محضر إثبات حالة',
    date: 'التاريخ',
    temporaryCert: 'شهادة مؤقتة',
    
    // Certificate Section
    certInfo: 'بيانات الشهادة:',
    circular26: 'منشور 26',
    releasePermitNo: 'إذن إفراج رقم:',
    year: 'سنة:',
    type: 'نوعها:',
    sendingCustoms: 'جمرك الإرسال:',
    
    // Vessel Section
    vesselInfo: 'بيانات الباخرة:',
    onVessel: 'على الباخرة:',
    shippingAgency: 'التابعة لتوكيل:',
    finalDestination: 'الوجهة النهائية:',
    
    // Included items section
    includedInfo: 'مشمول:',
    cargoType: 'نوع المشمول:',
    clientName: 'اسم العميل:',
    
    // Quantities & remarks
    remarks: 'ملاحظات:',
    weightCheckbox: 'وزن',
    xrayCheckbox: 'X-RAY',
    caliberBtn: 'العيار',
    totalQuantity: 'الكمية الإجمالية:',
    grossWeight: 'الوزن القائم:',
    
    // Container selection panel
    containersWithCert: 'حاويات لها شهاده جمركية',
    containerNo: 'الحاوية',
    line: 'الخط',
    action: 'إضافة',
    
    // Table columns
    colContainerNo: 'رقم الحاوية',
    colStop: 'وقف',
    colApprove: 'اعتماد',
    colSave: 'حفظ',
    colCaliber: 'العيار',
    colSize: 'مقاس',
    colPath: 'السبيل',
    colCustomsPath: 'السبيل الجمركي',
    colWeight: 'الوزن',
    
    // Footer actions
    approveContainers: 'إعتماد الحاويات',
    readyForShipment: 'جاهزة للشحن',
    holdForDocs: 'وقف لإستكمال المستندات',
    holdForInspect: 'وقف للكشف',
    
    // Container Inquiry View
    inqTitle: 'شاشة الاستعلام التفصيلي عن الحاوية والأختام الجمركية',
    searchPlaceholder: 'ادخل رقم الحاوية (مثال: MSKU8472910)',
    generalInfo: 'بيانات الحاوية العامة',
    gateIn: 'تاريخ الدخول',
    yardPos: 'موقع الساحة',
    vessel: 'اسم الباخرة',
    voyage: 'رقم الرحلة',
    sealNo: 'رقم الختم الجمركي',
    isoSize: 'المقاس / النوع',
    weightKg: 'الوزن (كجم)',
    consignee: 'صاحب الشأن / العميل',
    customsStatus: 'الموقف الجمركي الحالي',
    searchBtn: 'بحث',
    notFound: 'الحاوية غير موجودة في قاعدة البيانات حالياً.',
    
    // Load List View
    loadListTitle: 'متابعة خطة شحن الحاويات على السفن',
    filterVessel: 'تصفية حسب السفينة:',
    allVessels: 'كل السفن',
    stowagePlan: 'مخطط التستيف والتحميل الكلي',
    loaded: 'تم الشحن',
    pendingLoad: 'قيد الانتظار',
    totalContainers: 'إجمالي الحاويات',
    
    // Stop Release View
    stopReleaseTitle: 'نظام التحكم والتحفظ على الحاويات (ECN / Release Control)',
    stopReason: 'سبب التحفظ / الوقف:',
    stopSuccess: 'تم تطبيق التحفظ على الحاوية بنجاح.',
    releaseSuccess: 'تم فك التحفظ جمركياً ومرفأً عن الحاوية.',
    holdType: 'نوع التحفظ المطبق',
    
    // Add Consignee View
    consigneeTitle: 'إدارة وتوثيق بيانات الشركات المستوردة والمصدرة للساحة',
    taxId: 'الرقم الضريبي',
    address: 'العنوان بالتفصيل',
    phone: 'رقم الهاتف المعمد',
    email: 'البريد الإلكتروني',
    addSuccess: 'تم تسجيل العميل الجديد بنجاح في قاعدة بيانات جمارك البوابة.',
    
    // Access Level Matrix View
    matrixTitle: 'مصفوفة التحكم في الصلاحيات والأدوار جمركياً ومرفئياً',
    roleAr: 'الدور الوظيفي',
    viewPerm: 'استعراض',
    editPerm: 'تعديل وإدخال',
    approvePerm: 'اعتماد نهائي',
    switchRole: 'تغيير دور المستخدم الحالي لتجربة الصلاحيات:',
  },
  en: {
    // Menu
    file: 'File',
    setting: 'Settings',
    windows: 'Windows',
    about: 'About',
    
    // Sidebar
    title: 'Gate System - SCCT',
    generalInquiry: 'General Inquiry Report',
    cntrInq: 'Cntr. Inq & Seal',
    loadList: 'Load List',
    exportStatementGroup: 'Export Statement',
    exportStatement: 'Export Statement',
    editEcn: 'Edit ECN / Stop Release',
    addConsignee: 'Add Consignee',
    accessMatrix: 'Access Level Matrix',
    developmentTeam: 'Development Team',
    
    // Common buttons
    save: 'Save',
    approve: 'Approve',
    cancel: 'Cancel',
    delete: 'Delete',
    refresh: 'Refresh',
    retrieve: 'Retrieve',
    newFile: 'New File',
    clearWeight: 'Clear Weight',
    add: 'Add',
    printReport: 'Print Report',
    addContainer: 'Add Container >',
    
    // Export Statement View
    viewTitle: 'Create and Approve Export Customs Certificates',
    subSectionTitle: 'Case Proof Report',
    date: 'Date',
    temporaryCert: 'Temporary Certificate',
    
    // Certificate Section
    certInfo: 'Certificate Data:',
    circular26: 'Circular 26',
    releasePermitNo: 'Release Permit No:',
    year: 'Year:',
    type: 'Type:',
    sendingCustoms: 'Sending Customs:',
    
    // Vessel Section
    vesselInfo: 'Vessel Data:',
    onVessel: 'On Vessel:',
    shippingAgency: 'Agency:',
    finalDestination: 'Final Destination:',
    
    // Included items section
    includedInfo: 'Included Cargo:',
    cargoType: 'Cargo Type:',
    clientName: 'Client Name:',
    
    // Quantities & remarks
    remarks: 'Remarks:',
    weightCheckbox: 'Weight',
    xrayCheckbox: 'X-RAY',
    caliberBtn: 'Caliber',
    totalQuantity: 'Total Qty:',
    grossWeight: 'Gross Weight:',
    
    // Container selection panel
    containersWithCert: 'Containers with Customs Cert',
    containerNo: 'Container',
    line: 'Line',
    action: 'Add',
    
    // Table columns
    colContainerNo: 'Container No.',
    colStop: 'Stop',
    colApprove: 'Approve',
    colSave: 'Save',
    colCaliber: 'Caliber',
    colSize: 'Size',
    colPath: 'Path',
    colCustomsPath: 'Customs Path',
    colWeight: 'Weight',
    
    // Footer actions
    approveContainers: 'Approve Containers',
    readyForShipment: 'Ready for Shipment',
    holdForDocs: 'Hold for Docs',
    holdForInspect: 'Hold for Inspection',
    
    // Container Inquiry View
    inqTitle: 'Detailed Container & Customs Seals Inquiry Screen',
    searchPlaceholder: 'Enter container number (e.g., MSKU8472910)',
    generalInfo: 'General Container Info',
    gateIn: 'Gate-in Time',
    yardPos: 'Yard Position',
    vessel: 'Vessel Name',
    voyage: 'Voyage No.',
    sealNo: 'Customs Seal No.',
    isoSize: 'Size / Type',
    weightKg: 'Weight (kg)',
    consignee: 'Consignee / Client',
    customsStatus: 'Customs Hold Status',
    searchBtn: 'Search',
    notFound: 'Container not found in the terminal database.',
    
    // Load List View
    loadListTitle: 'Monitor Vessel Vessel Container Loading Plans',
    filterVessel: 'Filter by Vessel:',
    allVessels: 'All Vessels',
    stowagePlan: 'Total Stowage & Loading Chart',
    loaded: 'Loaded',
    pendingLoad: 'Pending Load',
    totalContainers: 'Total Containers',
    
    // Stop Release View
    stopReleaseTitle: 'Container Stop Release & ECN Control Desk',
    stopReason: 'Stop/Hold Reason:',
    stopSuccess: 'Container hold successfully applied.',
    releaseSuccess: 'Container customs hold successfully removed.',
    holdType: 'Active Hold Type',
    
    // Add Consignee View
    consigneeTitle: 'Register & Document Yard Shipping Clients / Consignees',
    taxId: 'Tax ID',
    address: 'Detailed Address',
    phone: 'Authorized Phone',
    email: 'Email Address',
    addSuccess: 'New client successfully registered in terminal database.',
    
    // Access Level Matrix View
    matrixTitle: 'Port & Customs Access Permissions Matrix',
    roleAr: 'Job Role',
    viewPerm: 'View Screen',
    editPerm: 'Edit / Entry',
    approvePerm: 'Final Approval',
    switchRole: 'Switch User Role to test permissions:',
  }
};
