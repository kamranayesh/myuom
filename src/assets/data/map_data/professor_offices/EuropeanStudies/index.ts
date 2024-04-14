import third_floor from "./third_floor";
import fourth_floor from "./fourth_floor";
import { DEPARTMENT_CODES } from "../../../DepNames";
import { Location } from "../../../../../hooks/useMapData";
import { DepartmentLocations } from "..";

const locations: Location[] = [
  ...third_floor,
  ...fourth_floor,
];

const departmentLocations: DepartmentLocations = {
  department: DEPARTMENT_CODES.EUROPEAN_STUDIES,
  locations,
};

export default departmentLocations;