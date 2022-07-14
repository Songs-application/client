import { Avatar, Button, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import WestIcon from '@mui/icons-material/West';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import swal from 'sweetalert';
import { genres, Song } from '../../SongModel';
// import {  Validate, ValidationGroup } from 'mui-validate';

type Props = {
    addSong: (newSong: Song) => Promise<void>
}

export default function AddSong({ addSong }: Props) {
    const [newSong, setNewSong] = useState<Song>({title: "", artist: "", length: 0, price: 0, genre: "" });
    const navigate = useNavigate();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        console.log(newSong);
        addSong(newSong);
        swal("The song was successfully added")
        navigate('/')
    }

    const handleChange = (event: any) => {
        setNewSong({ ...newSong, genre: event.target.value })
    }
    return (
        <Box>
            <Typography component="div" variant="h5">
                Add New Song
            </Typography>

            {/* <ValidationGroup> */}
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <div>
                        {/* <Validate name='internal key 1' required> */}
                        <TextField
                            id="standard-basic"
                            label="title"
                            type="text"
                            variant="standard"
                            onChange={(e) => { setNewSong({ ...newSong, title: e.target.value }) }}
                        />
                        {/* </Validate> */}
                    </div>
                    <div>
                    {/* <Validate name='internal key 2' required> */}
                        <TextField
                            id="standard-basic"
                            label="artist"
                            type="text"
                            variant="standard"
                            onChange={(e) => { setNewSong({ ...newSong, artist: e.target.value }) }}
                        />
                         {/* </Validate> */}
                    </div>
                    <div>
                    {/* <Validate name='internal key 3' required> */}
                        <TextField
                            id="standard-number"
                            label="length"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            onChange={(e) => { setNewSong({ ...newSong, length: parseInt(e.target.value) }) }}
                        />
                        {/* </Validate> */}
                    </div>
                    <div>
                    {/* <Validate name='internal key 4' required> */}
                        <TextField
                            id="standard-number"
                            label="price"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            onChange={(e) => { setNewSong({ ...newSong, price: parseInt(e.target.value) }) }}

                        />
                        {/* </Validate> */}
                    </div>
                    <div>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-filled-label">genre</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label" value={newSong.genre} onChange={(e) => { handleChange(e) }}>
                                {genres.map((item, key) =>
                                    <MenuItem key={key} value={item} >{item}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </div>
                    <Stack spacing={2} alignItems={'center'}>
                        <Button variant="contained" type='submit'>Add</Button>
                    </Stack>
                </Box>
            {/* </ValidationGroup> */}
            <div style={{ marginLeft: 60 }}>
                <Avatar sx={{ alignSelf: 'self-start' }}>
                    <Button endIcon={<WestIcon />} onClick={() => { navigate("/") }}></Button>
                </Avatar>
            </div>

        </Box>

    );
}
