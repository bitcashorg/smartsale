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
      auction: {
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
      esr: {
        Row: {
          account: string | null
          code: string | null
          created_at: string
          id: string
          trx_id: string | null
        }
        Insert: {
          account?: string | null
          code?: string | null
          created_at?: string
          id?: string
          trx_id?: string | null
        }
        Update: {
          account?: string | null
          code?: string | null
          created_at?: string
          id?: string
          trx_id?: string | null
        }
        Relationships: []
      }
      indexer: {
        Row: {
          id: number
          last_indexed_block: string
        }
        Insert: {
          id?: number
          last_indexed_block: string
        }
        Update: {
          id?: number
          last_indexed_block?: string
        }
        Relationships: []
      }
      order: {
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
      presale: {
        Row: {
          account: string | null
          address: string | null
          created_at: string
          id: number
          project_id: number | null
          signature: string | null
        }
        Insert: {
          account?: string | null
          address?: string | null
          created_at?: string
          id?: number
          project_id?: number | null
          signature?: string | null
        }
        Update: {
          account?: string | null
          address?: string | null
          created_at?: string
          id?: number
          project_id?: number | null
          signature?: string | null
        }
        Relationships: []
      }
      project: {
        Row: {
          created_at: string
          id: number
          name: string | null
          pitch: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          pitch?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          pitch?: string | null
        }
        Relationships: []
      }
      session: {
        Row: {
          account: string
          created_at: string
          esr_code: string | null
          id: string
          tx: string
        }
        Insert: {
          account: string
          created_at?: string
          esr_code?: string | null
          id?: string
          tx: string
        }
        Update: {
          account?: string
          created_at?: string
          esr_code?: string | null
          id?: string
          tx?: string
        }
        Relationships: []
      }
      transfer: {
        Row: {
          amount: number | null
          bl_presale_trx: string | null
          chain_id: number | null
          created_at: string
          from: string | null
          to: string | null
          token: string | null
          trx_hash: string
          type: string | null
          usdcred_trx: string | null
        }
        Insert: {
          amount?: number | null
          bl_presale_trx?: string | null
          chain_id?: number | null
          created_at?: string
          from?: string | null
          to?: string | null
          token?: string | null
          trx_hash: string
          type?: string | null
          usdcred_trx?: string | null
        }
        Update: {
          amount?: number | null
          bl_presale_trx?: string | null
          chain_id?: number | null
          created_at?: string
          from?: string | null
          to?: string | null
          token?: string | null
          trx_hash?: string
          type?: string | null
          usdcred_trx?: string | null
        }
        Relationships: []
      }
      user: {
        Row: {
          account: string
          address: string[]
          created_at: string
          id: number
          short_link: string | null
        }
        Insert: {
          account: string
          address: string[]
          created_at?: string
          id?: number
          short_link?: string | null
        }
        Update: {
          account?: string
          address?: string[]
          created_at?: string
          id?: number
          short_link?: string | null
        }
        Relationships: []
      }
      whitelist: {
        Row: {
          account: string
          address: string
          created_at: string
          project_id: number
        }
        Insert: {
          account: string
          address: string
          created_at?: string
          project_id: number
        }
        Update: {
          account?: string
          address?: string
          created_at?: string
          project_id?: number
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
