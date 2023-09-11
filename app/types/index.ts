import { Conversation, Message, User } from "@prisma/client";

export type FullMessageType = Message & {
    sender: User,
    seen: User[]
};

export type FullConversations = Conversation &{
    users: User[],
    messages: FullMessageType[],
};