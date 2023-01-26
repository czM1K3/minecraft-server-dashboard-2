import MinecraftApiController from "../../controllers/minecraftApi";

export const get = async () => {
	const data = await MinecraftApiController.PlayersRouteStripped();
	return {
		body: JSON.stringify(data),
	};
};
