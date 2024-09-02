"use client"
import BlueBackground from "@/components/pages/deposit/BlueBackground";
import MainSection from "@/components/pages/deposit/main-section";
import React, { useEffect, useState } from "react";
import axios from "axios";

const DepositPage = () => {

  const fetchBalance = async ()=>{
    const data = await axios.get("/api/wallet");
    console.log(data);
  }

  useEffect(()=>{
    fetchBalance()
  });

  return (
    <>
      <BlueBackground />
      <MainSection />
    </>
  );
};

export default DepositPage;
