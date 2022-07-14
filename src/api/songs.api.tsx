import axios from "axios-by-ts";
import { Song } from "../SongModel";
import { getListOfSongs, myAddSong, myDeleteSong, myEditSong } from "../store/actions";

export const getAllSongsThunk = () => {
    return async (dispatch: any) => {
        try {
            const songs = await axios.get<Song[]>('http://localhost:8080/songs/all');
            dispatch(getListOfSongs(songs.data));
        }
        catch (err) {
            return err;
        }

    }
}

export const getSongsByArtistThunk = (artist: string) => {
    return async (dispatch: any) => {
        try {
            const songs = await axios.get<Song[]>(`http://localhost:8080/songs/byArtist/${artist}`)
            dispatch(getListOfSongs(songs.data));
        }
        catch (err) {
            return err;
        }
    }
}

export const deleteByIdThunk = (idForDelete: string) => {
    return async (dispatch: any) => {
        try {
            const res = await axios.delete<string>(`http://localhost:8080/songs/${idForDelete}`);
            dispatch(myDeleteSong(res.data));
        }
        catch (err) {
            return err;
        }
    }
}

export const updateThunk = (editSong: Song) => {
    return async (dispatch: any) => {
        const res = await axios({ url: `http://localhost:8080/songs/update`, method: 'PUT', data: editSong })
        dispatch(myEditSong(res.data))
    }
}

export const addSongThunk = (newSong: Song) => {
    return async (dispatch: any) => {
        try {
            const song = await axios({ url: `http://localhost:8080/songs/add`, method: 'POST', data: newSong });
            dispatch(myAddSong(song.data));
        }
        catch (err) {
            console.log(err)
            return err;
        }
    }
}

export const getSongById = async (idOfSong: any) => {
    try {
        const song = await axios.get<Song>(`http://localhost:8080/songs/${idOfSong}`)
        return song.data;
    }
    catch (err) {
        console.log(err)
        const s: Song = { title: "", artist: "", length: 0, price: 0, genre: "", id: "" };
        return s;
    }
}