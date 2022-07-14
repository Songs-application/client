import { Song } from "../SongModel";

export const myAddSong = (newSong: Song) => {
    return {
        type: "ADD_SONG",
        payload: newSong
    }
}

export const myEditSong = (songToEdit: Song) => {
    return {
        type: "EDIT_SONG",
        payload: songToEdit
    }
}

export const myDeleteSong = (id: string) => {
    return {
        type: "DELETE_SONG",
        payload: id
    }
}

export const getListOfSongs = (songs: Song[]) => {
    return {
        type: "GET_SONGS",
        payload: songs
    }
}


