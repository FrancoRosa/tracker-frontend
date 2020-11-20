export const SET_USER = 'SET_USER';
export const SET_ERROR = 'SET_ERROR';
export const SET_TRACKS = 'SET_TRACKS';
export const SET_TRACK = 'SET_TRACK';
export const SET_RECORDS = 'SET_RECORDS';

export const setUser = user => (
  {
    user,
    type: SET_USER,
  }
);

export const setError = error => (
  {
    error,
    type: SET_ERROR,
  }
);

export const setTracks = tracks => (
  {
    tracks,
    type: SET_TRACKS,
  }
);

export const setTrack = track => (
  {
    track,
    type: SET_TRACK,
  }
);

export const setRecords = records => (
  {
    records,
    type: SET_RECORDS,
  }
);
