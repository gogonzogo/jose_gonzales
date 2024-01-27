import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import css from './Details.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, styled } from '@mui/material/styles';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const CustomExpandIcon = styled(IntegrationInstructionsIcon)(
  ({ theme, fontSize }) => ({
    fontSize: fontSize || theme.typography.body1.fontSize,
  })
);

const Accordion = styled(props => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled(props => (
  <MuiAccordionSummary
    expandIcon={<CustomExpandIcon fontSize={props.fontSize} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgb(3, 3, 3)' : 'darkgrey',
  flexDirection: 'row-reverse',
  justifyContent: 'center',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.3s ease',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Details() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(480));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between(481, 768));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between(769, 1024));
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const getFontSize = () => {
    if (isSmallScreen) {
      return '16px';
    } else if (isMediumScreen) {
      return '18px';
    } else if (isLargeScreen) {
      return '24px';
    } else {
      return '30px';
    }
  };

  return (
    <div className={css.detailsSection}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          fontSize={getFontSize()}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography style={{ fontSize: getFontSize() }}>About Me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{ fontSize: getFontSize() }}
            className={css.detailsSummary}
          >
            Hello, I'm Jose Gonzales, a dedicated and enthusiastic Full Stack
            Developer with a passion for creating meaningful and impactful
            digital experiences. My journey into the world of coding began with
            a background in business management, where I discovered the power of
            technology to solve complex problems. What started as a self-taught
            exploration soon evolved into a full-fledged career transition,
            fueled by a genuine love for coding.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          fontSize={getFontSize()}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography style={{ fontSize: getFontSize() }}>
            My Approach
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ fontSize: getFontSize() }}>
            I thrive on the intricacies of problem-solving and find joy in
            transforming ideas into tangible, functional applications. Whether
            it's building responsive web solutions, optimizing user experiences,
            or collaborating with dynamic teams, I am committed to delivering
            innovative solutions that make a positive impact.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          fontSize={getFontSize()}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography style={{ fontSize: getFontSize() }}>
            What Sets Me Apart
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ fontSize: getFontSize() }}>
            Having navigated the realms of business operations and management, I
            bring a unique perspective to development. My experience includes
            steering a small business and working as an operations manager,
            where I honed my skills in strategy development, KPI tracking, and
            continuous improvement. Now, as a Full Stack Developer, I leverage
            this diverse background to approach coding challenges with a
            holistic understanding of both business and technical requirements.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          fontSize={getFontSize()}
          aria-controls="panel4d-content"
          id="panel4d-header"
        >
          <Typography style={{ fontSize: getFontSize() }}>
            Tech Stack
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ fontSize: getFontSize() }}>
            Proficient in HTML, JavaScript, CSS, SCSS, and Node, I am
            well-versed in building responsive and visually appealing web
            applications. My technical toolkit includes a strong foundation in
            Full Stack development, ensuring end-to-end proficiency in both
            front-end and back-end technologies.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
