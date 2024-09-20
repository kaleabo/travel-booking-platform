import React from "react";

const Loading: React.FC = () => {
  const loadingItems = Array.from({ length: 6 }, (_, index) => (
    <div
      key={index}
      className="animate-pulse overflow-hidden rounded-xl border-0 bg-white dark:bg-black p-1 shadow transition-shadow hover:shadow-lg"
    >
      <div className="flex flex-col space-y-1.5 rounded-xl bg-gray-200 dark:bg-gray-900 p-6">
        <div className="h-6 w-32 rounded bg-gray-200 dark:bg-gray-900"></div>
      </div>
      <div className="p-3">
        <div className="mb-2 h-4 w-40 rounded bg-gray-200 dark:bg-gray-900"></div>
        <div className="mb-4 h-8 w-24 rounded bg-gray-200 dark:bg-gray-900"></div>
        <div className="h-10 w-full rounded bg-gray-200 dark:bg-gray-900"></div>
      </div>
    </div>
  ));

  return <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{loadingItems}</div>;
};

export default Loading;