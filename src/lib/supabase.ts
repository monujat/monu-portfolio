import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  console.error('NEXT_PUBLIC_SUPABASE_URL is not defined in the environment variables.')
  throw new Error('Supabase URL is missing. Please check your environment variables.')
}

if (!supabaseKey) {
  console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined in the environment variables.')
  throw new Error('Supabase Anon Key is missing. Please check your environment variables.')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

