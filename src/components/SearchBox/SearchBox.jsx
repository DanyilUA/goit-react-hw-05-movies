import css from './SerchBox.module.css';
import { useSearchParams } from 'react-router-dom';


function SearchBox({ onSubmit }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(query);
  };

const updateQueryString = evt => {
  const inputValue = evt.target.value;
  const nextParams = inputValue !== '' ? { query: inputValue } : {};
  setSearchParams(nextParams);
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
        value={query || ''}
        onChange={updateQueryString}
      />
    </form>
  );
};

export default SearchBox;


