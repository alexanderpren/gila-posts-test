import DataFetcher from './components/DataFetcher';
import { SnackbarProvider } from 'notistack';
import { ThemeCreatorProvider } from './context/ThemeCreatorProvider';

function App() {
	return (
		<>
			<SnackbarProvider>
				<ThemeCreatorProvider>
					<DataFetcher />
				</ThemeCreatorProvider>
			</SnackbarProvider>
		</>
	);
}

export default App;
