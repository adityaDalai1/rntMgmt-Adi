import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        borderRadius: 2,
        boxShadow: 3,
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1560523160-cb7c8db98d94"
        alt="Room"
        style={{ height: 200, objectFit: 'cover', width: '100%' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" color="primary" gutterBottom>
          <Link to={`/show-room/${room._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {room.name}
          </Link>
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Capacity: {room.capacity} people
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {room.description}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Button
          component={Link}
          to={`/show-room/${room._id}`}
          variant="contained"
          color="primary"
          size="small"
          fullWidth
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
};

export default RoomCard;
