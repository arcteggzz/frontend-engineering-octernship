import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function InputPage() {
  const [textInput, setTextInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!textInput) {
      alert("Please enter a valid text");
      return;
    }
    if (!textInput.replace(/\s/g, "").length) {
      alert("Please enter a valid text");
      return;
    }
    navigate(`/display/${textInput}`);
  };

  useEffect(() => {
    setTextInput("");
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setTextInput(e.target.value)}
          value={textInput}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default InputPage;
