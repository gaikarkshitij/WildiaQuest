import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vzeyrkgmasdoqtowpjcu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6ZXlya2dtYXNkbyF0b3dwamN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MzA0NzIsImV4cCI6MjA2NTUwNjQ3Mn0.p7tbzCqz6XRMJ2PPcy8FNwrifELZfy8D67QaoFM7J6c';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

