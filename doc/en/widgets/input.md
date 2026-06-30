# Input

[Back to README](../../../README.md#widget-documentation)

### Text input
![Logo](../media/input.gif)

#### Editor Settings

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
            <td rowspan=4><img src="../media/input_settings_common.png"></td>
            <td>Object ID</td>
            <td>id of datapoint</td>
        </tr>
        <tr>
            <td>input type</td>
            <td>input type of textfield</td>
        </tr>	
        <tr>
            <td>input mask</td>
            <td>if using input type mask, you can define a mask. Allowed properties are describe in the <a href="https://vuejs-tips.github.io/vue-the-mask/" target="_blank">vue the mask documentation</a></td>
        </tr>
        <tr>
            <td>max length</td>
            <td>max input length of textfield</a></td>
        </tr>
    </tbody>
</table>


#### HTML Properties

The following properties can be used as [HTML Widgets](html-widgets.md).

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
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>Common</b></i></td>
		</tr>
		<tr>
			<td>mdw-oid</td>
			<td>Object ID</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputType</td>
			<td>input type</td>
			<td>string</td>
			<td>text | number | date | time | mask
		</tr>
		<tr>
			<td>mdw-inputMask</td>
			<td>input mask</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputMaxLength</td>
			<td>max length</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-debug</td>
			<td>debug</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>layout input </b></i></td>
		</tr>
		<tr>
			<td>mdw-inputLayout</td>
			<td>layout</td>
			<td>string</td>
			<td>regular | solo | solo-rounded | solo-shaped | filled | filled-rounded | filled-shaped | outlined | outlined-rounded | outlined-shaped
		</tr>
		<tr>
			<td>mdw-inputAlignment</td>
			<td>text alignment</td>
			<td>string</td>
			<td>left | center | right
		</tr>
		<tr>
			<td>mdw-inputLayoutBackgroundColor</td>
			<td>background color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLayoutBackgroundColorHover</td>
			<td>background color hover</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLayoutBackgroundColorSelected</td>
			<td>background color selected</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLayoutBorderColor</td>
			<td>border color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLayoutBorderColorHover</td>
			<td>border color hover</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLayoutBorderColorSelected</td>
			<td>border color selected</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputTextFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputTextFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputTextColor</td>
			<td>text color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>label of input </b></i></td>
		</tr>
		<tr>
			<td>mdw-inputLabelText</td>
			<td>text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputLabelColor</td>
			<td>text color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLabelColorSelected</td>
			<td>text color selected</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLabelFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputLabelFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputTranslateX</td>
			<td>offset x</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputTranslateY</td>
			<td>offset y</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>appendixs of the input</b></i></td>
		</tr>
		<tr>
			<td>mdw-inputPrefix</td>
			<td>prepended text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputSuffix</td>
			<td>appended text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputAppendixColor</td>
			<td>text color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputAppendixFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputAppendixFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>sub text of input</b></i></td>
		</tr>
		<tr>
			<td>mdw-showInputMessageAlways</td>
			<td>always show</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-inputMessage</td>
			<td>text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputMessageFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputMessageFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputMessageColor</td>
			<td>text color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>counter layout</b></i></td>
		</tr>
		<tr>
			<td>mdw-showInputCounter</td>
			<td>show counter</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-inputCounterColor</td>
			<td>font color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputCounterFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputCounterFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>Icons</b></i></td>
		</tr>
		<tr>
			<td>mdw-clearIconShow</td>
			<td>show text delete icon </td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-clearIcon</td>
			<td>text delete icon </td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-clearIconSize</td>
			<td>size of text delete icon </td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-clearIconColor</td>
			<td>color of text delete icon </td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-prepandIcon</td>
			<td>prefixed icon</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-prepandIconSize</td>
			<td>size of prefixed icon</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-prepandIconColor</td>
			<td>color of prefixed icon</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-prepandInnerIcon</td>
			<td>inner prefixed symbol</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-prepandInnerIconSize</td>
			<td>size of inner prefixed symbol</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-prepandInnerIconColor</td>
			<td>color of inner prefixed symbol</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-appendIcon</td>
			<td>appended symbol</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-appendIconSize</td>
			<td>size of appended symbol</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-appendIconColor</td>
			<td>color of appended symbol</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-appendOuterIcon</td>
			<td>outer appended symbol</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-appendOuterIconSize</td>
			<td>size of outer appended symbol</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-appendOuterIconColor</td>
			<td>color of outer appended symbol</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
	</tbody>
</table>

### Select
![Logo](../media/select.gif)

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
            <td rowspan=6><img src="../media/select_autocomplete_settings.png"></td>
            <td>method of data of menu</td>
            <td>There are three methods to define the data of the menu. First is to define it via editor. Second is to define it via a json string. Third method is to define it by three list for values, labels and icons</td>
        </tr>
        <tr>
            <td>Editor: count of menu items</td>
            <td>Method of data of menu: via editor<br>Define the number of menu entries. The the individual menu entries can be defined under menu item[x]</td>
        </tr>
        <tr>
            <td>JSON string</td>
            <td>Here you can add a JSON string to define the menu entries or use bindings to a datapoint that contains a JSON string.<br><br>JSON string must have the above descibed format<br>
            </td>
        </tr>
        <tr>
            <td>value list</td>
            <td>Define the number of menu entries by adding values that will be set to the datapoint. Entries must be separeted by semicolon</td>
        </tr>
        <tr>
        <td>value list: labels</td>
            <td>Define the related labels of the values. Entries must be separeted by semicolon</td>
        </tr>
        <tr>
        <td>value list: images</td>
            <td>Define the related icons of the values. Entries must be separeted by semicolon. You can use image path or Material Design Icons name</td>
        </tr>                
    </tbody>
</table>

#### Menu JSON Properties

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
			<td>subText</td>
			<td>subtext of menu item</td>
			<td>string</td>
			<td></td>
		</tr>
		<tr>
			<td>value</td>
			<td>value of menu item, this will assign as value to the datapoint if this is selected</td>
			<td>string</td>
			<td/>
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
			<td>iconColorSelectedTextField</td>
			<td>icon color of input field when selected</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
		</tr>
	</tbody>
</table>

<!-- omit in toc -->
##### Menu JSON Properties - Example

<details>

```
[   {
		"text": "1 Tag",
		"subText": "sub",
		"value": "1 day",
		"icon": "home"
	}, 
	{
		"text": "3 Tage",
		"subText": "sub",		
		"value": "3 days",
		"icon": "home"
	}, 
	{
		"text": "1 Woche",
		"subText": "sub",		
		"value": "7 days",
		"icon": "home"
	}, 
	{
		"text": "2 Wochen",
		"subText": "sub",		
		"value": "14 days",
		"icon": "home"
	}, 
	{
		"text": "1 Monat",
		"subText": "sub",		
		"value": "1 month",
		"icon": "/vis.0/myImages/hard-drive.png"
	}, 
	{
		"text": "2 Monate",
		"subText": "sub",		
		"value": "2 months",
		"icon": "home",
		"iconColor": "blue",
		"iconColorSelectedTextField": "purple"
	}, 
	{
		"text": "3 Monate",
		"value": "3 months"
	}, 
	{
		"text": "6 Monate",
		"value": "6 months"
	}, 
	{
		"text": "1 Jahr",
		"value": "1 year"
	}
]
```

</details>


#### HTML Properties

The following properties can be used as [HTML Widgets](html-widgets.md).

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
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>Common</b></i></td>
		</tr>
		<tr>
			<td>mdw-oid</td>
			<td>Object ID</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputType</td>
			<td>input type</td>
			<td>string</td>
			<td>text | date | time
		</tr>
		<tr>
			<td>mdw-vibrateOnMobilDevices</td>
			<td>vibrate on mobil devices [s]</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-debug</td>
			<td>debug</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>layout input </b></i></td>
		</tr>
		<tr>
			<td>mdw-inputLayout</td>
			<td>layout</td>
			<td>string</td>
			<td>regular | solo | solo-rounded | solo-shaped | filled | filled-rounded | filled-shaped | outlined | outlined-rounded | outlined-shaped
		</tr>
		<tr>
			<td>mdw-inputAlignment</td>
			<td>text alignment</td>
			<td>string</td>
			<td>left | center | right
		</tr>
		<tr>
			<td>mdw-inputLayoutBackgroundColor</td>
			<td>background color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLayoutBackgroundColorHover</td>
			<td>background color hover</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLayoutBackgroundColorSelected</td>
			<td>background color selected</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLayoutBorderColor</td>
			<td>border color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLayoutBorderColorHover</td>
			<td>border color hover</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLayoutBorderColorSelected</td>
			<td>border color selected</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputTextFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputTextFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputTextColor</td>
			<td>text color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>label of input </b></i></td>
		</tr>
		<tr>
			<td>mdw-inputLabelText</td>
			<td>text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputLabelColor</td>
			<td>text color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLabelColorSelected</td>
			<td>text color selected</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLabelFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputLabelFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputTranslateX</td>
			<td>offset x</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputTranslateY</td>
			<td>offset y</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>appendixs of the input</b></i></td>
		</tr>
		<tr>
			<td>mdw-inputPrefix</td>
			<td>prepended text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputSuffix</td>
			<td>appended text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputAppendixColor</td>
			<td>text color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputAppendixFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputAppendixFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>sub text of input</b></i></td>
		</tr>
		<tr>
			<td>mdw-showInputMessageAlways</td>
			<td>always show</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-inputMessage</td>
			<td>text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputMessageFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputMessageFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputMessageColor</td>
			<td>text color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>counter layout</b></i></td>
		</tr>
		<tr>
			<td>mdw-showInputCounter</td>
			<td>show counter</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-inputCounterColor</td>
			<td>font color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputCounterFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputCounterFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>Icons</b></i></td>
		</tr>
		<tr>
			<td>mdw-clearIconShow</td>
			<td>show text delete icon </td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-clearIcon</td>
			<td>text delete icon </td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-clearIconSize</td>
			<td>size of text delete icon </td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-clearIconColor</td>
			<td>color of text delete icon </td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-collapseIcon</td>
			<td>menu open symbol</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-collapseIconSize</td>
			<td>size of menu open symbol</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-collapseIconColor</td>
			<td>color of menu open symbol</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-prepandIcon</td>
			<td>prefixed icon</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-prepandIconSize</td>
			<td>size of prefixed icon</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-prepandIconColor</td>
			<td>color of prefixed icon</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-prepandInnerIcon</td>
			<td>inner prefixed symbol</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-prepandInnerIconSize</td>
			<td>size of inner prefixed symbol</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-prepandInnerIconColor</td>
			<td>color of inner prefixed symbol</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-appendOuterIcon</td>
			<td>outer appended symbol</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-appendOuterIconSize</td>
			<td>size of outer appended symbol</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-appendOuterIconColor</td>
			<td>color of outer appended symbol</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>data of menu</b></i></td>
		</tr>
		<tr>
			<td>mdw-listDataMethod</td>
			<td>input method for the menu data</td>
			<td>string</td>
			<td>inputPerEditor | jsonStringObject | multistatesObject | valueList
		</tr>
		<tr>
			<td>mdw-countSelectItems</td>
			<td>Editor: count of menu items</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-jsonStringObject</td>
			<td>JSON string. Must be html escaped! Hint: use <a href="https://github.com/mathiasbynens/he#heencodetext-options" target="_blank">he library</a> in your scripts to encode to htmle</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-valueList</td>
			<td>value list</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-valueListLabels</td>
			<td>value list: labels</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-valueListIcons</td>
			<td>value list: images</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>menu layout</b></i></td>
		</tr>
		<tr>
			<td>mdw-listPosition</td>
			<td>position</td>
			<td>string</td>
			<td>auto | top | bottom
		</tr>
		<tr>
			<td>mdw-listPositionOffset</td>
			<td>use position offset</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-openOnClear</td>
			<td>open Menu at using clear button</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-listItemHeight</td>
			<td>height of menu item</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listItemBackgroundColor</td>
			<td>background color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemBackgroundHoverColor</td>
			<td>hover color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemBackgroundSelectedColor</td>
			<td>color of selected item</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemRippleEffectColor</td>
			<td>effect color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-showSelectedIcon</td>
			<td>show icon of selected item</td>
			<td>string</td>
			<td>no | prepend | prepend-inner | append-outer
		</tr>
		<tr>
			<td>mdw-listIconSize</td>
			<td>icon size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listIconColor</td>
			<td>icon color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listIconHoverColor</td>
			<td>icon hover color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listIconSelectedColor</td>
			<td>icon color of selected item</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listItemFont</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listItemFontColor</td>
			<td>font color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemFontHoverColor</td>
			<td>font hover color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemFontSelectedColor</td>
			<td>font color of selected item</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemSubFontSize</td>
			<td>second text font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listItemSubFont</td>
			<td>second text font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listItemSubFontColor</td>
			<td>second text font color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemSubFontHoverColor</td>
			<td>hover color of second text</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemSubFontSelectedColor</td>
			<td>color of second selected text</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-showValue</td>
			<td>show value</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-listItemValueFontSize</td>
			<td>font size of value</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listItemValueFont</td>
			<td>font of value</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listItemValueFontColor</td>
			<td>font color of value</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemValueFontHoverColor</td>
			<td>hover font color of value</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemValueFontSelectedColor</td>
			<td>font color of selected value</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>menu item [x]</b></i></td>
		</tr>
		<tr>
			<td>mdw-value[x]</td>
			<td>value</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-label[x]</td>
			<td>label</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-subLabel[x]</td>
			<td>second text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listIcon[x]</td>
			<td>icon</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listIconColor[x]</td>
			<td>icon color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-imageColorSelectedTextField[x]</td>
			<td>selected icon color for textfield</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
	</tbody>
</table>

<!-- omit in toc -->
##### HTML Properties - Example

<details>

```
<div class='vis-widget materialdesign-widget materialdesign-select materialdesign-select-html-element'
	style='width: 322px; height: 38px; position: relative; overflow: visible; display: flex; align-items: center;'
	mdw-debug='true'
	mdw-oid='0_userdata.0.MDW.Input.string'
	mdw-inputType='text'
	mdw-vibrateOnMobilDevices='50'
	mdw-inputLayout='regular'
	mdw-inputAlignment='left'
	mdw-inputLayoutBorderColor='#mdwTheme:vis-materialdesign.0.colors.input.border'
	mdw-inputLayoutBorderColorHover='#mdwTheme:vis-materialdesign.0.colors.input.border_hover'
	mdw-inputLayoutBorderColorSelected='#mdwTheme:vis-materialdesign.0.colors.input.border_selected'
	mdw-inputTextFontFamily='#mdwTheme:vis-materialdesign.0.fonts.input.text'
	mdw-inputTextFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.input.text'
	mdw-inputTextColor='#mdwTheme:vis-materialdesign.0.colors.input.text'
	mdw-inputLabelText='Fuu'
	mdw-inputLabelColor='#mdwTheme:vis-materialdesign.0.colors.input.label'
	mdw-inputLabelColorSelected='#mdwTheme:vis-materialdesign.0.colors.input.label_selected'
	mdw-inputLabelFontFamily='#mdwTheme:vis-materialdesign.0.fonts.input.label'
	mdw-inputLabelFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.input.label'
	mdw-inputAppendixColor='#mdwTheme:vis-materialdesign.0.colors.input.appendix'
	mdw-inputAppendixFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.input.appendix'
	mdw-inputAppendixFontFamily='#mdwTheme:vis-materialdesign.0.fonts.input.appendix'
	mdw-showInputMessageAlways='true'
	mdw-inputMessageFontFamily='#mdwTheme:vis-materialdesign.0.fonts.input.message'
	mdw-inputMessageFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.input.message'
	mdw-inputMessageColor='#mdwTheme:vis-materialdesign.0.colors.input.message'
	mdw-showInputCounter='true'
	mdw-inputCounterColor='#mdwTheme:vis-materialdesign.0.colors.input.counter'
	mdw-inputCounterFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.input.counter'
	mdw-inputCounterFontFamily='#mdwTheme:vis-materialdesign.0.fonts.input.counter'
	mdw-clearIconShow='true'
	mdw-clearIconColor='#mdwTheme:vis-materialdesign.0.colors.input.icon_clear'
	mdw-collapseIconColor='#mdwTheme:vis-materialdesign.0.colors.input.icon_collapse'
	mdw-prepandIcon='account-network'
	mdw-prepandIconSize='30'
	mdw-prepandIconColor='#f91010'
	mdw-prepandInnerIcon='alert-box'
	mdw-prepandInnerIconSize='20'
	mdw-appendOuterIcon='/vis.0/myImages/hard-drive.png'
	mdw-listDataMethod='jsonStringObject'
	mdw-countSelectItems='0'
	mdw-jsonStringObject='[   {
&#x9;&#x9;&#x22;text&#x22;: &#x22;1 Tag&#x22;,
&#x9;&#x9;&#x22;subText&#x22;: &#x22;sub&#x22;,
&#x9;&#x9;&#x22;value&#x22;: &#x22;1 day&#x22;,
&#x9;&#x9;&#x22;icon&#x22;: &#x22;home&#x22;
&#x9;}, 
&#x9;{
&#x9;&#x9;&#x22;text&#x22;: &#x22;3 Tage&#x22;,
&#x9;&#x9;&#x22;subText&#x22;: &#x22;sub&#x22;,&#x9;&#x9;
&#x9;&#x9;&#x22;value&#x22;: &#x22;3 days&#x22;,
&#x9;&#x9;&#x22;icon&#x22;: &#x22;home&#x22;
&#x9;}, 
&#x9;{
&#x9;&#x9;&#x22;text&#x22;: &#x22;1 Woche&#x22;,
&#x9;&#x9;&#x22;subText&#x22;: &#x22;sub&#x22;,&#x9;&#x9;
&#x9;&#x9;&#x22;value&#x22;: &#x22;7 days&#x22;,
&#x9;&#x9;&#x22;icon&#x22;: &#x22;home&#x22;
&#x9;}, 
&#x9;{
&#x9;&#x9;&#x22;text&#x22;: &#x22;2 Wochen&#x22;,
&#x9;&#x9;&#x22;subText&#x22;: &#x22;sub&#x22;,&#x9;&#x9;
&#x9;&#x9;&#x22;value&#x22;: &#x22;14 days&#x22;,
&#x9;&#x9;&#x22;icon&#x22;: &#x22;home&#x22;
&#x9;}, 
&#x9;{
&#x9;&#x9;&#x22;text&#x22;: &#x22;1 Monat&#x22;,
&#x9;&#x9;&#x22;subText&#x22;: &#x22;sub&#x22;,&#x9;&#x9;
&#x9;&#x9;&#x22;value&#x22;: &#x22;1 month&#x22;,
&#x9;&#x9;&#x22;icon&#x22;: &#x22;/vis.0/myImages/hard-drive.png&#x22;
&#x9;}, 
&#x9;{
&#x9;&#x9;&#x22;text&#x22;: &#x22;2 Monate&#x22;,
&#x9;&#x9;&#x22;subText&#x22;: &#x22;sub&#x22;,&#x9;&#x9;
&#x9;&#x9;&#x22;value&#x22;: &#x22;2 months&#x22;,
&#x9;&#x9;&#x22;icon&#x22;: &#x22;home&#x22;,
&#x9;&#x9;&#x22;iconColor&#x22;: &#x22;blue&#x22;,
&#x9;&#x9;&#x22;iconColorSelectedTextField&#x22;: &#x22;purple&#x22;
&#x9;}, 
&#x9;{
&#x9;&#x9;&#x22;text&#x22;: &#x22;3 Monate&#x22;,
&#x9;&#x9;&#x22;value&#x22;: &#x22;3 months&#x22;
&#x9;}, 
&#x9;{
&#x9;&#x9;&#x22;text&#x22;: &#x22;6 Monate&#x22;,
&#x9;&#x9;&#x22;value&#x22;: &#x22;6 months&#x22;
&#x9;}, 
&#x9;{
&#x9;&#x9;&#x22;text&#x22;: &#x22;1 Jahr&#x22;,
&#x9;&#x9;&#x22;value&#x22;: &#x22;1 year&#x22;
&#x9;}
]'
	mdw-listPosition='bottom'
	mdw-listPositionOffset='true'
	mdw-listItemBackgroundColor='#mdwTheme:vis-materialdesign.0.colors.input.menu.background'
	mdw-listItemBackgroundHoverColor='#mdwTheme:vis-materialdesign.0.colors.input.menu.hover'
	mdw-listItemBackgroundSelectedColor='#mdwTheme:vis-materialdesign.0.colors.input.menu.selected'
	mdw-listItemRippleEffectColor='#mdwTheme:vis-materialdesign.0.colors.input.menu.effect'
	mdw-showSelectedIcon='prepend-inner'
	mdw-listIconColor='#mdwTheme:vis-materialdesign.0.colors.input.menu.icon'
	mdw-listIconHoverColor='#bf0d0d'
	mdw-listIconSelectedColor='#42ff2e'
	mdw-listItemFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.input.dropdown.text'
	mdw-listItemFont='#mdwTheme:vis-materialdesign.0.fonts.input.dropdown.text'
	mdw-listItemFontColor='#mdwTheme:vis-materialdesign.0.colors.input.menu.text'
	mdw-listItemSubFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.input.dropdown.subText'
	mdw-listItemSubFont='#mdwTheme:vis-materialdesign.0.fonts.input.dropdown.subText'
	mdw-listItemSubFontColor='#mdwTheme:vis-materialdesign.0.colors.input.menu.subText'
	mdw-showValue='true'
	mdw-listItemValueFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.input.dropdown.value'
	mdw-listItemValueFont='#mdwTheme:vis-materialdesign.0.fonts.input.dropdown.value'
	mdw-listItemValueFontColor='#mdwTheme:vis-materialdesign.0.colors.input.menu.value'
></div>
```

</details>

### Autocomplete
![Logo](../media/autocomplete.gif)

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
            <td rowspan=6><img src="../media/select_autocomplete_settings.png"></td>
            <td>method of data of menu</td>
            <td>There are three methods to define the data of the menu. First is to define it via editor. Second is to define it via a json string. Third method is to define it by three list for values, labels and icons</td>
        </tr>
        <tr>
            <td>Editor: count of menu items</td>
            <td>Method of data of menu: via editor<br>Define the number of menu entries. The the individual menu entries can be defined under menu item[x]</td>
        </tr>
        <tr>
            <td>JSON string</td>
            <td>Here you can add a JSON string to define the menu entries or use bindings to a datapoint that contains a JSON string.<br><br>JSON string must have the above descibed format<br>
            </td>
        </tr>
        <tr>
            <td>value list</td>
            <td>Define the number of menu entries by adding values that will be set to the datapoint. Entries must be separeted by semicolon</td>
        </tr>
        <tr>
        <td>value list: labels</td>
            <td>Define the related labels of the values. Entries must be separeted by semicolon</td>
        </tr>
        <tr>
        <td>value list: images</td>
            <td>Define the related icons of the values. Entries must be separeted by semicolon. You can use image path or Material Design Icons name</td>
        </tr>                
    </tbody>
</table>

#### Menu JSON Properties

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
			<td>subText</td>
			<td>subtext of menu item</td>
			<td>string</td>
			<td></td>
		</tr>
		<tr>
			<td>value</td>
			<td>value of menu item, this will assign as value to the datapoint if this is selected</td>
			<td>string</td>
			<td/>
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
			<td>iconColorSelectedTextField</td>
			<td>icon color of input field when selected</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)</td>
		</tr>
	</tbody>
