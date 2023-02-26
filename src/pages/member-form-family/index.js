import { addDoc, collection } from "firebase/firestore"
import { graphql } from "gatsby"
import React from "react"
import { useState } from "react"
import StripeCheckout from "react-stripe-checkout"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { uid } from "uid"
import Layout from "../../components/layout"
import Loading from "../../components/Loading/Loading"
import Seo from "../../components/seo"
import db from "../../firebase-config"

const Index = data => {
  const familyData =
    data?.data.allContentfulMemberPage.edges[0].node.pricingCards[1]
  const [agreed1, setAgreed1] = useState(false)
  const [agreed2, setAgreed2] = useState(false)
  const [agreed3, setAgreed3] = useState(false)
  const _id = uid()

  const [isProcessing, setIsProcessing] = useState(false)
  const [checkoutError, setCheckoutError] = useState(null)

  const [name, setName] = useState("")
  const [profession, setProfession] = useState("")
  const [blood, setBlood] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phoneHome, setPhoneHome] = useState("")
  const [phoneMobile, setPhoneMobile] = useState("")
  const [status, setStatus] = useState("")
  const [age, setAge] = useState("")
  const [childrenName, setChildrenName] = useState("")
  const [hobbies, setHobbies] = useState("")
  const [gender, setGender] = useState("")
  const [childrenName2, setChildrenName2] = useState("")
  const [hobbies2, setHobbies2] = useState("")
  const [gender2, setGender2] = useState("")
  const [childrenName3, setChildrenName3] = useState("")
  const [hobbies3, setHobbies3] = useState("")
  const [gender3, setGender3] = useState("")

  const [spouseName, setSpouseName] = useState("")
  const [spouseAddress, setSpouseAddress] = useState("")
  const [spouseProfession, setSpouseProfession] = useState("")
  const [spouseBlood, setSpouseBlood] = useState("")
  const [spouseEmail, setSpouseEmail] = useState("")
  const [spousePhoneHome, setSpousePhoneHome] = useState("")
  const [spousePhoneMobile, setSpousePhoneMobile] = useState("")
  const [numberIndia, setNumberIndia] = useState("")
  const amount = familyData.price?.slice(1, 3) * 100

  const handleToken = async token => {
    setIsProcessing(true)
    try {
      const response = await fetch(
        "https://map-backend-mauve.vercel.app/charge",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token,
            amount,
            // the amount in cents
          }),
        }
      )
      const data = await response.json()
      console.log(data)
      setIsProcessing(false)
      try {
        const docRef = addDoc(collection(db, "from-data"), {
          id: _id,
          name: name,
          profession: profession,
          blood: blood,
          email: email,
          address: address,
          phoneHome: phoneHome,
          phoneMobile: phoneMobile,
          status: status,
          age: age,
          childrenName: childrenName,
          hobbies: hobbies,
          gender: gender,
          childrenName2,
          hobbies2,
          gender2,
          childrenName3,
          hobbies3,
          gender3,
          time: new Date(),
          package: familyData.title,
          spouseName,
          spouseAddress,
          spouseProfession,
          spouseBlood,
          spouseEmail,
          spousePhoneHome,
          spousePhoneMobile,
          numberIndia,
        })
        //   setId(docRef.id)
        setName("")
        setProfession("")
        setBlood("")
        setEmail("")
        setAddress("")
        setPhoneHome("")
        setPhoneMobile("")
        setStatus("")
        setAge("")
        setChildrenName("")
        setHobbies("")
        setGender("")
        setChildrenName2("")
        setHobbies2("")
        setGender2("")
        setChildrenName3("")
        setHobbies3("")
        setGender3("")
        setSpouseName("")
        setSpouseAddress("")
        setSpouseProfession("")
        setSpouseBlood("")
        setSpouseEmail("")
        setSpousePhoneHome("")
        setSpousePhoneMobile("")
        setNumberIndia("")
        setAgreed1(false)
        setAgreed2(false)
        setAgreed3(false)
        toast.success("Successfully paid and added information")
      } catch (e) {
        toast.error("Error for adding document")
      }
    } catch (error) {
      console.error(error)
      toast.error(
        "An error occurred while processing your payment. Please try again."
      )
      setCheckoutError(
        "An error occurred while processing your payment. Please try again."
      )
      setIsProcessing(false)
    }
  }

  const submit = async e => {
    e.preventDefault()
  }

  if (!familyData) {
    return <Loading />
  }
  return (
    <Layout>
      <h1 className="text-center text-[18.3px] uppercase font-bold lg:text-5xl text-white py-10 bg-[#ed8f1d] mt-20 lg:font-bold">
        {familyData.title} MEMBERSHIP APPLICATION FORM
      </h1>
      <div className="m-10">
        <div className="overflow-hidden bg-white py-16 px-6 lg:px-8 lg:py-24">
          <div className="relative mx-auto max-w-xl">
            <svg
              className="absolute left-full translate-x-1/2 transform"
              width={404}
              height={404}
              fill="none"
              viewBox="0 0 404 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="85737c0e-0916-41d7-917f-596dc7edfa27"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={404}
                fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
              />
            </svg>
            <svg
              className="absolute right-full bottom-0 -translate-x-1/2 transform"
              width={404}
              height={404}
              fill="none"
              viewBox="0 0 404 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="85737c0e-0916-41d7-917f-596dc7edfa27"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={404}
                fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
              />
            </svg>
            <div className="text-center">
              <h2 className="text-center text-xl lg:text-2xl font-bold justify-self-center ">
                Main Applicant Details
              </h2>
            </div>
            <div className="mt-12">
              <form onSubmit={submit} method="POST" className="lg:grid gap-5">
                <div className="mt-5">
                  <label
                    htmlFor="name"
                    className="block text-md font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <div className="mt-3">
                    <input
                      required
                      onChange={e => {
                        const name = e.target.value
                        setName(name)
                      }}
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      autoComplete="family-name"
                      placeholder="Enter your name"
                      className="block input input-bordered input-warning w-full  rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="profession"
                    className="block text-md font-medium text-gray-700"
                  >
                    Your Profession
                  </label>
                  <div className="mt-3">
                    <input
                      required
                      onChange={e => {
                        const profession = e.target.value
                        setProfession(profession)
                      }}
                      value={profession}
                      type="text"
                      name="profession"
                      id="profession"
                      placeholder="Enter your Profession"
                      className="block input input-bordered input-warning w-full  rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="email"
                    className="block text-md font-medium text-gray-700"
                  >
                    Your Email
                  </label>
                  <div className="mt-3">
                    <input
                      required
                      onChange={e => {
                        const email = e.target.value
                        setEmail(email)
                      }}
                      value={email}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your Email"
                      className="block input input-bordered input-warning w-full rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="blood-group"
                    className="block text-md font-medium text-gray-700"
                  >
                    Your Blood Group
                  </label>
                  <div className="mt-3">
                    <input
                      required
                      onChange={e => {
                        const blood = e.target.value
                        setBlood(blood)
                      }}
                      value={blood}
                      type="text"
                      name="bloodGroup"
                      id="blood-group"
                      placeholder="Enter your Blood Group"
                      className="block input input-bordered input-warning w-full  rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 mt-5">
                  <label
                    htmlFor="address"
                    className="block text-md font-medium text-gray-700"
                  >
                    Your Address
                  </label>
                  <div className="mt-3">
                    <input
                      required
                      onChange={e => {
                        const address = e.target.value
                        setAddress(address)
                      }}
                      value={address}
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Enter your Address"
                      className="block input input-bordered input-warning w-full  rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 grid gap-4 mt-5">
                  <label
                    htmlFor="Phone"
                    className="block text-md font-medium text-gray-700"
                  >
                    Your Phone Number
                  </label>
                  <div className="grid gap-4" id="Phone">
                    <div className="items-center gap-3 lg:gap-0 flex lg:grid">
                      <h6 className="text-sm font-semibold">Home:</h6>
                      <input
                        required
                        onChange={e => {
                          const phoneHome = e.target.value
                          setPhoneHome(phoneHome)
                        }}
                        value={phoneHome}
                        type="number"
                        name="phoneHome"
                        id="phone"
                        placeholder="Enter your Home Phone Number"
                        className="block mt-3 input input-bordered input-warning w-full  rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div className=" items-center gap-2 lg:gap-0 flex lg:grid">
                      <h6 className="text-sm font-semibold">Mobile:</h6>
                      <input
                        required
                        onChange={e => {
                          const phoneMobile = e.target.value
                          setPhoneMobile(phoneMobile)
                        }}
                        value={phoneMobile}
                        type="number"
                        name="phoneMobile"
                        id="phone"
                        placeholder="Enter your Mobile Phone Number"
                        className="block mt-3 input input-bordered input-warning w-full  rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h2 className="text-center text-xl mt-20 lg:text-2xl font-bold justify-self-center ">
                      Spouse Details
                    </h2>
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="name"
                    className="block text-md font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-3">
                    <input
                      required
                      onChange={e => {
                        const spouseName = e.target.value
                        setSpouseName(spouseName)
                      }}
                      type="text"
                      name="name"
                      id="name"
                      value={spouseName}
                      autoComplete="family-name"
                      placeholder="Enter your name"
                      className="block input input-bordered input-warning w-full  rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="profession"
                    className="block text-md font-medium text-gray-700"
                  >
                    Profession
                  </label>
                  <div className="mt-3">
                    <input
                      required
                      onChange={e => {
                        const spouseProfession = e.target.value
                        setSpouseProfession(spouseProfession)
                      }}
                      value={spouseProfession}
                      type="text"
                      name="profession"
                      id="profession"
                      placeholder="Enter your Profession"
                      className="block input input-bordered input-warning w-full  rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="email"
                    className="block text-md font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-3">
                    <input
                      required
                      onChange={e => {
                        const spouseEmail = e.target.value
                        setSpouseEmail(spouseEmail)
                      }}
                      value={spouseEmail}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your Email"
                      className="block input input-bordered input-warning w-full rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="blood-group"
                    className="block text-md font-medium text-gray-700"
                  >
                    Blood Group
                  </label>
                  <div className="mt-3">
                    <input
                      required
                      onChange={e => {
                        const spouseBlood = e.target.value
                        setSpouseBlood(spouseBlood)
                      }}
                      value={spouseBlood}
                      type="text"
                      name="bloodGroup"
                      id="blood-group"
                      placeholder="Enter your Blood Group"
                      className="block input input-bordered input-warning w-full  rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 mt-5">
                  <label
                    htmlFor="address"
                    className="block text-md font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <div className="mt-3">
                    <input
                      required
                      onChange={e => {
                        const spouseAddress = e.target.value
                        setSpouseAddress(spouseAddress)
                      }}
                      value={spouseAddress}
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Enter your Address"
                      className="block input input-bordered input-warning w-full  rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 grid gap-4 mt-5">
                  <label
                    htmlFor="Phone"
                    className="block text-md font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="grid gap-4" id="Phone">
                    <div className="items-center gap-3 lg:gap-0 flex lg:grid">
                      <h6 className="text-sm font-semibold">Home:</h6>
                      <input
                        required
                        onChange={e => {
                          const spousePhoneHome = e.target.value
                          setSpousePhoneHome(spousePhoneHome)
                        }}
                        value={spousePhoneHome}
                        type="number"
                        name="phoneHome"
                        id="phone"
                        placeholder="Enter your Home Phone Number"
                        className="block mt-3 input input-bordered input-warning w-full  rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div className=" items-center gap-2 lg:gap-0 flex lg:grid">
                      <h6 className="text-sm font-semibold">Mobile:</h6>
                      <input
                        required
                        onChange={e => {
                          const spousePhoneMobile = e.target.value
                          setSpousePhoneMobile(spousePhoneMobile)
                        }}
                        value={spousePhoneMobile}
                        type="number"
                        name="phoneMobile"
                        id="phone"
                        placeholder="Enter your Mobile Phone Number"
                        className="block mt-3 input input-bordered input-warning w-full  rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2  mt-16">
                  <label
                    htmlFor="IndianNumber"
                    className="block text-md font-medium text-gray-700"
                  >
                    Emergency Contact Number in India{" "}
                  </label>
                  <div className="mt-3">
                    <input
                      onChange={e => {
                        const numberIndia = e.target.value
                        setNumberIndia(numberIndia)
                      }}
                      value={numberIndia}
                      type="number"
                      name="IndianNumber"
                      id="IndianNumber"
                      placeholder="Enter your Number"
                      className="block input input-bordered input-warning w-full  rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="mt-5 col-span-2">
                  <div className="flex col-span-2 items-start">
                    <div className="flex col-span-2 gap-5  lg:gap-16">
                      <fieldset className="sm:col-span-2">
                        <legend className="block text-md font-medium text-gray-700">
                          Are you above 18 years?
                        </legend>
                        <div className="mt-4 grid grid-cols-1 gap-y-2">
                          <div className="flex items-center">
                            <input
                              required
                              onClick={e => {
                                const age = e.target.value
                                setAge(age)
                              }}
                              id="budget-under-25k"
                              name="age"
                              defaultValue="yes"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="budget-under-25k" className="ml-3">
                              <span className="block text-sm text-gray-700">
                                Yes
                              </span>
                            </label>
                          </div>

                          <div className="flex items-center">
                            <input
                              required
                              onClick={e => {
                                const age = e.target.value
                                setAge(age)
                              }}
                              id="budget-over-100k"
                              name="age"
                              defaultValue="no"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="budget-over-100k" className="ml-3">
                              <span className="block text-sm text-gray-700">
                                No
                              </span>
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="sm:col-span-2">
                        <legend className="block text-md font-medium text-gray-700">
                          Residencial status
                        </legend>
                        <div className="mt-4 grid grid-cols-1 gap-y-2">
                          <div className="flex items-center">
                            <input
                              required
                              onClick={e => {
                                const status = e.target.value
                                setStatus(status)
                              }}
                              id="permanent"
                              name="status"
                              defaultValue="permanent"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="permanent" className="ml-3">
                              <span className="block text-sm text-gray-700">
                                Permanent
                              </span>
                            </label>
                          </div>

                          <div className="flex items-center">
                            <input
                              required
                              onClick={e => {
                                const status = e.target.value
                                setStatus(status)
                              }}
                              id="temporary"
                              name="status"
                              defaultValue="temporary"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="temporary" className="ml-3">
                              <span className="block text-sm text-gray-700">
                                Temporary
                              </span>
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              required
                              onClick={e => {
                                const status = e.target.value
                                setStatus(status)
                              }}
                              id="citizen"
                              name="status"
                              defaultValue="citizen"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="citizen" className="ml-3">
                              <span className="block text-sm text-gray-700">
                                Citizen
                              </span>
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-16 col-span-2">
                  <h2 className="text-center text-xl lg:text-2xl font-bold justify-self-center">
                    Details of Minor Children
                  </h2>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="children-name"
                    className="block text-md font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-3">
                    <input
                      onChange={e => {
                        const childrenName = e.target.value
                        setChildrenName(childrenName)
                      }}
                      value={childrenName}
                      type="text"
                      name="childrenName"
                      id="children-name"
                      placeholder="Enter Name"
                      className="block input input-bordered input-warning w-full max-w-xs rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="hobbies"
                    className="block text-md font-medium text-gray-700"
                  >
                    Interests/ Hobbies
                  </label>
                  <div className="mt-3">
                    <input
                      onChange={e => {
                        const hobbies = e.target.value
                        setHobbies(hobbies)
                      }}
                      value={hobbies}
                      type="text"
                      name="hobbies"
                      id="hobbies"
                      placeholder="Enter Interests/ Hobbies"
                      className="block input input-bordered input-warning w-full max-w-xs rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <fieldset className="col-span-2 mt-4 ">
                  <legend className="block text-md font-medium text-gray-700">
                    Gender
                  </legend>
                  <div className="mt-2 flex gap-x-4 ">
                    <div className="flex items-center">
                      <input
                        onClick={e => {
                          const gender = e.target.value
                          setGender(gender)
                        }}
                        id="male"
                        name="gender"
                        defaultValue="male"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="male" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          Male
                        </span>
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        onClick={e => {
                          const gender = e.target.value
                          setGender(gender)
                        }}
                        id="female"
                        name="gender"
                        defaultValue="female"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="female" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          Female
                        </span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        onClick={e => {
                          const gender = e.target.value
                          setGender(gender)
                        }}
                        id="others"
                        name="gender"
                        defaultValue="others"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="others" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          Others
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className="mt-16">
                  <label
                    htmlFor="children-name"
                    className="block text-md font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={e => {
                        const childrenName2 = e.target.value
                        setChildrenName2(childrenName2)
                      }}
                      value={childrenName2}
                      type="text"
                      name="childrenName"
                      id="children-name"
                      placeholder="Enter Name"
                      className="block input input-bordered input-warning w-full max-w-xs rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="mt-5 lg:mt-16">
                  <label
                    htmlFor="hobbies"
                    className="block text-md font-medium text-gray-700"
                  >
                    Interests/ Hobbies
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={e => {
                        const hobbies2 = e.target.value
                        setHobbies2(hobbies2)
                      }}
                      value={hobbies2}
                      type="text"
                      name="hobbies"
                      id="hobbies"
                      placeholder="Enter Interests/ Hobbies"
                      className="block input input-bordered input-warning w-full max-w-xs rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <fieldset className="col-span-2 mt-2 ">
                  <legend className="block text-md font-medium text-gray-700">
                    Gender
                  </legend>
                  <div className="mt-2 flex gap-x-4 ">
                    <div className="flex items-center">
                      <input
                        onClick={e => {
                          const gender2 = e.target.value
                          setGender2(gender2)
                        }}
                        id="male2"
                        name="gender2"
                        defaultValue="male"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="male2" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          Male
                        </span>
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        onClick={e => {
                          const gender2 = e.target.value
                          setGender(gender2)
                        }}
                        id="female2"
                        name="gender2"
                        defaultValue="female"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="female2" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          Female
                        </span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        onClick={e => {
                          const gender2 = e.target.value
                          setGender2(gender2)
                        }}
                        id="others2"
                        name="gender2"
                        defaultValue="others"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="others2" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          Others
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className="mt-16">
                  <label
                    htmlFor="children-name"
                    className="block text-md font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={e => {
                        const childrenName3 = e.target.value
                        setChildrenName3(childrenName3)
                      }}
                      value={childrenName3}
                      type="text"
                      name="childrenName"
                      id="children-name"
                      placeholder="Enter Name"
                      className="block input input-bordered input-warning w-full max-w-xs rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="mt-5 lg:mt-16">
                  <label
                    htmlFor="hobbies"
                    className="block text-md font-medium text-gray-700"
                  >
                    Interests/ Hobbies
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={e => {
                        const hobbies3 = e.target.value
                        setHobbies3(hobbies3)
                      }}
                      value={hobbies3}
                      type="text"
                      name="hobbies"
                      id="hobbies"
                      placeholder="Enter Interests/ Hobbies"
                      className="block input input-bordered input-warning w-full max-w-xs rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <fieldset className="col-span-2 mt-2 ">
                  <legend className="block text-md font-medium text-gray-700">
                    Gender
                  </legend>
                  <div className="mt-2 flex gap-x-4 ">
                    <div className="flex items-center">
                      <input
                        onClick={e => {
                          const gender3 = e.target.value
                          setGender3(gender3)
                        }}
                        id="male3"
                        name="gender3"
                        defaultValue="male"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="male3" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          Male
                        </span>
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        onClick={e => {
                          const gender3 = e.target.value
                          setGender3(gender3)
                        }}
                        id="female3"
                        name="gender3"
                        defaultValue="female"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="female3" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          Female
                        </span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        onClick={e => {
                          const gender3 = e.target.value
                          setGender3(gender3)
                        }}
                        id="others3"
                        name="gender3"
                        defaultValue="others"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="others3" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          Others
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className="col-span-2">
                  <h3 className="text-xl lg:text-2xl font-bold text-center mt-16 py-12">
                    Membership information
                  </h3>
                  <p className="text-lg">
                    <span className="font-bold text-sm">NOTICE :</span>{" "}
                    <br></br> Marathi Association Perth (MAP) reserves the right
                    to verify the information provided in this application in
                    accordance with and without limitation to the Constitution
                    and bylaws of MAP. If MAP determines, in its sole
                    discretion, that any individual on this application no
                    longer subscribes to the objectives of MAP or that false or
                    misleading information was provided, MAP may reject this
                    application or cancel the membership of any or all persons
                    listed in this application form. Membership fees are
                    non-refundable in any event. Annual Membership Fee is due on
                    30th June every year
                  </p>
                  <div className="form-control pt-5">
                    <label className=" flex cursor-pointer">
                      <input
                        required
                        type="checkbox"
                        onChange={() => {
                          setAgreed3(!agreed3)
                        }}
                        checked={agreed3}
                        className="checkbox checkbox-warning"
                      />
                      <span className="px-5 label-text">
                        I hereby authorize MAP to publish my name, street
                        address, phone numbers and email addresses on the MAP
                        web site as well as in the MAP directory.{" "}
                      </span>
                    </label>
                  </div>
                  <div className="form-control pt-5">
                    <label className="flex cursor-pointer">
                      <input
                        required
                        type="checkbox"
                        onChange={() => {
                          setAgreed2(!agreed2)
                        }}
                        checked={agreed2}
                        className="checkbox checkbox-warning"
                      />
                      <span className="label-text px-5">
                        I authorize MAP to enroll me in the mailing group
                        related to MAP.
                      </span>
                    </label>
                  </div>
                  <div className="form-control py-5">
                    <label className="flex cursor-pointer">
                      <input
                        required
                        type="checkbox"
                        onChange={() => {
                          setAgreed1(!agreed1)
                        }}
                        checked={agreed1}
                        className="checkbox checkbox-warning"
                      />
                      <span className="label-text px-5">
                        I declare that the information provided in this
                        application form is true to the best of my knowledge. I
                        have read, understood, accept and promise to promote and
                        uphold the Constitution and Objective of the Marathi
                        Association, Perth.
                      </span>
                    </label>
                  </div>
                  {checkoutError && (
                    <p className="my-3 text-lg text-center text-red-500 font-semibold">
                      {checkoutError}
                    </p>
                  )}
                  <StripeCheckout
                    stripeKey="pk_live_51MauzREOdvuvWuY5pXokgl0vWZk4jOP9v3jGq3BrmtLVnDSoJ8UIkCjQVgapiKvhj32S0GeSH6Ad9D0o7l4PMft100tFgktdYM"
                    token={handleToken}
                    amount={amount} // the amount in cents
                    name={`MAP - ${familyData.title}`}
                    description={familyData.description.description}
                    image="https://i.ibb.co/ysGmkZj/map-logo-removebg-preview-1.png"
                    disabled={
                      isProcessing ||
                      !name ||
                      !profession ||
                      !blood ||
                      !email ||
                      !address ||
                      !phoneHome ||
                      !phoneMobile ||
                      !status ||
                      !age ||
                      !agreed1 ||
                      !agreed2 ||
                      !agreed3 ||
                      !spouseName ||
                      !spouseAddress ||
                      !spouseProfession ||
                      !spouseBlood ||
                      !spouseEmail ||
                      !spousePhoneHome ||
                      !spousePhoneMobile
                    }
                  >
                    <input
                      type="submit"
                      disabled={isProcessing}
                      value={`${
                        !isProcessing ? "Continue To Pay" : "Processing..."
                      }`}
                      className={`inline-flex  text-2xl ${
                        isProcessing
                          ? "opacity-50 cursor-not-allowed"
                          : "cursor-pointer"
                      } w-full items-center justify-center rounded-md border border-transparent bg-[#ed8f1d] px-6 py-3  font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-[#ed8f1d] focus:ring-offset-2`}
                    />{" "}
                  </StripeCheckout>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </Layout>
  )
}

export default Index
export const Head = () => <Seo title="Family Package Form" />

export const query = graphql`
  query Family {
    allContentfulMemberPage {
      edges {
        node {
          pricingCards {
            title
            price
            slug
            description {
              description
            }
          }
        }
      }
    }
  }
`
