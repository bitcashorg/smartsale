import { logger, task, wait } from "@trigger.dev/sdk/v3";

export const tokenTransfersTask = task({
  id: "token-transfers",
  run: async (payload: any, { ctx }) => {
    try {
      logger.log("Token transfers", { payload, ctx });

 
    } catch (error) {
      logger.error("Error issuing presale tokens", { error: (error as Error).message });
      throw error;
    }
  },
});