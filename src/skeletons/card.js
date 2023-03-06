import React from 'react'

export default function card() {
  return (
    <div className="md:w-1/4">
    <div role="status" className="m-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
         </div>
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
    <div className="flex items-center mt-4 space-x-3">
        <div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
      </div>
    </div>
    <span className="sr-only">Loading...</span>
  </div>
    </div>
  )
}
