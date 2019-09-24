import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

// Create a new instance of User
const user = new User();

// Create a new instance of Company
const company = new Company();

// Create a new company map
const customMap = new CustomMap('map');

// Add the markers to the map for both user and company
customMap.addMarker(user);
customMap.addMarker(company);
