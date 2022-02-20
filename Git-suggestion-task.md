## TASK

```
You are mid/senior developer in some big long-term project A. You will be participating in this project for a long time. During the Scrum planning there was the following user story:

As external portal user

When I open external portal and the portal has widget from the project’s A

Then I should see red alert if the amount of fuel consumed by cars in the fleet with id=121 more than 10k litres during current month.

The information about the amount of litres will be receive through the following endpoint: https://new.world.com/fleet/121

With the contract:

{

“id”: number, //id of the fleet

“litres”: number, //the amount of fuel consumed by fleet

}

Later our PO (product owner, who is sales consultant in other department) want to add some more features to that widget and make it more customizable. But it will be much later. You agreed that one of the junior developers will take that user story. User story is delivered for code review. Junior developer has demonstrated it to PO and as PO opinion what he sees in the browser all is done well.

Here will be the code from the junior developer. Please make code review (take in account that is only the first of multiple future code reviews):


import React, { useEffect, useState } from 'react';

function App() {

    var [fuel, setFeul] = useState(0);

    var [alertText, setAlertTxt] = useState('Processing...');

    useEffect(() => {
        fetch('https://new.world.com/fleet/121')

        .then(response => response.json())

        .then(json => {

        setFeul(json);

        console.log(json);

        })
    });

    useEffect(() => {

        if (!fuel) setAlertTxt('Processing...'); else

        if (fuel.litres > 0) setAlertTxt('Need to buy more fuel'); else

        setAlertTxt('All is fine');

    }, [fuel])


    return (

        <div>

        <h1 style={alertText == 'Need to buy more fuel'? {color:"red"}:{}}>{alertText}</h1>

        </div>

    );
}

30:

export default App;

```

Line 15:

```
useEffect(() => {
    fetch('https://new.world.com/fleet/121')
        .then(response => response.json())
        .then(json => {
        setFeul(json);
        console.log(json);
        })
}, []);

```

Also it's good to add .catch to catch errors, when the endpoint doesn't work.

Line 19:
Since the red alert should be shown when the fuel consumed by fleet is greater than 10K, line 19 should be like this

```
if (fuel.litres > 10) setAlertTxt('Need to buy more fuel');
```

Line 25:
Use `===`

Minor comments:

Since we are adding the whole response in the JSON maybe rename fuel to the fleet and set the initial value as undefined.

```
var [fuel, setFeul] = useState(undefined)
```
