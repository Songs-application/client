import { Song } from "../SongModel"

export interface songArray {

    listSong: Song[];
}

type Action =
    | { type: "ADD_SONG", payload: Song }
    | { type: "EDIT_SONG", payload: Song }
    | { type: "DELETE_SONG", payload: string }
    | { type: "GET_SONGS", payload: Song[] }
    | { type: "GET_ARTIST_SONGS", payload: Song[] }

const initialization: songArray = { listSong: [] }

export const reducerSong = (state: songArray = initialization, action: Action) => {
    switch (action.type) {
        case "ADD_SONG":
            return {
                ...state,
                listSong: [...state.listSong, action.payload]
            }
        case "EDIT_SONG":
            console.log(action.payload)
            return {
                ...state,
                listSong: [...state.listSong.map((song: Song) =>{return( song.id === action.payload.id ?  action.payload : song)})]
            }
        case "DELETE_SONG":
            return {
                ...state,
                listSong: state.listSong.filter((song: Song) => song.id !== action.payload)
            }

        case "GET_SONGS":
            return {
                ...state,
                listSong: [...action.payload]
            }

        default: return { ...state }
    }
}
