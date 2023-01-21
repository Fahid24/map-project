import { addDoc, collection } from "firebase/firestore"
import React from "react"
import { useState } from "react"
import db from "../../../firebase-config"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { uid } from "uid"

const PersonalForm = () => {
  const [agreed1, setAgreed1] = useState(false)
  const [agreed2, setAgreed2] = useState(false)
  const [agreed3, setAgreed3] = useState(false)
  const _id = uid()

  const [upload, setUpload] = useState({
    name: "",
    profession: "",
    blood: "",
    email: "",
    address: "",
    phoneHome: "",
    phoneMobile: "",
    status: "",
    age: "",
    childrenName: "",
    hobbies: "",
    gender: "",
  })

  const submit = async e => {
    e.preventDefault()
    const name = e.target.name.value
    const profession = e.target.profession.value
    const blood = e.target.bloodGroup.value
    const email = e.target.email.value
    const address = e.target.address.value
    const phoneHome = e.target.phoneHome.value
    const phoneMobile = e.target.phoneMobile.value
    const status = e.target.status.value
    const age = e.target.age.value
    const childrenName = e.target.childrenName.value
    const hobbies = e.target.hobbies.value
    const gender = e.target.gender.value

    console.log(status)

    // Add a new document in collection
    try {
      const docRef = await addDoc(collection(db, "from-data"), {
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
      })
      //   setId(docRef.id)
      setUpload({
        name: "",
        profession: "",
        blood: "",
        email: "",
        address: "",
        phoneHome: "",
        phoneMobile: "",
        status: "",
        age: "",
        childrenName: "",
        hobbies: "",
        gender: "",
      })

      toast.success("Successfully added post", docRef.id)
    } catch (e) {
      toast.error("Error adding document:", e)
    }
  }

  return (
    <div className="m-12">
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              PERSONAL DETAILS
            </h2>
          </div>
          <div className="mt-12">
            <form
              onSubmit={submit}
              method="POST"
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-md font-medium text-gray-700"
                >
                  Your name
                </label>
                <div className="mt-1">
                  <input
                    onChange={e => {
                      const name = e.target.value
                      setUpload(name)
                    }}
                    type="text"
                    name="name"
                    id="name"
                    value={upload.name}
                    autoComplete="family-name"
                    placeholder="Enter your name"
                    className="block input input-bordered input-warning w-full max-w-xs rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="profession"
                  className="block text-md font-medium text-gray-700"
                >
                  Your Profession
                </label>
                <div className="mt-1">
                  <input
                    onChange={e => {
                      const profession = e.target.value
                      setUpload(profession)
                    }}
                    value={upload.profession}
                    type="text"
                    name="profession"
                    id="profession"
                    placeholder="Enter your Profession"
                    className="block input input-bordered input-warning w-full max-w-xs rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="blood-group"
                  className="block text-md font-medium text-gray-700"
                >
                  Your Blood Group
                </label>
                <div className="mt-1">
                  <input
                    onChange={e => {
                      const blood = e.target.value
                      setUpload(blood)
                    }}
                    value={upload.blood}
                    type="text"
                    name="bloodGroup"
                    id="blood-group"
                    placeholder="Enter your Blood Group"
                    className="block input input-bordered input-warning w-full max-w-xs rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-md font-medium text-gray-700"
                >
                  Your Email
                </label>
                <div className="mt-1">
                  <input
                    onChange={e => {
                      const email = e.target.value
                      setUpload(email)
                    }}
                    value={upload.email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your Email"
                    className="block input input-bordered input-warning w-full max-w-xs rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="block text-md font-medium text-gray-700"
                >
                  Your Address
                </label>
                <div className="mt-1">
                  <input
                    onChange={e => {
                      const address = e.target.value
                      setUpload(address)
                    }}
                    value={upload.address}
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your Address"
                    className="block input input-bordered input-warning w-full  rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="Phone"
                  className="block text-md font-medium text-gray-700"
                >
                  Your Phone Number
                </label>
                <div id="Phone">
                  <div className="mt-3 grid lg:flex  items-center gap-4">
                    <h6 className="text-sm font-semibold">Home:</h6>
                    <input
                      onChange={e => {
                        const phoneHome = e.target.value
                        setUpload(phoneHome)
                      }}
                      value={upload.phoneHome}
                      type="text"
                      name="phoneHome"
                      id="phone"
                      placeholder="Enter your Home Phone Number"
                      className="block input input-bordered input-warning w-full  rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="mt-6 grid lg:flex items-center gap-2">
                    <h6 className="text-sm font-semibold">Mobile:</h6>
                    <input
                      onChange={e => {
                        const phoneMobile = e.target.value
                        setUpload(phoneMobile)
                      }}
                      value={upload.phoneMobile}
                      type="text"
                      name="phoneMobile"
                      id="phone"
                      placeholder="Enter your Mobile Phone Number"
                      className="block input input-bordered input-warning w-full  rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {/* <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      className={classNames(
                        agreed ? "bg-indigo-600" : "bg-gray-200",
                        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      )}
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          agreed ? "translate-x-5" : "translate-x-0",
                          "inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch> */}
                  </div>
                  <div className="grid gap-10 lg:flex lg:gap-24 ">
                    <fieldset className="sm:col-span-2">
                      <legend className="block text-md font-medium text-gray-700">
                        Are you above 18 years?
                      </legend>
                      <div className="mt-4 grid grid-cols-1 gap-y-4">
                        <div className="flex items-center">
                          <input
                            onChange={e => {
                              const age = e.target.value
                              setUpload(age)
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
                            onChange={e => {
                              const age = e.target.value
                              setUpload(age)
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
                      <div className="mt-4 grid grid-cols-1 gap-y-4">
                        <div className="flex items-center">
                          <input
                            onChange={e => {
                              const status = e.target.value
                              setUpload(status)
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
                            onChange={e => {
                              const status = e.target.value
                              setUpload(status)
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
                            onChange={e => {
                              const status = e.target.value
                              setUpload(status)
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
                <h2 className="text-center text-2xl font-bold justify-self-center">
                  Details of Minor Children
                </h2>
              </div>
              <div>
                <label
                  htmlFor="children-name"
                  className="block text-md font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    onChange={e => {
                      const childrenName = e.target.value
                      setUpload(childrenName)
                    }}
                    value={upload.childrenName}
                    type="text"
                    name="childrenName"
                    id="children-name"
                    placeholder="Enter Name"
                    className="block input input-bordered input-warning w-full max-w-xs rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="hobbies"
                  className="block text-md font-medium text-gray-700"
                >
                  Interests/ Hobbies
                </label>
                <div className="mt-1">
                  <input
                    onChange={e => {
                      const hobbies = e.target.value
                      setUpload(hobbies)
                    }}
                    value={upload.hobbies}
                    type="text"
                    name="hobbies"
                    id="hobbies"
                    placeholder="Enter Interests/ Hobbies"
                    className="block input input-bordered input-warning w-full max-w-xs rounded-md border-gray-300 py-3 px-4 shadow-sm shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <fieldset className="sm:col-span-2">
                <legend className="block text-md font-medium text-gray-700">
                  Gender
                </legend>
                <div className="mt-4 grid grid-cols-1 gap-y-4">
                  <div className="flex items-center">
                    <input
                      onChange={e => {
                        const gender = e.target.value
                        setUpload(gender)
                      }}
                      id="male"
                      name="gender"
                      defaultValue="male"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="male" className="ml-3">
                      <span className="block text-sm text-gray-700">Male</span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      onChange={e => {
                        const gender = e.target.value
                        setUpload(gender)
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
                      onChange={e => {
                        const gender = e.target.value
                        setUpload(gender)
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
              <div className="sm:col-span-2">
                <h3 className="text-2xl font-bold text-center py-12">
                  MEMBERSHIP INFORMATION
                </h3>
                <p className="text-md">
                  <span className="font-bold">NOTICE :</span> <br></br> Marathi
                  Association Perth (MAP) reserves the right to verify the
                  information provided in this application in accordance with
                  and without limitation to the Constitution and bylaws of MAP.
                  If MAP determines, in its sole discretion, that any individual
                  on this application no longer subscribes to the objectives of
                  MAP or that false or misleading information was provided, MAP
                  may reject this application or cancel the membership of any or
                  all persons listed in this application form. Membership fees
                  are non-refundable in any event. Annual Membership Fee is due
                  on 30th June every year
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
                      I hereby authorize MAP to publish my name, street address,
                      phone numbers and email addresses on the MAP web site as
                      well as in the MAP directory.{" "}
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
                      I authorize MAP to enroll me in the mailing group related
                      to MAP.
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
                <input
                  type="submit"
                  value="Submit"
                  className="inline-flex text-2xl cursor-pointer w-full items-center justify-center rounded-md border border-transparent bg-[#ed8f1d] px-6 py-3  font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-[#ed8f1d] focus:ring-offset-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default PersonalForm
