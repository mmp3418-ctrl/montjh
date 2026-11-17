-- Garden City L.L.C — Supabase schema
-- Run this in the Supabase SQL Editor to create tables for the public site + admin dashboard.

-- ---------------------------------------------------------------------------
-- 1) Site settings (single-row style content for hero, about, contact, map)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hero_title_ar text,
  hero_title_en text,
  hero_subtitle_ar text,
  hero_subtitle_en text,
  about_ar text,
  about_en text,
  vision_ar text,
  vision_en text,
  mission_ar text,
  mission_en text,
  phone text,
  email text,
  address_ar text,
  address_en text,
  map_url text,
  hero_image_url text,
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- ---------------------------------------------------------------------------
-- 2) Services / sectors
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_ar text NOT NULL,
  title_en text NOT NULL,
  description_ar text,
  description_en text,
  icon_name text,
  image_url text,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS services_sort_order_idx
  ON public.services (sort_order ASC);

-- ---------------------------------------------------------------------------
-- 3) Gallery items
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.gallery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_ar text,
  title_en text,
  category_ar text,
  category_en text,
  image_url text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS gallery_items_created_at_idx
  ON public.gallery_items (created_at DESC);

-- ---------------------------------------------------------------------------
-- 4) Management contacts
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.management_contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_ar text NOT NULL,
  name_en text NOT NULL,
  role_ar text,
  role_en text,
  phone text,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS management_contacts_sort_order_idx
  ON public.management_contacts (sort_order ASC);

-- ---------------------------------------------------------------------------
-- 5) Contact form messages (public inserts)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx
  ON public.contact_messages (created_at DESC);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- Public site: read content tables; insert contact messages only.
-- Admin dashboard (authenticated) will manage writes later.
-- ---------------------------------------------------------------------------
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.management_contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read site_settings" ON public.site_settings;
CREATE POLICY "Public read site_settings"
  ON public.site_settings
  FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "Public read services" ON public.services;
CREATE POLICY "Public read services"
  ON public.services
  FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "Public read gallery_items" ON public.gallery_items;
CREATE POLICY "Public read gallery_items"
  ON public.gallery_items
  FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "Public read management_contacts" ON public.management_contacts;
CREATE POLICY "Public read management_contacts"
  ON public.management_contacts
  FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "Public insert contact_messages" ON public.contact_messages;
CREATE POLICY "Public insert contact_messages"
  ON public.contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Optional starter row for site_settings (empty content — fill via dashboard)
INSERT INTO public.site_settings (id)
SELECT gen_random_uuid()
WHERE NOT EXISTS (SELECT 1 FROM public.site_settings LIMIT 1);
