export const createProject = project => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		//! Async call to DB
		dispatch({ type: 'CREATE_PROJECT', project });
	};
};
