import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CPU from "./cpu";
import { system } from "systeminformation";
import Battery from "../battery";
import Mem from "../mem";

export default function Main() {
	const dispatch = useDispatch();
	const { data } = useSelector(state => state);

	return (
		<div>
			<Battery />
			<button
				onClick={() => dispatch({ type: "navigate", payload: "env" })}
				className="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal"
			>
				<h1>Get system info</h1>
				Env
			</button>
			<h2>{data.chassis.version || system.version}</h2>
			<p>
				{data.graphics.controllers.map((gpu, i) => (
					<span
						key={gpu.model}
						className={
							i + 1 !== data.graphics.controllers.length
								? "mr-3"
								: ""
						}
					>
						{gpu.model}
					</span>
				))}
			</p>
			{data.cpu && <CPU cpu={data.cpu} />}
			<p>{data.os.distro}</p>
			<h2>Memory</h2>
			{data.memLayout.map(mem => (
				<Mem {...mem} />
			))}
			{/* <p>Form factor: {data.memLayout[0].formFactor}</p>
			<p>Size: {Math.floor(data.memLayout[0].size / 1000000000)}gb</p>
			<p>Part number: {data.memLayout[0].partNum}</p>
			<p>Serial number: {data.memLayout[0].serialNum}</p> */}
		</div>
	);
}
