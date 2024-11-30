import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../services/location/location.context';

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  width: 100%;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchView>
      <Searchbar
        placeholder='Search for a location'
        icon='map'
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          //   if (!text.length) {
          //     return;
          //   }
          setSearchKeyword(text);
        }}
      />
    </SearchView>
  );
};
