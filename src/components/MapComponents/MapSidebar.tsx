import React from "react";
import { Pilot } from "types/Pilot";
import { motion } from "framer-motion";
// import styled from 'styled-components';

interface MapSidebarProps {
	pilot: Pilot | undefined;
}

const MapSidebar = ({ pilot }: MapSidebarProps) => {
	return (
		<div>
			{pilot && (
				<motion.div animate={{ width: 100 }}>
					{pilot && pilot.properties.callsign}
				</motion.div>
			)}
		</div>
	);
};

export default MapSidebar;
