import React, { useState } from 'react';
import { SearchbarBox, Form, Button, Input } from './Searchbar.styled';
import { toast } from 'react-hot-toast';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBar = ({ onSubmit }) => {
  const [inputSearchName, setInputSearchName] = useState('');

  const handleNameChange = evt => {
    const target = evt.currentTarget.value.toLowerCase();
    setInputSearchName(target);

    const handleSubmit = evt => {
      evt.preventDefault();
      if (inputSearchName.trim() === '') {
        toast.error('Please, enter search word!', {
          position: 'top-center',
          duration: 2000,
        });
        return;
      }
      onSubmit(inputSearchName);
      setInputSearchName('');
    };
  };
  return (
    // onSubmit={handleSubmit}
    <SearchbarBox>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autocomplete="off"
          autoFocus
          value={inputSearchName}
          onChange={handleNameChange}
        />
        <Button type="submit">
          <AiOutlineSearch />
        </Button>
      </Form>
    </SearchbarBox>
  );
};
