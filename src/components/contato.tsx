import { Box, Typography } from '@mui/material';
import React from 'react';
import Modal from '@mui/material/Modal';
import { AiOutlineClose } from 'react-icons/ai';

export default function Contato({ open, onClose }: any) {
    const [openModal, setOpenModal] = React.useState(false);

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <div className="flex items-center justify-center">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                // className="flex h-1/2 w-1/2 border border-yellow-500 bg-white"
            >
                <Box className="bg-white">
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        <AiOutlineClose
                            className="cursor-pointer text-white"
                            onClick={onClose}
                        />
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
