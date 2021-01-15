import Layout from '../components/Layout';
import Prices from '../components/Prices';
import Fetch from 'isomorphic-unfetch';
const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to Bitcoin Prices</h1>
            <p>Check current Bitcoin rate</p>
            <Prices bpi={props.bpi} />  
            {/* {props.bpi.bpi.USD.code} */}
        </div>
    </Layout>
)

Index.getInitialProps = async function(){
    const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    const data = await res.json();
    console.log(data)
    return {
        bpi: data.bpi
    };
}

export default Index;