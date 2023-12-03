import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (

    <Container>

        <Section
            title="Model S"
            description="Order Online For Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Customer Order"
            rightBtnText="Existing Inventory"
        />

        <Section
            title="Model Y"
            description="Order Online For Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Customer Order"
            rightBtnText="Existing Inventory"
        />

        <Section
            title="Model 3"
            description="Order Online For Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Customer Order"
            rightBtnText="Existing Inventory"
        />

        <Section
            title="Model X"
            description="Order Online For Touchless Delivery, From $71,090"
            backgroundImg="model-x.jpg"
            leftBtnText="Customer Order"
            rightBtnText="Existing Inventory"
        />

        <Section
            title="Solar Panels"
            description="Schedule a Virtual Consultation"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        />

        <Section
            title="Solar Roofs"
            description="Produce Clean Energy From Your Roof"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        />

        <Section
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Order Now"
        />

    </Container>

  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`