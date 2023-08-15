import { useState } from "react";
import css from './SerchBox.module.css';

function SearchBox ({onSubmit}) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.currentTarget.value.toLowerCase());
  }

  const handleSubmit = event => {
    event.preventDefault();

      if (inputValue.trim() === '') {
        throw console.error('please put the movie name');
    }
      onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <button type="submit" className={css.searchFormButton}>
        <span className={css.searchForm_button_label}>Search</span>
      </button>

      <input
        className={css.searchForm__input}
        type="text"
        autoComplete="off"
        autoFocus
        name="imageName"
        placeholder="Search movies"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SearchBox;
