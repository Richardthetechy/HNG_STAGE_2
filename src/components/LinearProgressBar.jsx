import { LinearProgress } from '@mui/material';
const LinearProgressBar = ({step}) => {
    const value = (step / 3) * 100
  return (
    <LinearProgress variant="determinate" value={value} sx={
                                {
                                        marginBottom: 1,
                                        height: 4,
                                        borderRadius: 5,
                                        backgroundColor: "#0E464F",
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#24A0B5',
                                        }
                                }
                        }/>
  )
}

export default LinearProgressBar