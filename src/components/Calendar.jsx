import React from 'react';

import Calendar from '@atlaskit/calendar';

const defaultPreviouslySelected = ['2020-12-06'];
const defaultSelected = ['2020-12-08'];

export default function Calendar1(){
	return (<Calendar
        minDate='2020-12-09'
		maxDate={'2020-12-25'}
		defaultPreviouslySelected={defaultPreviouslySelected}
		defaultSelected={defaultSelected}
		defaultMonth={12}
		defaultYear={2020}
		testId={'calendar'}
	/>)
};