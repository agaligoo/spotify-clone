"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";

const ModalProvider= ()=>{
    const [isMouted,setIsMounted] = useState(false);
    
    useEffect(()=>{
        setIsMounted(true);
    },[])

    if (!isMouted){
        return null;
    }

    return (
        <>
         <AuthModal/>
         <UploadModal/>
        </>
    )
}

export default ModalProvider;