/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { ViewportProps, Source, Layer, InteractiveMap } from "react-map-gl";
// import { motion } from "framer-motion";
import "mapbox-gl/dist/mapbox-gl.css";
import usePilots from "hooks/usePilots";
import MapSidebar from "components/MapComponents/MapSidebar";
import { Pilot } from "types/Pilot";

interface Viewport extends Omit<ViewportProps, "width" | "height"> {
	width: string | number;
	height: string | number;
}

const Map = () => {
	const [activePilot, setActivePilot] = useState<undefined | Pilot>(undefined);
	const [viewport, setViewport] = useState<Viewport>({
		width: "100%",
		height: "100%",
		latitude: 53,
		longitude: -6,
		zoom: 5,
		altitude: 1000,
		bearing: 0,
		maxPitch: 60,
		maxZoom: 22,
		minPitch: 0,
		minZoom: 0,
		pitch: 0,
	});

	useEffect(() => {
		window.addEventListener("resize", () => {
			setViewport({
				...viewport,
				width: window.innerWidth,
				height: window.innerHeight,
			});
		});
	}, []);

	const pilots: any = usePilots();

	const pilotsLayer = {
		id: "pilotsLayer",
		type: "symbol",
		source: "pilots",
		paint: {},
	};

	const layout: any = {
		"icon-allow-overlap": true,
		"icon-image": "airport-15",
		"icon-size": 1,
		"icon-rotate": ["get", "heading"],
		"icon-rotation-alignment": "map",
	} as const;

	const handleClick = (event: any) => {
		const pilots: Pilot[] = event.features?.filter(
			(feature: any) => feature.source === "pilots"
		);
		console.log(event.features);
		if (pilots?.length) setActivePilot(pilots[0]);
	};

	return (
		<div id='map' style={{ height: "100vh", width: "100cw", display: "flex" }}>
			<InteractiveMap
				onViewStateChange={({ viewState }) => setViewport(viewState)}
				onNativeClick={(event: any) => handleClick(event)}
				mapStyle='mapbox://styles/markdoyle/cka8wroqr2wi61jo28l4vq2hd'
				{...viewport}
				onViewportChange={(nextViewport) => setViewport(nextViewport)}
			>
				{pilots && <Source id='pilots' type='geojson' data={pilots.data} />}
				{pilots && <Layer {...pilotsLayer} layout={layout} />}
			</InteractiveMap>
			<MapSidebar pilot={activePilot} />
		</div>
	);
};

export default Map;
