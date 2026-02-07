import apiFetch from "./apiFetch";

export const addPlantToCart = ({plantId, quantity, potColor}:{plantId:number, quantity:number, potColor:string}) => apiFetch("POST", `/cart/plants/${plantId}`, { quantity:quantity, pot_color: potColor})

export const getCart = () => apiFetch('GET', '/cart');