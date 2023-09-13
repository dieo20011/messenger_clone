'use client';

import { FullMessageType } from "@/app/types";
import { useSession } from "next-auth/react";

interface MessageProps {
    data: FullMessageType;
    isLast?: boolean;
}

const MessageBox: React.FC<MessageProps> = ({data, isLast}) => {
    const session = useSession();
    const isOwn = session?.data?.user?.email === data?.sender?.email;
  return (
    <div>MessageBox</div>
  )
}

export default MessageBox