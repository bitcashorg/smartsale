import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://dvpusrbojetnuwbkyhzj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2cHVzcmJvamV0bnV3Ymt5aHpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczNDE2NjcsImV4cCI6MjAyMjkxNzY2N30.bW2V9YKuBkEQzzQh0wDh1LYW2JP3mO4UaxnVoShCW3k'
)
