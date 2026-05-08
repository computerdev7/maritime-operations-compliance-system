'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  let router = useRouter();
  
  useEffect(()=> {
    let usertype = sessionStorage.getItem('userType')
    if(!usertype) {
      router.push('/login');
    }
  },[])

  return (
    <div>
      hello world
    </div>
  );
}
