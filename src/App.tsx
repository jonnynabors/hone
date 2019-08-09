import React, { useState } from "react";
import "./App.css";
import MarkdownIt from "markdown-it";

const App: React.FC = () => {
  const md = new MarkdownIt();
  const [markdown, setMarkdown] = useState(
    md.render("# Welcome to hOne \n ### Start Typing")
  );

  return (
    <div className="container">
      <textarea
        className="left"
        onChange={e => setMarkdown(md.render(e.target.value))}
      />
      <div
        className="right"
        dangerouslySetInnerHTML={{ __html: markdown || "<p>&nbsp;</p>" }}
      />
    </div>
  );
};

export default App;
