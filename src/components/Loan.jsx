import React from "react";
import {
  LoanSection,
  LoanContainer,
  LoanCenter,
  LoanTitle,
  LoanSubTitle,
} from "./styles/LoanSectionStyles";

export default function Loan(props) {
  const { loan } = props;
  return (
    <LoanSection>
      <div className="row">
        <LoanContainer>
          <LoanCenter>
            <LoanTitle color="red">{loan && loan.title}</LoanTitle>
            <LoanTitle color="blue">{loan && loan.title}</LoanTitle>
            <LoanTitle>{loan && loan.title}</LoanTitle>
            <LoanSubTitle href={loan && loan.cta.link}>
              {loan && loan.cta.title}
            </LoanSubTitle>
          </LoanCenter>
        </LoanContainer>
      </div>
    </LoanSection>
  );
}
