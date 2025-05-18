"use client";

type Props = {
  auctionId: string;
  highBid: number;
};

import { placeBidForAuction } from "@/app/actions/auctionActions";
import { useBidStore } from "@/hooks/useBidStore";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";

export default function BidForm({ auctionId, highBid }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const addBid = useBidStore((state) => state.addBid);

  function onSubmit(data: FieldValues) {
    placeBidForAuction(auctionId, +data.amount).then((bid) => {
      addBid(bid);
      reset();
    });
  }

  return (
    <form></form>
  )
}
