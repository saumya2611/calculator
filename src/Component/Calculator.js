import React, { useState } from "react";
import Button from "./Button";

const Calculator = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [operation, setOperation] = useState("");
  const [bool, setBool] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const getValue = (num) => {
    console.log(num);

    if (bool === true) {
      let val = secondValue + num;
      console.log("val:setSecondValue:", val);
      setSecondValue(val);
      setInputVal(val);
    } else {
      let val = firstValue + num;
      console.log("val:setFirstValue:", val);
      setFirstValue(val);
      setInputVal(val);
    }
  };

  const saveOperation = (ope) => {
    console.log("ope========>", ope);
    setBool(true);
    setOperation(ope);
    setInputVal("");
  };

  const clearAll = () => {
    setFirstValue("");
    setSecondValue("");
    setInputVal("");
    setOperation("");
    setBool(false);
  };

  const calOperation = () => {
    console.log("Hello");

    if (operation === "+") {
      //   console.log("operation==========>", operation);
      //   console.log(firstValue, secondValue);
      setInputVal(Number(firstValue) + Number(secondValue));
      setFirstValue(Number(firstValue) + Number(secondValue));
      setSecondValue("");
    } else if (operation === "-") {
      setInputVal(Number(firstValue) - Number(secondValue));
      setFirstValue(Number(firstValue) - Number(secondValue));
      setSecondValue("");
    } else if (operation === "*") {
      setInputVal(Number(firstValue) * Number(secondValue));
      setFirstValue(Number(firstValue) * Number(secondValue));
      setSecondValue("");
    } else if (operation === "%") {
      setInputVal(Number(firstValue) % Number(secondValue));
      setFirstValue(Number(firstValue) % Number(secondValue));
      setSecondValue("");
    }
  };

  return (
    <div>
      <div className="h-[100vh] flex items-center justify-center">
        <div className="border border-neutral-400 w-[350px] sm:w-[500px] rounded-md shadow-2xl">
          <div>
            <input
              placeholder={bool ? "Enter Second Value" : "Enter First Value"}
              className="w-full px-5 py-7 rounded-sm outline-none text-3xl bg-black text-white"
              type="number"
              value={inputVal}
              disabled
            />
          </div>
          <div>
            <div className="flex justify-between">
              <Button
                title={"AC"}
                className={`border border-black text-white text-2xl bg-slate-500 py-4 w-[500px]`}
                onClick={clearAll}
              />
              <Button
                title={"%"}
                className={`border border-black w-[165px] bg-orange-400 text-2xl text-white`}
                onClick={() => saveOperation("%")}
              />
            </div>
            <div className="grid grid-rows-3 grid-flow-col">
              <Button
                title={"7"}
                className={`border border-black py-4 text-white text-2xl bg-slate-500`}
                onClick={() => getValue("7")}
              />
              <Button
                title={"6"}
                className={`border border-black text-white text-2xl bg-slate-500`}
                onClick={() => getValue("6")}
              />
              <Button
                title={"3"}
                className={`border border-black text-white text-2xl bg-slate-500`}
                onClick={() => getValue("3")}
              />
              <Button
                title={"8"}
                className={`border border-black text-white text-2xl bg-slate-500`}
                onClick={() => getValue("8")}
              />
              <Button
                title={"5"}
                className={`border border-black text-white text-2xl bg-slate-500`}
                onClick={() => getValue("5")}
              />
              <Button
                title={"2"}
                className={`border border-black text-white text-2xl bg-slate-500`}
                onClick={() => getValue("2")}
              />
              <Button
                title={"9"}
                className={`border border-black text-white text-2xl bg-slate-500`}
                onClick={() => getValue("9")}
              />
              <Button
                title={"4"}
                className={`border border-black text-white text-2xl bg-slate-500`}
                onClick={() => getValue("4")}
              />
              <Button
                title={"1"}
                className={`border border-black text-white text-2xl bg-slate-500`}
                onClick={() => getValue("1")}
              />
              <Button
                title={"*"}
                className={`border border-black bg-orange-400 text-white text-2xl `}
                onClick={() => saveOperation("*")}
              />
              <Button
                title={"-"}
                className={`border border-black bg-orange-400 text-white text-2xl`}
                onClick={() => saveOperation("-")}
              />
              <Button
                title={"+"}
                className={`border border-black bg-orange-400 text-white text-2xl`}
                onClick={() => saveOperation("+")}
              />
            </div>
            <div className="grid grid-rows-1 grid-cols-4">
              <Button
                title={"0"}
                className={`py-4 border border-black text-2xl text-white bg-slate-500`}
                onClick={() => getValue("0")}
              />
              <Button
                title={"00"}
                className={`border border-black text-2xl text-white bg-slate-500`}
                onClick={() => getValue("00")}
              />
              <Button
                title={"."}
                className={`border border-black text-2xl text-white bg-slate-500`}
                onClick={() => getValue(".")}
              />
              <Button
                title={"="}
                className={`border border-black text-2xl text-white bg-orange-400`}
                onClick={calOperation}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
