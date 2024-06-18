import React, { useState } from "react";
import "./subTitle.css";
import CustomSelect from "../../commonComponents/customSelectComponent/customSelect";

function SubTitle(props) {
  const [select, setSelect] = useState("");
  const tablet = window.matchMedia("(max-width:1000px)").matches;
  const mobile = window.matchMedia("(max-width:768px)").matches;

  const handleChange = (value) => {
    setSelect(value);
  };

  const selectOptions = [
    { id: "", label: "RECOMMENDED" },
    { id: 10, label: "NEWEST FIRST " },
    { id: 20, label: "POPULAR" },
    { id: 30, label: "PRICE : HIGH TO LOW" },
    { id: 40, label: "PRICE : LOW TO HIGH" },
  ];

  return (
    <div className="subTitMainBox">
      {mobile ? (
        <div className="subTitSubBox">
          <span
            style={{
              fontSize: mobile ? "13px" : "15px",
              fontFamily: "SimplonNorm",
              fontWeight: 700,
            }}
          >
            FILTER
          </span>
        </div>
      ) : (
        <>
          <div className="subTitSubBox">
            <span
              style={{
                fontSize: tablet ? "15px" : "18px",
                fontFamily: "SimplonNorm",
                fontWeight: 700,
              }}
            >
              {props.cardData?.length} Items
            </span>
            <button
              onClick={props.handleSideBar}
              className="hideShowBtn"
              style={{
                fontSize: tablet ? "14px" : "16px",
                fontFamily: "SimplonNorm",
              }}
            >
              <i
                className={
                  props.showSideBar ? "fa fa-angle-left" : "fa fa-angle-right"
                }
                aria-hidden="true"
              ></i>
              <span className="hideShowText">
                {props.showSideBar ? "HIDE FILTER" : "SHOW FILTER"}
              </span>
            </button>
          </div>
        </>
      )}
      <div className="recommendedBox">
        <CustomSelect
          select={select}
          handleChange={handleChange}
          selectOptions={selectOptions}
          mobile={false}
          tablet={false}
        />
      </div>
    </div>
  );
}

export default SubTitle;
