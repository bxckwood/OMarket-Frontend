import { FC, useState } from "react";

import { ReactComponent as ArrowDown } from "../../resources/dropdown/arrowdown.svg";

import styles from "../Dropdown/Dropdown.module.scss";

const Dropdown: FC = ({dataDropdown}: any) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSelectedItem, setIsSelectedItem] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any>("");

  return (
    <div
      onClick={() => setDropdownOpen((prev) => !prev)}
      className={
        dropdownOpen ? `${styles.dropdown} ${styles.active}` : styles.dropdown
      }
    >
      <div className={styles.dropdownTitle}>
        <span>
          {isSelectedItem ? (
            <div className={styles.chosenItem}>
              {selectedItem.img}
              <span>{selectedItem.item}</span>
            </div>
          ) : (
            dataDropdown.title
          )}
        </span>
        <ArrowDown />
      </div>
      <div
        className={
          dropdownOpen
            ? `${styles.dropdownContent} ${styles.active}`
            : styles.dropdownContent
        }
      >
        {dropdownOpen &&
          dataDropdown.select.map((elem: any, index: any) => {
            const { item, img } = elem;
            return (
              <div
                onClick={() => {
                  setIsSelectedItem(true);
                  // @ts-ignore
                  setSelectedItem(dataDropdown.select[index]);
                }}
                className={styles.dropdownItem}
                key={index}
              >
                {img}
                <span>{item}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Dropdown;
