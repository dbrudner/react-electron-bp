import React from "react";
import { useSelector } from "react-redux";

const List = ({ items }) => {
	console.log({ items });

	return items.map(item => (
		<li key={item[0]} className="flex flex-row bg-gray-200 items-stretch">
			<div className="flex-1 m-2">
				<p>{item[0]}</p>
			</div>
			<div className="flex-1 m-2">
				<p className="text-right">{item[1] || <>&mdash;</>}</p>
			</div>
		</li>
	));
};

export default function Versions() {
	const { versions } = useSelector(({ data }) => data);

	return (
		<div>
			<h2>Versions</h2>
			{versions && (
				<ul className="w-1/3 h-64 overflow-y-scroll border-solid border-4 border-gray-600">
					<List items={Object.entries(versions)} />
				</ul>
			)}
		</div>
	);
}
