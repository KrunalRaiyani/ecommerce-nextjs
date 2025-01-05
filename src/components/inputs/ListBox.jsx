"use client";

import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { HiOutlineSelector, HiCheck } from "react-icons/hi";
import { useSearchParams } from "next/navigation";

const SortDropdown = ({ options }) => {
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort_by") || options[0].value;
  const [selectedSort, setSelectedSort] = useState(currentSort);

  const handleSortChange = (newSort) => {
    setSelectedSort(newSort);
    const newSearchParams = new URLSearchParams(searchParams);
    if (newSort === options[0].value) {
      newSearchParams.delete("sort_by");
    } else {
      newSearchParams.set("sort_by", newSort);
    }
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${newSearchParams.toString()}`
    );
  };

  return (
    <Listbox value={selectedSort} onChange={handleSortChange}>
      {({ open }) => (
        <div className="relative">
          <Listbox.Button className="border border-gray-300 text-sm font-semibold relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-pointer">
            <span className="block truncate">
              {options.find((option) => option.value === selectedSort)?.name}
            </span>
            <span className="absolute inset-y-0 flex items-center pointer-events-none right-0 pr-2">
              <HiOutlineSelector
                className="w-5 h-5 text-themeGray"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          {open && (
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-sm bg-white rounded-md shadow-lg max-h-60 ring-1 ring-themeBlack ring-opacity-5 focus:outline-none">
              {options.map((option) => (
                <Listbox.Option key={option.value} value={option.value}>
                  {({ selected, active }) => (
                    <div
                      className={`${
                        active
                          ? "text-amber-900 bg-themeMidGray"
                          : "text-themeBlack"
                      } cursor-default select-none relative py-2 pl-10 pr-4`}>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}>
                        {option.name}
                      </span>
                      {selected && (
                        <span
                          className={`${
                            active ? "text-amber-600" : ""
                          } check-icon absolute inset-y-0 left-0 flex items-center pl-3`}>
                          <HiCheck className="w-5 h-5" aria-hidden="true" />
                        </span>
                      )}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          )}
        </div>
      )}
    </Listbox>
  );
};

export default SortDropdown;
