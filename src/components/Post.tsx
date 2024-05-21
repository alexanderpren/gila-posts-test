import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { PostProps } from '../interface/PostProps';

const Post: React.FC<PostProps> = ({ id, title, body }) => {
	return (
		<Card
			sx={{
				borderRadius: '8px',
				boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
				mb: 1,
			}}
		>
			<CardContent>
				<Typography variant="h5" component="div">
					Post ID: {id}
				</Typography>
				<Typography variant="h6" component="div">
					Title: {title}
				</Typography>
				<Typography variant="body1" component="div">
					Body: {body}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Post;
