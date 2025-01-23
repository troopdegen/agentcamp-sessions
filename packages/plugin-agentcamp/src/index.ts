import { Plugin } from "@elizaos/core";
import { testAction } from "./actions/index.ts";
export * as actions from "./actions/index.ts";
export * as evaluators from "./evaluators/index.ts";
export * as providers from "./providers/index.ts";

import { walletProvider } from "./providers/wallet";
import { addressAction } from "./actions/addressAction.ts";

export const agentcampPlugin: Plugin = {
    name: "agentcamp",
    description: "Agentcamp plugin",
    actions: [addressAction, testAction],
    evaluators: [],
    providers: [walletProvider],
};

export default agentcampPlugin;
