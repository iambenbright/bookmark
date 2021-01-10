import GoogleChromeSVG from '../../assets/images/logo-chrome.svg';
import FireFoxSVG from '../../assets/images/logo-firefox.svg';
import OperaSVG from '../../assets/images/logo-opera.svg';
import BgDots from '../../assets/images/bg-dots.svg';

export interface IExtension {
  id: number;
  image: string;
  title: string;
  body: string;
  backgroundDot: string;
  action: string;
}

export const data: IExtension[] = [
  {
    id: 1,
    image: GoogleChromeSVG,
    title: 'Add to Chrome',
    body: 'Minimum version 62',
    backgroundDot: BgDots,
    action: 'Add & Install Extension',
  },
  {
    id: 2,
    image: FireFoxSVG,
    title: 'Add to Firefox',
    body: 'Minimum version 55',
    backgroundDot: BgDots,
    action: 'Add & Install Extension',
  },
  {
    id: 3,
    image: OperaSVG,
    title: 'Add to Opera',
    body: 'Minimum version 46',
    backgroundDot: BgDots,
    action: 'Add & Install Extension',
  },
];
