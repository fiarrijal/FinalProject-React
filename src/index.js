import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

axios.defaults.baseURL = "https://b919a564-1891-4805-b107-e898f6cd91a2.mock.pstmn.io";
axios.defaults.headers.get["Accept"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

axios.interceptors.response.use(
	({ data }: AxiosResponse) => {
		return data;
	},
	(error: any) => {
		console.log("something wrong! ", error);
	}
);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
