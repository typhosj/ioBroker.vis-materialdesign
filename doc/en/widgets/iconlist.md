# IconList

[Back to README](../../../README.md#widget-documentation)

![Logo](../media/iconList.gif)

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
            <td rowspan=6><img src="../media/iconlist_settings_data.png"></td>
            <td>input method for the list data</td>
            <td>The data for the IconList can be entered via the editor or a JSON string can be used</td>
        </tr>
        <tr>
            <td>Editor: count of list items</td>
            <td>number of list items using vis editor for the data of list</td>
        </tr>
        <tr>
            <td>JSON-String: object id</td>
            <td>object id of datapoint containing json string. Allowed properties are described below</td>
        </tr> 		        
    </tbody>
</table>

### Data JSON Properties

JSON string must be an array of objects with the following properties:

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
			<td>listType</td>
			<td>type of list
				<ul>
					<li>buttonToggleValueTrue: is only on if the value equals the condition 'on'</li>
					<li>buttonToggleValueFalse: is only off if the value equals the condition 'off'</li>
				</ul>
			</td>
			<td>string</td>
			<td>text | buttonState | buttonToggle | buttonToggleValueTrue | buttonToggleValueFalse | buttonNav | buttonLink</td>
		</tr>
		<tr>
			<td>objectId</td>
			<td>object id for button</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>minWidth</td>
			<td>min width for item</td>
			<td>string</td>
			<td>30px | 60%</td>
		</tr>		
		<tr>
			<td>usePercentOfRow</td>
			<td>item use x percent of row.</td>
			<td>number</td>
			<td>0 = auto</td>
		</tr>
		<tr>
			<td>buttonStateValue</td>
			<td>value for button state</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>buttonNavView</td>
			<td>view to navigate</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>buttonLink</td>
			<td>url to navigate</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>buttonToggleValueTrue</td>
			<td>true value for button toggle</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>buttonToggleValueFalse</td>
			<td>false value for button toggle</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>readOnly</td>
			<td>button is read only</td>
			<td>boolean</td>
			<td>false | true</td>
		</tr>
		<tr>
			<td>showValueLabel</td>
			<td>show value as text</td>
			<td>boolean</td>
			<td>false | true</td>
		</tr>
		<tr>
			<td>valueAppendix</td>
			<td>append text to value</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>background</td>
			<td>background color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
		</tr>
		<tr>
			<td>text</td>
			<td>text</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>subText</td>
			<td>second text</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>image</td>
			<td>image path or name of Material Design Icons</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>imageColor</td>
			<td>color of Material Design Icons</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
		</tr>
		<tr>
			<td>imageActive</td>
			<td>image path or name of Material Design Icons</td>
			<td>string</td>
			<td/>
		</tr>		
		<tr>
			<td>imageActiveColor</td>
			<td>image path or name of Material Design Icons for active button</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
		</tr>
		<tr>
			<td>buttonBackgroundColor</td>
			<td>background color of button</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
		</tr>
		<tr>
			<td>buttonBackgroundActiveColor</td>
			<td>background color of button for active button</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
		</tr>		
		<tr>
			<td>statusBarColor</td>
			<td>color of status bar</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
		</tr>
		<tr>
			<td>statusBarColorActive</td>
			<td>color of status bar if active</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
		</tr>		
		<tr>
			<td>statusBarText</td>
			<td>text of status bar</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>statusBarTextActive</td>
			<td>text of status bar if active</td>
			<td>string</td>
			<td/>
		</tr>		
		<tr>
			<td>lockEnabled</td>
			<td>enable Locking</td>
			<td>boolean</td>
			<td>false | true</td>
		</tr>
		<tr>
			<td>visibilityOid</td>
			<td>Object Id for visibility</td>
			<td>string</td>
			<td/>
		</tr>
		<tr>
			<td>visibilityCondition</td>
			<td>visibility condition</td>
			<td>string</td>
			<td>== | != | <= | >= | < | > | consist | not consist | exist | not exist</td>
		</tr>
		<tr>
			<td>visibilityConditionValue</td>
			<td>value for visibility condition</td>
			<td>string</td>
			<td/>
		</tr>				
	</tbody>
</table>

<!-- omit in toc -->
#### JSON Properties - Example

<details>
<pre><code>
[
	{
		"background": "red",
		"text": "text1",
		"subText": "number",
		"image": "harddisk",
		"imageColor": "#ec0909",
		"imageActive": "folder",
		"imageActiveColor": "#5ad902",
		"buttonBackgroundColor": "",
		"buttonBackgroundActiveColor": "",
		"listType": "buttonState",
		"objectId": "0_userdata.0.iconList.buttonState.number",
		"buttonStateValue": "60",
		"buttonNavView": "",
		"buttonLink": "",
		"buttonToggleValueTrue": "",
		"buttonToggleValueFalse": "",
		"valueAppendix": "",
		"showValueLabel": "true",
		"statusBarColor": "green",
		"lockEnabled": "false"        
	},
	{
		"background": "green",
		"text": "text0",
		"subText": "bool",
		"image": "home",
		"imageColor": "#44739e",
		"imageActive": "home",
		"imageActiveColor": "#44739e",
		"buttonBackgroundColor": "",
		"buttonBackgroundActiveColor": "#a0f628",
		"listType": "buttonToggle",
		"objectId": "0_userdata.0.iconList.buttonToggle.bool0",
		"buttonStateValue": "60",
		"buttonNavView": "",
		"buttonLink": "",
		"buttonToggleValueTrue": "",
		"buttonToggleValueFalse": "",
		"valueAppendix": "",
		"showValueLabel": "false",
		"statusBarColor": "",
		"lockEnabled": "false"
	}
]
</code></pre>
</details>
