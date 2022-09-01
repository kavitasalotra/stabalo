import React, { useState } from 'react'
import Link from 'next/link'


const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="container mx-auto py-5 px-6">
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className=" flex items-center justify-between h-16">
            <svg width="132" height="52" fill="none" xmlns="http://www.w3.org/2000/svg" className='block sm:hidden'>
              <path
                d="M29.878 31.407l3.763-.053v2.173a9.128 9.128 0 00-1.484-.106c-.565 0-1.201.035-1.908.106 0 2.72-1.307 5.477-3.922 8.268-2.615 2.791-5.777 5.053-9.487 6.784-3.675 1.767-7.102 2.65-10.282 2.65-1.66 0-3.021-.424-4.081-1.272C1.452 49.109.94 47.996.94 46.618c0-2.05 1.36-4.187 4.081-6.413 2.72-2.226 5.9-4.063 9.54-5.512 3.64-1.449 6.925-2.297 9.858-2.544-.353-.53-.901-.99-1.643-1.378-.742-.389-2.261-.99-4.558-1.802-2.297-.848-3.922-1.767-4.876-2.756-.954-1.025-1.431-2.456-1.431-4.293 0-1.837.99-3.94 2.968-6.307a26.924 26.924 0 016.996-5.936c2.72-1.625 5.106-2.438 7.155-2.438.919 0 1.678.336 2.279 1.007.6.636.901 1.431.901 2.385 0 1.555-.936 3.516-2.809 5.883-1.873 2.332-3.957 4.116-6.254 5.353l-1.272-1.802c1.378-.707 2.58-1.802 3.604-3.286 1.06-1.52 1.59-2.827 1.59-3.922 0-1.095-.583-1.643-1.749-1.643-1.66 0-3.569 1.042-5.724 3.127-2.12 2.05-3.18 3.975-3.18 5.777 0 1.237.318 2.208.954 2.915.636.707 2.244 1.59 4.823 2.65 2.58 1.025 4.417 1.943 5.512 2.756 1.095.777 1.82 1.767 2.173 2.968zM6.24 45.24c0 1.696 1.378 2.544 4.134 2.544 1.52 0 3.48-.565 5.883-1.696a19.324 19.324 0 006.413-4.664c1.873-1.979 2.809-4.01 2.809-6.095 0-.247-.053-.618-.159-1.113-4.84.46-9.24 1.82-13.197 4.081-3.922 2.261-5.883 4.576-5.883 6.943zm41.92-10.176l1.167 1.325c-.884 1.378-1.962 2.456-3.233 3.233-1.237.777-2.492 1.166-3.764 1.166-1.271 0-2.279-.353-3.02-1.06-.742-.742-1.114-1.749-1.114-3.021 0-2.968 1.114-7.067 3.34-12.296a37.422 37.422 0 00-5.407 1.272l-.37-2.067-.053-.053c1.766-.742 4.08-1.343 6.942-1.802.283-.53.92-1.82 1.908-3.869 1.98-4.063 3.393-6.696 4.24-7.897l2.28.901c-.354.777-.972 2.085-1.855 3.922a640.967 640.967 0 00-2.968 6.148c1.59-.106 2.844-.159 3.763-.159.918 0 1.625.141 2.12.424v2.279c-.495-.106-1.22-.159-2.174-.159-.918 0-2.579.159-4.982.477-2.084 4.664-3.127 8.056-3.127 10.176 0 .813.248 1.484.742 2.014.53.53 1.22.795 2.068.795.883 0 2.049-.583 3.498-1.749zm27.83.583l1.219.901c-.495 1.06-1.414 2.067-2.756 3.021-1.308.954-2.509 1.431-3.604 1.431-2.085 0-3.127-1.095-3.127-3.286 0-1.025.265-2.244.795-3.657l-1.961 2.014c-1.908 1.943-3.569 3.25-4.982 3.922-1.378.671-2.739 1.007-4.081 1.007-1.343 0-2.368-.371-3.074-1.113-.672-.777-1.007-1.837-1.007-3.18 0-2.473.954-4.911 2.862-7.314 1.908-2.438 4.346-4.417 7.314-5.936 2.968-1.52 5.936-2.297 8.904-2.332l.106 1.749-2.226.477c-3.216.707-6.06 2.12-8.533 4.24-2.438 2.12-3.657 4.24-3.657 6.36 0 2.085.848 3.127 2.544 3.127 1.59 0 3.55-1.113 5.883-3.339 2.332-2.226 4.275-4.84 5.83-7.844l2.226 1.325c-2.191 4.417-3.286 7.226-3.286 8.427 0 .495.159.919.477 1.272.353.318.689.477 1.007.477.353 0 .583-.018.689-.053l.318-.106c.106-.07.23-.159.37-.265.177-.106.319-.212.425-.318l.636-.477c.282-.212.512-.389.689-.53zm11.434-9.222c1.696-1.731 3.18-2.915 4.452-3.551 1.308-.671 2.527-1.007 3.657-1.007 1.166 0 2.12.406 2.862 1.219.778.777 1.166 1.802 1.166 3.074 0 3.286-1.378 6.749-4.134 10.388-2.756 3.604-5.724 5.406-8.904 5.406a6.958 6.958 0 01-2.703-.53l1.272-2.332c.566.141 1.007.212 1.325.212 2.156 0 4.117-1.201 5.883-3.604 1.767-2.403 2.65-4.77 2.65-7.102 0-.742-.247-1.343-.742-1.802-.459-.495-1.06-.742-1.802-.742-1.625 0-3.533 1.307-5.724 3.922-2.155 2.615-4.045 6.024-5.67 10.229l-3.234-1.325c1.06-5.406 3.18-11.996 6.36-19.769 3.18-7.773 5.83-13.268 7.95-16.483l2.703.954c-2.332 4.346-4.823 9.734-7.473 16.165-2.614 6.43-4.151 10.794-4.61 13.091 1.448-2.544 3.02-4.682 4.716-6.413zm21.766 9.487l1.113.901c-1.202 1.873-2.244 3.233-3.127 4.081-.848.813-1.802 1.219-2.862 1.219s-1.926-.424-2.597-1.272c-.672-.848-1.007-1.908-1.007-3.18 0-2.473 1.625-7.791 4.876-15.953 3.25-8.197 6.589-15.405 10.017-21.624l2.332 1.272a281.978 281.978 0 00-9.381 20.034c-2.792 6.607-4.187 11.36-4.187 14.257 0 1.66.618 2.491 1.855 2.491.989 0 1.978-.742 2.968-2.226zm21.225-10.653c.919 1.52 1.378 3.198 1.378 5.035 0 2.862-.989 5.424-2.968 7.685-1.978 2.226-4.31 3.339-6.996 3.339-2.049 0-3.657-.583-4.823-1.749-1.13-1.201-1.696-2.844-1.696-4.929 0-3.357 1.308-6.36 3.922-9.01 2.615-2.685 5.548-4.028 8.798-4.028.601 0 1.025.018 1.272.053l.159 1.749c-2.826 0-5.176.813-7.049 2.438-1.872 1.625-2.809 3.71-2.809 6.254 0 1.52.371 2.756 1.113 3.71.742.919 1.82 1.378 3.233 1.378 1.449 0 2.597-.636 3.445-1.908.848-1.272 1.272-2.756 1.272-4.452 0-1.731-.335-3.304-1.007-4.717l2.756-.848z"
                fill="#1E293B" />
            </svg>
            <div className=" flex items-center sm:hidden">
              <button onClick={() => setActive(!active)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ml-20" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {active ?
                  <svg className="h-10 w-24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg> : <svg className="h-8 w-24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>}
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link href="/">
                    <a className=" text-gray-600  hover:text-blue-400  px-5 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>
                  </Link>
                  <Link href="/about">
                    <a className="text-gray-600  hover:text-blue-400  px-5 py-2 rounded-md text-sm font-medium">About</a>
                  </Link>
                  <Link href="/contact">
                    <a className=" text-gray-600 hover:text-blue-400 px-5 py-2 rounded-md text-sm font-medium">Contact</a>
                  </Link>
                  <svg width="132" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M29.878 31.407l3.763-.053v2.173a9.128 9.128 0 00-1.484-.106c-.565 0-1.201.035-1.908.106 0 2.72-1.307 5.477-3.922 8.268-2.615 2.791-5.777 5.053-9.487 6.784-3.675 1.767-7.102 2.65-10.282 2.65-1.66 0-3.021-.424-4.081-1.272C1.452 49.109.94 47.996.94 46.618c0-2.05 1.36-4.187 4.081-6.413 2.72-2.226 5.9-4.063 9.54-5.512 3.64-1.449 6.925-2.297 9.858-2.544-.353-.53-.901-.99-1.643-1.378-.742-.389-2.261-.99-4.558-1.802-2.297-.848-3.922-1.767-4.876-2.756-.954-1.025-1.431-2.456-1.431-4.293 0-1.837.99-3.94 2.968-6.307a26.924 26.924 0 016.996-5.936c2.72-1.625 5.106-2.438 7.155-2.438.919 0 1.678.336 2.279 1.007.6.636.901 1.431.901 2.385 0 1.555-.936 3.516-2.809 5.883-1.873 2.332-3.957 4.116-6.254 5.353l-1.272-1.802c1.378-.707 2.58-1.802 3.604-3.286 1.06-1.52 1.59-2.827 1.59-3.922 0-1.095-.583-1.643-1.749-1.643-1.66 0-3.569 1.042-5.724 3.127-2.12 2.05-3.18 3.975-3.18 5.777 0 1.237.318 2.208.954 2.915.636.707 2.244 1.59 4.823 2.65 2.58 1.025 4.417 1.943 5.512 2.756 1.095.777 1.82 1.767 2.173 2.968zM6.24 45.24c0 1.696 1.378 2.544 4.134 2.544 1.52 0 3.48-.565 5.883-1.696a19.324 19.324 0 006.413-4.664c1.873-1.979 2.809-4.01 2.809-6.095 0-.247-.053-.618-.159-1.113-4.84.46-9.24 1.82-13.197 4.081-3.922 2.261-5.883 4.576-5.883 6.943zm41.92-10.176l1.167 1.325c-.884 1.378-1.962 2.456-3.233 3.233-1.237.777-2.492 1.166-3.764 1.166-1.271 0-2.279-.353-3.02-1.06-.742-.742-1.114-1.749-1.114-3.021 0-2.968 1.114-7.067 3.34-12.296a37.422 37.422 0 00-5.407 1.272l-.37-2.067-.053-.053c1.766-.742 4.08-1.343 6.942-1.802.283-.53.92-1.82 1.908-3.869 1.98-4.063 3.393-6.696 4.24-7.897l2.28.901c-.354.777-.972 2.085-1.855 3.922a640.967 640.967 0 00-2.968 6.148c1.59-.106 2.844-.159 3.763-.159.918 0 1.625.141 2.12.424v2.279c-.495-.106-1.22-.159-2.174-.159-.918 0-2.579.159-4.982.477-2.084 4.664-3.127 8.056-3.127 10.176 0 .813.248 1.484.742 2.014.53.53 1.22.795 2.068.795.883 0 2.049-.583 3.498-1.749zm27.83.583l1.219.901c-.495 1.06-1.414 2.067-2.756 3.021-1.308.954-2.509 1.431-3.604 1.431-2.085 0-3.127-1.095-3.127-3.286 0-1.025.265-2.244.795-3.657l-1.961 2.014c-1.908 1.943-3.569 3.25-4.982 3.922-1.378.671-2.739 1.007-4.081 1.007-1.343 0-2.368-.371-3.074-1.113-.672-.777-1.007-1.837-1.007-3.18 0-2.473.954-4.911 2.862-7.314 1.908-2.438 4.346-4.417 7.314-5.936 2.968-1.52 5.936-2.297 8.904-2.332l.106 1.749-2.226.477c-3.216.707-6.06 2.12-8.533 4.24-2.438 2.12-3.657 4.24-3.657 6.36 0 2.085.848 3.127 2.544 3.127 1.59 0 3.55-1.113 5.883-3.339 2.332-2.226 4.275-4.84 5.83-7.844l2.226 1.325c-2.191 4.417-3.286 7.226-3.286 8.427 0 .495.159.919.477 1.272.353.318.689.477 1.007.477.353 0 .583-.018.689-.053l.318-.106c.106-.07.23-.159.37-.265.177-.106.319-.212.425-.318l.636-.477c.282-.212.512-.389.689-.53zm11.434-9.222c1.696-1.731 3.18-2.915 4.452-3.551 1.308-.671 2.527-1.007 3.657-1.007 1.166 0 2.12.406 2.862 1.219.778.777 1.166 1.802 1.166 3.074 0 3.286-1.378 6.749-4.134 10.388-2.756 3.604-5.724 5.406-8.904 5.406a6.958 6.958 0 01-2.703-.53l1.272-2.332c.566.141 1.007.212 1.325.212 2.156 0 4.117-1.201 5.883-3.604 1.767-2.403 2.65-4.77 2.65-7.102 0-.742-.247-1.343-.742-1.802-.459-.495-1.06-.742-1.802-.742-1.625 0-3.533 1.307-5.724 3.922-2.155 2.615-4.045 6.024-5.67 10.229l-3.234-1.325c1.06-5.406 3.18-11.996 6.36-19.769 3.18-7.773 5.83-13.268 7.95-16.483l2.703.954c-2.332 4.346-4.823 9.734-7.473 16.165-2.614 6.43-4.151 10.794-4.61 13.091 1.448-2.544 3.02-4.682 4.716-6.413zm21.766 9.487l1.113.901c-1.202 1.873-2.244 3.233-3.127 4.081-.848.813-1.802 1.219-2.862 1.219s-1.926-.424-2.597-1.272c-.672-.848-1.007-1.908-1.007-3.18 0-2.473 1.625-7.791 4.876-15.953 3.25-8.197 6.589-15.405 10.017-21.624l2.332 1.272a281.978 281.978 0 00-9.381 20.034c-2.792 6.607-4.187 11.36-4.187 14.257 0 1.66.618 2.491 1.855 2.491.989 0 1.978-.742 2.968-2.226zm21.225-10.653c.919 1.52 1.378 3.198 1.378 5.035 0 2.862-.989 5.424-2.968 7.685-1.978 2.226-4.31 3.339-6.996 3.339-2.049 0-3.657-.583-4.823-1.749-1.13-1.201-1.696-2.844-1.696-4.929 0-3.357 1.308-6.36 3.922-9.01 2.615-2.685 5.548-4.028 8.798-4.028.601 0 1.025.018 1.272.053l.159 1.749c-2.826 0-5.176.813-7.049 2.438-1.872 1.625-2.809 3.71-2.809 6.254 0 1.52.371 2.756 1.113 3.71.742.919 1.82 1.378 3.233 1.378 1.449 0 2.597-.636 3.445-1.908.848-1.272 1.272-2.756 1.272-4.452 0-1.731-.335-3.304-1.007-4.717l2.756-.848z"
                      fill="#1E293B" />
                  </svg>
                  <Link href="/">
                    <a className="text-gray-600  hover:text-blue-400 px-5 py-2 rounded-md text-sm font-medium" href="#">Archieve</a>
                  </Link>
                  <Link href="/">
                    <a className=" text-gray-600   hover:text-blue-400 px-5 py-2 rounded-md text-sm font-medium">Github</a>
                  </Link>
                  <Link href="/">
                    <a className=" text-gray-600  hover:text-blue-400 px-5 py-2 rounded-md text-sm font-medium">Download</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {active && <div className="sm:hidden flex flex-col text-center bg-white  pt-6 w-full">
        <Link href="/">
          <a className="text-gray-600  hover:text-blue-400  px-5 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>
        </Link>
        <Link href="/about">
          <a className="text-gray-600  hover:text-blue-400  px-5 py-2 rounded-md text-sm font-medium">About</a>
        </Link>
        <Link href="/contact">
          <a className=" text-gray-600 hover:text-blue-400 px-5 py-2 rounded-md text-sm font-medium">Contact</a>
        </Link>
        <Link href="/">
          <a className="text-gray-600  hover:text-blue-400 px-5 py-2 rounded-md text-sm font-medium" href="#">Archieve</a>
        </Link>
        <Link href="/">
          <a className=" text-gray-600   hover:text-blue-400 px-5 py-2 rounded-md text-sm font-medium">Github</a>
        </Link>
        <Link href="/">
          <a className=" text-gray-600  hover:text-blue-400 px-5 py-2 rounded-md text-sm font-medium">Download</a>
        </Link>
      </div>}
    </div>
  );
};
export default Header