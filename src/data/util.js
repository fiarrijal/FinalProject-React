//set user from the session storage
export const setUserSession = (user) => {
	sessionStorage.setItem("user", JSON.stringify(user));
};

//get user from the session storage
export const getUserSession = () => {
	const userStr = sessionStorage.getItem("user");
	if (userStr) {
		return JSON.parse(userStr);
	} else {
		return null;
	}
	// userStr ? JSON.parse(userStr) : null;
};

//remove user from the session storage
export const removeUserSession = () => {
	sessionStorage.removeItem(`user`);
};