</table>

<!-- omit in toc -->
##### Menu JSON Properties - Example

<details>

```
[   {
		"text": "1 Tag",
		"subText": "sub",
		"value": "1 day",
		"icon": "home"
	}, 
	{
		"text": "3 Tage",
		"subText": "sub",		
		"value": "3 days",
		"icon": "home"
	}, 
	{
		"text": "1 Woche",
		"subText": "sub",		
		"value": "7 days",
		"icon": "home"
	}, 
	{
		"text": "2 Wochen",
		"subText": "sub",		
		"value": "14 days",
		"icon": "home"
	}, 
	{
		"text": "1 Monat",
		"subText": "sub",		
		"value": "1 month",
		"icon": "/vis.0/myImages/hard-drive.png"
	}, 
	{
		"text": "2 Monate",
		"subText": "sub",		
		"value": "2 months",
		"icon": "home",
		"iconColor": "blue",
		"iconColorSelectedTextField": "purple"
	}, 
	{
		"text": "3 Monate",
		"value": "3 months"
	}, 
	{
		"text": "6 Monate",
		"value": "6 months"
	}, 
	{
		"text": "1 Jahr",
		"value": "1 year"
	}
]
```

</details>


#### HTML Properties

The following properties can be used as [HTML Widgets](html-widgets.md).

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
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>Common</b></i></td>
		</tr>
		<tr>
			<td>mdw-oid</td>
			<td>Object ID</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputMode</td>
			<td>inputMode</td>
			<td>string</td>
			<td>write | select
		</tr>
		<tr>
			<td>mdw-inputType</td>
			<td>input type</td>
			<td>string</td>
			<td>text | date | time
		</tr>
		<tr>
			<td>mdw-vibrateOnMobilDevices</td>
			<td>vibrate on mobil devices [s]</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-debug</td>
			<td>debug</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>layout input </b></i></td>
		</tr>
		<tr>
			<td>mdw-inputLayout</td>
			<td>layout</td>
			<td>string</td>
			<td>regular | solo | solo-rounded | solo-shaped | filled | filled-rounded | filled-shaped | outlined | outlined-rounded | outlined-shaped
		</tr>
		<tr>
			<td>mdw-inputAlignment</td>
			<td>text alignment</td>
			<td>string</td>
			<td>left | center | right
		</tr>
		<tr>
			<td>mdw-inputLayoutBackgroundColor</td>
			<td>background color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLayoutBackgroundColorHover</td>
			<td>background color hover</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLayoutBackgroundColorSelected</td>
			<td>background color selected</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLayoutBorderColor</td>
			<td>border color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLayoutBorderColorHover</td>
			<td>border color hover</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLayoutBorderColorSelected</td>
			<td>border color selected</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputTextFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputTextFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputTextColor</td>
			<td>text color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>label of input </b></i></td>
		</tr>
		<tr>
			<td>mdw-inputLabelText</td>
			<td>text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputLabelColor</td>
			<td>text color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLabelColorSelected</td>
			<td>text color selected</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputLabelFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputLabelFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputTranslateX</td>
			<td>offset x</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputTranslateY</td>
			<td>offset y</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>appendixs of the input</b></i></td>
		</tr>
		<tr>
			<td>mdw-inputPrefix</td>
			<td>prepended text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputSuffix</td>
			<td>appended text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputAppendixColor</td>
			<td>text color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputAppendixFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputAppendixFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>sub text of input</b></i></td>
		</tr>
		<tr>
			<td>mdw-showInputMessageAlways</td>
			<td>always show</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-inputMessage</td>
			<td>text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputMessageFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputMessageFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputMessageColor</td>
			<td>text color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>counter layout</b></i></td>
		</tr>
		<tr>
			<td>mdw-showInputCounter</td>
			<td>show counter</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-inputCounterColor</td>
			<td>font color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-inputCounterFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-inputCounterFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>Icons</b></i></td>
		</tr>
		<tr>
			<td>mdw-clearIconShow</td>
			<td>show text delete icon </td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-clearIcon</td>
			<td>text delete icon </td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-clearIconSize</td>
			<td>size of text delete icon </td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-clearIconColor</td>
			<td>color of text delete icon </td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-collapseIcon</td>
			<td>menu open symbol</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-collapseIconSize</td>
			<td>size of menu open symbol</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-collapseIconColor</td>
			<td>color of menu open symbol</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-prepandIcon</td>
			<td>prefixed icon</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-prepandIconSize</td>
			<td>size of prefixed icon</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-prepandIconColor</td>
			<td>color of prefixed icon</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-prepandInnerIcon</td>
			<td>inner prefixed symbol</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-prepandInnerIconSize</td>
			<td>size of inner prefixed symbol</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-prepandInnerIconColor</td>
			<td>color of inner prefixed symbol</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-appendOuterIcon</td>
			<td>outer appended symbol</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-appendOuterIconSize</td>
			<td>size of outer appended symbol</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-appendOuterIconColor</td>
			<td>color of outer appended symbol</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>data of menu</b></i></td>
		</tr>
		<tr>
			<td>mdw-listDataMethod</td>
			<td>input method for the menu data</td>
			<td>string</td>
			<td>inputPerEditor | jsonStringObject | multistatesObject | valueList
		</tr>
		<tr>
			<td>mdw-countSelectItems</td>
			<td>Editor: count of menu items</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-jsonStringObject</td>
			<td>JSON string. Must be html escaped! Hint: use <a href="https://github.com/mathiasbynens/he#heencodetext-options" target="_blank">he library</a> in your scripts to encode to htmle</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-valueList</td>
			<td>value list</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-valueListLabels</td>
			<td>value list: labels</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-valueListIcons</td>
			<td>value list: images</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>menu layout</b></i></td>
		</tr>
		<tr>
			<td>mdw-listPosition</td>
			<td>position</td>
			<td>string</td>
			<td>auto | top | bottom
		</tr>
		<tr>
			<td>mdw-listPositionOffset</td>
			<td>use position offset</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-openOnClear</td>
			<td>open Menu at using clear button</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-listItemHeight</td>
			<td>height of menu item</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listItemBackgroundColor</td>
			<td>background color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemBackgroundHoverColor</td>
			<td>hover color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemBackgroundSelectedColor</td>
			<td>color of selected item</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemRippleEffectColor</td>
			<td>effect color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-showSelectedIcon</td>
			<td>show icon of selected item</td>
			<td>string</td>
			<td>no | prepend | prepend-inner | append-outer
		</tr>
		<tr>
			<td>mdw-listIconSize</td>
			<td>icon size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listIconColor</td>
			<td>icon color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listIconHoverColor</td>
			<td>icon hover color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listIconSelectedColor</td>
			<td>icon color of selected item</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listItemFont</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listItemFontColor</td>
			<td>font color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemFontHoverColor</td>
			<td>font hover color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemFontSelectedColor</td>
			<td>font color of selected item</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemSubFontSize</td>
			<td>second text font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listItemSubFont</td>
			<td>second text font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listItemSubFontColor</td>
			<td>second text font color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemSubFontHoverColor</td>
			<td>hover color of second text</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemSubFontSelectedColor</td>
			<td>color of second selected text</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-showValue</td>
			<td>show value</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-listItemValueFontSize</td>
			<td>font size of value</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listItemValueFont</td>
			<td>font of value</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listItemValueFontColor</td>
			<td>font color of value</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemValueFontHoverColor</td>
			<td>hover font color of value</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-listItemValueFontSelectedColor</td>
			<td>font color of selected value</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>menu item [x]</b></i></td>
		</tr>
		<tr>
			<td>mdw-value[x]</td>
			<td>value</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-label[x]</td>
			<td>label</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-subLabel[x]</td>
			<td>second text</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listIcon[x]</td>
			<td>icon</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-listIconColor[x]</td>
			<td>icon color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-imageColorSelectedTextField[x]</td>
			<td>selected icon color for textfield</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
	</tbody>
