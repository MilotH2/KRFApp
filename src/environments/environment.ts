// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// const apiLink = 'https://localhost:5001/';
const apiLink = 'https://krf.azurewebsites.net/';

export const environment = {
  production: true,
  apiBase: `${apiLink}`,
  apiLink: `${apiLink}api/`,
  defaultProfilePicture: 'https://th.bing.com/th/id/OIP.K_tQkKfJQP7BQ4WY3oNRewHaIR?pid=ImgDet&rs=1'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
