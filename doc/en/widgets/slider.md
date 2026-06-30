# Slider

[Back to README](../../../README.md#widget-documentation)

![Logo](../media/slider.gif)

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
			<td>mdw-orientation</td>
			<td>Orientation</td>
			<td>string</td>
			<td>horizontal | vertical
		</tr>
		<tr>
			<td>mdw-reverseSlider</td>
			<td>invert slider</td>
			<td>boolean</td>
			<td>false | true
		</tr>
		<tr>
			<td>mdw-knobSize</td>
			<td>knob size</td>
			<td>string</td>
			<td>knobSmall | knobMedium | knobBig
		</tr>
		<tr>
			<td>mdw-readOnly</td>
			<td>read only</td>
			<td>boolean</td>
			<td>false | true
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
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>steps Layout</b></i></td>
		</tr>
		<tr>
			<td>mdw-showTicks</td>
			<td>show steps</td>
			<td>string</td>
			<td>no | yes | always
		</tr>
		<tr>
			<td>mdw-tickSize</td>
			<td>display size of steps</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-tickLabels</td>
			<td>text of steps (comma separated)</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-tickTextColor</td>
			<td>text color of steps</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-tickFontFamily</td>
			<td>font of steps</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-tickFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-tickColorBefore</td>
			<td>color before the regulator</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-tickColorAfter</td>
			<td>color after the regulator</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>colors</b></i></td>
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
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>labeling</b></i></td>
		</tr>
		<tr>
			<td>mdw-prepandText</td>
			<td>text prepanded</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-prepandTextWidth</td>
			<td>prepandTextWidth</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-prepandTextColor</td>
			<td>color of text prepanded</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-prepandTextFontSize</td>
			<td>size text prepanded</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-prepandTextFontFamily</td>
			<td>font of text prepanded</td>
			<td>string</td>
			<td>
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
			<td>mdw-valueLabelColor</td>
			<td>text color of value</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
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
		<tr>
			<td>mdw-valueLabelWidth</td>
			<td>distance label</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td colspan="4" style="background: #44739e; color: white; border-color: #44739e;"><i><b><br>layout of the controller label</b></i></td>
		</tr>
		<tr>
			<td>mdw-showThumbLabel</td>
			<td>show label</td>
			<td>string</td>
			<td>no | yes | always
		</tr>
		<tr>
			<td>mdw-thumbSize</td>
			<td>label size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-thumbBackgroundColor</td>
			<td>background color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-thumbFontColor</td>
			<td>font color</td>
			<td>string</td>
			<td>hex(#44739e), rgb(20, 50, 200), rgba(20, 50, 200, 0.5)
		</tr>
		<tr>
			<td>mdw-thumbFontSize</td>
			<td>font size</td>
			<td>number</td>
			<td>
		</tr>
		<tr>
			<td>mdw-thumbFontFamily</td>
			<td>font</td>
			<td>string</td>
			<td>
		</tr>
		<tr>
			<td>mdw-useLabelRules</td>
			<td>use rules of the text</td>
			<td>boolean</td>
			<td>false | true
		</tr>
	</tbody>
</table> 

<!-- omit in toc -->
#### HTML Properties - Example

<details>

```
<div class='vis-widget materialdesign-widget materialdesign-slider-vertical materialdesign-slider-html-element'
	style='width: 342px; height: 100px; position: relative; overflow:visible !important; display: flex; align-items: center;'
	mdw-debug='false'
	mdw-oid='0_userdata.0.MDW.Slider.val0'
	mdw-oid-working='0_userdata.0.MDW.Slider.working'
	mdw-orientation='horizontal'
	mdw-knobSize='knobSmall'
	mdw-min='0'
	mdw-max='100'
	mdw-step='10'
	mdw-vibrateOnMobilDevices='50'
	mdw-showTicks='always'
	mdw-tickSize='5'
	mdw-tickLabels='1,2,3,4,5,6,7,8,9,10,11'
	mdw-tickTextColor='#mdwTheme:vis-materialdesign.0.colors.slider.tick'
	mdw-tickFontFamily='#mdwTheme:vis-materialdesign.0.fonts.slider.ticks'
	mdw-tickFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.slider.ticks'
	mdw-tickColorBefore='#mdwTheme:vis-materialdesign.0.colors.slider.tick_before'
	mdw-tickColorAfter='#mdwTheme:vis-materialdesign.0.colors.slider.tick_after'
	mdw-colorBeforeThumb='#mdwTheme:vis-materialdesign.0.colors.slider.control_before'
	mdw-colorThumb='#mdwTheme:vis-materialdesign.0.colors.slider.control'
	mdw-colorAfterThumb='#mdwTheme:vis-materialdesign.0.colors.slider.control_behind'
	mdw-prepandText='prepand'
	mdw-prepandTextWidth='60'
	mdw-prepandTextColor='#mdwTheme:vis-materialdesign.0.colors.slider.text_prepand'
	mdw-prepandTextFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.slider.prepand'
	mdw-prepandTextFontFamily='#mdwTheme:vis-materialdesign.0.fonts.slider.prepand'
	mdw-showValueLabel='true'
	mdw-valueLabelStyle='sliderPercent'
	mdw-valueFontFamily='#mdwTheme:vis-materialdesign.0.fonts.slider.value'
	mdw-valueFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.slider.value'
	mdw-valueLabelColor='#mdwTheme:vis-materialdesign.0.colors.slider.text'
	mdw-valueLabelWidth='50'
	mdw-showThumbLabel='always'
	mdw-thumbBackgroundColor='#mdwTheme:vis-materialdesign.0.colors.slider.control_background'
	mdw-thumbFontColor='#mdwTheme:vis-materialdesign.0.colors.slider.control_text'
	mdw-thumbFontSize='#mdwTheme:vis-materialdesign.0.fontSizes.slider.control'
	mdw-thumbFontFamily='#mdwTheme:vis-materialdesign.0.fonts.slider.control'
></div>
```

</details>