</table>

<!-- omit in toc -->
##### HTML Properties - Example

<details>

```
<div class='vis-widget materialdesign-widget materialdesign-autocomplete materialdesign-autocomplete-html-element'
	style='width: 354px; height: 38px; position: relative; overflow: visible; display: flex; align-items: center;'
	mdw-oid='0_userdata.0.MDW.Input.string'
	mdw-inputMode='write'
	mdw-inputType='text'
	mdw-vibrateOnMobilDevices='50'
	mdw-inputLayout='regular'
	mdw-inputAlignment='left'
	mdw-inputLayoutBorderColor='#mdwTheme:vis-materialdesign.0.colors.input.border'
	mdw-inputLayoutBorderColorHover='#mdwTheme:vis-materialdesign.0.colors.input.border_hover'
	mdw-inputLayoutBorderColorSelected='#mdwTheme:vis-materialdesign.0.colors.input.border_selected'
	mdw-inputTextFontFamily='#mdwTheme:vis-materialdesign.0.fonts.input.text'
	mdw-inputTextFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.input.text'
	mdw-inputTextColor='#mdwTheme:vis-materialdesign.0.colors.input.text'
	mdw-inputLabelText='fuuu'
	mdw-inputLabelColor='#mdwTheme:vis-materialdesign.0.colors.input.label'
	mdw-inputLabelColorSelected='#mdwTheme:vis-materialdesign.0.colors.input.label_selected'
	mdw-inputLabelFontFamily='#mdwTheme:vis-materialdesign.0.fonts.input.label'
	mdw-inputLabelFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.input.label'
	mdw-inputAppendixColor='#mdwTheme:vis-materialdesign.0.colors.input.appendix'
	mdw-inputAppendixFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.input.appendix'
	mdw-inputAppendixFontFamily='#mdwTheme:vis-materialdesign.0.fonts.input.appendix'
	mdw-showInputMessageAlways='true'
	mdw-inputMessageFontFamily='#mdwTheme:vis-materialdesign.0.fonts.input.message'
	mdw-inputMessageFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.input.message'
	mdw-inputMessageColor='#mdwTheme:vis-materialdesign.0.colors.input.message'
	mdw-showInputCounter='true'
	mdw-inputCounterColor='#mdwTheme:vis-materialdesign.0.colors.input.counter'
	mdw-inputCounterFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.input.counter'
	mdw-inputCounterFontFamily='#mdwTheme:vis-materialdesign.0.fonts.input.counter'
	mdw-clearIconShow='true'
	mdw-clearIconColor='#mdwTheme:vis-materialdesign.0.colors.input.icon_clear'
	mdw-collapseIconColor='#mdwTheme:vis-materialdesign.0.colors.input.icon_collapse'
	mdw-listDataMethod='jsonStringObject'
	mdw-countSelectItems='1'
	mdw-jsonStringObject='[   {
&#x9;&#x9;&#x22;text&#x22;: &#x22;1 Tag&#x22;,
&#x9;&#x9;&#x22;subText&#x22;: &#x22;sub&#x22;,
&#x9;&#x9;&#x22;value&#x22;: &#x22;1 day&#x22;,
&#x9;&#x9;&#x22;icon&#x22;: &#x22;home&#x22;
&#x9;}, 
&#x9;{
&#x9;&#x9;&#x22;text&#x22;: &#x22;3 Tage&#x22;,
&#x9;&#x9;&#x22;subText&#x22;: &#x22;sub&#x22;,&#x9;&#x9;
&#x9;&#x9;&#x22;value&#x22;: &#x22;3 days&#x22;,
&#x9;&#x9;&#x22;icon&#x22;: &#x22;home&#x22;
&#x9;}, 
&#x9;{
&#x9;&#x9;&#x22;text&#x22;: &#x22;1 Woche&#x22;,
&#x9;&#x9;&#x22;subText&#x22;: &#x22;sub&#x22;,&#x9;&#x9;
&#x9;&#x9;&#x22;value&#x22;: &#x22;7 days&#x22;,
&#x9;&#x9;&#x22;icon&#x22;: &#x22;home&#x22;
&#x9;}, 
&#x9;{
&#x9;&#x9;&#x22;text&#x22;: &#x22;2 Wochen&#x22;,
&#x9;&#x9;&#x22;subText&#x22;: &#x22;sub&#x22;,&#x9;&#x9;
&#x9;&#x9;&#x22;value&#x22;: &#x22;14 days&#x22;,
&#x9;&#x9;&#x22;icon&#x22;: &#x22;home&#x22;
&#x9;}, 
&#x9;{
&#x9;&#x9;&#x22;text&#x22;: &#x22;1 Monat&#x22;,
&#x9;&#x9;&#x22;subText&#x22;: &#x22;sub&#x22;,&#x9;&#x9;
&#x9;&#x9;&#x22;value&#x22;: &#x22;1 month&#x22;,
&#x9;&#x9;&#x22;icon&#x22;: &#x22;home&#x22;
&#x9;}, 
&#x9;{
&#x9;&#x9;&#x22;text&#x22;: &#x22;2 Monate&#x22;,
&#x9;&#x9;&#x22;subText&#x22;: &#x22;sub&#x22;,&#x9;&#x9;
&#x9;&#x9;&#x22;value&#x22;: &#x22;2 months&#x22;,
&#x9;&#x9;&#x22;icon&#x22;: &#x22;home&#x22;
&#x9;}, 
&#x9;{
&#x9;&#x9;&#x22;text&#x22;: &#x22;3 Monate&#x22;,
&#x9;&#x9;&#x22;value&#x22;: &#x22;3 months&#x22;
&#x9;}, 
&#x9;{
&#x9;&#x9;&#x22;text&#x22;: &#x22;6 Monate&#x22;,
&#x9;&#x9;&#x22;value&#x22;: &#x22;6 months&#x22;
&#x9;}, 
&#x9;{
&#x9;&#x9;&#x22;text&#x22;: &#x22;1 Jahr&#x22;,
&#x9;&#x9;&#x22;value&#x22;: &#x22;1 year&#x22;
&#x9;}
]'
	mdw-listPosition='auto'
	mdw-listPositionOffset='true'
	mdw-listItemBackgroundColor='#mdwTheme:vis-materialdesign.0.colors.input.menu.background'
	mdw-listItemBackgroundHoverColor='#mdwTheme:vis-materialdesign.0.colors.input.menu.hover'
	mdw-listItemBackgroundSelectedColor='#mdwTheme:vis-materialdesign.0.colors.input.menu.selected'
	mdw-listItemRippleEffectColor='#mdwTheme:vis-materialdesign.0.colors.input.menu.effect'
	mdw-showSelectedIcon='prepend-inner'
	mdw-listIconColor='#mdwTheme:vis-materialdesign.0.colors.input.menu.icon'
	mdw-listItemFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.input.dropdown.text'
	mdw-listItemFont='#mdwTheme:vis-materialdesign.0.fonts.input.dropdown.text'
	mdw-listItemFontColor='#mdwTheme:vis-materialdesign.0.colors.input.menu.text'
	mdw-listItemSubFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.input.dropdown.subText'
	mdw-listItemSubFont='#mdwTheme:vis-materialdesign.0.fonts.input.dropdown.subText'
	mdw-listItemSubFontColor='#mdwTheme:vis-materialdesign.0.colors.input.menu.subText'
	mdw-showValue='true'
	mdw-listItemValueFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.input.dropdown.value'
	mdw-listItemValueFont='#mdwTheme:vis-materialdesign.0.fonts.input.dropdown.value'
	mdw-listItemValueFontColor='#mdwTheme:vis-materialdesign.0.colors.input.menu.value'
></div>
```

</details>
