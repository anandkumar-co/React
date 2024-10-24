import { useState } from "react";
import PropTypes from "prop-types";
function Botton(props) {
  const [name, setName] = useState(props.name);
  function ChangeName() {
    setName("shani");
  }
  return (
    <div>
      HEllo {name} {props.lastname}
      <button onClick={ChangeName}>Change name</button>
    </div>
  );
}
Botton.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

export default Botton;
