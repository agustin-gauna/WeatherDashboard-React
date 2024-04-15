import React from "react";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="w-full flex flex-col bg-white rounded-lg p-2 mt-2 max-h-80 overflow-y-auto">
      {results.map((result, id) => {
        return <div key={id}>{result.name}</div>;
      })}
    </div>
  );
};
