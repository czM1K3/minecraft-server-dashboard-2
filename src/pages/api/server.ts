import MinecraftApiController from "../../controllers/minecraftApi";

export const get = async () => {
	const data = await MinecraftApiController.ServerRouteStripped();
	return {
		body: JSON.stringify(data),
	};
};
