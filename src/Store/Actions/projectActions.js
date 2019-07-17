export const createProject = project => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		//! Async call to DB
		const firestore = getFirestore();
		firestore
			.collection('projects')
			.add({
				...project,
				authorFirstName: 'Kenny',
				authorLastName: 'Howard',
				authorId: 12345,
				createdAt: new Date(),
			})
			.then(() => {
				dispatch({ type: 'CREATE_PROJECT', project });
			})
			.catch(err => {
				dispatch({ type: 'CREATE_PROJECT_ERROR', err });
			});
	};
};
