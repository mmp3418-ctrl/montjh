export interface SiteSettings {
  id: string
  hero_title_ar: string | null
  hero_title_en: string | null
  hero_subtitle_ar: string | null
  hero_subtitle_en: string | null
  about_ar: string | null
  about_en: string | null
  vision_ar: string | null
  vision_en: string | null
  mission_ar: string | null
  mission_en: string | null
  phone: string | null
  email: string | null
  address_ar: string | null
  address_en: string | null
  map_url: string | null
  hero_image_url: string | null
  updated_at: string
}

export interface ServiceRow {
  id: string
  title_ar: string
  title_en: string
  description_ar: string | null
  description_en: string | null
  icon_name: string | null
  image_url: string | null
  sort_order: number
  created_at: string
}

export interface GalleryItem {
  id: string
  title_ar: string | null
  title_en: string | null
  category_ar: string | null
  category_en: string | null
  image_url: string | null
  created_at: string
}

export interface ManagementContact {
  id: string
  name_ar: string
  name_en: string
  role_ar: string | null
  role_en: string | null
  phone: string | null
  sort_order: number
  created_at: string
}

export interface ContactMessage {
  id: string
  full_name: string
  email: string
  phone: string | null
  message: string
  created_at: string
}

export type ContactMessageInsert = {
  full_name: string
  email: string
  phone?: string | null
  message: string
}

type PublicTable<Row, Insert = Partial<Row>, Update = Partial<Row>> = {
  Row: Row
  Insert: Insert
  Update: Update
  Relationships: []
}

export interface Database {
  public: {
    Tables: {
      site_settings: PublicTable<
        SiteSettings,
        Partial<Omit<SiteSettings, 'id' | 'updated_at'>> & { id?: string }
      >
      services: PublicTable<
        ServiceRow,
        Omit<ServiceRow, 'id' | 'created_at'> & { id?: string; created_at?: string }
      >
      gallery_items: PublicTable<
        GalleryItem,
        Partial<Omit<GalleryItem, 'id' | 'created_at'>> & { id?: string; created_at?: string }
      >
      management_contacts: PublicTable<
        ManagementContact,
        Omit<ManagementContact, 'id' | 'created_at'> & { id?: string; created_at?: string }
      >
      contact_messages: PublicTable<ContactMessage, ContactMessageInsert>
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}
