import React, { Component } from 'react'
import Card from '../components/Card'
import ethereum from '../assets/ethereum.jpg'
import portfolio2 from '../assets/portfolio2.png'
import surgiwiki from '../assets/surgiwiki.png'
import portfolio4 from '../assets/portfolio4.jpg'


export default class Portfolio extends Component {
  render() {
    return (
      <div className='container'>
          <div className='row justify-content-center'>
            <Card
                title="Decentralized Exchange"
                description="Live on Kovan Ethereum testnet. Deployed ERC20 token with symbol $LMAO. 
                            Deployed exchange contract. Users can trade $LMAO token againts Testnet ETH. 
                            Users can place buy/sell orders, or market buy/sell existing orders.
                            A candle chart is available to show recent trade history."
                stack={"Solidity, React, Redux, Ganache, Infura, Truffle, Bootstrap, Netlify"}
                website="https://lmao.shill.lol"
                github={"https://github.com/plabradorjr/lmao-token-and-exchange"}
                image={ethereum}
            />
            
          </div>
          <div className='row justify-content-center'>
            <Card
                title="Trending Cryptocurrency Currator"
                description="Users can view trending coins from Coingecko API,
                            search thousands of other cryptocurrencies,
                            post comments, login via twitter, and interact with
                            tradingview candle charts."
                website={"https://app.shill.lol"}
                github={"https://github.com/plabradorjr/shill_v0.2"}
                stack="React, Redux, Ruby on Rails, HighCharts, Bootstrap,
                            API, OAuth gem, Heroku, Netlify"
                image={portfolio2}
                youtube="https://youtu.be/B1-YHROsui8"
            />
          </div>
          <div className='row justify-content-center'>
            <Card
                title="Content and Photo Management System for Nurses"
                description="Users can create notes and inventories. Allows 
                            image upload hosted by Amazon Web Services.
                            Secured third party login via Twitter."
                stack={"Ruby on Rails, Amazon Web Services, SQL, Bootstrap"}
                website="https://surgi.wiki"
                github={"https://github.com/plabradorjr/surgi_app_rails"}
                image={surgiwiki}
                youtube="https://youtu.be/MkMiXls_E7g"
            />
          </div>
          <div className='row justify-content-center'>
            <Card
                title="E-commerce Store"
                description="Fully functional and automated e-commerce store.
                            Users around the world can purchase t-shirts and
                            all the fullfillments are automated. Approximate 
                            delivery in 10-20 business days. Credit cards and 
                            major cryptocurrencies are accepted as form of payments."
                stack={"Wordpress, Stripe, Coinbase, WooCommerce"}
                website="https://shill.lol"
                image={portfolio4}
            />
          </div>
           
      </div>
    )
  }
}
