import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ setLocation }) => {
  let input = "";
  const onChangeHandler = e => {
    input = e.target.value;
  };
  const onClickHandler = () => {
    setLocation(input);
  };

  return (
    <>
      <input type="text" onChange={onChangeHandler} />
      <button onClick={onClickHandler}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </>
  );
};

export default Search;
