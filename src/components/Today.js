import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import dayjs from 'dayjs';

function Today() {
  const today = new Date();
  const formatedDay = dayjs(today).format('DD, MMM YYYY');
  const [day, setDay] = useState(formatedDay);

  useEffect(() => {
    setDay(formatedDay);
  }, [formatedDay]);

  return <H2>Today: {day}</H2>
}

const H2 = styled.h2`
  font-family: 'Segoe UI';
  font-weight: bold;
  color: #4f4f4f;
  font-size: 1.125rem;
  line-height: 1.50rem;
`;

export default Today;
