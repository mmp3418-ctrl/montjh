-- Garden City L.L.C — Supabase schema (public site + admin dashboard)
-- Run in the Supabase SQL Editor.

-- ---------------------------------------------------------------------------
-- 1) Site settings (single row — prefer id = 1)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.site_settings (
  id integer PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  hero_title_ar text,
  hero_title_en text,
  hero_subtitle_ar text,
  hero_subtitle_en text,
  main_heading_ar text,
  main_heading_en text,
  complex_overview_ar text,
  complex_overview_en text,
  facilities_heading_ar text,
  facilities_heading_en text,
  facilities_intro_ar text,
  facilities_intro_en text,
  about_ar text,
  about_en text,
  vision_ar text,
  vision_en text,
  mission_ar text,
  mission_en text,
  phone text,
  whatsapp text,
  email text,
  address_ar text,
  address_en text,
  map_url text,
  hero_image_url text,
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Safe additive migrations for existing projects
ALTER TABLE public.site_settings ADD COLUMN IF NOT EXISTS main_heading_ar text;
ALTER TABLE public.site_settings ADD COLUMN IF NOT EXISTS main_heading_en text;
ALTER TABLE public.site_settings ADD COLUMN IF NOT EXISTS complex_overview_ar text;
ALTER TABLE public.site_settings ADD COLUMN IF NOT EXISTS complex_overview_en text;
ALTER TABLE public.site_settings ADD COLUMN IF NOT EXISTS facilities_heading_ar text;
ALTER TABLE public.site_settings ADD COLUMN IF NOT EXISTS facilities_heading_en text;
ALTER TABLE public.site_settings ADD COLUMN IF NOT EXISTS facilities_intro_ar text;
ALTER TABLE public.site_settings ADD COLUMN IF NOT EXISTS facilities_intro_en text;
ALTER TABLE public.site_settings ADD COLUMN IF NOT EXISTS whatsapp text;

-- ---------------------------------------------------------------------------
-- 2) Services / facilities
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
-- 3) Gallery items (image-only cards on the public site)
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
-- 4) Contact messages inbox
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ADD COLUMN IF NOT EXISTS is_read boolean NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx
  ON public.contact_messages (created_at DESC);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Public read
DROP POLICY IF EXISTS "Public read site_settings" ON public.site_settings;
CREATE POLICY "Public read site_settings"
  ON public.site_settings FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "Public read services" ON public.services;
CREATE POLICY "Public read services"
  ON public.services FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "Public read gallery_items" ON public.gallery_items;
CREATE POLICY "Public read gallery_items"
  ON public.gallery_items FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "Public insert contact_messages" ON public.contact_messages;
CREATE POLICY "Public insert contact_messages"
  ON public.contact_messages FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Authenticated admin writes
DROP POLICY IF EXISTS "Admin write site_settings" ON public.site_settings;
CREATE POLICY "Admin write site_settings"
  ON public.site_settings FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Admin write services" ON public.services;
CREATE POLICY "Admin write services"
  ON public.services FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Admin write gallery_items" ON public.gallery_items;
CREATE POLICY "Admin write gallery_items"
  ON public.gallery_items FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Admin manage contact_messages" ON public.contact_messages;
CREATE POLICY "Admin manage contact_messages"
  ON public.contact_messages FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

