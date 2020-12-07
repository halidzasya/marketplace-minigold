import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
// import { IconContext } from 'react-icons';
// import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 60vh;
  background: #fff;
`;

const Container = styled.div`
  position: absolute;
  top: 10%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1{
    padding: 2rem;
    font-size: 14px;
  }
  span {
    margin-right: 1rem;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: #00ffb9;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  p {
    font-size: 14px;
  }
`;

const Faq = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
   
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <i class="fas fa-minus" />:<i class="fas fa-plus"/>}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    
  );
};

export default Faq;