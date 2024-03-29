import React from "react"
import "react-toastify/dist/ReactToastify.css"
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const PersonalForm = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulContactUsPage {
        edges {
          node {
            email
            phone
            description {
              description
            }
            title
            location
          }
        }
      }
    }
  `)
  const contactData = data?.allContentfulContactUsPage.edges[0].node
  return (
    <div className="my-40 relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <Wrapper className="font-semibold py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {contactData.title}
            </h2>
            <p className="mt-3 text-lg leading-6 text-black">
              {contactData.description.description}
            </p>
            <dl className="mt-8 text-base text-black">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>{contactData.location}</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-black"
                    aria-hidden="true"
                  />
                  <span className="ml-3">{contactData.phone}</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon
                    className="h-6 w-6 flex-shrink-0 text-black"
                    aria-hidden="true"
                  />
                  <span className="ml-3">{contactData.email}</span>
                </dd>
              </div>
            </dl>
          </div>
        </Wrapper>
        <div className="bg-white py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="contact"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  required
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-[#ed8f1d] px-6 py-3  font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-[#ed8f1d] py-3 px-6 text-base font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const Wrapper = styled.section`
  background: linear-gradient(45deg, #ffffff 1%, #ed8f1d 99%);
`
export default PersonalForm
