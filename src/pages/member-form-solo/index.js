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
import styled from "styled-components"

const Index = data => {
  const soloData =
    data?.data.allContentfulMemberPage.edges[0].node.pricingCards[0]
  const formInformation =
    data?.data.allContentfulSoloFormInformation.edges[0].node
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
  const [numberIndia, setNumberIndia] = useState("")
  const amount = soloData.price?.slice(1, 3) * 100

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
          time: new Date(),
          package: soloData.title,
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
        setNumberIndia("")
        setAgreed1(false)
        setAgreed2(false)
        setAgreed3(false)
        setCheckoutError("")
        toast.success("Successfully paid and added information")
      } catch (e) {
        toast.error("Error for adding document")
      }
    } catch (error) {
      if (error) {
        toast.error(
          "An error occurred while processing your payment. Please try again."
        )
      }

      setCheckoutError(
        "An error occurred while processing your payment. Please try again."
      )
      setIsProcessing(false)
    }
  }

  const submit = async e => {
    e.preventDefault()
  }

  if (!soloData) {
    return <Loading />
  }

  return (
    <Layout>
      <h1 className="text-center text-[18px] uppercase font-bold lg:text-5xl text-white py-10 bg-[#ed8f1d] mt-20 lg:font-bold">
        {soloData.title} MEMBERSHIP APPLICATION FORM
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
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Applicant Details
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
                  <div className="mt-1">
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
                  <div className="mt-1">
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
                  <div className="mt-1">
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
                  <div className="mt-1">
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
                  <div className="mt-1">
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
                      className="block input  input-bordered input-warning w-full  rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="mt-5 col-span-2">
                  <div className="flex col-span-2 items-start">
                    <div className="flex-shrink-0"></div>
                    <div className="flex col-span-2 gap-5 lg:gap-16">
                      <fieldset className="sm:col-span-2">
                        <legend className="block text-md font-medium text-gray-700">
                          Are you above 18 years?
                        </legend>
                        <div className="mt-4 grid grid-cols-1 gap-y-2">
                          <div className="flex items-center">
                            <Radio
                              required
                              checked={age === "yes"}
                              onClick={e => {
                                const age = e.target.value
                                setAge(age)
                              }}
                              id="budget-under-25k"
                              name="age"
                              defaultValue="yes"
                              type="radio"
                              className="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              checkoutError={checkoutError}
                              htmlFor="budget-under-25k"
                              className="ml-3"
                            >
                              <span className="block text-sm text-gray-700">
                                Yes
                              </span>
                            </label>
                          </div>

                          <div className="flex items-center">
                            <Radio
                              required
                              checked={age === "no"}
                              onClick={e => {
                                const age = e.target.value
                                setAge(age)
                              }}
                              id="budget-over-100k"
                              name="age"
                              defaultValue="no"
                              type="radio"
                              className="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <RadioLabel
                              htmlFor="budget-over-100k"
                              className="ml-3"
                            >
                              <span className="block text-sm text-gray-700">
                                No
                              </span>
                            </RadioLabel>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="sm:col-span-2">
                        <legend className="block text-md font-medium text-gray-700">
                          Residencial status
                        </legend>
                        <div className="mt-4 grid grid-cols-1 gap-y-2">
                          <div className="flex items-center">
                            <Radio
                              required
                              checked={status === "permanent"}
                              onClick={e => {
                                const status = e.target.value
                                setStatus(status)
                              }}
                              id="permanent"
                              name="status"
                              defaultValue="permanent"
                              type="radio"
                              className="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <RadioLabel htmlFor="permanent" className="ml-3">
                              <span className="block text-sm text-gray-700">
                                Permanent
                              </span>
                            </RadioLabel>
                          </div>

                          <div className="flex items-center">
                            <Radio
                              required
                              checked={status === "temporary"}
                              onClick={e => {
                                const status = e.target.value
                                setStatus(status)
                              }}
                              id="temporary"
                              name="status"
                              defaultValue="temporary"
                              type="radio"
                              className="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <RadioLabel htmlFor="temporary" className="ml-3">
                              <span className="block text-sm text-gray-700">
                                Temporary
                              </span>
                            </RadioLabel>
                          </div>
                          <div className="flex items-center">
                            <Radio
                              required
                              checked={status === "citizen"}
                              onClick={e => {
                                const status = e.target.value
                                setStatus(status)
                              }}
                              id="citizen"
                              name="status"
                              defaultValue="citizen"
                              type="radio"
                              className="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <RadioLabel htmlFor="citizen" className="ml-3">
                              <span className="block text-sm text-gray-700">
                                Citizen
                              </span>
                            </RadioLabel>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>

                <div className="col-span-2">
                  <h3 className="text-2xl font-bold text-center py-12">
                    MEMBERSHIP INFORMATION
                  </h3>
                  <p className="text-lg">
                    <span className="font-bold text-sm">NOTICE :</span>{" "}
                    <br></br>
                    {formInformation.notice.notice}
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
                        {formInformation.termsAndCondition1.termsAndCondition1}{" "}
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
                        {formInformation.termsAndCondition2.termsAndCondition2}
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
                        {formInformation.termsAndCondition3.termsAndCondition3}
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
                    name={`MAP - ${soloData.title}`}
                    description={soloData.description.description}
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
                      !agreed3
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

const Radio = styled.input`
  display: none;
`

const RadioLabel = styled.label`
  cursor: pointer;
  position: relative;
  padding-left: 24px;
  margin-right: 16px;
  font-size: 16px;
  user-select: none;

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid gray;
  }

  &:after {
    content: "";
    position: absolute;
    top: 5px;
    left: 3px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ed8f1d;
    opacity: 0;
    transform: scale(0);
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  }

  ${Radio}:checked + &:after {
    transform: scale(1);
    opacity: 1;
    background-color: #ed8f1d; /* Change this to the desired active color */
  }
`
export default Index
export const Head = () => <Seo title="Solo Package Form" />

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
    allContentfulSoloFormInformation {
      edges {
        node {
          notice {
            notice
          }
          termsAndCondition1 {
            termsAndCondition1
          }
          termsAndCondition2 {
            termsAndCondition2
          }
          termsAndCondition3 {
            termsAndCondition3
          }
        }
      }
    }
  }
`
