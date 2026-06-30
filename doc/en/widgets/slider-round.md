# Slider Round

[Back to README](../../../README.md#widget-documentation)

![Logo](../media/round_slider.gif)

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
			<td>mdw-oid-working</td>
			<td>Working Object ID</td>
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
			<td>mdw-step</td>
			<td>steps</td>
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
			<td>mdw-startAngle</td>
			<td>start angle</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-arcLength</td>
			<td>arc length</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-sliderWidth</td>
			<td>slider thikness</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-handleSize</td>
			<td>knob size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-handleZoom</td>
			<td>knob zoom at control</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-rtl</td>
			<td>slider movement from right to left</td>
			<td>boolean</td>
			<td>false | true
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
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>colors</b></i></td>
		</tr>
		<tr>
			<td>mdw-colorSliderBg</td>
			<td>background</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-colorBeforeThumb</td>
			<td>color before regulator</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-colorThumb</td>
			<td>color of regulator</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-colorAfterThumb</td>
			<td>color after regulator</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-valueLabelColor</td>
			<td>text color of value</td>
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
			<td>mdw-valueLabelVerticalPosition</td>
			<td>vertical text position of value </td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-valueLabelStyle</td>
			<td>value caption style</td>
			<td>string</td>
			<td>sliderPercent | sliderValue
		</tr>
		<tr>
			<td>mdw-valueLabelUnit</td>
			<td>unit</td>
			<td>string</td>
			<td>
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
			<td>mdw-valueLabelMin</td>
			<td>text for value less than min</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-valueLabelMax</td>
			<td>text for value greater than min</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-valueLessThan</td>
			<td>'smaller than' condition for the text of the value</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-textForValueLessThan</td>
			<td>text for 'smaller than'</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-valueGreaterThan</td>
			<td>'greater than' condition for the text of the value</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-textForValueGreaterThan</td>
			<td>text for 'greater than'</td>
			<td>string</td>
			<td>
		</tr>
	</tbody>
</table>

<!-- omit in toc -->
#### HTML Properties - Example

<details>

```
<div class="vis-widget materialdesign-widget materialdesign-slider-round materialdesign-roundslider-html-element"
	style="width: 100px; height: 100px; position: relative;"
	mdw-debug="false"
	mdw-oid='0_userdata.0.MDW.Slider.val0'
	mdw-oid-working='0_userdata.0.MDW.Slider.working'
	mdw-step='1'
	mdw-startAngle='135'
	mdw-arcLength='270'
	mdw-handleZoom='1.5'
	mdw-vibrateOnMobilDevices='50'
	mdw-colorSliderBg='#mdwTheme:vis-materialdesign.0.colors.slider.background'
	mdw-colorBeforeThumb='#mdwTheme:vis-materialdesign.0.colors.slider.control_before'
	mdw-colorThumb='#mdwTheme:vis-materialdesign.0.colors.slider.control'
	mdw-colorAfterThumb='#mdwTheme:vis-materialdesign.0.colors.slider.control_behind'
	mdw-valueLabelColor='#mdwTheme:vis-materialdesign.0.colors.slider.text'
	mdw-showValueLabel='true'
	mdw-valueLabelStyle='sliderValue'
	mdw-valueFontFamily='#mdwTheme:vis-materialdesign.0.fonts.slider.value'
	mdw-valueFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.slider.value'
></div>
```

</details>
