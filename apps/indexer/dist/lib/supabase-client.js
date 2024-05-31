"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsertOrder = exports.upsertAuctionDetail = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const config_1 = require("~/config");
// Initialize Supabase client
const supabase = (0, supabase_js_1.createClient)(config_1.appenv.supabase.url, config_1.appenv.supabase.anonKey);
async function upsertAuctionDetail(data) {
    const { data: result, error } = await supabase.from('auction_details').upsert([
        {
            ...data,
        },
    ], {
        onConflict: 'exact_order_id, chain_id',
    });
    if (error)
        console.error('Error:', error);
    console.log('Result:', result);
    return data;
}
exports.upsertAuctionDetail = upsertAuctionDetail;
async function upsertOrder(data) {
    const { data: result, error } = await supabase.from('orders').upsert([
        {
            ...data,
        },
    ], {
        onConflict: 'transactionHash',
    });
    if (error)
        console.error('Error:', error);
    console.log('Result:', result);
    return data;
}
exports.upsertOrder = upsertOrder;
//# sourceMappingURL=supabase-client.js.map