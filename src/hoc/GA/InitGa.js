import ReactGA from "react-ga"

export const initGa = () => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING);
    ReactGA.set({appName: 'Serranos', page: "/about"});
    ReactGA.pageview("/about");
}

export const updateGa = (path) => {
    ReactGA.set({appName: 'Serranos', page: path});
    ReactGA.pageview(path);
    console.log(path)
}