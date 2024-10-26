"use client";

import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

const MarkDown = ({ source }: { source?: string }) => {
  return (
    <div className="bg-white md:p-4 rounded-xl">
      <MarkdownPreview source={source} className="bg-muted" />
    </div>
  );
};

export default MarkDown;
