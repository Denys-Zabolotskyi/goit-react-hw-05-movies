import React, { useState } from 'react';
import { Form, Button, Input } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-hot-toast';

export const SearchBar = ({ onSubmit }) => {
  const [inputSearchName, setInputSearchName] = useState('');

  const handleNameChange = evt => {
    const target = evt.currentTarget.value.toLowerCase();
    // console.log(target);
    setInputSearchName(target);
  };

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
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        autocomplete="off"
        placeholder="Search movies"
        onChange={handleNameChange}
        value={inputSearchName}
      />
      <Button type="submit">
        <AiOutlineSearch />
      </Button>
    </Form>
  );
};
