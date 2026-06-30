# Progress Circular

[Back to README](../../../README.md#widget-documentation)

![Logo](../media/progress_circular.gif)

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
            <td rowspan=2><img src="../media/progress_circular_settings_colors.png"></td>
            <td>condition for color 1 progress [>]</td>
            <td>Condition from when color 1 should be used. The value of the condition must be in percent</td>
        </tr>
        <tr>
            <td>condition for color 2 progress [>]</td>
            <td>Condition from when color 2 should be used. The value of the condition must be in percent</td>
        </tr>	
        <tr>
            <td rowspan=6><img src="../media/progress_settings.png"></td>
            <td>custom label</td>
            <td>For custom label you can use the property <code>[#value]</code> to show the real value of the datapoint. To show the current percent you can use <code>[#percent]</code></td>
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
			<td>mdw-type</td>
			<td>Widget type</td>
			<td>string</td>
			<td>linear</td>
		</tr>
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
			<td>mdw-min</td>
			<td>min</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-max</td>
			<td>max</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-reverse</td>
			<td>Revers value</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-invertValue</td>
			<td>invert value</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-debug</td>
			<td>debug</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>layout</b></i></td>
		</tr>
		<tr>
			<td>mdw-progressRounded</td>
			<td>rounded corners</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-progressIndeterminate</td>
			<td>indeterminate - continuously animates</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-progressRotate</td>
			<td>rotate 90 degress</td>
			<td>string</td>
			<td>noRotate | yesRotate
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>group_layoutStriped</b></i></td>
		</tr>
		<tr>
			<td>mdw-progressStriped</td>
			<td>striped</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-progressStripedColor</td>
			<td>progressStripedColor</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-stripAngle</td>
			<td>stripAngle</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>colors</b></i></td>
		</tr>
		<tr>
			<td>mdw-colorProgressBackground</td>
			<td>background color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-colorProgress</td>
			<td>color progress</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-colorOneCondition</td>
			<td>condition for color 1 progress [>]</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-colorOne</td>
			<td>color 1 progress</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-colorTwoCondition</td>
			<td>condition for color 2 progress [>]</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-colorTwo</td>
			<td>color 2 progress</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>labeling</b></i></td>
		</tr>
		<tr>
			<td>mdw-showValueLabel</td>
			<td>show value</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-valueLabelStyle</td>
			<td>value caption style</td>
			<td>string</td>
			<td>progressPercent | progressValue | progressCustom
		</tr>
		<tr>
			<td>mdw-valueLabelUnit</td>
			<td>unit</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-valueMaxDecimals</td>
			<td>decimal points</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-valueLabelCustom</td>
			<td>custom label</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-textColor</td>
			<td>Minutes text color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-textFontSize</td>
			<td>text size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-textFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-textAlign</td>
			<td>textAlign</td>
			<td>string</td>
			<td>start | center | end
		</tr>
	</tbody>
</table>

<!-- omit in toc -->
#### HTML Properties - Example

<details>

```
<div class='vis-widget materialdesign-widget materialdesign-progress materialdesign-progress-html-element'
	style='width: 100%; height: 100%; position: relative; padding: 0px;'
	mdw-type='circular'
	mdw-oid='0_userdata.0.MDW.Progress.val1'
	mdw-colorProgressBackground='#mdwTheme:vis-materialdesign.0.colors.progress.track_background'
	mdw-colorProgress='#mdwTheme:vis-materialdesign.0.colors.progress.track'
	mdw-innerColor='#mdwTheme:vis-materialdesign.0.colors.progress.circular_background'
	mdw-colorOneCondition='50'
	mdw-colorOne='#mdwTheme:vis-materialdesign.0.colors.progress.track_condition1'
	mdw-colorTwoCondition='70'
	mdw-colorTwo='#mdwTheme:vis-materialdesign.0.colors.progress.track_condition2'
	mdw-showValueLabel='true'
	mdw-valueLabelStyle='progressPercent'
	mdw-textColor='#mdwTheme:vis-materialdesign.0.colors.progress.text'
	mdw-textFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.progress.text'
	mdw-textFontFamily='#mdwTheme:vis-materialdesign.0.fonts.progress.text'
></div>
```

</details>
