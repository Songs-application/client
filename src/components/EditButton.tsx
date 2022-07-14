import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Edit from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

interface editBut {
    songForEdit: string;
}

export default function EditButton({ songForEdit }: editBut) {
    const navigate = useNavigate();
    const handleClick = () => {
        console.log(songForEdit)
        navigate('/editSong', {state:songForEdit})
    }

    return (
        <Stack direction="row" spacing={2}>
            <Button endIcon={<Edit color='action' />} onClick={handleClick}>
            </Button>
        </Stack>
    );
}
