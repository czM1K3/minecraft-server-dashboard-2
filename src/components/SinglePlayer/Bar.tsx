import type { FunctionalComponent } from "preact";
import { useMemo } from "preact/hooks";
import type { CSSProperties } from "preact/compat";

export enum BarType {
	hunger = "hunger",
	hearts = "heart",
}

type BarProps = {
	count: number;
	type: BarType;
};

const imageProperties = (mirror: boolean): CSSProperties => ({
	imageRendering: "pixelated",
	width: "20px",
	padding: "1px",
	transform: mirror ? `scaleX(-1)` : undefined,
});

const Bar: FunctionalComponent<BarProps> = ({ count, type }) => {
	const counts = useMemo(() => {
		const fixedCount = Math.ceil(count);
		return {
			full: Array(Math.floor(fixedCount / 2)).fill(""),
			hasHalf: Boolean(fixedCount % 2),
			empty: Array(Math.floor((20 - fixedCount) / 2)).fill(""),
		};
	}, [count]);

	return (
		<div style={{ fontSize: "20px" }}>
			{counts.full.map((_item, index) => (
				<img
					src={`/assets/full-${type}.png`}
					key={index}
					style={imageProperties(type === "hunger")}
				/>
			))}
			{counts.hasHalf && (
				<img
					src={`/assets/half-${type}.png`}
					style={imageProperties(type === "hunger")}
				/>
			)}
			{counts.empty.map((_item, index) => (
				<img
					src={`/assets/no-${type}.png`}
					key={index}
					style={imageProperties(type === "hunger")}
				/>
			))}
		</div>
	);
};

export default Bar;
