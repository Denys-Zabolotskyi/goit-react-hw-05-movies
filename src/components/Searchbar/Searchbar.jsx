import React, { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { Form, Button, Input } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-hot-toast';

export const SearchBar = ({ onSubmit }) => {
  const [inputSearchName, setInputSearchName] = useState('');

  const handleNameChange = evt => {
    const target = evt.currentTarget.value.toLowerCase();
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
  //////////////////useSearchParams////////////////
  // const [searchParams, setSearchParams] = useSearchParams({ searchName: '' });
  // const searchName = searchParams.get('searchName');
  // console.log(searchParams);

  // const handleSubmit = evt => {
  //   evt.preventDefault();
  //   if (searchName.trim() === '') {
  //     toast.error('Please, enter search word!', {
  //       position: 'top-center',
  //       duration: 2000,
  //     });
  //     return;
  //   }
  //   onSubmit(searchName);
  //   setSearchParams('');
  // };
  //////////////////useSearchParams////////////////

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleNameChange}
        // onChange={e =>
        //   setSearchParams({ searchName: e.currentTarget.value.trim() })
        // }
        value={inputSearchName}
      />
      <Button type="submit">
        <AiOutlineSearch />
      </Button>
    </Form>
  );
};
