import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {blue} from "@mui/material/colors";
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";


const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: blue[100],
    borderRadius: '15px',
    boxShadow: 24,
    p: 8,
};

export default function AboutProject() {

    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1= () => setOpen1(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2= () => setOpen2(false);

    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3= () => setOpen3(false);

    return (
        <>

        <Card sx={{ maxWidth: 345, bgcolor: blue[200], marginLeft: '16%', marginTop:'20%' }}>
            <CardMedia
                component="img"
                height="140"
                src="https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
                alt="heads"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Про мене
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Хто я такий взагали? Чим займаюсь? І що такого я зробив?
                </Typography>
            </CardContent>
            <CardActions>
                <div>
                    <Button onClick={handleOpen1}>View more</Button>
                    <Modal
                        open={open1}
                        onClose={handleClose1}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style1}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal 1
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                </div>
            </CardActions>


        </Card>

            <Card sx={{ maxWidth: 345, bgcolor: blue[200], marginLeft: '3%', marginTop:'20%' }}>
                <CardMedia
                    component="img"
                    height="140"
                    src="https://images.unsplash.com/photo-1556244573-c3686c0f0e78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                    alt="heads"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Використані веб технології
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       На чому саме побудовано сайт? Які особливості він має? Як ророблявся Дизайн?
                    </Typography>
                </CardContent>
                <CardActions>
                    <div>
                        <Button onClick={handleOpen2}>View more</Button>
                        <Modal
                            open={open2}
                            onClose={handleClose2}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style1}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a modal 2
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345, bgcolor: blue[200], marginLeft: '3%', marginTop:'20%' }}>
                <CardMedia
                    component="img"
                    height="140"
                    src="https://images.unsplash.com/photo-1620283084854-3585542e25ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt="heads"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Тематика сайту
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Чому саме интернет магазин? Актуальність на сьогодення.
                    </Typography>
                </CardContent>
                <CardActions>
                    <div>
                        <Button onClick={handleOpen3}>View more</Button>
                        <Modal
                            open={open3}
                            onClose={handleClose3}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style1}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a modal 3
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                </CardActions>
            </Card>

            </>
    );
}