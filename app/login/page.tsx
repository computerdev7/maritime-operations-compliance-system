"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

type usertype = "admin" | "worker"| ""

export default function Login(){

    const router = useRouter();
    const [user, setUser] = useState<{type : usertype , name : string }>({
        type : "",
        name : ""
    })

    return (<>
    <div className="flex justify-center items-center min-h-screen">
        <div className="h-40 w-50 bg-amber-400 flex justify-center flex-col gap-3">
            <input className="bg-amber-50 border p-1" type="text" value={user.type} onChange={(e)=> {
                setUser((prev)=> {
                    return {...prev,type : e.target.value as usertype}
                })
            }}></input>
            <input className="bg-amber-50 border p-1" type="text" value={user.name} onChange={(e)=> {
                setUser((prev)=> {
                    return {...prev,name : e.target.value}
                })
            }}></input>
            <button className="border " 
            onClick={()=> {
                sessionStorage.setItem('userType',user.type)
                sessionStorage.setItem('userName',user.name)
                if(user.type.length > 3 && user.name.length > 3){
                    router.push('/');
                }
            }}> SUBMIT </button>
        </div>
    </div>
    </>)
}