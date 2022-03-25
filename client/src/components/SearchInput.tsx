import { TextField } from '@mui/material';
import React from 'react';
import throttle from 'lodash/throttle';

type Props = {
  label: string;
  onChange: (term: string) => void;
};

const SearchInput = (props: Props) => {
  const { onChange, label } = props;

  const searchTermDebounce = throttle(onChange, 1500);

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    searchTermDebounce(target.value);
  };

  return <TextField style={{ padding: 16 }} autoFocus label={label} onChange={onInputChange} />;
};

export default SearchInput;
