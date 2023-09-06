"use client";

import { CreateServerModal } from "@/components/modals/create-server-modal";
import { CreateChannelModal } from "@/components/modals/create-channel-modal";
import { useEffect, useState } from "react";
import { InviteModal } from "@/components/modals/invite-modal";
import { EditServerModal } from "@/components/modals/edit-server-modal";
import { MembersModal } from "@/components/modals/members-modal";
import { LeaveServerModal } from "@/components/modals/leave-server-modal";
import { DeleteServerModal } from "@/components/modals/delete-server-modal";
import { DeleteChannelrModal } from "@/components/modals/delete-channel-modal copy";
import { EditChannelModal } from "@/components/modals/edit-channel-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
      <DeleteChannelrModal />
      <EditChannelModal />
    </>
  );
};
