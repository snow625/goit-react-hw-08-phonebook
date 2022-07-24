import { memo } from "react";
import PropTypes from "prop-types";
import Button from "../../../../shared/components/Button";
import sprite from "../../../../images/svg/sprite.svg";
import s from "./contactItem.module.css";
function ContactItem(props) {
  const { number, name, onClick, id } = props;

  return (
    <li className={s.item}>
      <a className={s.link} href={`tel:${number}`}>
        <div className={s.wrapper}>
          <svg className={s.icon}>
            <use href={sprite + "#icon-user"} />
          </svg>
          <p className={s.name}>{name}</p>
        </div>
        <div className={s.wrapper}>
          <svg className={s.icon}>
            <use href={sprite + "#icon-phone"} />
          </svg>
          <p className={s.number}>{number}</p>
        </div>
      </a>

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
