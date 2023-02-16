
import * as mockedJson from '../../assets/homes.json';
// export as a typescript array
export const MockedHomes = Array.from(mockedJson);

/**
 * This file retrieves the json data in the assets/homes.json file and exports it so that it is usable throughout the app
 *
 * In order for the import to work correctly, you must set add the following line to your tsconfig.json:
 * {
 *   "compilerOptions": {
 *     "resolveJsonModule": true      <-----
 *   }
 * }
 *
 */
