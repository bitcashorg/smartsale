import type { SupabaseClient } from '@supabase/supabase-js'

/**
 * Fetches presale data for a specific project from Supabase
 * @param {ProjectDataParams} params - Object containing projectId and supabase client
 * @returns {Promise<any>} Presale data for the specified project
 * @throws {Error} If there's an error fetching the data
 */
export async function getPresaleData({
  projectId,
  supabase,
}: ProjectDataParams) {
  const { data, error } = await supabase
    .from('presale')
    .select('*')
    .eq('id', projectId)
    .single()

  if (error) {
    console.error('Error fetching presale data:', error)
    throw error
  }

  return data
}

/**
 * Fetches project data for a specific project from Supabase
 * @param {ProjectDataParams} params - Object containing projectId and supabase client
 * @returns {Promise<any>} Project data for the specified project
 * @throws {Error} If there's an error fetching the data
 */
export async function getProjectData({
  projectId,
  supabase,
}: ProjectDataParams) {
  const { data, error } = await supabase
    .from('project')
    .select('*')
    .eq('id', projectId)
    .single()

  if (error) {
    console.error('Error fetching project data:', error)
    throw error
  }

  return data
}

// Interface for function parameters
interface ProjectDataParams {
  projectId: number
  supabase: SupabaseClient
}
