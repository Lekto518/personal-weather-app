import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.open-meteo.com",
});

export default instance;