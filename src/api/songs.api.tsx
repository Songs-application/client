import axios from "axios-by-ts";
import { Song } from "../SongModel";

export const getAllSongs = async () => {
    try {
        const songs = await axios.get<Song[]>('http://localhost:8080/songs/all');
        return songs.data;
    }
    catch (err) {
        console.log(err);
        return [];
    }

}

export const getSongsByArtist= async (artist: string) => {
    try{
        const songs=await axios.get<Song[]>(`http://localhost:8080/songs/byArtist/${artist}`)
        return songs.data;
    }
    catch (err) {
        console.log(err);
        return [];
    }
}

export const deleteById = async (idForDelete: string) => {
    try {
        const res = await axios.delete<string>(`http://localhost:8080/songs/${idForDelete}`);
        return res.data;
    }
    catch (err) {
        console.log(err)
        return "";
    }

}

export const updateById = async (editSong: Song) => {
    try {
        const res = await axios({ url: `http://localhost:8080/songs/update`, method: 'PUT', data: editSong })
        return res.data;
    }
    catch (err) {
        console.log(err)
        return err;
    };
}

export const addSong = async (newSong: Song) => {
    try {
        const song = await axios({ url: `http://localhost:8080/songs/add`, method: 'POST', data: newSong })
        return song.data;
    }
    catch (err) {
        console.log(err)
        return err;
    }
}

export const getSongById = async (idOfSong: any) => {
    try {
        const song = await axios.get<Song>(`http://localhost:8080/songs/${idOfSong}`)
        return song.data;
    }
    catch (err) {
        console.log(err)
        const s:Song={title:"",artist:"",length:0,price:0,genre:"",id:""};
        return s;
    }
}