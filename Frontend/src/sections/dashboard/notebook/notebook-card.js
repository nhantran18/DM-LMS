import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  CardActionArea,
  Stack,
  Typography,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import { paths } from '../../../paths';
import { useState, useEffect } from 'react';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import { notebookApi } from '../../../api/notebook';

export const NotebookCard = (props) => {
  const {
    authorAvatar,
    authorName,
    votes,
    title,
    id,
    updatedAt
  } = props;

  const [votesValue, setVotesValue] = useState(votes);
  const [upVote, setUpVote] = useState([]);

  useEffect(() => {
    const updateNotebook = async() => {
      await notebookApi.putNotebook(id, {votes: votesValue})
      .then((response) => {console.log(response);})
      .catch(error => {
        console.error('Error putting data:', error);
      })
    }
    updateNotebook();
  }, [votesValue]); 

  return (
    <Card 
      variant="outlined"
      sx={{ width: 250, height: 235, borderColor: "text.disabled"}}
    >
      <CardActionArea href={paths.dashboard.model.details.replace(':modelId', id)}>
        <CardContent sx={{borderBottom: "1px solid", borderColor: "text.disabled"}}>
          <Typography color="text.primary" variant="h6" mb={2}>{title}</Typography>
          <Typography color="text.primary" variant="body2" sx={{ fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{authorName}</Typography> 
          <Typography color="text.primary" variant="body2" sx={{ fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Cập nhật mới nhất {updatedAt}</Typography> 
        </CardContent>
      </CardActionArea>
      <CardContent sx={{py: 1}}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" alignItems="center">
            <ToggleButtonGroup
              value={upVote}
              onChange={(e, value) => {
                setVotesValue(value.length == 1 ? votesValue+1 : votesValue-1);
                setUpVote(value);
              }}
            >
              <ToggleButton size="small" value={true}><KeyboardDoubleArrowUpOutlinedIcon fontSize='small'/></ToggleButton>
            </ToggleButtonGroup>
            <Typography color="text.primary" variant="h6" sx={{ ml: 1 }}>{votesValue}</Typography>
          </Stack>
          <Avatar src={authorAvatar} style={{width: 30, height: 30}}/>
        </Stack>
      </CardContent>
    </Card>

    
  );
};

NotebookCard.propTypes = {
  id: PropTypes.number.isRequired,
  authorAvatar: PropTypes.string,
  authorName: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
};
