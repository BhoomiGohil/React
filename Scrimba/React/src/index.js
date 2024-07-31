import React from "react";
import ReactDOM from "react-dom";

// import MainContent from "./Practice1/MainContent";
// import "./Practice1/Index.css";

// import MainContent from "./Practice2/MainContent";

// import MainContent from "./Practice3/MainContent";
// import "./Practice3/Index.css";

// import MainContent from "./Practice4/MainContent";
// import "./Practice4/Index.css";

// import MainContent from "./Practice5/MainContent";

// import MainContent from "./Practice6/MainContent";

// import MainContent from "./Practice7/MainContent";
// import "./Practice7/Index.css";

// import MainContent from "./Practice8/MainContent";
// import "./Practice8/Index.css";

// import MainContent from "./Practice9/MainContent";
// import "./Practice9/Index.css";

// import MainContent from "./Practice10/MainContent";
// import "./Practice10/Index.css";

// import MainContent from "./Practice11/MainContent";
// import "./Practice11/Index.css";

// import MainContent from "./Practice12/MainContent";
// import "./Practice12/Index.css";

// import MainContent from "./Practice13/MainContent";
// import "./Practice13/Index.css";

// import MainContent from "./Practice14/MainContent";
// import "./Practice14/Index.css";

// import MainContent from "./Practice15/MainContent";
// import "./Practice15/Index.css";

// import MainContent from "./Practice16/MainContent";
// import "./Practice16/Index.css";

// import MainContent from "./Practice17/MainContent";
// import "./Practice17/Index.css";

// import MainContent from "./Practice18/MainContent";
// import "./Practice18/Index.css";

// import MainContent from "./Practice19/MainContent";
// import "./Practice19/Index.css";

// import MainContent from "./Practice20/MainContent";
// import "./Practice20/Index.css";

// import MainContent from "./Practice21/MainContent";
// import "./Practice21/Index.css";

// import MainContent from "./Practice22/MainContent";
// import "./Practice22/Index.css";

// import MainContent from "./Practice23/MainContent";
// import "./Practice23/Index.css";

// import MainContent from "./Practice24/MainContent";
// import "./Practice24/Index.css";

// import MainContent from "./Project-1/MainContent";
// import "./Project-1/Index.css";

// import MainContent from "./Project-2/MainContent";
// import "./Project-2/Index.css";

// import MainContent from "./Project-3/MainContent";
// import "./Project-3/Index.css";

// import MainContent from "./Project-4/MainContent";
// import "./Project-4/Index.css";

import MainContent from "./Project-5/MainContent";
import "./Project-5/Index.css";

// ------------------------------------- Render Elements on browser -------------------------------------
const rootElement = document.querySelector("#root");

if (!rootElement) throw new Error("Failed to find the root h1");

ReactDOM.render(
  <React.StrictMode>
    <MainContent />
  </React.StrictMode>,
  rootElement
);
