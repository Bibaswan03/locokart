import React from "react";
import logo from "../Images/LOCOCART.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const Register = () => {
  const router = useRouter()
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [phone, setphone] = useState();


  const handelsubmit= async(e)=>{
    e.preventDefault();
    const data ={name,email,phone,password}
 
    let res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL||'http://localhost:3000'}/api/signup`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data),
    })
    let response  = await res.json()

    toast.success('Yay! User Registration Success', {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    setname('');
    setemail('');
    setphone('');
    setpassword('');
    setTimeout(() => {
      router.push(`${process.env.NEXT_PUBLIC_VERCEL_URL||'http://localhost:3000'}/Login`)
    }, 1000);
    


  }
  const handelchange =(e) => {
    if (e.target.name === "name") {
      setname(e.target.value);
    }
    if (e.target.name === "email") {
      setemail(e.target.value);
    }
    if (e.target.name === "phone") {
      setphone(e.target.value);
    }
    if (e.target.name === "password") {
      setpassword(e.target.value);
    }
    
   
   
  };
  return (
    <div>
      <Head>
        <title>LOCOCART - Sign Up</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type='png' href="/logo.png" />
      </Head>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex flex-col items-center p-10 md:p-10 bg-gray-100">
        <Link href={"/"}>
          <Image src={logo} height={80} width={140} className="p-1"></Image>
        </Link>
        <div className="w-full bg-pink-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Create an account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              method="POST"

            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Name
                </label>
                <input
                  onChange={handelchange}
                  value={name}
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  onChange={handelchange}
                  value={email}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="Phone"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Phone
                </label>
                <input
                  onChange={handelchange}
                  value={phone}
                  type="number"
                  name="phone"
                  id="Phone"
                  className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="10-Digit phone number"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  onChange={handelchange}
                  value={password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="enter password"
                  className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required={true}
                />
              </div>
              {/* <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Confirm Password
                </label>
                <input
                  onChange={handelchange}
                  value={cp}
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  placeholder="Reenter your password"
                  className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required={true}
                />
              </div> */}

              <button
              type="button"
              onClick={handelsubmit}
                
                className="w-full bg-pink-600 p-2.5 rounded-md text-white font-semibold hover:bg-pink-400 hover:text-black"
              >
                Sign Up
              </button>
              <p className="text-sm text-pink-800">
                Already have an account ?
                <span className="text-black font-bold">
                  <Link href={"/Login"}> Sign in</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
