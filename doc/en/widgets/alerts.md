# Alerts

[Back to README](../../../README.md#widget-documentation)

Alerts widget can be used e.g. to display messages in the VIS, like it works with the pushover adapter, but directly in the VIS.

![Logo](../media/alerts.gif)

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
            <td rowspan=3><img src="../media/alerts_settings.png"></td>
            <td>number of columns</td>
            <td>define number of columns</td>
        </tr>
        <tr>
            <td>Object ID</td>
            <td>Object must be a json string. Allowed properties are described below</td>
        </tr>
        <tr>
            <td>max. Alerts</td>
            <td>max number of Alerts that should be shown.</td>
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
			<td>text</td>
			<td>text of menu item</td>
			<td>string</td>
			<td></td>
		</tr>
		<tr>
			<td>backgroundColor</td>
			<td>background color of alert item</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
		</tr>
		<tr>
			<td>borderColor</td>
			<td>border color of alert item</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
		</tr>
		<tr>
			<td>icon</td>
			<td>material design icon or image path for menu item</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>iconColor</td>
			<td>color of material design icon</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
		</tr>
		<tr>
			<td>fontColor</td>
			<td>font color of alert item</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
		</tr>
	</tbody>
</table>

<!-- omit in toc -->
#### Datapoint JSON Properties - Example

<details>

```
[
       {
		"text": "we have a new message",
		"backgroundColor": "",
		"borderColor": "darkred",
		"icon": "message-alert-outline",
		"iconColor": "darkred",
		"fontColor": "blue"
	}, {
		"text": "we have a new message",
		"backgroundColor": "#e6b0aa",
		"borderColor": "green",
		"icon": "/vis/img/bulb_on.png",
		"iconColor": "green",
		"fontColor": "gold"
	}, {
		"text": "we have a new message",
		"backgroundColor": "",
		"borderColor": "gold",
		"icon": "alert-outline",
		"iconColor": "gold",
		"fontColor": ""
	}
]
```

</details>

### Script: send alert to widget

With the following script you can send easy messages to datapoint that is used by the Alerts Widget.
The script must put into global scripts. Then it is possible to send message with the following command

`materialDesignWidgets.sendTo('datapoint_id', 'message', 'color');`

```


var materialDesignWidgets = {};
materialDesignWidgets.sendTo = function (id, text, backgroundColor = '', borderColor = '', icon = '', iconColor = '', fontColor = '') {
    let json = getState(id).val;
 
    if (json) {
        try {

            json = JSON.parse(json);

        } catch (e) {
            json = [];
            console.warn('Wert ist kein JSON string! Wert wird ersetzt!');
        }
    } else {
        json = [];
    }

    json.push(
        {
            text: text,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            icon: icon,
            iconColor: iconColor,
            fontColor: fontColor
        }
    )
    setState(id, JSON.stringify(json), true);
}
```
