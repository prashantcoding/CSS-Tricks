//background-color: #101014
// inter san-serif font
import "./NavStyle.css";
import { CiUser } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className="nav__container">
      <div style={{display:"flex"}}>
      <div className="nav__logo">
        <svg fill="#fff" viewBox="0 0 54 32" xmlns="http://www.w3.org/2000/svg" ><path d="m9.826 16.384a2.991 2.991 0 0 0 -.878-.964 7.225 7.225 0 0 0 -1.384-.73l-2.2-.89a3.575 3.575 0 0 1 -.619-.309 1.18 1.18 0 0 1 -.37-.358 1.32 1.32 0 0 1 -.174-.482 4.142 4.142 0 0 1 -.05-.704c0-.577.1-.998.297-1.262.1-.132.23-.243.395-.333s.371-.136.618-.136c.264 0 .474.04.631.124.157.082.284.19.384.321.148.198.235.433.26.705.024.271.037.565.037.877h3.51c0-.89-.107-1.68-.32-2.373-.216-.692-.56-1.261-1.04-1.706-.79-.743-1.945-1.114-3.46-1.114-.678 0-1.279.095-1.807.284a4.617 4.617 0 0 0 -1.434.829 4.347 4.347 0 0 0 -1.186 1.681c-.264.66-.396 1.402-.396 2.226 0 .692.05 1.277.15 1.755.097.478.246.882.444 1.211.197.33.457.61.78.84.32.232.703.438 1.15.618l2.224.915c.313.133.57.256.767.371.198.116.354.26.47.433.114.173.192.396.234.667.041.272.062.614.062 1.027 0 .709-.115 1.203-.346 1.483-.23.297-.602.445-1.113.445-.28 0-.507-.041-.68-.124a1.213 1.213 0 0 1 -.408-.297 1.253 1.253 0 0 1 -.309-.668 6.197 6.197 0 0 1 -.062-.94h-3.51c0 .907.085 1.678.26 2.313.172.634.472 1.166.901 1.594.395.396.91.71 1.545.94s1.39.346 2.262.346c.874 0 1.612-.124 2.262-.37.651-.248 1.175-.561 1.57-.94.462-.445.767-.985.916-1.62.148-.634.222-1.397.222-2.287 0-.791-.045-1.46-.136-2.002-.09-.545-.247-1.01-.47-1.398v.002zm1.074-6.02h2.968v14.439h3.51v-14.44h2.968v-3.163h-9.446zm20.176 1.322a7.943 7.943 0 0 0 -.384-1.62 4.325 4.325 0 0 0 -.729-1.285 5.17 5.17 0 0 0 -1.508-1.262c-.61-.346-1.393-.519-2.349-.519-.955 0-1.739.173-2.348.52a5.172 5.172 0 0 0 -1.509 1.26c-.313.38-.556.808-.729 1.287a8.448 8.448 0 0 0 -.395 1.619 15.537 15.537 0 0 0 -.16 1.978 107.02 107.02 0 0 0 -.001 4.673c.017.717.07 1.376.16 1.978a8.5 8.5 0 0 0 .396 1.62c.173.478.417.906.73 1.285.417.513.93.941 1.508 1.261.61.347 1.392.52 2.348.52s1.74-.173 2.35-.52a5.17 5.17 0 0 0 1.507-1.26c.316-.384.563-.819.73-1.287.172-.477.3-1.017.383-1.62.082-.6.136-1.26.16-1.977a67.19 67.19 0 0 0 .038-2.337c0-.84-.013-1.62-.038-2.336a19.717 19.717 0 0 0 -.16-1.978zm-3.326 5.897c-.007.495-.027.99-.06 1.484-.035.462-.084.874-.15 1.236-.066.363-.149.642-.247.84-.1.198-.24.363-.42.495-.182.132-.437.198-.767.198s-.585-.066-.766-.198a1.348 1.348 0 0 1 -.42-.495c-.1-.198-.182-.477-.247-.84a11.407 11.407 0 0 1 -.149-1.236 26.059 26.059 0 0 1 -.062-1.484 93.742 93.742 0 0 1 0-3.164c.008-.528.03-1.022.062-1.484.033-.46.082-.873.15-1.236.064-.362.147-.642.246-.84.098-.198.238-.363.42-.495.181-.131.436-.198.766-.198s.585.067.767.198c.181.132.321.297.42.495.098.198.181.479.247.84.066.363.115.775.15 1.236.031.462.051.956.06 1.484.017 1.055.017 2.11 0 3.164zm14.126-1.298c.263-.338.465-.705.606-1.1.14-.396.235-.812.284-1.249.05-.437.074-.894.074-1.372 0-.84-.074-1.595-.223-2.262-.148-.668-.408-1.228-.779-1.682-.37-.453-.874-.804-1.508-1.05-.634-.248-1.43-.371-2.386-.371h-5.019v17.604h3.51v-6.849h1.163l2.15 6.849h3.66l-2.572-7.615c.398-.236.75-.542 1.04-.902zm-2.584-2.955c-.02.246-.079.488-.173.717-.09.214-.23.392-.42.532s-.45.21-.78.21h-1.483v-4.425h1.483c.33 0 .59.066.78.197.19.132.33.306.42.52s.148.454.173.717c.048.51.048 1.023 0 1.533zm13.626-2.966v-3.165h-8.11v17.604h8.11v-3.165h-4.598v-4.203h3.956v-3.165h-3.956v-3.906z"/></svg>
      </div>

      <div className="nav__links__container">
        <button className="nav__links">Clothes</button>
        <button className="nav__links">Music</button>
        <button className="nav__links">Toys</button>
      </div>
      </div>

      <div className="nav__links__container">
        <CiUser color="white" size={"1.4rem"} opacity={0.5} />
        <button className="nav__button">Login</button>
      </div>

      
    </div>
  );
};

export default NavBar;
