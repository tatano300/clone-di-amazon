import React from 'react'
import styled from 'styled-components'
import Product from './Product'

function Home() {
    return (
        <Container>
            <Banner>
                <BannerContent>
                    <Logo src="https://m.media-amazon.com/images/G/01/AmazonMusic/Logos/Tiers/AMU/AmazonMusic_Unlimited_TwoStack_Black.png" />
                    <OfferText>3 mesi di uso gratuito</OfferText>
                    <LimitedTime>Offerta a tempo limitato</LimitedTime>
                    <CTAButton>Scopri di più</CTAButton>
                </BannerContent>
            </Banner>
            <Content>
            <Grid>
              <Product 
              title="Cuffie Bluetooth"
                        description="Cuffie wireless con audio stereo"
                        price="€49.99"
                        image="https://primopromo.it/1341789-large_default/cuffie-bluetooth-in-plastica-riciclata-loop.jpg"
                  />
              <Product 
              title="Smartwatch"
                        description="Orologio intelligente con monitoraggio attività"
                        price="€89.99"
                        image="https://cdn.sectornolimits.com/i/huge/72278/sector-smartwatch-s03-r3251282002_v1n21a.jpg"
                        />
              <Product 
               title="Zaino Casual"
               description="Zaino resistente per laptop e viaggio"
               price="€60.00"
               image="https://www.trippodo.com/856935-large_default/wenger-swissgear-mx-eco-light-zaino-zaino-casual-grigio-plastica-riciclata.jpg"/>
              <Product 
               title="Tastiera Meccanica"
               description="Tastiera RGB con switch silenziosi"
               price="€80.00"
               image="https://breunor.com/cdn/shop/files/1_ae0f39c7-f423-411d-b25a-823291908736.jpg?v=1717667367"/>
              <Product 
               title="Lampada LED"
               description="Lampada smart con controllo vocale"
               price="€40.00"
               image="https://www.ledleditalia.it/wp-content/uploads/2023/02/lampadina-led-e27-a-tubo-a-spirale-20w-bianco-caldo-3000k-aigostar.jpg"/>
              <Product 
               title="Mouse Gaming"
               description="Mouse gaming ad alta precisione"
               price="€100.00"
               image="https://www.pcfrog.it/wp-content/uploads/2024/04/MOUS87520-20000206691.webp"/>
              <Product
               title="playstation 5"
               description="console di ultima generazione"
               price="€200.00"
               image="https://media.direct.playstation.com/is/image/psdglobal/PS5-Slim-Hero-4"/>
              <Product 
               title="joystick wireless xbox "
               description="joystick wireless verde "
               price="€20.00"
               image="https://www.e-stayon.com/images/thumbs/0225838_microsoft-controller-wireless-per-xbox-velocity-green.jpeg.webp"/>
              </Grid>
           </Content>
        </Container>
    )
}

export default Home

const Container = styled.div`
  width: 100%;
  
`

const Banner = styled.div`
  background-image: url('https://m.media-amazon.com/images/G/01/AmazonMusic/2024/Marketing/HOLPromos/HOL_SW_GC-95/LandingPage/DV21/Global_120424_HOLSW24_ACQ_LP_Slot1_D_3000x1200_BG.jpg');
  background-size: cover; /* Adatta l'immagine all'area */
  background-position: center; /* Centra l'immagine */
  min-height: 600px; /* Altezza minima */
  width: 100%; /* Occupa tutta la larghezza */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative; /* Necessario per posizionare il contenuto */
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0));
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0));
`

const BannerContent = styled.div`
  text-align: center;
  color: black;
  padding: 20px;
  border-radius: 10px;
  transform: translateY(-80px);
`

const Logo = styled.img`
  max-width: 200px; /* Limita la dimensione del logo */
  margin-bottom: 60px;
`

const OfferText = styled.h1`
  font-size: 40px;
  margin: 20px 0;
`

const LimitedTime = styled.h2`
  font-size: 24px;
  font-weight: lighter;
  margin: 20px 0;
`

const CTAButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: black; 
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #e07a00;
  }
`

const Content = styled.div`
  padding: 20px;
  margin-top: -50px;
  display: grid; /* Usa un layout a griglia */
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Adatta il numero di colonne */
  gap: 20px; /* Spaziatura tra i prodotti */
  justify-content: center; /* Centra la griglia */
  align-items: center; /* Centra verticalmente */ 
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Imposta le colonne in base allo spazio disponibile */
  gap: 20px; /* Spaziatura tra le card */
  justify-items: center; /* Centra le card nella griglia */
`;