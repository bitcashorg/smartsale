export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      auction_details: {
        Row: {
          address_auctioning_token: string | null
          address_bidding_token: string | null
          allow_list_manager: string | null
          allow_list_signer: string | null
          chain_id: number
          created_at: string
          current_bidding_amount: number | null
          current_clearing_order_buy_amount: number | null
          current_clearing_order_sell_amount: number | null
          current_clearing_price: number | null
          current_volume: number | null
          decimals_auctioning_token: number | null
          decimals_bidding_token: number | null
          end_time_timestamp: string | null
          exact_order_id: number
          interest_score: number | null
          is_atomic_closure_allowed: boolean | null
          is_private_auction: boolean | null
          min_funding_threshold: number | null
          minimum_bidding_amount_per_order: number | null
          order_cancellation_end_date: string | null
          starting_time_stamp: string | null
          symbol_auctioning_token: string | null
          symbol_bidding_token: string | null
          usd_amount_traded: number | null
        }
        Insert: {
          address_auctioning_token?: string | null
          address_bidding_token?: string | null
          allow_list_manager?: string | null
          allow_list_signer?: string | null
          chain_id: number
          created_at?: string
          current_bidding_amount?: number | null
          current_clearing_order_buy_amount?: number | null
          current_clearing_order_sell_amount?: number | null
          current_clearing_price?: number | null
          current_volume?: number | null
          decimals_auctioning_token?: number | null
          decimals_bidding_token?: number | null
          end_time_timestamp?: string | null
          exact_order_id: number
          interest_score?: number | null
          is_atomic_closure_allowed?: boolean | null
          is_private_auction?: boolean | null
          min_funding_threshold?: number | null
          minimum_bidding_amount_per_order?: number | null
          order_cancellation_end_date?: string | null
          starting_time_stamp?: string | null
          symbol_auctioning_token?: string | null
          symbol_bidding_token?: string | null
          usd_amount_traded?: number | null
        }
        Update: {
          address_auctioning_token?: string | null
          address_bidding_token?: string | null
          allow_list_manager?: string | null
          allow_list_signer?: string | null
          chain_id?: number
          created_at?: string
          current_bidding_amount?: number | null
          current_clearing_order_buy_amount?: number | null
          current_clearing_order_sell_amount?: number | null
          current_clearing_price?: number | null
          current_volume?: number | null
          decimals_auctioning_token?: number | null
          decimals_bidding_token?: number | null
          end_time_timestamp?: string | null
          exact_order_id?: number
          interest_score?: number | null
          is_atomic_closure_allowed?: boolean | null
          is_private_auction?: boolean | null
          min_funding_threshold?: number | null
          minimum_bidding_amount_per_order?: number | null
          order_cancellation_end_date?: string | null
          starting_time_stamp?: string | null
          symbol_auctioning_token?: string | null
          symbol_bidding_token?: string | null
          usd_amount_traded?: number | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          auction_id: number
          buy_amount: number
          created_at: string
          price: number | null
          sell_amount: number
          timestamp: string | null
          transactionHash: string
          user_id: number
          volume: number | null
        }
        Insert: {
          auction_id: number
          buy_amount: number
          created_at?: string
          price?: number | null
          sell_amount: number
          timestamp?: string | null
          transactionHash: string
          user_id: number
          volume?: number | null
        }
        Update: {
          auction_id?: number
          buy_amount?: number
          created_at?: string
          price?: number | null
          sell_amount?: number
          timestamp?: string | null
          transactionHash?: string
          user_id?: number
          volume?: number | null
        }
        Relationships: []
      }
      users: {
        Row: {
          address: string
          created_at: string
          id: number
        }
        Insert: {
          address: string
          created_at?: string
          id: number
        }
        Update: {
          address?: string
          created_at?: string
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
