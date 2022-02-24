import React from 'react';
import styled from "styled-components"
import { Block1, Block2, Block3, Block4, Block5, Block6 } from '../images';

const H1 = styled.h1`
  margin-bottom: 50px;
  font-size: 30px;
  margin-top: 15px;
`
const H3 = styled.h3`
  text-transform: uppercase;
  font-weight: normal;
  font-size: 21px;
  letter-spacing: 0.7px;
  margin-bottom: 0;
`
const Section = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Main = styled.div`
  margin: 5px 0 0 15px;
`
const Block = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Item = styled.div`
  width: 25.33%;
  margin-bottom: 60px;
  display: flex;
  align-items: flex-start;
`
const Heading = styled.h4`
  margin: 0 0 10px;
`
const Icon = styled.img`
  height: 40px;
  width: 40px;
`
const Para = styled.div`
  font-size: 14px;
`

const data = [
  {
    heading: 'Block Title',
    icon: Block1,
    para: 'Franchising your restaurant business is risky big data gives you real insights in market dynamics & growth opportunities.'
  },
  {
    heading: 'Block Title',
    icon: Block2,
    para: 'See where you place among your competition. Geographically with ratings, and other factors. Compare to everyone in your city of operations.'
  },
  {
    heading: 'Block Title',
    icon: Block3,
    para: 'Get leads grouped by any criteria you like. Geography. Ranking. Chronology. All done automatically.'
  },
  {
    heading: 'Block Title',
    icon: Block4,
    para: 'Know how you price relative to the market with up to date studies of every competitor in your district, city or country.'
  },
  {
    heading: 'Block Title',
    icon: Block5,
    para: 'Know who your competitors are in your market, how they price, where they work and a wealth of other insights.'
  },
  {
    heading: 'Block Title',
    icon: Block6,
    para: 'We used data not just to know, but to predict where markets move. Get ahead of trend, not behind it.'
  }
]

const Subheading = () => (
  <Section>
    <H3>Subheading all caps</H3>
    <H1>This is another style of title header</H1>
    <Block>		
      { data.map((d, i) => 
        <Item key={i}>
          <Icon src={d.icon} />
          <Main>
            <Heading>{d.heading}</Heading>
            <Para>{d.para}</Para>
          </Main>
        </Item>
      )}
    </Block>
  </Section>
)

export default Subheading;