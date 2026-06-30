# Checkbox

[Back to README](../../../README.md#widget-documentation)

![Logo](../media/checbox.gif)

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
            <td rowspan=4><img src="../media/checkbox_settings_common.png"></td>
            <td>type of toggle</td>
            <td>Define which type of datapoint (boolean or value) should be switched</td>
        </tr>
        <tr>
            <td>value for off</td>
            <td>Set at which value the checkbox is false</td>
        </tr>
        <tr>
            <td>value for on</td>
            <td>Set at which value the checkbox is true</td>
        </tr>		
        <tr>
            <td>state if value unequal to 'on' condition</td>
            <td>Set the state of the checkbox when the value does not match the 'on' condition</td>
        </tr> 		        
    </tbody>
</table>

### HTML Properties

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
			<td>mdw-readOnly</td>
			<td>read only</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-toggleType</td>
			<td>type of toggle</td>
			<td>string</td>
			<td>boolean | value
		</tr>
		<tr>
			<td>mdw-valueOff</td>
			<td>value for off</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-valueOn</td>
			<td>value for on</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-stateIfNotTrueValue</td>
			<td>state if value unequal to 'on' condition</td>
			<td>string</td>
			<td>on | off
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
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>labeling</b></i></td>
		</tr>
		<tr>
			<td>mdw-labelFalse</td>
			<td>Label false</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-labelTrue</td>
			<td>Label true</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-labelPosition</td>
			<td>labelPosition</td>
			<td>string</td>
			<td>left | right | off
		</tr>
		<tr>
			<td>mdw-labelClickActive</td>
			<td>activate label click</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-valueFontFamily</td>
			<td>valueFontFamily</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-valueFontSize</td>
			<td>value font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>colors</b></i></td>
		</tr>
		<tr>
			<td>mdw-colorCheckBox</td>
			<td>checkbox color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-colorCheckBoxBorder</td>
			<td>border color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-colorCheckBoxHover</td>
			<td>hover color of checkbox</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-labelColorFalse</td>
			<td>label color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-labelColorTrue</td>
			<td>active label color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>Locking</b></i></td>
		</tr>
		<tr>
			<td>mdw-lockEnabled</td>
			<td>enable Locking</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-autoLockAfter</td>
			<td>auto Locking after [s]</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-lockIcon</td>
			<td>icon</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-lockIconTop</td>
			<td>symbol distance from top [%]</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-lockIconLeft</td>
			<td>symbol distance from left [%]</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-lockIconSize</td>
			<td>icon size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-lockIconColor</td>
			<td>icon color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-lockFilterGrayscale</td>
			<td>gray filter if locked</td>
			<td>number</td>
			<td>
		</tr>
	</tbody>
</table>

<!-- omit in toc -->
#### HTML Properties - Example

<details>

```
<div class='vis-widget materialdesign-widget materialdesign-checkbox materialdesign-checkbox-html-element'
	style='width: 100%; height: 50px; position: relative; overflow: visible !important; display: flex; align-items: center;'
	mdw-debug='false'
	mdw-oid='0_userdata.0.bool'
	mdw-toggleType='boolean'
	mdw-stateIfNotTrueValue='on'
	mdw-vibrateOnMobilDevices='50'
	mdw-labelFalse='off'
	mdw-labelTrue='on'
	mdw-labelPosition='right'
	mdw-labelClickActive='true'
	mdw-valueFontFamily='#mdwTheme:vis-materialdesign.0.fonts.checkbox.value'
	mdw-valueFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.checkbox.value'
	mdw-colorCheckBox='#mdwTheme:vis-materialdesign.0.colors.checkbox.on'
	mdw-colorCheckBoxBorder='#mdwTheme:vis-materialdesign.0.colors.checkbox.border'
	mdw-colorCheckBoxHover='#mdwTheme:vis-materialdesign.0.colors.checkbox.hover'
	mdw-labelColorFalse='#mdwTheme:vis-materialdesign.0.colors.checkbox.text_off'
	mdw-labelColorTrue='#mdwTheme:vis-materialdesign.0.colors.checkbox.text_on'
	mdw-autoLockAfter='10'
	mdw-lockIconTop='5'
	mdw-lockIconLeft='5'
	mdw-lockIconColor='#mdwTheme:vis-materialdesign.0.colors.checkbox.lock_icon'
	mdw-lockFilterGrayscale='30'
></div>
```

</details>
