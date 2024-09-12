import type { Database, Tables } from '@repo/supabase'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { Address } from 'viem'

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
    .select('*, presale_address(*)')
    .eq('project_id', projectId)
    .single()

  if (error) {
    console.error('Error fetching presale data:', error)
    throw error
  }

  return data as Tables<'presale'> & { presale_address: Tables<'presale_address'>[] }
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

export async function isAddressRegisteredForPresale(
  address: string,
  projectId: number,
  supabase: SupabaseClient,
): Promise<boolean> {
  console.log('address', address)
  const { data, error } = await supabase
    .from('whitelist')
    .select('*')
    .eq('address', address)
    .eq('project_id', projectId)
    .single()

  console.log('data', data)

  if (error) {
    if (error.code === 'PGRST116') {
      // No matching row found, address is not registered
      return false
    }
    console.error('Error checking presale whitelist:', error)
    throw error
  }

  return Boolean(data && !error)
}

export async function getPresaleDeposits({
  address,
  projectId,
  supabase,
}: { address: Address; projectId: number; supabase: SupabaseClient }) {
  const { data, error } = await supabase
    .from('presale_deposit')
    .select('*')
    .eq('project_id', projectId)
    .eq('address', address)

  if (error) {
    console.error('Error getting presale deposits data:', error)
    throw error
  }

  return data
}

export async function getPresaleByAddress(address: Address, supabase: SupabaseClient) {
  const { data: presaleAddress, error: presaleAddressError } = await supabase
    .from('presale_address')
    .select('*')
    .ilike('deposit_address', address)

  console.log('🚀 getPresaleByAddress', address)
  const { data, error } = await supabase
    .from('presale')
    .select('*, project(*)') // Fetch associated project through presale.project_id
    .eq('id', presaleAddress?.[0]?.presale_id) // Use optional chaining to avoid TypeError
    .single()

  if (presaleAddressError || error) {
    console.error('Error fetching presale by address:', presaleAddressError || error)
    return null
  }

  return data
}

export async function getProcessedPresaleDeposits({
  address,
  projectId,
  supabase,
}: { address: Address; projectId: number; supabase: SupabaseClient }) {
  const { data, error } = await supabase
    .from('presale_deposit')
    .select('*')
    .eq('project_id', projectId)
    .eq('address', address)
    .eq('state', 'processed')

  if (error) {
    console.error('Error getting presale deposits data:', error)
    throw error
  }

  return data
}

export async function setPresaleDepositStatus({
  depositHash,
  supabase,
  state,
}: {
  depositHash: string
  supabase: SupabaseClient
  state: Database['public']['Enums']['state']
}) {
  const { data, error } = await supabase
    .from('presale_deposit')
    .update({ state })
    .eq('deposit_hash', depositHash)
    .select()
    .single()

  if (error) {
    console.error('Error updating presale deposit status:', error)
    return null
  }

  return data
}

export async function isDepositProcessing({
  depositHash,
  supabase,
}: {
  depositHash: string
  supabase: SupabaseClient
}): Promise<boolean> {
  const { data, error } = await supabase
    .from('presale_deposit')
    .select('deposit_hash')
    .eq('deposit_hash', depositHash)
    .in('state', ['processing', 'processed'])

  if (error) {
    console.error('Error checking deposit processed status:', error)
    return false
  }

  return data?.length > 0
}
