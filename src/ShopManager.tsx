import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { addSong, deleteById, getAllSongs, getSongById, getSongsByArtist, updateById } from "./api/songs.api";
import { Song } from "./SongModel";
import { getListOfSongs, myAddSong, myDeleteSong, myEditSong } from "./store/actions";
import AddSong from "./pages/addSong/AddSong";
import EditSong from "./pages/editSong/EditSong";
import SongsLandingPage from "./pages/songsLandingPage/SongsLandingPage";

const ShopManager = () => {
    const myList: Song[] = useSelector((state: any) => state.reducerSong.listSong);
    const dis = useDispatch();

    useEffect(() => {
        getSongsFromApiAndSendToRedux();
    }, [])

    const getSongsFromApiAndSendToRedux = async () => {
        const allSongs: Song[] = await getAllSongs();
        dis(getListOfSongs(allSongs));
    }

    const getSongsByArtistFromApi = async (artist: string) => {
        const allSongs: Song[] = await getSongsByArtist(artist);
        dis(getListOfSongs(allSongs));
    }

    const addSongToServer = async (newSong: Song) => {
        const song: Song = await addSong(newSong)
        dis(myAddSong(song));
    }

    const editSong = async (songForEdit: Song) => {
        const song: Song = await updateById(songForEdit);
        dis(myEditSong(song));
    }

    const deleteSong = async (songId: string) => {
        await deleteById(songId);
        dis(myDeleteSong(songId));
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