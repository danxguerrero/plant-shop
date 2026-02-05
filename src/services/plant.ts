import apiFetch from "./apiFetch";

export const getPlants = () => apiFetch("GET", "/plants");

export const getPlantById = ({ id }: {id: string | undefined}) => apiFetch("GET", `/plants/${id}`);
