// contains constant variables
export const CHANGE_SEARCHFIELD = 'CHANGE_SEARCHFIELD';

/* Requesting the robots happens asynchronously:
   Pending: first request sent
   Success: request was successfull
   Failed: request failed/was bad
   Thus three constants created indicating what happens when one of the three actions happens
*/
export const REQUEST_ROBOTS_PENDING = 'REQUEST_ROBOTS_PENDING';
export const REQUEST_ROBOTS_SUCCESS = 'REQUEST_ROBOTS_SUCCESS';
export const REQUEST_ROBOTS_FAILED = 'REQUEST_ROBOTS_FAILED';