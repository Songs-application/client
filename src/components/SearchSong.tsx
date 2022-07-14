import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchSong() {
  const [searchartist, setSearchartist] = useState('Enter Artist Name');
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(searchartist);
    navigate('/',{state:searchartist})
  };
  return (
    <Paper
      component="form"
      sx={{ p: '2px 2px', display: 'inline-flex', alignItems: 'center', width: 200 }}
      color='action'
      onSubmit={handleSubmit}
    >

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter Artist Name"
        inputProps={{ searchartist }}
        onChange={(e) => { setSearchartist(e.target.value); }} />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>

    </Paper>
  );
}
export default SearchSong