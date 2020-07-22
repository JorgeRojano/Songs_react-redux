import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'Yo perreo sola', duration: '2:34'},
        { title: 'Sin pijama', duration: '3:05'},
        { title: 'Señorita', duration: '2:45'},
        { title: 'Rojo', duration: '4:45'}
    ];
};


const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})