-- Starter settings row (id = 1) with exact bilingual facilities content
INSERT INTO public.site_settings (
  id,
  main_heading_ar, main_heading_en,
  complex_overview_ar, complex_overview_en,
  facilities_heading_ar, facilities_heading_en,
  facilities_intro_ar, facilities_intro_en,
  hero_title_ar, hero_title_en,
  hero_subtitle_ar, hero_subtitle_en,
  about_ar, about_en,
  vision_ar, vision_en,
  mission_ar, mission_en,
  phone, email, address_ar, address_en, map_url
) VALUES (
  1,
  'وصف المرافق الترفيهية والخدمات المتوفرة بالمجمع السكني',
  'Description of Recreational Facilities and Available Services in the Residential Complex',
  'يستفيد المجمع من وجود حوالي أربعة مداخل، وطرق داخلية مرصوفة، وإنارة للشوارع في جميع أنحاء العقار. كما تتوفر مواقف للسيارات تستوعب حوالي 16 سيارة.',
  'The complex benefits from approximately four entrances, paved internal roads, and street lighting throughout the property. Parking spaces accommodating around 16 cars are also available.',
  '4. المرافق الترفيهية والرياضية',
  '4. Recreational and Sports Facilities',
  'يوفر المجمع مجموعة واسعة من المرافق الترفيهية والخدمات المخصصة للراحة والاستجمام، وتشمل:',
  'The complex offers a wide range of recreational facilities and services dedicated to relaxation and leisure, including:',
  'وصف المرافق الترفيهية والخدمات المتوفرة بالمجمع السكني',
  'Description of Recreational Facilities and Available Services in the Residential Complex',
  'يستفيد المجمع من وجود حوالي أربعة مداخل، وطرق داخلية مرصوفة، وإنارة للشوارع في جميع أنحاء العقار. كما تتوفر مواقف للسيارات تستوعب حوالي 16 سيارة.',
  'The complex benefits from approximately four entrances, paved internal roads, and street lighting throughout the property. Parking spaces accommodating around 16 cars are also available.',
  'يستفيد المجمع من وجود حوالي أربعة مداخل، وطرق داخلية مرصوفة، وإنارة للشوارع في جميع أنحاء العقار. كما تتوفر مواقف للسيارات تستوعب حوالي 16 سيارة.',
  'The complex benefits from approximately four entrances, paved internal roads, and street lighting throughout the property. Parking spaces accommodating around 16 cars are also available.',
  '4. المرافق الترفيهية والرياضية',
  '4. Recreational and Sports Facilities',
  'يوفر المجمع مجموعة واسعة من المرافق الترفيهية والخدمات المخصصة للراحة والاستجمام، وتشمل:',
  'The complex offers a wide range of recreational facilities and services dedicated to relaxation and leisure, including:',
  '+218 21 480 2432',
  'info@garden-city.com.ly',
  'طريق المطار، سيدي صليم، طرابلس - ليبيا',
  'Airport St., Sedy Slem, Tripoli - Libya',
  'https://maps.google.com/?q=32.794930,13.134346'
)
ON CONFLICT (id) DO UPDATE SET
  main_heading_ar = EXCLUDED.main_heading_ar,
  main_heading_en = EXCLUDED.main_heading_en,
  complex_overview_ar = EXCLUDED.complex_overview_ar,
  complex_overview_en = EXCLUDED.complex_overview_en,
  facilities_heading_ar = EXCLUDED.facilities_heading_ar,
  facilities_heading_en = EXCLUDED.facilities_heading_en,
  facilities_intro_ar = EXCLUDED.facilities_intro_ar,
  facilities_intro_en = EXCLUDED.facilities_intro_en,
  email = EXCLUDED.email,
  map_url = EXCLUDED.map_url,
  updated_at = now();

-- Default facilities (only if services table is empty)
INSERT INTO public.services (title_ar, title_en, description_ar, description_en, icon_name, sort_order)
SELECT * FROM (VALUES
  (
    'حوضا سباحة',
    'Two Swimming Pools',
    'حوض سباحة صغير مناسب للأطفال، وحوض سباحة آخر بحجم يقارب الحجم الأولمبي.',
    'A small swimming pool suitable for children, and another swimming pool close to Olympic size.',
    'Waves',
    1
  ),
  (
    'جلسات بجانب المسبح ومنطقة للشواء (BBQ)',
    'Poolside Seating and BBQ Area',
    'تحيط بمنطقة أحواض السباحة شرفة واسعة للجلسات، مع منطقة شواء مظللة محاطة بأشجار النخيل.',
    'Surrounding the swimming pool area is a spacious seating terrace, along with a shaded barbecue area surrounded by palm trees.',
    'Flame',
    2
  ),
  (
    'كافتيريا',
    'Cafeteria',
    'تقع على ارتفاع أربع درجات فوق مستوى منطقة المسبح، وتتميز بوجود شرفة واسعة.',
    'Located four steps above the pool area level, featuring a spacious terrace.',
    'Coffee',
    3
  ),
  (
    'مرافق تغيير الملابس والحمامات',
    'Changing Rooms and Restrooms',
    'يوجد حمامان لخدمة المنطقة الترفيهية.',
    'Two restrooms are available to serve the recreational area.',
    'Bath',
    4
  )
) AS v(title_ar, title_en, description_ar, description_en, icon_name, sort_order)
WHERE NOT EXISTS (SELECT 1 FROM public.services LIMIT 1);

-- Enable Realtime for public live sync (safe to re-run)
DO $$
BEGIN
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.site_settings;
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.services;
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.gallery_items;
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;
END $$;

-- ---------------------------------------------------------------------------
-- Storage bucket: media (create in Dashboard if missing, then run policies)
-- ---------------------------------------------------------------------------
-- insert into storage.buckets (id, name, public) values ('media', 'media', true)
-- on conflict (id) do update set public = true;
--
-- DROP POLICY IF EXISTS "Public read media" ON storage.objects;
-- CREATE POLICY "Public read media" ON storage.objects
--   FOR SELECT TO anon, authenticated USING (bucket_id = 'media');
--
-- DROP POLICY IF EXISTS "Admin upload media" ON storage.objects;
-- CREATE POLICY "Admin upload media" ON storage.objects
--   FOR INSERT TO authenticated WITH CHECK (bucket_id = 'media');
--
-- DROP POLICY IF EXISTS "Admin update media" ON storage.objects;
-- CREATE POLICY "Admin update media" ON storage.objects
--   FOR UPDATE TO authenticated USING (bucket_id = 'media') WITH CHECK (bucket_id = 'media');
--
-- DROP POLICY IF EXISTS "Admin delete media" ON storage.objects;
-- CREATE POLICY "Admin delete media" ON storage.objects
--   FOR DELETE TO authenticated USING (bucket_id = 'media');
