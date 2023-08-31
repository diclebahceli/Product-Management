import { createClient } from '@supabase/supabase-js'

const supabaseUrl ='https://viaqduchhsvbthxxtufj.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpYXFkdWNoaHN2YnRoeHh0dWZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzOTY1NTQsImV4cCI6MjAwODk3MjU1NH0.Hez7l5ynLi6_CKtWz6HjMXU97kkbnP5GY9GRLZiK3zE'
export const supabase = createClient(supabaseUrl, supabaseKey)
console.log(supabase)
