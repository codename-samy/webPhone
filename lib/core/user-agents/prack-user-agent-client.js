import { C } from "../messages/methods/constants.js";
import { NonInviteClientTransaction } from "../transactions/non-invite-client-transaction.js";
import { UserAgentClient } from "./user-agent-client.js";
/**
 * PRACK UAC.
 * @public
 */
export class PrackUserAgentClient extends UserAgentClient {
    constructor(dialog, delegate, options) {
        const message = dialog.createOutgoingRequestMessage(C.PRACK, options);
        super(NonInviteClientTransaction, dialog.userAgentCore, message, delegate);
        dialog.signalingStateTransition(message);
    }
}
