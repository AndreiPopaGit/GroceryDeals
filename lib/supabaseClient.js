// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*');
  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }
  return data;
}

export async function fetchCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*');
  if (error) {
    console.error('Error fetching categories:', error.message || error);
  }
  return data;
}

export async function fetchShops() {
  const { data, error } = await supabase
    .from('shops')
    .select('*')
  if (error) {
    console.error('Error fetching shops:', error.message || error);
  }
  return data;
}