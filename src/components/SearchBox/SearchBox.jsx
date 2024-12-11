import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={s.box}>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default SearchBox;
