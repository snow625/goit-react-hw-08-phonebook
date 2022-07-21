import { memo } from "react";
import PropTypes from "prop-types";
import Button from "../../../shared/components/Button";
import s from "./contactItem.module.css";
function ContactItem(props) {
  const { number, name, onClick, id } = props;

  return (
    <li className={s.item}>
      <p>{`${name}: ${number}`}</p>
      <Button
        text="Detele"
        type="button"
        onClick={(e) => {
          onClick(id);
        }}
      />
    </li>
  );
}
ContactItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default memo(ContactItem);
