import { Link } from "gatsby"
import React from "react"
import { BsXCircle } from "react-icons/bs"

const index = () => {
  return (
    <div className="flex justify-center bg-[#ED8F1D] items-center h-[100vh]">
      {/* Put this part before </body> tag */}
      <div className="">
        <div className="modal-box relative">
          <Link to="/" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </Link>
          <BsXCircle className="mx-auto" size={100} color="red" />
          <h3 className="text-2xl  text-center font-bold">
            Sorry, your payment was unsuccessful.
          </h3>
          <p className="py-4 text-center">
            Please check your payment information and try again or <br />
            <Link className="text-xl underline text-[#ED8F1D]" to="/contact">
              contact with us
            </Link>{" "}
            <br />
            Thank you for your understanding.
          </p>
        </div>
      </div>
    </div>
  )
}

export default index
