import type { Language } from '../types'

export interface AdminDictionary {
  brand: string
  loginTitle: string
  loginSubtitle: string
  email: string
  password: string
  signIn: string
  signingIn: string
  logout: string
  viewLive: string
  dashboard: string
  tabs: {
    site: string
    services: string
    gallery: string
    contact: string
  }
  save: string
  saving: string
  saved: string
  error: string
  loading: string
  upload: string
  uploading: string
  remove: string
  add: string
  edit: string
  delete: string
  cancel: string
  confirmDelete: string
  reorderUp: string
  reorderDown: string
  markRead: string
  markUnread: string
  noMessages: string
  noGallery: string
  heroPreview: string
  heroImage: string
  bilingualHint: string
}

const ar: AdminDictionary = {
  brand: 'Garden City L.L.C',
  loginTitle: 'دخول لوحة التحكم',
  loginSubtitle: 'إدارة محتوى الموقع والوسائط',
  email: 'البريد الإلكتروني',
  password: 'كلمة المرور',
  signIn: 'تسجيل الدخول',
  signingIn: 'جارٍ الدخول...',
  logout: 'تسجيل الخروج',
  viewLive: 'عرض الموقع',
  dashboard: 'لوحة التحكم',
  tabs: {
    site: 'تعريف الموقع والخلفيات',
    services: 'المرافق والخدمات',
    gallery: 'معرض الصور',
    contact: 'وسائل التواصل والرسائل',
  },
  save: 'حفظ التغييرات',
  saving: 'جارٍ الحفظ...',
  saved: 'تم الحفظ بنجاح',
  error: 'حدث خطأ، حاول مرة أخرى',
  loading: 'جارٍ التحميل...',
  upload: 'رفع صورة',
  uploading: 'جارٍ الرفع...',
  remove: 'إزالة',
  add: 'إضافة',
  edit: 'تعديل',
  delete: 'حذف',
  cancel: 'إلغاء',
  confirmDelete: 'هل أنت متأكد من الحذف؟',
  reorderUp: 'أعلى',
  reorderDown: 'أسفل',
  markRead: 'تعيين كمقروء',
  markUnread: 'تعيين كغير مقروء',
  noMessages: 'لا توجد رسائل حالياً',
  noGallery: 'لا توجد صور في المعرض',
  heroPreview: 'معاينة خلفية الهيرو',
  heroImage: 'صورة خلفية الهيرو',
  bilingualHint: 'عربي / English',
}

const en: AdminDictionary = {
  brand: 'Garden City L.L.C',
  loginTitle: 'Admin Sign In',
  loginSubtitle: 'Manage website content and media',
  email: 'Email',
  password: 'Password',
  signIn: 'Sign In',
  signingIn: 'Signing in...',
  logout: 'Logout',
  viewLive: 'View Live Website',
  dashboard: 'Admin Dashboard',
  tabs: {
    site: 'Site Settings & Hero',
    services: 'Facilities & Services',
    gallery: 'Image Gallery',
    contact: 'Contact & Messages',
  },
  save: 'Save Changes',
  saving: 'Saving...',
  saved: 'Saved successfully',
  error: 'Something went wrong. Try again.',
  loading: 'Loading...',
  upload: 'Upload Image',
  uploading: 'Uploading...',
  remove: 'Remove',
  add: 'Add',
  edit: 'Edit',
  delete: 'Delete',
  cancel: 'Cancel',
  confirmDelete: 'Are you sure you want to delete this?',
  reorderUp: 'Up',
  reorderDown: 'Down',
  markRead: 'Mark as read',
  markUnread: 'Mark as unread',
  noMessages: 'No messages yet',
  noGallery: 'No gallery photos yet',
  heroPreview: 'Hero background preview',
  heroImage: 'Hero Background Image',
  bilingualHint: 'Arabic / English',
}

export function getAdminDict(language: Language): AdminDictionary {
  return language === 'ar' ? ar : en
}
