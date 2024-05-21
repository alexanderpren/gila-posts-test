import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
import { getPosts } from '../api/getData';
import useApiCall from '../hooks/useApiCall';
import { IPost } from '../interface/IPost';
import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Post from './Post';
import ThemeButton from './ThemeButton';
import { useThemeState } from '../hooks/useThemeState';

const DataFetcher = () => {
	const { enqueueSnackbar } = useSnackbar();
	const theme = useTheme();
	const { loading, error, data } = useApiCall<IPost[]>(getPosts);
	const [posts, setPosts] = useState<IPost[]>([]);
	const { themeMode } = useThemeState();

	useEffect(() => {
		if (data && data.length > 0 && !posts.length) {
			setPosts(data);
		}
	}, [data, posts, setPosts]);

	const memoizedPosts = useMemo(() => posts, [posts]);

	const displayError = useCallback(() => {
		if (error) {
			enqueueSnackbar(error, { variant: 'error' });
		}
	}, [error, enqueueSnackbar]);

	useEffect(() => {
		displayError();
	}, [displayError]);
	return (
		<Box sx={{ backgroundColor: themeMode === 'dark' ? '#000' : '#aabbec' }}>
			<ThemeButton />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					mt: 2,
					mb: 1,
					color: theme.palette.text.primary,
				}}
			>
				<Typography variant="h3">Posts</Typography>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
				{loading && <CircularProgress />}
				{error && enqueueSnackbar(error, { variant: 'error' })}
				{memoizedPosts.length > 0 && (
					<Box>
						{memoizedPosts.map((post: IPost) => (
							<Post
								key={post.id}
								id={post.id}
								title={post.title}
								body={post.body}
							/>
						))}
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default DataFetcher;
