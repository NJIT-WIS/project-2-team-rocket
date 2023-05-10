import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-LERWW2ZVSY');
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}