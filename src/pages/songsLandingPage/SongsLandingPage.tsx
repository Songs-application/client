import SongCard from "../../components/SongCard"
import { Song } from "../../SongModel"
import { Button, Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import {useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

type PropsGet = {
    myList: Song[]
    deleteSong: (songId: string) =>void
    getByArtis: (artist: string) => void
    getSongs:()=>void
}

const SongsLandingPage = ({ myList, deleteSong, getByArtis ,getSongs}: PropsGet) => {
    const navigate = useNavigate();
    const [artist, setArtist] = useState("");
    const [allSongsBut,setAllSongsBut]=useState(false);
    console.log(myList);

    return (
        <div>
            <Grid container spacing={2} marginTop={5}>
                <Grid item xs={12} sm={6}>
                    <Typography component="div" variant="h4">The Songs Shop</Typography>
                </Grid>
                <Grid item xs={0.5} sm={5} display="flex">
                    {/* <SearchSong/> */}
                    <input type="text" placeholder="Enter Artist Name" value={artist} onChange={(e) => { setArtist(e.target.value) }} style={{ "height": 30 }}></input>
                    {!allSongsBut &&<button onClick={() => { getByArtis(artist); setAllSongsBut(true); }} style={{ "height": 35 }}>Search<SearchIcon /></button>}
                    {allSongsBut && <button style={{ "height": 35 }} onClick={()=>{setAllSongsBut(false);getSongs();}}>🎤All songs</button>}
                </Grid>

            </Grid>

            <Card sx={{ minWidth: 275, borderColor: 'black', borderRadius: '2px', marginTop: 2, marginLeft: 5, marginRight: 5 }} >
                <CardContent>
                    <Typography variant="h5" component="div" align='left'>
                        Title
                    </Typography>
                    <Typography variant="h5" component="div" align='center'>
                        Artist
                    </Typography>
                    <Typography variant="h5" component="div" align='right' >
                        Price
                    </Typography>
                </CardContent>
            </Card>
            
                {myList.length !== 0 ? myList.map(
                    (item: Song) => {
                        return (
                            <SongCard song={item} deleteSong={deleteSong} key={item.id} />
                        )
                    }) : <h1>No search results found</h1>}

            <div style={{ marginLeft: 60 }}>
                <Button endIcon={<ControlPointIcon />} color='info' size='large' onClick={() => { navigate("/addSong") }}>Add</Button>
            </div>

        </div >
    )
}
export default SongsLandingPage