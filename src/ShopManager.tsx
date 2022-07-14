import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { addSongThunk, deleteByIdThunk, getAllSongsThunk, getSongById, getSongsByArtistThunk, updateThunk } from "./api/songs.api";
import { Song } from "./SongModel";
import { getListOfSongs, myAddSong, myDeleteSong, myEditSong } from "./store/actions";
import AddSong from "./pages/addSong/AddSong";
import EditSong from "./pages/editSong/EditSong";
import SongsLandingPage from "./pages/songsLandingPage/SongsLandingPage";
import type { } from 'redux-thunk/extend-redux'

const ShopManager = () => {
    const myList: Song[] = useSelector((state: any) => state.reducerSong.listSong);
    const dis = useDispatch();

    useEffect(() => {
        getSongsFromApiAndSendToRedux();
    }, [])

    const getSongsFromApiAndSendToRedux = () => {
        // const allSongs: Song[] = await getAllSongs();
        dis(getAllSongsThunk());
    }

    const getSongsByArtistFromApi = (artist: string) => {
        // const allSongs: Song[] = await getSongsByArtist(artist);
        dis(getSongsByArtistThunk(artist));
    }

    const addSongToServer =(newSong: Song) => {
        // const song: Song = await addSong(newSong)
        dis(addSongThunk(newSong));
    }

    const editSong = async (songForEdit: Song) => {
        // const song: Song = await updateById(songForEdit);
        dis(updateThunk(songForEdit));
    }

    const deleteSong =(songId: string) => {
        // await deleteById(songId);
        dis(deleteByIdThunk(songId));
    }

    const getSongByIdFromApi = async (songId: any) => {
        return await getSongById(songId);
    }


    return (
        <Routes>
            <Route path='/' element={<SongsLandingPage myList={myList} deleteSong={deleteSong} getByArtis={getSongsByArtistFromApi} getSongs={getSongsFromApiAndSendToRedux}/>} />
            <Route path='/addSong' element={<AddSong addSong={addSongToServer} />} />
            <Route path='/editSong' element={<EditSong updateSong={editSong} getSongById={getSongByIdFromApi} />} />
        </Routes>
    )
}
export default ShopManager;