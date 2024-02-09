"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";
import Link from "next/link";
import { MOCK_SEARCH_RESPONSE } from "../lib/data";
import AppStoreInstance from "../lib/store";

const API_KEY = "7U2LFBWWPQ1U8H3U";

export default function Search({ placeholder }) {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (value) => {
    if (!value) {
      setSearchResults([]);
      return;
    }
    // const searchResults = await AppStoreInstance.fetchSearchResults(value);
    // setSearchResults(searchResults);
    setSearchResults(MOCK_SEARCH_RESPONSE.bestMatches);
  };
  const debouncedHandleSearch = useDebouncedCallback(handleSearch, 500);
  return (
    <div className="relative mx-auto w-full max-w-md">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="block w-[300px] rounded-[8px] border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(event) => {
          debouncedHandleSearch(event.target.value);
        }}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      {!!searchResults?.length && (
        <div className="z-10 absolute mt-1 w-full rounded bg-white shadow-lg ">
          <ul className="divide-y divide-gray-200">
            {searchResults.map((result) => {
              return (
                <li key={result.symbol}>
                  <Link
                    className="flex justify-between p-4"
                    href={`/${result.symbol}`}
                  >
                    <span className="font-medium">{result.symbol}</span>
                    <span>{result.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
