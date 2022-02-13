import React, { useState } from "react";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import Modal from "react-modal";
import { ItemGroup, Item, ItemCost, Cross } from "./MadolSearchStyle";
import style from "./style.module.css";

const conditionData = [
  { title: "Categories", content: ["Pizza", "Pizza", "Pizza", "Pizza"] },
  { title: "Rating", content: ["4+", "4+", "4+", "4+"] },
  {
    title: "Sort By",
    content: ["Popularity", "Popularity", "Popularity", "Popularity"],
  },
];

const customStyles = {
  overlay: { zIndex: 999, background: "rgba(127,127,127,.7)" },
};

interface Props {
  modalSearchIsOpen: boolean;
  closeModalSearch: () => void;
}

function MadolSearch(props: Props) {
  return (
    <Modal
      isOpen={props.modalSearchIsOpen}
      onRequestClose={props.closeModalSearch}
      className={style.Modal}
      style={customStyles}
    >
      <Cross onClick={props.closeModalSearch}>
        <ImCross />
      </Cross>
      <ItemGroup>
        {conditionData.map((v, i) => {
          return (
            <Item key={i}>
              <h3 className="title">{v.title}</h3>
              {v.content.map((v, ind) => {
                return (
                  <div key={ind}>
                    {i === 2 ? (
                      <input type="radio" name="sort" />
                    ) : (
                      <input type="checkbox" />
                    )}
                    <span>{v}</span>
                  </div>
                );
              })}
            </Item>
          );
        })}
        <ItemCost>
          <h3 className="title">Cost per person</h3>
          <div className="costs">
            <div className="cost cost20">
              <span>20</span>
            </div>
            <div className="cost cost40">
              <span>40</span>
            </div>
          </div>
          <div className="line"></div>
        </ItemCost>
      </ItemGroup>
    </Modal>
  );
}

export default MadolSearch;