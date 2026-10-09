import { supabase } from './supabase.js';

export const signUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    return { data, error };
};

export const signIn = (email, password) =>
    supabase.auth.signInWithPassword({ email, password });

export const signOut = () =>
    supabase.auth.signOut();

export async function getCurrentUser() {
    const { data, error } = await supabase.auth.getUser();
    return { user: data?.user ?? null, error };
}