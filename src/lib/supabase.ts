import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://tmwyfskcznbwxdfsnvat.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_0xhNbRPzH1NbQfTSA89-uA_MrYnOHfq'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
  realtime: {
    params: {
      eventsPerSecond: 8,
    },
  },
})

export const MEDIA_BUCKET = 'media'
