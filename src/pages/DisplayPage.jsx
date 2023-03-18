import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./DisplayPage.css";

function DisplayPage() {
  const [textArray, setTextArray] = useState([]);
  const [success, setSuccess] = useState(false);
  const [originalText, setOriginalText] = useState("");
  const [finalText, setFinalText] = useState("");
  const { pathname } = useLocation();

  const handleDelete = (charObj) => {
    const newArray = textArray.filter(
      (obj) => !(obj.char === charObj.char && obj.id !== charObj.id)
    );
    setTextArray(newArray);
    let newStr = "";
    for (let i = 0; i < newArray.length; i++) {
      newStr = `${newStr}${newArray[i].char}`;
    }
    console.log(newStr);
    setFinalText(newStr);
    const findDuplicateWords = (str) => {
      const strArr = str.split(" ");
      const res = [];
      for (let i = 0; i < strArr.length; i++) {
        if (strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])) {
          if (!res.includes(strArr[i])) {
            res.push(strArr[i]);
          }
        }
      }
      return res.join(" ");
    };
    if (findDuplicateWords(newStr).length === 0) {
      setSuccess(true);
    }
  };

  useEffect(() => {
    const getInputText = () => {
      return pathname.substring(9, pathname.length);
    };
    const initialText = getInputText();
    setOriginalText(getInputText());
    setFinalText(getInputText());
    const objectArray = [];
    for (let i = 0; i < initialText.length; i++) {
      const item = { char: initialText[i], id: i };
      objectArray.push(item);
    }
    setTextArray(objectArray);
  }, []);
  console.log(finalText);
  return (
    <>
      {success ? <div>Success Header</div> : <></>}
      <Link to="/" className="linkButton">
        Go back to previous page
      </Link>
      <div>
        <p>{originalText}</p>
        <p>{finalText}</p>
      </div>
      <div className="card_container">
        {textArray.map((charObj) => {
          return (
            <>
              <div key={charObj.id} className="card">
                <p>{charObj.char}</p>
                <button onClick={() => handleDelete(charObj)}>Delete</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default DisplayPage;
