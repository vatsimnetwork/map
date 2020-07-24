import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import { PilotsGeojson } from "types/Pilot";

interface PilotProps {
	data: PilotsGeojson;
	error: Error;
}

const usePilots = () => {
	const [result, setResult] = useState<undefined | PilotsGeojson>(undefined);
	const url = "https://map-dev.vatsim.net/api/v1/online/pilots";

	const { data, error }: PilotProps = useFetch(url, 15000);

	useEffect(() => {
		if (data) {
			setResult(data);
		} else if (error) {
			console.log(error);
		}
	}, [data, error]);

	return result;
};

export default usePilots;
