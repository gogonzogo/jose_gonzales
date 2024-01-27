import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import css from './Modal.module.css';
import SocialLinks from 'components/SocialLinks/SocialLinks';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, styled } from '@mui/material/styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '290px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CustomMenuIcon = styled(MenuIcon)(({ theme, fontSize }) => ({
  fontSize: fontSize || theme.typography.body1.fontSize,
}));

export default function TransitionsModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(480));

  const getFontSize = () => {
    if (isSmallScreen) {
      return '16px';;
    } else {
      return '30px';
    }
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <CustomMenuIcon
          className={css.menuIcon}
          sx={{ fontSize: getFontSize() }}
        />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <SocialLinks color='black'/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
