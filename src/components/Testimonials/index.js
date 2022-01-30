import React, { useState } from "react";
import styled from "styled-components";
import { formatUser } from "../../helpers";
import { device } from "../../themes/device";
import Icon from "../ui/Icon";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: relative;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primaryLight};
  border-radius: ${(props) => props.theme.borderRadius};
  @media ${device.mobileS} {
    padding: calc(${(props) => props.theme.spaceUnit} * 2);
    padding-top: calc(${(props) => props.theme.spaceUnit} * 6);
    margin: 0 calc(${(props) => props.theme.spaceUnit} * 2);
  }
  @media ${device.tablet} {
    margin: 0 calc(${(props) => props.theme.spaceUnit} * 4);
    padding: calc(${(props) => props.theme.spaceUnit} * 10);
  }
`;

const StyledIcon = styled(Icon)`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.3" : "1")};
  background-color: ${(props) => props.theme.colors.primaryLight};
  padding: calc(${(props) => props.theme.spaceUnit} * 2);
  border-radius: ${(props) => props.theme.borderRadius};
  :hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primaryLight};
  }
`;

const Avatar = styled.div`
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: 0;
  margin-top: -2.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: calc(${(props) => props.theme.borderRadius}*5);
  overflow: hidden;
  img {
    width: 5rem;
    height: 5rem;
  }
`;

const StyledComment = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${(props) => props.theme.colors.lightGrey};
  margin-bottom: 1.5rem;
`;

const StyledInfo = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 25px;
  line-height: 30px;
  color: ${(props) => props.theme.colors.grey};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StyledTitle = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.lightGrey};
`;

export default function Testimonials({ customers }) {
  const [currentStep, setCurrentStep] = useState(0);
  const prevStep = () => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const nextStep = () => {
    if (currentStep < customers.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <Wrapper>
      <StyledIcon
        disabled={currentStep === 0}
        primary
        name="ArrowLeft"
        onClick={() => prevStep()}
      />
      {customers?.map((customer, idx) => {
        return (
          currentStep === idx && (
            <InnerWrapper key={idx}>
              <Avatar>
                <img
                  alt={`${formatUser(customer)}_profilePicture`}
                  src={
                    customer?.customer_profile
                      ? customer?.customer_profile
                      : "https://everydaynutrition.co.uk/wp-content/uploads/2015/01/default-user-avatar.png"
                  }
                />
              </Avatar>
              <StyledComment>{customer.comment}</StyledComment>
              <StyledInfo>{formatUser(customer)}</StyledInfo>
              <StyledTitle>{customer.title}</StyledTitle>
            </InnerWrapper>
          )
        );
      })}
      <StyledIcon
        primary
        disabled={currentStep === customers.length - 1}
        name="ArrowRight"
        onClick={() => nextStep()}
      />
    </Wrapper>
  );
}
