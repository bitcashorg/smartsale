import type { Tables } from '@repo/supabase'
import type { SupabaseClient } from '@supabase/supabase-js'

// NOTE: This functions can be used on both server and client

/**
 * Fetches presale data for a specific project from Supabase
 * @param {ProjectDataParams} params - Object containing projectId and supabase client
 * @returns {Promise<any>} Presale data for the specified project
 * @throws {Error} If there's an error fetching the data
 */
export async function getPresaleData({ projectId, supabase }: ProjectDataParams) {
  const { data, error } = await supabase
    .from('presale')
    .select('*')
    .eq('project_id', projectId)
    .single()

  if (error) {
    console.error('Error fetching presale data:', error)
    throw error
  }

  return data as Tables<'presale'>
}

/**
 * Fetches project data for a specific project from Supabase
 * @param {ProjectDataParams} params - Object containing projectId and supabase client
 * @returns {Promise<any>} Project data for the specified project
 * @throws {Error} If there's an error fetching the data
 */
export async function getProjectData({ projectId, supabase }: ProjectDataParams) {
  const { data, error } = await supabase
    .from('project')
    .select('*')
    .eq('id', projectId)
    .single()

  if (error) {
    console.error('Error fetching project data:', error)
    throw error
  }

  return data as Tables<'project'>
}

// Interface for function parameters
interface ProjectDataParams {
  projectId: number
  supabase: SupabaseClient
}

/**
 * Retrieves contributions for a specific presale from Supabase
 * @param {number} presaleId - The ID of the presale to retrieve contributions for
 * @param {SupabaseClient} supabase - The Supabase client instance
 * @returns {Promise<PresaleContributionsResult>} An object containing contributions and the count of unique contributors
 * @throws {Error} If an error occurs while fetching the contributions
 */
export async function getPresaleContributions({
  presaleId,
  supabase,
}: PresaleContributionsParams): Promise<PresaleContributionsResult> {
  const { data, error } = await supabase
    .from('presale_deposit')
    .select('*, transaction!presale_deposit_deposit_hash_fkey(*)')
    .eq('presale_id', presaleId)
    .order('created_at', { ascending: false })
    .returns<PresaleContribution[]>()

  if (error) throw error

  // set of unique contributors
  const uniqueContributors = new Set(
    data?.map((deposit) => deposit.address).filter(Boolean),
  )

  return {
    contributions: data,
    contributors: uniqueContributors.size,
  }
}

interface PresaleContributionsParams {
  presaleId: number
  supabase: SupabaseClient
}

export type PresaleContribution = Tables<'presale_deposit'> & {
  transaction: Tables<'transaction'>
}

interface PresaleContributionsResult {
  contributions: PresaleContribution[]
  contributors: number
}
