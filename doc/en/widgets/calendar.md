# Calendar

[Back to README](../../../README.md#widget-documentation)

![Logo](../media/calendar.gif)

### Editor Settings

Settings that are not listed in the table below are self-explanatory.

<table>
    <thead>
        <tr>
            <th>Screenshot</th>
            <th>Setting</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=1><img src="../media/calendar_common.png"></td>
            <td>Object Id</td>
            <td>id of datapoint. Datapoint must contains a json string. Allowed json properties are desribed below</td>
        </tr>	
        <tr>
            <td rowspan=2><img src="../media/calendar_layout.png"></td>
            <td>days of the week to be shown</td>
            <td>Specifies which days of the week to display. To display Monday through Friday only, a value of <code>1, 2, 3, 4, 5</code> can be used. To display a week starting on Monday a value of <code>1, 2, 3, 4, 5, 6, 0</code> can be used.</td>
        </tr>
        <tr>
            <td>Object ID</td>
            <td>Object must be a json string, which must be structured as described above</td>
        </tr>
        <tr>
            <td rowspan=2><img src="../media/calendar_timeaxis.png"></td>
            <td>start hour</td>
            <td>The hour from which appointments should be displayed in the week and day view.</td>
        </tr>
        <tr>
            <td>end hour</td>
            <td>The hour until which appointments should be displayed in the week and day view</td>
        </tr>
        <tr>
            <td rowspan=2><img src="../media/calendar_custom_date.png"></td>
            <td colspan=2>Override the default date formats. Allowed formats are described in the documentation of <a href="https://momentjs.com/docs/#/displaying/">momentjs</a></td></td>
        </tr>		        
    </tbody>
</table>


### Datapoint JSON Properties

<table>
	<thead>
		<tr>
			<th>Property</th>
			<th>Description</th>
			<th>Type</th>
			<th>Values</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>name</td>
			<td>name of Event</td>
			<td>string</td>
			<td></td>
		</tr>
		<tr>
			<td>color</td>
			<td>background color of event</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
		</tr>
		<tr>
			<td>colorText</td>
			<td>text color of event</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
		</tr>
		<tr>
			<td>start</td>
			<td>start date and time of event. For all day events use only a date without time.</td>
			<td>string</td>
			<td>YYYY-MM-DD | YYYY-MM-DD HH:mm</td>
		</tr>
		<tr>
			<td>end</td>
			<td>end date and time of event. For all day events use only a date without time</td>
			<td>string</td>
			<td>YYYY-MM-DD | YYYY-MM-DD HH:mm</td>
		</tr>
	</tbody>
</table>

<!-- omit in toc -->
#### Datapoint JSON Properties - Example

<details>

```
[
	{
		"name": "Event",
		"color": "#e74c3c",
		"colorText": "#FFFFFF",
		"start": "2020-01-24",
		"end": "2020-01-26"
	},
	{
		"name": "Meeting",
		"color": "#717d7e",
		"colorText": "#FFFFFF",
		"start": "2020-03-23 16:00",
		"end": "2020-03-24 17:15"
	}
]
```

</details>

### Script: ical conversion

If you want to use the widget with the [ical adapter](https://github.com/iobroker-community-adapters/ioBroker.ical), you can use the following script to convert the ical object to work with the widget.

<details>

```
// momentjs is required as dependecies in javascript adapter
const moment = require("moment");

var instances = $(`[id=ical.*.data.table]`);
instances.on(ical2CalendarWidget);

// remove this, if you know to use your own datapoint
let datapointId = 'materialdesignwidgets.calendar.ical2calendar'
createState(datapointId, "[]", {
  read: true, 
  write: false, 
  desc: "JSON String for Calendar Widget", 
  type: "string", 
  def: "[]"
});

function ical2CalendarWidget() {
    try {
        let calList = [];

        for (var inst = 0; inst <= instances.length - 1; inst++) {
            let icalObj = getState(instances[inst]).val;

            if (icalObj) {
                for (var i = 0; i <= icalObj.length - 1; i++) {
                    let item = icalObj[i];

                    // extract calendar color
                    let calendarName = item._class.split(' ')[0].replace('ical_', '');

                    let startTime = moment(item._date);
                    let endTime = moment(item._end);
                    
                    let start = startTime.format("YYYY-MM-DD HH:mm");
                    let end = endTime.format("YYYY-MM-DD HH:mm");

                    if (startTime.format('HH:mm') === '00:00' && endTime.format('HH:mm') === '00:00') {
                        // is full-day event
                        if (endTime.diff(startTime, 'hours') === 24) {
                            // full-day event, one day
                            start = startTime.format("YYYY-MM-DD");
                            end = startTime.format("YYYY-MM-DD");
                        } else {
                            // full-day event, multiple days
                            start = startTime.format("YYYY-MM-DD");
                            end = endTime.format("YYYY-MM-DD");
                        }
                    }

                    // create object for calendar widget
                    calList.push({
                        name: item.event,
                        color: getMyCalendarColor(calendarName),
                        colorText: getMyCalendarTextColor(calendarName),
                        start: start,
                        end: end
                    })
                }

                function getMyCalendarColor(calendarName) {
                    // assign colors via the calendar names, use calendar name as set in ical
                    if (calendarName === 'calendar1') {
                        return '#FF0000';
                    } else if (calendarName === 'calendar2') {
                        return '#44739e'
                    } else if (calendarName === 'calendar3') {
                        return '#32a852'
                    }
                }

                function getMyCalendarTextColor(calendarName) {
                    // assign colors via the calendar names, use calendar name as set in ical
                    if (calendarName === 'calendar1') {
                        return '#FFFFFF';
                    } else if (calendarName === 'calendar2') {
                        return '#FFFFFF'
                    } else if (calendarName === 'calendar3') {
                        return '#FFFFFF'
                    }
                }
            }

            // Enter the destination data point that is to be used as object ID in the widget                
            setState(datapointId, JSON.stringify(calList), true);
        }
    } catch (e) {
        console.error(`ical2MaterialDesignCalendarWidget: message: ${e.message}, stack: ${e.stack}`);
    }
}

ical2CalendarWidget();
```

</details>
