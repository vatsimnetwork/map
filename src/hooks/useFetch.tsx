import { useState, useEffect } from "react";

const useFetch = (url: string, interval?: number): any => {
	const [data, setData] = useState<any>(undefined);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchUrl = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setData(data);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				setError(true);
			}
		};

		if (interval) {
			setInterval(async () => {
				fetchUrl();
			}, interval);
		}
		fetchUrl();
	}, []);

	return { data, loading, error };
};

export { useFetch };
