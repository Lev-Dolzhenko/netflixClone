import requests from "../Requests";
import Row from "../components/Row";
import Main from "../components/Main";


function Home() {



  return (
    <>
      <Main />
      <Row rowId='1' title='UpComing' fetchURL={requests.requestUpcoming}/>
      <Row rowId='2' title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowId='3' title='Trending' fetchURL={requests.requestTrending}/>
      <Row rowId='4' title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row rowId='5' title='Horr' fetchURL={requests.requestHorror}/>
    </>
  );
}

export default Home;
