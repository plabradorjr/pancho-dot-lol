import React, { Component } from "react";
import Card from "../components/Card";
// import ethereum from "../assets/ethereum.jpg";
// import portfolio2 from "../assets/portfolio2.png";
// import surgiwiki from "../assets/surgiwiki.png";
// import portfolio4 from "../assets/portfolio4.jpg";
import Navbar from "../components/Navbar";
import "./portfolio.css";
// import lilPudgy from "../assets/lilPudgy.png";

export default class Portfolio extends Component {
  render() {
    console.log("Henlo, wen job? plz hire me 😭");
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row text-center"></div>
          <div className="row justify-content-center">
            <div className="col text-center mt-5">
              <h1 id="hero">👋 Hello, here are some of my projects</h1>
            </div>
          </div>

          <div className="row justify-content">
            <Card
              title="Decentralized Token Exchange"
              description="A peer-to-peer marketplace where users can trade 
                cryptocurrencies in a non-custodial manner without the need for 
                an intermediary to facilitate the transfer and custody of funds.
                Deployed on Kovan and Polygon testnets"
              stack="Solidity, Ethers.js, React, Redux, Hardhat, Infura, Bootstrap"
              website="https://dex.pancho.lol"
              github={
                "https://github.com/plabradorjr/blockchain-developer-bootcampv2"
              }
              // image={ethereum}
            />

            <Card
              title="Trending Cryptocurrency Currator"
              description="Users can view trending coins from Coingecko API,
                            search thousands of cryptocurrencies,
                            post comments, login via twitter, and interact with
                            tradingview candle charts."
              website={"https://app.shill.lol"}
              github={"https://github.com/plabradorjr/shill_v0.2"}
              stack="React, Redux, Ruby on Rails, HighCharts, Bootstrap,
                            API, OAuth gem, Heroku, Netlify"
              // image={portfolio2}
              youtube="https://youtu.be/B1-YHROsui8"
            />

            <Card
              title="Content and Photo Management System for Nurses"
              description="Users can create notes and inventories. Allows 
                            image upload hosted by Amazon Web Services.
                            Provides secured third party login via Twitter."
              stack={"Ruby on Rails, Amazon Web Services, SQL, Bootstrap"}
              website="https://surgiwiki.pancho.lol/"
              github={"https://github.com/plabradorjr/surgi_app_rails"}
              // image={surgiwiki}
              youtube="https://youtu.be/MkMiXls_E7g"
            />

            <Card
              title="E-commerce Store"
              description="Fully functional and automated e-commerce store.
                            Users around the world can purchase t-shirts and
                            all the fullfillments are automated. Credit cards and 
                            major cryptocurrencies are accepted as form of payments."
              stack={"Wordpress, Stripe, Coinbase, WooCommerce"}
              website="https://shill.lol"
              // image={portfolio4}
            />
          </div>
          <div className="row justify-content-center">
            <Card
              title="Uniswap Triangular Arbitrage Bot"
              description="Easy to deploy triangular arbitrage bot for Uniswap Dex on 
              Optimism Layer. Find any three tokens to monitor prices, and execute 
              3 trades within seconds if profit is detected. 
              No deployment of solidity contract needed, all trading is handled 
              via javascript."
              stack={"Javascript, Ethers.js, Uniswap SDK, Alchemy"}
              github="https://github.com/plabradorjr/wethSnxOpArb"
            ></Card>
          </div>
        </div>
      </>
    );
  }
}
