import { Link } from "gatsby"
import React, { useEffect } from "react"
import { BsCheckCircle } from "react-icons/bs"

const Index = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.pushState(null, null, window.location.pathname)
      window.addEventListener("popstate", onPopState)
    }

    return () => {
      window.removeEventListener("popstate", onPopState)
    }
  }, [])

  const onPopState = () => {
    window.history.pushState(null, null, window.location.pathname)
  }

  return (
    <div className="flex justify-center bg-[#ED8F1D] items-center h-[100vh]">
      {/* Put this part before </body> tag */}
      <div className="">
        <div className="modal-box relative">
          <Link to="/" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </Link>
          <BsCheckCircle className="mx-auto" size={100} color="green" />
          <h3 className="text-2xl  text-center font-bold">
            Payment Successful. Successfully become a member of Marathi
            Association Perth.
          </h3>
          <p className="py-4 text-center">
            Your payment has been received and processed successfully. If you
            have any questions or concerns, please don't hesitate to{" "}
            <Link className="text-xl underline text-[#ED8F1D]" to="/contact">
              contact with us
            </Link>
            . <br /> Thank you for your transaction.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Index
