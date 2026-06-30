# List

[Back to README](../../../README.md#widget-documentation)

![Logo](../media/list.gif)

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
            <td rowspan=4><img src="../media/list_settings_layout.png"></td>
            <td>type of list</td>
            <td>control type of list like checkbox, button state, button toggle, etc.</td>
        </tr>
        <tr>
            <td>divider style</td>
            <td>style of the divider</td>
        </tr>
        <tr>
            <td>layout</td>
            <td>standard or card layout</td>
        </tr>
        <tr>
            <td>show scollbar</td>
            <td>show scrollbar if necessary</td>
        </tr>
        <tr>
            <td rowspan=4><img src="../media/list_settings_data.png"></td>
            <td>input method for the list data</td>
            <td>use the editor or a json string to define the items</td>
        </tr>
        <tr>
            <td>Editor: count of list items</td>
            <td>count of list items using the editor</td>
        </tr>
        <tr>
            <td>JSON-String: object id</td>
            <td>object id of datapoint containing json string. Allowed properties are described below</td>
        </tr>						 			 		        
    </tbody>
</table>

### Data JSON Properties

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
			<td>objectId</td>
			<td>id of datapoint</td>
			<td>string</td>
			<td></td>
		</tr>
		<tr>
			<td>buttonStateValue</td>
			<td>value for button if list is from type button state</td>
			<td>string</td>
			<td></td>
		</tr>		
		<tr>
			<td>buttonNavView</td>
			<td>view for button if list is from type button navigation</td>
			<td>string</td>
			<td></td>
		</tr>
		<tr>
			<td>buttonLink</td>
			<td>link adresse for button if list is from type button link</td>
			<td>string</td>
			<td></td>
		</tr>		
		<tr>
			<td>header</td>
			<td>header text of item</td>
			<td>string</td>
			<td></td>
		</tr>	
		<tr>
			<td>text</td>
			<td>primary text</td>
			<td>string</td>
			<td></td>
		</tr>
		<tr>
			<td>subText</td>
			<td>secondary text</td>
			<td>string</td>
			<td></td>
		</tr>
		<tr>
			<td>rightText</td>
			<td>primary right text</td>
			<td>string</td>
			<td></td>
		</tr>
		<tr>
			<td>rightSubText</td>
			<td>secondary right text</td>
			<td>string</td>
			<td></td>
		</tr>
		<tr>
			<td>image</td>
			<td>material design icon or image path</td>
			<td>string</td>
			<td></td>
		</tr>
		<tr>
			<td>imageColor</td>
			<td>color of material design icon</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
		</tr>
		<tr>
			<td>imageActive</td>
			<td>material design icon or image path if datapoint is active</td>
			<td>string</td>
			<td></td>
		</tr>
		<tr>
			<td>imageActiveColor</td>
			<td>color of material design icon if datapoint is active</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
		</tr>			
		<tr>
			<td>showDivider</td>
			<td>show divider</td>
			<td>boolean</td>
			<td>false | true</td>
		</tr>
		<tr>
			<td>listOverflow</td>
			<td>automatically adjust column width to value</td>
			<td>boolean</td>
			<td>false | true</td>
		</tr>
	</tbody>
</table> 

<!-- omit in toc -->
#### JSON Properties - Example

<details>
<pre><code>
[
	{
		"text": "item0",
		"subText": "{0_userdata.0.MDW.list.bind0}",
		"rightText": "right",
		"rightSubText": "",
		"image": "clock-check-outline",
		"imageColor": "#44739e",
		"imageActive": "",
		"imageActiveColor": "",
		"header": "JSON",
		"showDivider": "false",
		"objectId": "0_userdata.0.MDW.list.bool.val0",
		"buttonStateValue": "",
		"buttonNavView": "",
		"buttonLink": "",
		"listOverflow": false
	}, {
		"text": "item1",
		"subText": "{0_userdata.0.MDW.list.bind1}",
		"rightText": "right",
		"rightSubText": "",
		"image": "clock-check-outline",
		"imageColor": "#44739e",
		"imageActive": "",
		"imageActiveColor": "",
		"header": "",
		"showDivider": "false",
		"objectId": "0_userdata.0.MDW.list.bool.val1",
		"buttonStateValue": "",
		"buttonNavView": "",
		"buttonLink": "",
		"listOverflow": false
	}, {
		"text": "item2",
		"subText": "",
		"rightText": "right",
		"rightSubText": "",
		"image": "clock-check-outline",
		"imageColor": "#44739e",
		"imageActive": "",
		"imageActiveColor": "",
		"header": "",
		"showDivider": "false",
		"objectId": "0_userdata.0.MDW.list.bool.val2",
		"buttonStateValue": "",
		"buttonNavView": "",
		"buttonLink": "",
		"listOverflow": false
	}, {
		"text": "item3",
		"subText": "fuuuu",
		"rightText": "right",
		"rightSubText": "",
		"image": "clock-check-outline",
		"imageColor": "#44739e",
		"imageActive": "",
		"imageActiveColor": "",
		"header": "",
		"showDivider": "false",
		"objectId": "0_userdata.0.MDW.list.bool.val3",
		"buttonStateValue": "",
		"buttonNavView": "",
		"buttonLink": "",
		"listOverflow": false
	}
]
</code></pre>
</details>
