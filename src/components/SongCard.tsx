import { Stack } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Song } from '../SongModel';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

type Props={
  song:Song;
  deleteSong:(songId: string) => void
}

export default function SongCard({ song,deleteSong }: Props) {
  
  return (
    <Card sx={{ minWidth: 275, borderColor: 'black', borderRadius: '2px', marginTop: 2, marginLeft: 5, marginRight: 5 }}>
      <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom align='left'>
        {song.title}
      </Typography>
      <Stack display={'flex'} >
        <DeleteButton idForDelete={song.id?song.id:'0'} deleteSong={deleteSong}/>
        <EditButton songForEdit={song.id?song.id:'0'}/>
      </Stack>
      <Typography variant="h5" component="div" align='center'>
        {song.artist}
      </Typography>
      <Typography sx={{ mb: 1.5, fontSize: 18 }} color="text.secondary" align='right' >
        ₪{song.price}
      </Typography>
    </Card>
  );
}
