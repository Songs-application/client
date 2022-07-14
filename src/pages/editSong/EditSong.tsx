import { Avatar, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import WestIcon from '@mui/icons-material/West';
import { useLocation, useNavigate } from 'react-router-dom';
import { genres, Song } from '../../SongModel';
import axios from 'axios-by-ts';

type Props = {
    updateSong: (songForEdit: Song) => Promise<void>
    getSongById: (id: string) => Promise<Song>
}


const EditSong = ({ updateSong, getSongById }: Props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [editSong, setEditSong] = useState<Song>({artist: "", title: "", length: 0, price: 0, genre: "" });
    console.log(genres)
    useEffect(() => {
        async function getSongByIdFromServer() {
            const idOfSong = location.state
            await axios.get<Song>(`http://localhost:8080/songs/${idOfSong}`)
                .then(response => {
                    console.log(response.data);
                    setEditSong(response.data);
                }).catch((e) => { console.log(e) })
        }
        getSongByIdFromServer();
    }, [])


    const handleSubmit = async (event: any) => {
        event.preventDefault();
        updateSong(editSong);
        navigate('/')
    }
    return (
        <Box
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                marginTop: 8,
            }}
        >
            <Typography component="div" variant="h5">
                Edit Song
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <div>
                    <TextField
                        id="standard-basic"
                        label="title"
                        type="text"
                        variant="standard"
                        value={editSong.title}
                        onChange={(e) => { setEditSong({ ...editSong, title: e.target.value }) }}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-basic"
                        label="artist"
                        type="text"
                        variant="standard"
                        value={editSong.artist}
                        onChange={(e) => { setEditSong({ ...editSong, artist: e.target.value }) }}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-number"
                        label="length"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                        value={editSong.length}
                        onChange={(e) => { setEditSong({ ...editSong, length: parseInt(e.target.value) }) }}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-number"
                        label="price"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                        value={editSong.price}
                        onChange={(e) => { setEditSong({ ...editSong, price: parseInt(e.target.value) }) }}
                    />
                </div>
                <div>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">genre</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={editSong.genre}
                            label="Genre"
                            onChange={(event: SelectChangeEvent) => { setEditSong({ ...editSong, genre: event.target.value }) }}
                        >
                            {genres.map((item, key) =>
                                <MenuItem key={key} value={item} >{item}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </div>
                <Stack spacing={2} alignItems={'center'}>
                    <Button variant="contained" type='submit'>Update</Button>
                </Stack>
            </Box>
            <div style={{ marginLeft: 60 }}>
                <Avatar sx={{ alignSelf: 'self-start' }}>
                    <Button endIcon={<WestIcon />} onClick={() => { navigate("/") }}></Button>
                </Avatar>
            </div>

        </Box>

    );
}
export default EditSong;