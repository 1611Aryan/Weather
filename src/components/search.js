import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Styled from "styled-components";

const Search = ({ setLocation, location }) => {
  let input = "";
  const onChangeHandler = e => {
    input = e.target.value;
  };
  const onClickHandler = () => {
    setLocation(input);
  };

  return (
    <StyledSearchBar>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input type="text" onChange={onChangeHandler} defaultValue={location} />
        <button onClick={onClickHandler}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </StyledSearchBar>
  );
};

const StyledSearchBar = Styled.div`
width:60%;

form{
  width:100%;
  display:flex;
justify-content:center;
align-items:center;
}
&:hover,&:focus{
  input{
  border:0.5px solid black;
  border-right:none;
}
button{
  border:0.5px solid black;
  border-left:none;
}
  
}
input{
  flex:1;
  padding:0.9rem 0.7rem;
  border-radius:10px 0 0 10px;
  border:0;
  font-size:1.2rem;
&:focus{
  outline:0;
}
}
button{
  padding:0.9rem 1.2rem;
  border-radius:0 10px 10px 0;
  border:0;
  cursor:pointer;
  font-size:1.2rem;
  &:focus{
  outline:0;
}
}
`;

export default Search;
