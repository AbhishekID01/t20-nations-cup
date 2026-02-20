import React from "react";
import SectionHeader from "../components/SectionHeader";
import { mockTableData, tableHead } from "../assets/data";

const TablesDetailView = ({ onBack }) => {
  const getFormColor = (result) => {
    switch (result) {
      case "W":
        return "bg-green-500 text-zinc-900";

      case "L":
        return "bg-red-500 text-zinc-900";

      case "NR":
        return "bg-rose-500 text-zinc-900";

      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className=" col-span-4 row-span-3 flex flex-col p-2 h-full">
      {/* Section Header */}
      <SectionHeader title="Table" onBack={onBack} icon={true} />

      {/* MAIN Table */}
      <div className="flex-grow bg-gray-900 p-5 overflow-y-auto">
        <table className="min-w-full divide-y divide-zinc-700">
          {/* Head */}
          <thead className="sticky top-0 bg-gray-800 bg-opacity-90 z-10">
            <tr>
              {tableHead.map((item, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-3 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wide"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-gray-800">
            {mockTableData.map((row) => (
              <tr
                key={row.id}
                className={`group hover:bg-gray-950 cursor-pointer transition duration-150 ease-in-out ${row.id > 10 ? "bg-rose-500/80" : ""}`}
              >
                <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-white">
                  {row.id}
                </td>

                <td className="px-3 py-2 whitespace-nowrap text-sm font-extralight text-zinc-200 centered-row gap-2">
                  <img src={row.logo} alt="" className="w-6" />
                  {row.team}
                </td>

                <td className="px-3 py-2 whitespace-nowrap text-sm font-light text-zinc-200">
                  {row.played}
                </td>

                <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-zinc-200">
                  {row.won}
                </td>

                <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-zinc-200">
                  {row.lost}
                </td>

                <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-zinc-200">
                  {row.noResult}
                </td>

                <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-zinc-200">
                  {row.runsFor}
                </td>

                <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-zinc-200">
                  {row.runsAgainst}
                </td>

                {/* NRR */}
                <td
                  className={`px-3 py-2 whitespace-nowrap text-sm font-medium ${
                    row.nrr.startsWith("+")
                      ? "text-emerald-400"
                      : "text-rose-400"
                  }`}
                >
                  {row.nrr}
                </td>

                {/* Points */}
                <td className="px-3 py-2 whitespace-nowrap text-sm font-bold text-cyan-400">
                  {row.points}
                </td>

                {/* Form */}

                <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-zinc-200">
                  <div className="flex space-x-1">
                    {row.form.map((form, index) => (
                      <span
                        key={index}
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-xs  ${getFormColor(form)}`}
                      >
                        {form}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablesDetailView;
