export type PlantDataType = {
    botanical_name: string;
    care_instructions: string;
    description: string;
    id: number;
    images: [{ pot_color: string; src: string }];
    name: string;
    price: number;
  };