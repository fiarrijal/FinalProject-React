//set user from the session storage
export const setUserSession = (param, user) => {
	sessionStorage.setItem(param, JSON.stringify(user));
};

//get user from the session storage
export const getUserSession = (param) => {
	const userStr = sessionStorage.getItem(param);
	if (userStr) {
		return JSON.parse(userStr);
	} else {
		return null;
	}
	// userStr ? JSON.parse(userStr) : null;
};

//remove user from the session storage
export const removeUserSession = (param) => {
	sessionStorage.removeItem(param);
};

// format date locale Indonesia
export const formatDate = (dateString) => {
	const options = { year: "numeric", month: "long", day: "numeric" };
	return new Date(dateString).toLocaleDateString(`id-ID`, options);
};
