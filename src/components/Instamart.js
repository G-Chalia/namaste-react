import React, { useState } from "react";
const Section = (props) => {
  const { title, description, isVisible, toggleVisible } = props;

  // const toggleVisible = () => {
  //   setIsVisible(!isVisible);
  // };
  console.log("isvisible", isVisible);

  return (
    <div className="border border-black p-2 m-2">
      <div className="flex justify-between">
        <h1 className="text-3xl py-5 my-5 font-extrabold">{title}</h1>
        <button
          className="text-white text-xl bg-pink-900 rounded-lg my-9 px-16"
          onClick={() => toggleVisible()}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
      <h2 className="text-xl py-2 my-5 font-bold text-pink-500">
        {isVisible ? description : null}
      </h2>
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 text-red-500">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing."
        }
        isVisible={visibleSection === "about"}
        toggleVisible={() =>
          setVisibleSection(visibleSection === "about" ? "" : "about")
        }
      />
      <Section
        title={"Team Instamart"}
        description={
          "Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing."
        }
        isVisible={visibleSection === "team"}
        toggleVisible={() =>
          setVisibleSection(visibleSection === "team" ? "" : "team")
        }
      />
      <Section
        title={"Careers"}
        description={
          "Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing."
        }
        isVisible={visibleSection === "career"}
        toggleVisible={() =>
          setVisibleSection(visibleSection === "career" ? "" : "career")
        }
      />
    </div>
  );
};

export default Instamart;
