import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

interface deleteBut {
    idForDelete: string
    deleteSong:(songId:string) =>void
}

const DeleteButton = ({ idForDelete ,deleteSong}:deleteBut) => {
    async function handleClick() {
      deleteSong(idForDelete);
    }  
    return (
        <Stack direction="row" spacing={2}>
            <Button endIcon={<DeleteIcon color='action' />} onClick={handleClick}>
            </Button>
        </Stack>
    );
}
export default DeleteButton