// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// ⚠️ Reemplazá estos valores con los de tu proyecto
const supabaseUrl = 'https://edlnhwgwldvorwupynbe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkbG5od2d3bGR2b3J3dXB5bmJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzMTc0MTQsImV4cCI6MjA2MTg5MzQxNH0.7BGPQM2ZS0qeUFFeg8Z5WO8ik7WQ0uClKQSQ10vKL9U';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
